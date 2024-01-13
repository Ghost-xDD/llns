import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/landing/main/StarBackground';
import Navbar from '@/components/landing/main/Navbar';
import Footer from '@/components/landing/main/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LLNS | Lightlink Name Service',
  description: 'Welcome to the Lightlink Name Service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000a14] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
