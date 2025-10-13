import getPageInfo from '../utils/getPageInfo';

interface WikiPageProps {
  params: {identifier: string};
}

export function generateMetadata({params}: WikiPageProps) {
  return {
    title: `Index #${params.identifier}`,
  };
}

export default async function WikiPage(props: WikiPageProps) {
  const {identifier} = props.params;
  const {article} = await getPageInfo(identifier);

  return (
    <article
      className="min-h-full p-4 w-[clamp(320px,80vw,1100px)] 
      border border-gray-400 shadow-inner bg-gradient-to-b from-gray-100 to-gray-200 
      flex gap-3 justify-start font-mono text-sm text-gray-800
      rounded-sm flex-col"
      dangerouslySetInnerHTML={{__html: article?.safeContent ?? 'Not found'}}
    />
  );
}
