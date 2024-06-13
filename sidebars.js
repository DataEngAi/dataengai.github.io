/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //docs: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/overview',
      },
      collapsed: false,
      items: [
        "getting-started/quickstart",
        {
          type: 'category',
          label: 'DataSQRL Tutorials',
          link: {
            type: 'doc',
            id: 'getting-started/tutorials/overview',
          },
          items: [
            'getting-started/tutorials/customer360/intro',
            'getting-started/tutorials/recommendations/intro',
            'getting-started/tutorials/iot/intro',
          ],
        },
        // {
        //   type: 'category',
        //   label: 'DataSQRL Introduction',
        //   link: {
        //     type: 'doc',
        //     id: 'getting-started/intro/overview',
        //   },
        //   items: [
        //     'getting-started/intro/sqrl',
        //     'getting-started/intro/data-sources',
        //     'getting-started/intro/api',
        //     'getting-started/intro/advanced',
        //     'getting-started/intro/deploy',
        //   ],
        // },
        'getting-started/concepts/datasqrl',
        // 'getting-started/concepts/sqrl',
        "getting-started/concepts/why-datasqrl",
        'getting-started/concepts/when-datasqrl',

      ],
    },
    {
      type: 'category',
      label: 'Reference Documentation',
      link: {
        type: 'doc',
        id: 'reference/overview',
      },
      items: [
        {
          type: 'category',
          label: 'SQRL',
          link: {
            type: 'doc',
            id: 'reference/sqrl/overview',
          },
          items: [
            'reference/sqrl/table',
            'reference/sqrl/relationship',
            'reference/sqrl/stream',
            'reference/sqrl/time',
            'reference/sqrl/import',
            'reference/sqrl/export',
            {
              type: 'category',
              label: 'Functions',
              link: {
                type: 'generated-index',
                title: 'Functions in SQRL',
                description: "Functions make your life so much easier and your SQRL scripts so much shorter. If we could \
                only remember them when we need them. Luckily you have this reference list of SQRL function packages to look them up:"
              },
              items: [
                'reference/sqrl/functions/string',
                'reference/sqrl/functions/time',
                'reference/sqrl/functions/text',
                'reference/sqrl/functions/secure',
                'reference/sqrl/functions/json',
                'reference/sqrl/functions/vector',
                'reference/sqrl/functions/custom-functions',
              ],
            },
            'reference/sqrl/sql-primer',
          ],
        },
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'doc',
            id: 'reference/api/overview',
          },
          items: [
            {
              type: 'category',
              label: 'GraphQL',
              link: {
                type: 'doc',
                id: 'reference/api/graphql/design',
              },
              items: [
                'reference/api/graphql/query',
                'reference/api/graphql/design',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Sources & Sinks',
          link: {
            type: 'doc',
            id: 'reference/sources/overview',
          },
          items: [
            'reference/sources/discovery',
            {
              type: 'category',
              label: 'Data System',
              link: {
                type: 'generated-index',
                title: 'Data Systems supported by DataSQRL',
                description: 'DataSQRL supports the following data systems as data sources or sinks:'
              },
              items: [
                'reference/sources/system/file',
                'reference/sources/system/kafka',
                'reference/sources/system/print',
              ],
            },
            {
              type: 'category',
              label: 'Data Format',
              link: {
                type: 'generated-index',
                title: 'Data Formats supported by DataSQRL',
                description: 'DataSQRL supports the following data formats for data sources and sinks:'
              },
              items: [
                'reference/sources/format/json',
                'reference/sources/format/csv',
                'reference/sources/format/avro',
              ],
            },
            'reference/sources/schema',
          ],
        },
        {
          type: 'category',
          label: 'Build',
          link: {
            type: 'doc',
            id: 'reference/operations/build',
          },
          items: [
            'reference/operations/command',
            'reference/operations/repository',
            'reference/operations/optimizer',
            'reference/operations/package-config',
            {
              type: 'category',
              label: 'Deploy',
              link: {
                type: 'doc',
                id: 'reference/operations/deploy/overview',
              },
              items: [
                // 'reference/operations/deploy/docker'
//                'reference/operations/deploy/secrets',
              ],
            },
            {
              type: 'category',
              label: 'Engines',
              link: {
                type: 'doc',
                id: 'reference/operations/engines/overview',
              },
              items: [
                'reference/operations/engines/flink',
                'reference/operations/engines/postgres',
                'reference/operations/engines/vertx',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Key Concepts',
          link: {
            type: 'generated-index',
            title: 'Key Concepts in DataSQRL',
            description: "Knowing the key concepts in DataSQRL is useful for understanding how it works and how to use it. \
                Think Oxford dictionary for data nerds. Sounds fun? Read on! Doesn't? Then imagine Benedict Cumberbatch reading it to you with a British accent."
          },
          items: [
            'reference/concepts/package',
            'reference/concepts/data-product',
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Developer Documentation',
    //   link: {
    //     type: 'doc',
    //     id: 'dev/overview',
    //   },
    //   items: [
    //     'dev/architecture',
    //     'dev/roadmap',
    //     'dev/contribute',
    //   ],
    // },
    {
      type: 'category',
      label: 'DataSQRL Process',
      link: {
        type: 'doc',
        id: 'process/intro',
      },
      items: [
        'process/customer-focused',
        'process/responsive',
        'process/integrated'
      ],
    },
  ],

};

module.exports = sidebars;
