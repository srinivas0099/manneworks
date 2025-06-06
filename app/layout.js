import { Inter } from 'next/font/google';
import './globals.css';
import Header_01 from '@/components/header/Header_01';
import Footer_01 from '@/components/footer/Footer_01';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cogni AI Solutions INC',
  description: 'Transforming businesses with innovative artificial intelligence solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header_01 />
        <main className="main-wrapper relative overflow-hidden">
          {children}
        </main>
        <Footer_01 />
      </body>
    </html>
  );
}
