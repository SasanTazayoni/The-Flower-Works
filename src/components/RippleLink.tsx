'use client';

import Link from 'next/link';
import { MouseEvent } from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function RippleLink({ href, children, className = 'button' }: Props) {
  function handleMouseEnter(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  }

  return (
    <Link href={href} className={className} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}
