import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-200 flex p-4 sm:px-24 items-center border-b">
      <Link
        href="/"
        className="cursor-pointer select-none flex gap-[3px] almendra-bold-italic items-center"
      >
        <Image src="/Logo_New_Leaf.png" alt="logo" width={50} height={50} />
        <h1 className="text-3xl  text-gray-950 p-2 py-1 ">New Leaf</h1>
      </Link>
      <nav className="flex ml-auto divide-x">
        <Link href="/" className="text-blue-700 hover:underline px-1.5">
          Home
        </Link>
        <Link href="/about" className="text-blue-700 hover:underline px-1.5">
          About
        </Link>
      </nav>
    </header>
  );
};
export default Header;
