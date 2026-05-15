import type { Metadata } from 'next';
import RippleLink from '@/components/RippleLink';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export const metadata: Metadata = {
  title: 'The Flower Works | West London Florist & Flower Delivery',
  description:
    "The Flower Works is a family-run florist in Shepherd's Bush, West London. Fresh seasonal bouquets, wreaths, funeral tributes and local delivery.",
  alternates: { canonical: 'https://theflowerworks.co.uk/' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/',
    title: 'The Flower Works | West London Florist & Flower Delivery',
    description:
      "The Flower Works is a family-run florist in Shepherd's Bush, West London. Fresh seasonal bouquets, wreaths, funeral tributes and local delivery.",
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: 'The Flower Works',
  url: 'https://theflowerworks.co.uk',
  telephone: '0208 960 7114',
  email: 'theflowerworks@live.com',
  image: 'https://theflowerworks.co.uk/images/hero-image.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'London',
    postalCode: 'W10',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5195,
    longitude: -0.2296,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '15:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: ['https://www.instagram.com/flowerworksw10/'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <link rel="preload" as="image" href="/images/hero-image.webp" fetchPriority="high" />
      <section>
        <div className="hero-wrapper">
          <div className="hero__container">
            <h1 className="hero__heading">The Flower Works</h1>
          </div>
        </div>
      </section>
      <main id="main-content">
        <section className="block">
          <div className="container" data-aos="fade-in">
            <header className="block__header">
              <h2>A little about us</h2>
            </header>
            <p>
              The Flower Works is a premier floral destination that brings the beauty of nature to
              life. With a passion for flowers and a commitment to exceptional craftsmanship, we
              curate stunning floral arrangements that captivate the senses. Our dedicated team of
              skilled florists combines artistic flair with a deep understanding of botanicals,
              ensuring that each arrangement tells a unique story. From vibrant bouquets to elegant
              centerpieces, we strive to create unforgettable floral experiences for every occasion.
              With our unwavering commitment to quality and customer satisfaction, The Flower Works
              is your go-to source for exquisite flowers that speak the language of love,
              celebration, and heartfelt emotions.
            </p>
          </div>
          <div className="button__container container">
            <RippleLink href="/about">About</RippleLink>
            <RippleLink href="/contact">Contact</RippleLink>
          </div>
        </section>
        <section className="block--grey">
          <div className="container" data-aos="fade-in">
            <header className="block__header">
              <h2>Our flowers and services</h2>
            </header>
            <p>
              The Flower Works is an esteemed floral service that specialises in crafting heartfelt
              funeral arrangements and also offers a wide array of other beautiful floral creations
              for various occasions. Their diverse range of services includes{' '}
              <span className="bold">
                stunning bouquets priced between £30 and £100, elegant wreaths ranging from £50 to
                £100, and artful oasis arrangements available at £40 to £150.
              </span>{' '}
              The prices are influenced by the changing seasons, ensuring that each arrangement
              captures the essence of the time of year. Whether you&apos;re seeking a vibrant spring
              bouquet or a festive winter wreath, The Flower Works meticulously tailors their
              offerings to suit different needs and occasions. For more comprehensive details, feel
              free to explore the services section.
            </p>
          </div>
          <div className="button__container container">
            <RippleLink href="/gallery">Gallery</RippleLink>
            <RippleLink href="/services">Services</RippleLink>
          </div>
        </section>
        <section className="block">
          <div className="container">
            <header className="block__header">
              <h2>Testimonials</h2>
            </header>
            <TestimonialsCarousel />
          </div>
        </section>
      </main>
    </>
  );
}
