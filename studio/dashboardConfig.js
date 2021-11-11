export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618d7bb2fb5fd871a56ad7d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-23947f8b',
                  apiId: '5f4f52cf-0644-4d35-8b21-c8102f622479'
                },
                {
                  buildHookId: '618d7bb299839c5463417475',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tvwd1bh6',
                  apiId: '367f9962-62d7-4f1a-8021-becf992dcbfa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrsimonbennett/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tvwd1bh6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
