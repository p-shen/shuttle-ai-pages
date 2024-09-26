import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shuttle AI',
  tagline: 'Personalized therapy assistant at every step of the recovery journey.',
  favicon: 'img/logo_96.png',

  // Set the production url of your site here
  url: 'https://www.shuttleai.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'p-shen', // Usually your GitHub org/user name.
  projectName: 'shuttle-ai-pages', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-YEE65BECW5',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo_512.png',
    navbar: {
      title: 'Shuttle AI',
      // style: 'light',
      logo: {
        alt: 'Shuttle AI Logo',
        src: 'img/logo_512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Product',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/app', label: 'App', position: 'right' },
        { to: '/app_cn', label: '产品展示', position: 'right' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'App',
        //   position: 'right',
        // },
      ],
    },
    metadata: [
      { name: 'keywords', content: 'AI physiotherapy, personalized rehab, digital physical therapy, home exercise program, AI-powered rehabilitation, telehealth physiotherapy, smart recovery app, custom treatment plan, virtual physical therapy, injury recovery app, AI health assistant, remote physiotherapy, physical therapy tech, AI rehab planning, physiotherapy tracking app, intelligent exercise guidance, digital health innovation, AI movement assessment, physiotherapy progress tracker, personalized exercise videos' },
      { name: 'description', content: 'Experience personalized physiotherapy powered by AI. Our innovative product provides tailored treatment plans, guided exercises, and progress tracking to support your recovery journey from the comfort of your home. Revolutionize your rehab with cutting-edge technology and expert-designed programs.' }
    ],
    footer: {
      // style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Product',
              to: '/docs/the_challenge',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WeChat',
              href: '/about',
            },
            {
              label: 'Discord',
              href: '/about',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shuttle AI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,

};


export default config;
