import type {Metadata} from 'next';
import './globals.css';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: {
    template: 'New Leaf - %s',
    default: 'New Leaf',
  },
  description: 'Foster care nonprofit institution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-200 flex flex-col">
        {children}
      </body>
    </html>
  );
}
