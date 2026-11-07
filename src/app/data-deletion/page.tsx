import { redirect } from 'next/navigation';

export default function DataDeletionRedirect() {
  redirect('/delete-account');
}
