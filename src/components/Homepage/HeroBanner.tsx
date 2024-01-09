import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-teal-400 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="text-white font-bold lg:mt-20 lg:text-6xl lg:max-w-4xl sm:text-2xl sm:mt-10 min-[640px]:text-4xl min-[640px]:max-w-xl">
        Non-intrusively build apps
        </p>
        <img className="lg:mt-8 sm:mt-4" src="/static/landing-page/hero-banner.png" alt="Ribir" />
        <p className="mt-6 mx-2 text-white text-center lg:text-3xl lg:max-w-2xl sm:max-w-xl min-[640px]:text-lg min-[640px]:max-w-lg">
          A declarative, purely composed GUI library for building cross-platform applications. It's lightweight and powerful.
        </p>
        <div className="mt-6 lg:mb-20 sm:mb-10 items-center">
          <Link
            href={
              translate({
                message: '/docs/get_started/quick_start',
                description: 'The link to the getting started page',
              })
            }
            className="rounded-sm bg-white px-12 py-2.5 text-center font-semibold text-blue no-underline-links"
          >
            Getting started
          </Link>
        </div>
      </div>
    </div>
  );
}
