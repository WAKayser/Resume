module.exports = {
  siteName: 'Wouter Kayser Personal site',
  siteDescription: 'Personal blog for summaries and projects',
  siteUrl: 'https://www.wakayser.nl',
  plugins: [
    {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'posts/*.md',
          typeName: 'Post',
          route: '/post/:slug',
        },
        remark: {
        plugins: ['remark-math', 'remark-html-katex', 'remark-html', '@gridsome/remark-prismjs']
    }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
}