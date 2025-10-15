import {News} from '@prisma/client';
import Link from 'next/link';

const RecommendationCard = ({identifier, title, content}: News) => {
  return (
    <Link href={`/page/${identifier}`}>
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
