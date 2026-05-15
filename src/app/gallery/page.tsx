import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Flower Gallery | The Flower Works West London Florist',
  description:
    'Browse photos of our fresh flower arrangements, seasonal bouquets, wreaths and tributes made by The Flower Works florist in West London.',
  alternates: { canonical: 'https://theflowerworks.co.uk/gallery' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/gallery',
    title: 'Flower Gallery | The Flower Works West London Florist',
    description:
      'Browse photos of our fresh flower arrangements, seasonal bouquets, wreaths and tributes made by The Flower Works florist in West London.',
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

export default function Gallery() {
  return (
    <main id="main-content">
      <section className="block">
        <PageHeader>Our flowers</PageHeader>
        <ul className="grid--1x4" data-aos="fade-in">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((n) => (
            <li key={n} className="card gallery-card" data-gallery-card="">
              <img
                src={`/images/gallerypic${n}.webp`}
                alt={`Flower arrangement ${n} by The Flower Works`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        <p className="gallery__text">
          Please see our{' '}
          <span className="bold">
            <a
              href="https://www.instagram.com/flowerworksw10/?hl=en-gb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </span>{' '}
          for more photos.
        </p>
      </section>
    </main>
  );
}
