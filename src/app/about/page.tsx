import type { Metadata } from 'next';
import RippleLink from '@/components/RippleLink';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About The Flower Works | Family Florist, West London',
  description:
    'Meet the family team behind The Flower Works — a West London florist with over 30 years of experience in fresh flowers, plants and funeral tributes.',
  alternates: { canonical: 'https://theflowerworks.co.uk/about' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/about',
    title: 'About The Flower Works | Family Florist, West London',
    description:
      'Meet the family team behind The Flower Works — a West London florist with over 30 years of experience in fresh flowers, plants and funeral tributes.',
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

export default function About() {
  return (
    <main id="main-content">
      <section className="block">
        <div className="container">
          <PageHeader>About us</PageHeader>
          <article className="about">
            <img
              src="/images/about-image.webp"
              className="about__image"
              alt="The Flower Works shop front"
              data-aos="fade-in"
            />
            <p>
              At The Flower Works, we take pride in being your go-to source for fresh flowers and
              plants. Being a small family-run business with over 30 years of trading, we have honed
              our expertise in delivering locally, offering exquisite bouquets of fresh seasonal
              flowers, along with a delightful selection of indoor and garden plants.
            </p>
            <p>
              For those seeking solace in the language of flowers during times of loss, we extend
              our heartfelt condolences and offer a diverse range of wreaths and sprays, priced from
              £30 to £500. Please feel free to call us for updated prices as they may vary
              throughout the year. Our{' '}
              <a
                href="https://www.instagram.com/flowerworksw10/?hl=en-gb"
                className="bold link"
                target="_blank"
                rel="noopener"
                aria-label="Visit our Instagram page (opens in a new tab)"
              >
                Instagram
              </a>{' '}
              page showcases a plethora of photos, displaying the artistry of our recent work.
            </p>
            <p>
              We offer delivery services to both local Funeral Directors and the West London
              Crematorium.
            </p>
          </article>
          <div className="button__container container">
            <RippleLink href="/services">Services</RippleLink>
            <RippleLink href="/contact">Contact</RippleLink>
          </div>
        </div>
      </section>
    </main>
  );
}
