import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactDetails from '@/components/ContactDetails';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Flower Works West London',
  description:
    'Read the terms and conditions for ordering flowers from The Flower Works, a florist based in West London serving the local community.',
  alternates: { canonical: 'https://theflowerworks.co.uk/terms' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/terms',
    title: 'Terms & Conditions | The Flower Works West London',
    description:
      'Read the terms and conditions for ordering flowers from The Flower Works, a florist based in West London serving the local community.',
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

export default function Terms() {
  return (
    <main id="main-content">
      <section className="block--grey">
        <div className="container legal-content">
          <PageHeader>Terms &amp; Conditions</PageHeader>
          <p>
            Please read these terms and conditions carefully before placing an order or using our
            services. By enquiring or placing an order with The Flower Works, you agree to the
            following terms.
          </p>
          <div className="legal-content__section">
            <h2>About us</h2>
            <p>
              The Flower Works is a florist based in West London, offering floral arrangements for
              all occasions including weddings, funerals, and everyday gifting. We provide both
              in-store collection and local delivery.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Our services</h2>
            <p>
              We offer a range of floral products and services including bouquets, wreaths, oasis
              arrangements, funeral tributes, wedding flowers, seasonal decorations, plants, and
              gift items. Prices may vary depending on the season and availability of flowers.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Orders and enquiries</h2>
            <p>
              Orders can be placed in store, by telephone, or via the enquiries form on our
              website. All orders are subject to availability. We will contact you to confirm your
              order and discuss any specific requirements.
            </p>
            <p>
              For large or bespoke orders such as wedding flowers or funeral tributes, a deposit
              may be required at the time of booking. Details will be confirmed when your order is
              discussed.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Delivery</h2>
            <p>
              We offer local delivery within the West London area. Delivery charges and
              availability will be confirmed at the time of ordering. We will do our best to
              deliver at your requested time, however exact delivery times cannot always be
              guaranteed.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Product substitution</h2>
            <p>
              Flowers are a natural product and availability can vary. If a specific flower or
              variety is unavailable, we reserve the right to substitute it with a product of equal
              or greater value that is similar in style and colour, while maintaining the overall
              quality of your arrangement.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, The Flower Works shall not be liable for any
              indirect or consequential loss arising from the use of our services or products. Our
              total liability to you shall not exceed the value of the order placed.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Governing law</h2>
            <p>
              These terms and conditions are governed by the laws of England and Wales. Any
              disputes arising from these terms shall be subject to the exclusive jurisdiction of
              the courts of England and Wales.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Changes to these terms</h2>
            <p>
              We reserve the right to update these terms and conditions at any time. The current
              version will always be available on this page.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Contact us</h2>
            <p>If you have any questions about these terms, please get in touch:</p>
            <ContactDetails />
          </div>
        </div>
      </section>
    </main>
  );
}
