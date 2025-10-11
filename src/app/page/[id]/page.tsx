import TextWarning from './components/TextWarning';

export function generateMetadata({params}: WikiPageProps) {
  return {
    title: `Index #${params.id}`, // your page title
  };
}

interface WikiPageProps {
  params: {id: string};
}

export default async function WikiPage({params}: WikiPageProps) {
  const {id} = params;

  return (
    <article
      className="min-h-full p-4 w-[clamp(340px,80vw,1100px)] 
      border border-gray-400 shadow-inner bg-gradient-to-b from-gray-100 to-gray-200 
      flex flex-col gap-3 justify-start font-mono text-sm text-gray-800
      rounded-sm"
    >
      <h1 className="text-2xl font-bold border-b-2 border-gray-500 pb-1 mb-2">
        Wiki Page <b>#{id}</b>
      </h1>

      <TextWarning text="This is a warning" />
      <TextWarning text="Warning: another warning" />

      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        at odio alias atque, eum dignissimos recusandae ad repudiandae quibusdam
        cupiditate sit minima nesciunt voluptas aliquam pariatur expedita, omnis
        natus fugiat doloribus iusto consectetur molestias obcaecati illum
        voluptate! Voluptatem, sapiente? Incidunt repudiandae debitis sapiente
        veniam voluptas eos aperiam atque voluptatem sint.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et nam
        amet vitae possimus doloribus, deserunt fuga. Error sed sit commodi iste
        repudiandae quos quas necessitatibus, soluta obcaecati ipsam vitae.
        Incidunt at eligendi non similique quaerat dignissimos excepturi
        perspiciatis repellat, magnam doloremque, adipisci magni, omnis sunt
        possimus error sequi neque iure aperiam temporibus? Quod eaque nulla
        nisi magnam, iste rerum ullam sapiente cum, laudantium reiciendis sint
        non.
      </p>
    </article>
  );
}
