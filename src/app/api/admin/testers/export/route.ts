import { NextRequest, NextResponse } from 'next/server';
import { legacyVisitaTesters, legacyTestersFormatted, GOOGLE_GROUP_URL } from '@/data/legacy-testers';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'csv';

    let allTesters: Array<{ email: string; name: string; source: string; status: string }> = [
      ...legacyTestersFormatted,
    ];

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Fetch newly registered website testers from Supabase if configured
    if (supabaseUrl && !supabaseUrl.includes('placeholder-project')) {
      try {
        const supabase = await createClient();
        const { data: dbTesters } = await (supabase.from('testers') as any)
          .select('google_email, full_name, source, status');

        if (dbTesters && dbTesters.length > 0) {
          const emailSet = new Set(allTesters.map((t) => t.email.toLowerCase()));

          for (const item of dbTesters) {
            const normalizedEmail = (item.google_email || '').toLowerCase();
            if (normalizedEmail && !emailSet.has(normalizedEmail)) {
              emailSet.add(normalizedEmail);
              allTesters.push({
                email: normalizedEmail,
                name: item.full_name || 'Website Tester',
                source: item.source || 'website',
                status: item.status || 'registered',
              });
            }
          }
        }
      } catch (err) {
        console.warn('Could not query Supabase during tester export; using cached legacy list:', err);
      }
    }

    // Return in requested format
    if (format === 'json') {
      return NextResponse.json({
        totalCount: allTesters.length,
        googleGroupUrl: GOOGLE_GROUP_URL,
        testers: allTesters,
      });
    }

    if (format === 'list') {
      const emailListString = allTesters.map((t) => t.email).join(', ');
      return new NextResponse(emailListString, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Disposition': 'inline; filename="seitz-testers-list.txt"',
        },
      });
    }

    // Default: CSV format for Google Play Console / Google Groups
    const csvRows = ['email,name,source,status'];
    for (const t of allTesters) {
      csvRows.push(`"${t.email}","${t.name.replace(/"/g, '""')}","${t.source}","${t.status}"`);
    }

    const csvContent = csvRows.join('\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="seitz-all-testers.csv"',
      },
    });
  } catch (error) {
    console.error('Error exporting testers:', error);
    return NextResponse.json({ error: 'Failed to generate tester export' }, { status: 500 });
  }
}
