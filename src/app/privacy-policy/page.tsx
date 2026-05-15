import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactDetails from '@/components/ContactDetails';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Flower Works West London Florist',
  description:
    'The privacy policy of The Flower Works explains how we collect, use and protect your personal data when you use our website or order flowers.',
  alternates: { canonical: 'https://theflowerworks.co.uk/privacy-policy.html' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/privacy-policy.html',
    title: 'Privacy Policy | The Flower Works West London Florist',
    description:
      'The privacy policy of The Flower Works explains how we collect, use and protect your personal data when you use our website or order flowers.',
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

export default function PrivacyPolicy() {
  return (
    <main id="main-content">
      <section className="block--grey">
        <div className="container legal-content">
          <PageHeader>Privacy Policy</PageHeader>
          <p>This privacy notice tells you what to expect us to do with your personal information.</p>
          <div className="legal-content__section">
            <h2>Contact details</h2>
            <ContactDetails />
          </div>
          <div className="legal-content__section">
            <h2>What information we collect, use, and why</h2>
            <p>
              We collect or use the following information to provide services and goods, including
              delivery:
            </p>
            <ul>
              <li>Names and contact details</li>
              <li>Addresses</li>
            </ul>
          </div>
          <div className="legal-content__section">
            <h2>Lawful bases and data protection rights</h2>
            <p>
              Under UK data protection law, we must have a &quot;lawful basis&quot; for collecting
              and using your personal information. You can find out more about lawful bases on the{' '}
              <a
                href="https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/"
                target="_blank"
                rel="noopener"
              >
                ICO&apos;s website
              </a>
              .
            </p>
            <p>Your data protection rights include:</p>
            <ul>
              <li>
                <span className="bold">Your right of access</span> – You have the right to ask us
                for copies of your personal information.
              </li>
              <li>
                <span className="bold">Your right to rectification</span> – You have the right to
                ask us to correct or delete personal information you think is inaccurate or
                incomplete.
              </li>
              <li>
                <span className="bold">Your right to erasure</span> – You have the right to ask us
                to delete your personal information.
              </li>
              <li>
                <span className="bold">Your right to restriction of processing</span> – You have
                the right to ask us to limit how we can use your personal information.
              </li>
              <li>
                <span className="bold">Your right to object to processing</span> – You have the
                right to object to the processing of your personal data.
              </li>
              <li>
                <span className="bold">Your right to data portability</span> – You have the right
                to ask that we transfer the personal information you gave us to another
                organisation, or to you.
              </li>
              <li>
                <span className="bold">Your right to withdraw consent</span> – When we use consent
                as our lawful basis you have the right to withdraw your consent at any time.
              </li>
            </ul>
            <p>
              If you make a request, we must respond to you without undue delay and in any event
              within one month. To make a data protection rights request, please contact us using
              the details at the top of this page.
            </p>
            <p>
              <span className="bold">
                Our lawful bases for collecting or using personal information to provide services
                and goods are:
              </span>
            </p>
            <ul>
              <li>
                <span className="bold">Consent</span> – we have permission from you after we gave
                you all the relevant information. You have the right to withdraw your consent at
                any time.
              </li>
              <li>
                <span className="bold">Legitimate interests</span> – we collect or use your
                information because it benefits you or our organisation without causing an undue
                risk of harm to anyone. Our legitimate interests are: responding to customer
                enquiries and providing floristry services.
              </li>
            </ul>
          </div>
          <div className="legal-content__section">
            <h2>Where we get personal information from</h2>
            <p>
              Directly from you — when you submit our online enquiries form or contact us directly.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>How long we keep information</h2>
            <p>
              We retain customer enquiry and order details for up to 1 year, after which they are
              securely deleted.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Who we share information with</h2>
            <p>
              <span className="bold">Data processors</span>
            </p>
            <p>
              <span className="bold">Formspree</span> – They receive and store customer enquiry
              submissions made through our website contact form.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>Cookies</h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. This
              website does not use any first-party cookies — we do not set cookies ourselves.
            </p>
            <p>
              However, we use a small number of third-party services that may place cookies or make
              network requests when you visit our site:
            </p>
            <ul>
              <li>
                <span className="bold">Google Fonts</span> – We use Google Fonts to display
                typefaces on our site. When your browser loads our pages, it connects to
                Google&apos;s servers to download font files. Google may log your IP address and
                browser information as part of this. No cookies are set by Google Fonts when loaded
                this way. For more information, see{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="bold">Font Awesome</span> – We use Font Awesome to display icons
                on our site. This is loaded via a hosted kit script, which may set a session cookie
                to validate kit usage. No personal data is collected or shared. For more
                information, see{' '}
                <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener">
                  Font Awesome&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="bold">AOS (Animate On Scroll)</span> – We use AOS to animate page
                elements as you scroll. This is a purely functional library and does not set cookies
                or collect any data.
              </li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings. Disabling
              third-party cookies will not affect your ability to use this website.
            </p>
          </div>
          <div className="legal-content__section">
            <h2>How to complain</h2>
            <p>
              If you have any concerns about our use of your personal data, you can make a
              complaint to us using the contact details at the top of this page.
            </p>
            <p>
              If you remain unhappy with how we&apos;ve used your data after raising a complaint
              with us, you can also complain to the ICO:
            </p>
            <address>
              <p>
                Information Commissioner&apos;s Office
                <br />
                Wycliffe House
                <br />
                Water Lane
                <br />
                Wilmslow
                <br />
                Cheshire
                <br />
                SK9 5AF
              </p>
              <p>Helpline number: 0303 123 1113</p>
              <p>
                Website:{' '}
                <a
                  href="https://www.ico.org.uk/make-a-complaint"
                  target="_blank"
                  rel="noopener"
                >
                  ico.org.uk/make-a-complaint
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
