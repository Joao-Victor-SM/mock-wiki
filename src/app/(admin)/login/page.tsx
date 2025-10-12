export default async function Login({
  searchParams,
}: {
  searchParams?: Promise<{error?: string}>;
}) {
  const params = await searchParams;
  const errorMessage = params?.error
    ? params.error === 'invalid'
      ? 'Invalid username or password'
      : 'Server error, try again'
    : null;

  return (
    <main className="h-full flex justify-center items-center bg-gray-300">
      <form
        action="/api/login"
        method="post"
        className="border-2 p-4 grid gap-4 w-[clamp(320px,100vw,600px)] min-h-80 content-start bg-gradient-to-b from-gray-100 to-gray-300 border-gray-400 shadow-md"
      >
        <h1 className="text-5xl font-bold">Login</h1>
        <p className="font-semibold text-xl">Access to administrator panel</p>

        {errorMessage && (
          <p className="text-red-600 font-bold">{errorMessage}</p>
        )}

        <div className="grid">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="border p-1"
            placeholder="Your username"
            required
          />
        </div>

        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="border p-1"
            placeholder="Your password"
            required
          />
        </div>

        <button
          type="submit"
          className="border bg-gray-300 px-2 hover:border-gray-600 hover:bg-gray-200 w-20 cursor-pointer"
        >
          Login
        </button>
      </form>
    </main>
  );
}
