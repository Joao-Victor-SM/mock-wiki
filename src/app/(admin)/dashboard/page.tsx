import {requireAuth} from '@/lib/authServer';

export default async function Dashboard() {
  const user = await requireAuth(); // throws redirect if not authenticated
  console.log(user);
  return (
    <main>
      <h1 className="text-5xl">Dashboard</h1>
      <p className="text-xl">
        Welcome, <b>{user && user.username}</b>!
      </p>
    </main>
  );
}
