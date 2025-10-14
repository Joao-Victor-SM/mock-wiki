import {ReactNode} from 'react';
import Aside from './components/Aside';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="flex gap-2 p-4 md:px-12 lg:px-24 h-full bg-neutral-300 font-mono text-sm flex-col-reverse sm:flex-row justify-center">
      <Aside />
      {children}
    </main>
  );
}
