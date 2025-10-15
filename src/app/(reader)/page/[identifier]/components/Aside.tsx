import {News} from '@prisma/client';
import RecommendationCard from './RecommendationCard';

interface props {
  articles: News[];
}
export default function Aside({articles}: props) {
  console.log(articles);
  return (
    <aside className="w-full sm:w-80 border border-gray-400 bg-gradient-to-b from-gray-100 to-gray-200 p-1 shadow-md grid content-start gap-1">
      {articles.map((article) => (
        <RecommendationCard {...article} key={article.id} />
      ))}
    </aside>
  );
}
