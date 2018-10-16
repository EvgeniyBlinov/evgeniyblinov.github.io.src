//  vim: set et fenc=utf-8 ff=unix sts=2 sw=2 ts=2
module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  head: {
    title: 'Blinov Evgeniy',
    description: 'Blinov Evgeniy - web developer.',
    //title: 'Blinov Evgeniy - web developer.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blinov Evgeniy - web developer.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    vendor: [
      'jquery',
      'bootstrap'
    ]
  },
  modules: [
    '@nuxtjs/markdownit',
    'bootstrap-vue/nuxt',
    ['nuxt-fontawesome', {
      component: 'fa'
    }]
  ]
}
