import {requireAuth} from '@/lib/authServer';
import Link from 'next/link';

export default async function Dashboard() {
  const user = await requireAuth();
  return (
    <main className="p-4">
      <h1 className="text-5xl">Dashboard</h1>
      <p className="text-xl">
        Welcome, <b>{user && user.username}</b>!
      </p>
      <Link href="/create_article" className="text-blue-600 hover:underline">
        Create new article
      </Link>
    </main>
  );
}
