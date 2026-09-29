import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionDots from '@/components/SectionDots';
import CustomCursor from '@/components/CustomCursor';
import { profile } from '@/data/portfolio';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-grid bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] grain" />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SectionDots />
      </body>
    </html>
  );
}
