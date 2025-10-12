import Link from "next/link";

interface props {
  href: string;
  title: string;
  content: string;
}
const RecommendationCard = ({ href, title, content }: props) => {
  return (
    <Link href={href}>
      <article className="p-2 border-2 border-gray-400 bg-gray-100 hover:bg-gray-200 group">
        <h2 className="font-bold text-blue-700 group-hover:underline">
          {title}
        </h2>
        <p>{content}</p>
      </article>
    </Link>
  );
};
export default RecommendationCard;
