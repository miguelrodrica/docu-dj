// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACADEMY',
  tagline: 'Bienvenido, acá encontrarás cursos que te ayudarán a mejorar en tu carrera como DJ y productor musical.',
  favicon: 'img/speaker.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dj',
        path: 'docs/curso-dj',
        routeBasePath: 'curso-dj',
        sidebarPath: './sidebars-dj.js',
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'edicion',
        path: 'docs/curso-edicion',
        routeBasePath: 'curso-edicion',
        sidebarPath: './sidebars-edicion.js',
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'produccion',
        path: 'docs/curso-produccion',
        routeBasePath: 'curso-produccion',
        sidebarPath: './sidebars-produccion.js',
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ACADEMY',
        logo: {
          alt: 'Logo',
          src: 'img/speaker.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'dj',
            position: 'left',
            label: 'DJ',
          },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'edicion',
            position: 'left',
            label: 'Edición de Audio',
          },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'produccion',
            position: 'left',
            label: 'Producción Musical',
          },
          {to: '/blog', label: 'Sobre Mí', position: 'left'},
          {
            href: 'https://www.youtube.com/@miguelrodrica',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cursos',
            items: [
              {
                label: 'DJ',
                to: '/curso-dj/intro',
              },
              {
                label: 'Edición de Audio',
                to: '/curso-edicion/intro',
              },
              {
                label: 'Producción Musical',
                to: '/curso-produccion/intro',
              },
            ],
          },
          {
            title: 'Redes Sociales',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@miguelrodrica',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/miguelrodrica',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@miguelrodrica',
              },
            ],
          },
          {
            title: 'Mi Música',
            items: [
              {
                label: 'Spotify',
                href: 'https://open.spotify.com/artist/3hs8nTmDTuEdiR3csOfR3m?si=Ro8W4zfzR22T5we2ScslXg',
              },
              {
                label: 'SoundCloud',
                href: 'https://soundcloud.com/miguelrodrica',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ACADEMY, Miguel Rodrica.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
