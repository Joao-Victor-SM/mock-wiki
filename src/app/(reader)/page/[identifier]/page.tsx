import getPageInfo from '../utils/getPageInfo';
import getSimilarArticles from '../utils/getSimilarArticles';
import Aside from './components/Aside';

export default async function WikiPage({
  params,
}: {
  params: Promise<{identifier: string}>;
}) {
  const {identifier} = await params;
  const {article} = await getPageInfo(identifier);
  const recommendations = await getSimilarArticles(article);

  return (
    <main className="flex flex-1 gap-2 p-4 md:px-12 lg:px-24 h-full font-mono text-sm flex-col-reverse sm:flex-row justify-end sm:justify-start">
      <Aside articles={recommendations} />
      <article
        className="min-h-full p-4 w-full md:w-[clamp(320px,80vw,800px)] 
        border border-gray-400 bg-gray-100
        flex gap-3 justify-start font-mono text-sm text-gray-800
        flex-col shadow-md flex-1"
        dangerouslySetInnerHTML={{__html: article?.safeContent ?? 'Not found'}}
      />
    </main>
  );
}
