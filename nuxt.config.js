module.exports = {
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
