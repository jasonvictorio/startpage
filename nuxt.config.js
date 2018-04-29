const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/startpage/'
  }
} : {}

module.exports = {
  ...routerBase,
  build: {},
  head: {},
  loading: { color: '#3B8070' },
  manifest: {
    theme_color: '#3B8070'
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  css: [
    'tachyons/css/tachyons.css',
    '~/assets/style.scss',
  ],
  build: {
    extractCSS: true,
  },
}
