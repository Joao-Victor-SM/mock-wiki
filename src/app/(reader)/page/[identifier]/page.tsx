import getPageInfo from '../utils/getPageInfo';

interface Params {
  identifier: string;
}

interface WikiPageProps {
  params: Promise<Params>;
}

export async function generateMetadata({params}: WikiPageProps) {
  const {identifier} = await params;
  return {
    title: `Index #${identifier}`,
  };
}

export default async function WikiPage({params}: WikiPageProps) {
  const {identifier} = await params;
  const {article} = await getPageInfo(identifier);

  return (
    <article
      className="min-h-full p-4 w-full md:w-[clamp(320px,80vw,800px)] 
      border border-gray-400 bg-gray-100
      flex gap-3 justify-start font-mono text-sm text-gray-800
      flex-col shadow-md"
      dangerouslySetInnerHTML={{__html: article?.safeContent ?? 'Not found'}}
    />
  );
}
