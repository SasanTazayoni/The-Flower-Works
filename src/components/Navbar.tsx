'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home', icon: 'fa-solid fa-house' },
  { href: '/about', label: 'About', icon: 'fa-solid fa-circle-info' },
  { href: '/services', label: 'Services', icon: 'fa-solid fa-truck' },
  { href: '/gallery', label: 'Gallery', icon: 'fa-sharp fa-regular fa-images' },
  { href: '/contact', label: 'Contact', icon: 'fa-regular fa-address-card' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav data-navbar="">
      <picture className="nav__component">
        <source media="(max-width: 768px)" srcSet="/images/flowerworkslogosmall.png" />
        <img
          src="/images/flowerworkslogo.png"
          className="nav__logo"
          alt="The Flower Works company logo"
          width={140}
          height={140}
        />
      </picture>
      <ul className="nav__component nav__menu">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={pathname === href ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav__component">
        <a
          href="https://www.instagram.com/flowerworksw10/?hl=en-gb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
          className="instagram-link"
          data-instagram-tooltip="Check out our Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <button
          type="button"
          className="collapsible__toggler"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <ul className={`collapsible__content${menuOpen ? ' collapsible--expanded' : ''}`} inert={!menuOpen || undefined}>
        {links.map(({ href, label, icon }) => (
          <li key={href} className="nav__item">
            <Link href={href}>
              <i className={icon}></i> {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
