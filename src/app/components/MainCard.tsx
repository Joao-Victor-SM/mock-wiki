import Link from 'next/link';

interface props {
  href: string;
  title: string;
  content: string;
}
export default function MainCard({title, content, href}: props) {
  return (
    <Link href={href} className="group">
      <article
        className={`
            bg-gradient-to-b from-gray-100 to-gray-200 p-4 border border-gray-400 h-72 group-hover:to-gray-300 transition-all duration-400
            shadow-md group-hover:shadow-lg flex flex-col
          `}
      >
        <h2 className="text-2xl font-bold group-hover:underline text-blue-600">
          {title}
        </h2>
        <p className="overflow-hidden text-ellipsis line-clamp-7">{content}</p>

        <footer className="mt-auto flex justify-end">
          <button
            type="button"
            className="border bg-gray-300 px-2 hover:border-gray-600 hover:*:inline"
          >
            <span className="hidden">{'> '}</span>
            Read more
          </button>
        </footer>
      </article>
    </Link>
  );
}
