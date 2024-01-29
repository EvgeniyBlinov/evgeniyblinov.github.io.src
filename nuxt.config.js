//  vim: set et fenc=utf-8 ff=unix sts=2 sw=2 ts=2
const main_base_url =  'https://evgeniyblinov.ru';

module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  data: {
    "shortIntro": "Blinov Evgeniy - software engineer",
    "skype": "evgeniy_blinov",
    "telegram": "https://t.me/cent_ru",
    "email": "evgeniy_blinov@mail.ru",
    "github": "https://github.com/EvgeniyBlinov/",
    "linkedin": "https://www.linkedin.com/in/blinovevgeniy/"
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Blinov Evgeniy',
    description: 'Blinov Evgeniy - software engineer. Enterprise CI/CD system design. Building IaC. Monoliths to microservices transformation.',
    //title: 'Blinov Evgeniy - web developer.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blinov Evgeniy - software engineer. Enterprise CI/CD system design. Building IaC. Monoliths to microservices transformation.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    },
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
    }],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: 53815306,
        webvisor: true,
        clickmap:true,
        // useCDN:false,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'UA-140893449-1',
        //layer: 'dataLayer',
        //pageTracking: false,
        //dev: true, // set to false to disable in dev mode
        //query: {
          //// query params...
          //gtm_auth:        '...',
          //gtm_preview:     '...',
          //gtm_cookies_win: '...'
        //},
        //scriptURL: '//example.com'
      }
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: main_base_url
  },
  env: {
    main_base_url
  },
  generate: {
    fallback: "404.html"
  }
}
