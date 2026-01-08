import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Colombia',
  tagline: 'Manual de usuario',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manual.colombia.uio.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zjceo', // Usually your GitHub org/user name.
  projectName: 'colombia', // Usually your repo name.

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
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zjceo/colombia/tree/main/",
        },
        //blog: {
        //  showReadingTime: true,
        //  feedOptions: {
        //    type: ['rss', 'atom'],
        //    xslt: true,
        //  },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //  editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //  // Useful options to enforce blogging best practices
        //  onInlineTags: 'warn',
        //  onInlineAuthors: 'warn',
        //  onUntruncatedBlogPosts: 'warn',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          configuraciones_empresa: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/01a-configuracion-empresa.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/empresa",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          configuraciones_software_fe: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/01b-configurar-factura-electronica/01b-configurar-software.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/software-fe",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          configuraciones_notas_fe: {
             specPath: "apifacturador/01-ConfiguracionesBasicas/01b-configurar-factura-electronica/02b-configurar-notas.yaml",
             outputDir: "docs/devs/api/01-configuraciones-basicas/notas-fe",
             sidebarOptions: {
               groupPathsBy: "tag",
             },
           },
          configuraciones_nomina: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/01c-configurar-nominas/01c-configurar-software-nomina.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/nomina",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          configuraciones_ds: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/01d-configurar-documentos-soporte/01d-configurar-software-ds.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/documentos-soporte",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          configuraciones_eqdocs: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/01e-documentos-equivalentes/01e-configurar-software-eqdocs.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/documentos-equivalentes",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          configuraciones_resolution: {
            specPath: "apifacturador/01-ConfiguracionesBasicas/config-resolution.yaml",
            outputDir: "docs/devs/api/01-configuraciones-basicas/resolucion",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_factura: {
            specPath: "apifacturador/02-PrimerosEnvios/02a-factura/invoice.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/factura",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_nota_credito: {
            specPath: "apifacturador/02-PrimerosEnvios/02b-nota-credito/credit-note.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/nota-credito",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_nota_debito: {
            specPath: "apifacturador/02-PrimerosEnvios/02c-nota-debito/debit-note.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/nota-debito",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_nomina: {
            specPath: "apifacturador/02-PrimerosEnvios/02d-nomina/payroll.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/nomina",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_nomina_ajuste: {
             specPath: "apifacturador/02-PrimerosEnvios/02d-nomina/payroll-adjust-note.yaml",
             outputDir: "docs/devs/api/02-primeros-envios/nomina-ajuste",
             sidebarOptions: {
               groupPathsBy: "tag",
             },
           },
          primeros_envios_documento_soporte: {
            specPath: "apifacturador/02-PrimerosEnvios/02e-documento-soporte/support-doc.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/documento-soporte",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          primeros_envios_documento_soporte_ajuste: {
             specPath: "apifacturador/02-PrimerosEnvios/02e-documento-soporte/support-doc-adjust.yaml",
             outputDir: "docs/devs/api/02-primeros-envios/documento-soporte-ajuste",
             sidebarOptions: {
               groupPathsBy: "tag",
             },
           },
          primeros_envios_documentos_equivalentes: {
            specPath: "apifacturador/02-PrimerosEnvios/02f-documentos-equivalentes/eqdocs.yaml",
            outputDir: "docs/devs/api/02-primeros-envios/documentos-equivalentes",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          consultas_estado: {
            specPath: "apifacturador/03-ConsultasDeEstado/consultas.yaml",
            outputDir: "docs/devs/api/03-consultas-estado",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          casuisticas_envios: {
            specPath: "apifacturador/04-CasuisticasDeEnvios/04-casuisticas/casuisticas.yaml",
            outputDir: "docs/devs/api/04-casuisticas-envios",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          consumidor_final: {
            specPath: "apifacturador/05-ConsumidorFinal/05-consumidor-final/consumidor-final.yaml",
            outputDir: "docs/devs/api/05-consumidor-final",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          utilidades: {
            specPath: "apifacturador/06-Utilidades/06-utilidades/utilities.yaml",
            outputDir: "docs/devs/api/06-utilidades",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        //{
        //  type: 'docSidebar',
        //  sidebarId: 'tutorialSidebar',
        //  position: 'left',
        //  label: 'Tutorial',
        //},
        //{to: '/blog', label: 'Blog', position: 'left'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          //title: 'Docs',
          items: [
            //{
            //  label: 'Tutorial',
            //  to: '/docs/intro',
            //},
          ],
        },
        {
          //title: 'Community',
          items: [
            //{
            //  label: 'Stack Overflow',
            //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //},
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/docusaurus',
            //},
            //{
            //  label: 'X',
            //  href: 'https://x.com/docusaurus',
            //},
          ],
        },
        {
          title: 'More',
          items: [
            //{
            //  label: 'Blog',
            //  to: '/blog',
            //},
            //{
            //  label: 'GitHub',
            //  href: 'https://github.com/facebook/docusaurus',
            //},
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
