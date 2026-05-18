import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer>
      <section>
        <ul className="footer__menu">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <img
          src="/images/flowerworkslogosmall.png"
          className="footer__logo"
          alt="The Flower Works company logo"
          width={140}
          height={144}
        />
      </section>
      <section className="footer__credits">
        <div className="footer__links">
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <p>&copy; The Flower Works 2023. All rights reserved.</p>
      </section>
    </footer>
  );
}
