import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4 flex px-24 items-center border-b">
      <Link href="/" className="cursor-pointer select-none">
        <h1 className="text-3xl border-b-2 border-l-2 border-green-700 text-gray-950 p-2 py-1 rounded-b-sm !rounded-r-none">
          New Leaf
        </h1>
      </Link>
      <nav className="flex gap-2 ml-auto">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </nav>
    </header>
  );
};
export default Header;
