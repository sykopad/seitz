import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  const next = searchParams.get('next') ?? '/account';

  // 1. If provider returned an error directly in URL
  if (error) {
    console.error('OAuth Callback Provider Error:', error, errorDescription);
    const redirectUrl = new URL('/login', origin);
    redirectUrl.searchParams.set('error', error);
    if (errorDescription) {
      redirectUrl.searchParams.set('error_description', errorDescription);
    }
    return NextResponse.redirect(redirectUrl.toString());
  }

  // 2. Exchange authorization code for authenticated session
  if (code) {
    try {
      const supabase = await createClient();
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

      if (!exchangeError) {
        const forwardedHost = request.headers.get('x-forwarded-host');
        const isLocalEnv = process.env.NODE_ENV === 'development';
        if (isLocalEnv) {
          return NextResponse.redirect(`${origin}${next}`);
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        } else {
          return NextResponse.redirect(`${origin}${next}`);
        }
      } else {
        console.error('Session Exchange Error:', exchangeError.message);
        const redirectUrl = new URL('/login', origin);
        redirectUrl.searchParams.set('error', 'exchange_failed');
        redirectUrl.searchParams.set('error_description', exchangeError.message);
        return NextResponse.redirect(redirectUrl.toString());
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unexpected server error during code exchange';
      console.error('Callback Route Exception:', errorMessage);
      const redirectUrl = new URL('/login', origin);
      redirectUrl.searchParams.set('error', 'server_exception');
      redirectUrl.searchParams.set('error_description', errorMessage);
      return NextResponse.redirect(redirectUrl.toString());
    }
  }

  // 3. Fallback when neither code nor error was provided
  return NextResponse.redirect(`${origin}/login?error=missing_code&error_description=No_authorization_code_received`);
}
