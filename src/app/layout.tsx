'use client';

import { Footer } from '@/components/Footer';
import '../styles/globals.css';
import '../styles/App.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
