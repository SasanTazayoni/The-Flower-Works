'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/cc28b3bda6.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/aos@2.3.4/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          (window as { AOS?: { init: () => void } }).AOS?.init();
        }}
      />
    </>
  );
}
