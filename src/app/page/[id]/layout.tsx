import {ReactNode} from 'react';
import Aside from './components/Aside';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <main className="flex gap-4 p-4 sm:px-24 h-full bg-neutral-300 font-mono text-sm flex-col sm:flex-row">
      {children}
      <Aside />
    </main>
  );
}
