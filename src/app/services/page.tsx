import type { Metadata } from 'next';
import RippleLink from '@/components/RippleLink';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Floral Services & Pricing | The Flower Works West London',
  description:
    "From bouquets at £30 to funeral wreaths and oasis arrangements, explore The Flower Works' full range of floral services and current pricing.",
  alternates: { canonical: 'https://theflowerworks.co.uk/services' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/services',
    title: 'Floral Services & Pricing | The Flower Works West London',
    description:
      "From bouquets at £30 to funeral wreaths and oasis arrangements, explore The Flower Works' full range of floral services and current pricing.",
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

const serviceBlocks = [
  {
    title: 'Floral Arrangements',
    body: 'Our florist specializes in creating stunning floral arrangements for all occasions. From elegant bouquets to eye-catching centerpieces, our skilled team carefully selects and arranges the freshest flowers to create beautiful displays that will brighten any space.',
  },
  {
    title: 'Delivery Services',
    body: 'We offer convenient delivery services to bring the joy of flowers right to your doorstep. Surprise your loved ones with a thoughtful floral arrangement delivered straight to their home, office, or hospital room. Our reliable and professional delivery team ensures that your flowers arrive fresh and on time.',
  },
  {
    title: 'Custom Floral Designs',
    body: "At our florist, we understand that every occasion is unique. That's why we offer custom floral designs tailored to your specific preferences. Whether you have a specific color scheme in mind or want to incorporate specific flowers, our talented florists will create a personalized arrangement that reflects your style and captures the essence of the occasion.",
  },
  {
    title: 'Gift Items',
    body: 'In addition to our beautiful floral arrangements, we also offer a selection of complementary gift items. From charming greeting cards to decadent chocolates, cuddly stuffed animals, and festive balloons, we have the perfect add-ons to make your gift extra special.',
  },
  {
    title: 'Funeral Services',
    body: "Our compassionate florists provide dignified floral arrangements for funerals and memorial services. We understand the importance of honoring your loved one's memory, and we offer a range of funeral flowers, including casket sprays, funeral wreaths, sympathy bouquets, and arrangements for visitation or wake, to express your heartfelt condolences.",
  },
  {
    title: 'Plant Sales and Care',
    body: 'Enhance your living spaces with our selection of beautiful potted plants. We offer a variety of flowering and non-flowering plants that add natural beauty to any home or office. Our knowledgeable staff can provide guidance on plant care, ensuring your green companions thrive and bring joy for years to come.',
  },
  {
    title: 'Seasonal Decorations',
    body: "Celebrate the seasons with our enchanting floral decorations. From festive Christmas wreaths to vibrant Easter arrangements, romantic Valentine's Day bouquets, and elegant Mother's Day gifts, we create seasonal designs that capture the spirit of each occasion and bring warmth to your celebrations.",
  },
];

export default function Services() {
  return (
    <main id="main-content">
      <section className="block">
        <div className="container" data-aos="fade-in">
          <PageHeader>Services and pricing</PageHeader>
          <p>
            At The Flower Works, we are dedicated to providing a wide range of exceptional floral
            services tailored to meet all your needs. Our skilled team specialises in crafting
            stunning bouquets, centerpieces, and custom designs, using only the freshest and most
            beautiful flowers available. We also offer thoughtful gift items to complement our
            floral creations.
          </p>
          <div className="services__images" data-aos="fade-in">
            <img src="/images/tulips.jpg" className="services__image" alt="Tulips" loading="lazy" width={200} height={200} />
            <img src="/images/roses.jpg" className="services__image" alt="Roses" loading="lazy" width={200} height={200} />
            <img src="/images/sunflowers.jpg" className="services__image" alt="Sunflowers" loading="lazy" width={200} height={200} />
            <img src="/images/lilies.jpg" className="services__image" alt="Lilies" loading="lazy" width={200} height={200} />
          </div>
          <h2 className="pricing__heading">Discover our pricing options:</h2>
          <ul className="pricing-list">
            <li className="pricing-list-item">
              <span className="bold italic">Bouquets:</span> £30 - £100
            </li>
            <li className="pricing-list-item">
              <span className="bold italic">Posies:</span> £30 - £60
            </li>
            <li className="pricing-list-item">
              <span className="bold italic">Sheath in cellophane:</span> £30 - £60
            </li>
            <li className="pricing-list-item">
              <span className="bold italic">Oasis arrangements:</span> £40 - £150
            </li>
            <li className="pricing-list-item">
              <span className="bold italic">Wreaths:</span> £50 - £100
            </li>
            <li className="pricing-list-item">
              All other prices available on request{' '}
              <span className="italic">(Prices may vary throughout the year)</span>
            </li>
          </ul>
          <p>
            We understand the importance of honoring loved ones during difficult times, which is why
            we offer compassionate funeral services with a range of tasteful floral arrangements.
            Our plant sales and care services also allow you to bring the natural beauty of potted
            plants into your living spaces.
          </p>
        </div>
      </section>
      {serviceBlocks.map((block, i) => (
        <article key={block.title} className={i % 2 === 0 ? 'block--grey' : 'block'}>
          <div className="container" data-aos="zoom-in-up">
            <header className="block__header">
              <h2>{block.title}</h2>
            </header>
            <p>{block.body}</p>
          </div>
        </article>
      ))}
      <section className="block">
        <div className="container">
          <div className="services__images" data-aos="fade-in">
            <img src="/images/chrysanthemums.jpg" className="services__image" alt="Chrysanthemums" loading="lazy" width={200} height={200} />
            <img src="/images/dahlias.jpg" className="services__image" alt="Dahlias" loading="lazy" width={200} height={200} />
            <img src="/images/hyacinths.jpg" className="services__image" alt="Hyacinths" loading="lazy" width={200} height={200} />
            <img src="/images/orchids.jpg" className="services__image" alt="Orchids" loading="lazy" width={200} height={200} />
          </div>
          <div className="button__container">
            <RippleLink href="/gallery">Gallery</RippleLink>
            <RippleLink href="/contact">Contact</RippleLink>
          </div>
        </div>
      </section>
    </main>
  );
}
