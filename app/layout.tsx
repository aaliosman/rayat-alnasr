import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Cairo } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const cairo = Cairo({
  subsets: ['arabic', 'latin'], // choose the subsets you need
  weight: ['400', '700'], // choose font weights
  display: 'swap', // for better performance
});

export const metadata: Metadata = {
  title: 'Artisan Coffee Shop',
  description: 'Experience the perfect brew at our artisan coffee shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
