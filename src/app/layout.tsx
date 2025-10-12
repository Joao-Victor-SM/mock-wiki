import type {Metadata} from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100 flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
