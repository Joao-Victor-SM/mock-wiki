import Link from 'next/link';
import {ReactNode} from 'react';
import RecommendationCard from './components/RecommendationCard';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="flex gap-4 p-4 px-24 h-full bg-neutral-300 font-mono text-sm">
      <section>{children}</section>

      <aside className="w-80 border border-gray-400 bg-gradient-to-b from-gray-100 to-gray-200 p-1 shadow-md grid content-start gap-1">
        <RecommendationCard
          href="132"
          title="House Locke"
          content='Prototype soldiers inspired on the "tabula rasa" philosophy'
        />
        <RecommendationCard
          href="1323"
          title="Another Article"
          content="Lorem ipsum dolor sit amet"
        />
      </aside>
    </main>
  );
}
