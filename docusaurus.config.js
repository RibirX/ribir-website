// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ribir Official Website',
  tagline: 'Using the Ribir to build everything',
  url: 'https://ribir.org',
  baseUrl: '/',
  favicon: 'img/logo.ico',

  organizationName: 'RibirX',
  projectName: 'ribir-website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: './sidebars.js',
          path: '../Ribir/docs/en',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/js/style.js',
      defer: true,
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Ribir',
        logo: {
          alt: 'Ribir LOGO',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/RibirX/Ribir',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                // hack: title color style
                html: `
                  <a href="https://www.ribir.org" target="_blank" rel="noreferrer noopener" style="display: flex; align-items: center;">
                    <img src="/img/logo.svg" width="48" height="48" style="margin-right: 10px;" />
                    <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-300" style="font-size: 30px; margin: 0;">Ribir</h2>
                  </a>                
                `,
              }
            ]
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RibirX/Ribir',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ribir org. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['rust']
      },
    }),
};

export default config;
