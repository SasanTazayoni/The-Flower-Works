import type { Metadata } from 'next';
import './styles.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Scripts from '@/components/Scripts';

export const metadata: Metadata = {
  title: 'The Flower Works',
  description: 'The Flower Works — West London Florist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://kit.fontawesome.com" />
        <link rel="preconnect" href="https://unpkg.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
        <ScrollToTop />
        <Scripts />
      </body>
    </html>
  );
}
