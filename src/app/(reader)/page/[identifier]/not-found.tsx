import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-200 flex-1 grid place-content-center">
      <h1 className="text-5xl font-bold">404 - Not Found</h1>
      <p>This article does not exist.</p>
      <Link href="/" className="text-blue-600 underline hover:text-blue-500">
        Home
      </Link>
    </main>
  );
}
