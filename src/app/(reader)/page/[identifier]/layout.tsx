import {ReactNode} from 'react';
import Aside from './components/Aside';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="flex gap-2 p-4 md:px-12 lg:px-24md:px-24 h-full bg-neutral-300 font-mono text-sm flex-col sm:flex-row">
      <Aside />
      {children}
    </main>
  );
}
