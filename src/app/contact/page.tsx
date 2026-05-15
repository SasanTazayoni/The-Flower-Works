import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactDetails from '@/components/ContactDetails';

export const metadata: Metadata = {
  title: 'Contact Us | The Flower Works Florist, West London',
  description:
    'Contact The Flower Works by phone, email or our online enquiry form. Open Mon–Fri 9am–3:30pm, Sat 9am–1pm. Local delivery across West London.',
  alternates: { canonical: 'https://theflowerworks.co.uk/contact' },
  openGraph: {
    type: 'website',
    siteName: 'The Flower Works',
    url: 'https://theflowerworks.co.uk/contact',
    title: 'Contact Us | The Flower Works Florist, West London',
    description:
      'Contact The Flower Works by phone, email or our online enquiry form. Open Mon–Fri 9am–3:30pm, Sat 9am–1pm. Local delivery across West London.',
    images: 'https://theflowerworks.co.uk/images/hero-image.webp',
  },
};

export default function Contact() {
  return (
    <main id="main-content">
      <section className="block">
        <div className="container">
          <PageHeader>Contact us</PageHeader>
          <div className="card card--grey grid--1x2" data-aos="flip-down">
            <div className="contact-card__content">
              <p>If you have any questions please contact us via the following:</p>
              <br />
              <ContactDetails />
              <br />
              <p>Our opening hours are:</p>
              <br />
              <p>
                <span className="bold">
                  Mondays - Fridays at 9:00AM - 3:30PM
                  <br />
                  Saturdays at 9:00AM - 1:00PM
                </span>
              </p>
            </div>
            <img
              src="/images/contact-owner.webp"
              alt="The owner of The Flower Works"
              className="contact-card__image"
            />
          </div>
        </div>
      </section>
      <section className="block--grey">
        <div className="container">
          <div className="card enquiries-form" data-aos="fade-in">
            <header>
              <h2 className="block__header">Enquiries form</h2>
            </header>
            <div className="enquiries-form__content">
              <form action="https://formspree.io/f/xyyqglnj" method="POST">
                <fieldset>
                  <legend className="sr-only">Enquiry form</legend>
                  <label htmlFor="fullname">Full name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Full name"
                    minLength={1}
                    maxLength={40}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    minLength={5}
                    maxLength={40}
                    required
                  />
                  <label htmlFor="enquiry">Your enquiry</label>
                  <textarea
                    name="enquiry"
                    id="enquiry"
                    placeholder="Your enquiry"
                    minLength={10}
                    maxLength={300}
                    className="enquiries-form__textarea"
                    required
                  />
                </fieldset>
                <div className="button__container">
                  <button
                    className="button"
                    id="enquiry__submit-button"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="button"
                    id="enquiry__reset-button"
                    type="reset"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="container">
          <header className="block__header">
            <h2>Where to find us</h2>
          </header>
          <div className="google-maps__container card card--grey" data-aos="fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6594556821074!2d-0.22957872305442284!3d51.519463409821604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610292bd82841%3A0x8bef4d49ab74cfb!2sThe%20Flower%20Works!5e0!3m2!1sen!2suk!4v1688223107502!5m2!1sen!2suk"
              className="google-maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing The Flower Works location in West London"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
