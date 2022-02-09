export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  // router: {
  //   base: '/Portfolio-nuxt'
  // },
  // generate: { fallback: true },
  head: {
    title: 'Lusta Vlad Portfolio',
    // <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
    //   <link rel="stylesheet" href="css/style.min.css">
    //     <meta name="viewport" content="width=device-width,initial-scale=1.0">
    //       <link rel="shortcut icon" href="https://toppng.com/uploads/preview/krasivye-logotipy-115507292386wws3ynfmr.png" type="image/x-icon">
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],
  // server: {
  //   port: process.env.PORT
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vee-validate/vee-validate'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: false,
  loadingIndicator: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    // '~/plugins/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: [
      'vee-validate'
    ]
  },

  render: {
    // Добавляем async к скриптам Nuxt.
    asyncScripts: true,

    // Используем Content Security Policy для защиты от XSS атак.
    // Для примера я добавил записи, которые требуются для корректной работы Яндекс.Метрики и встраивания видео из Youtube.
    csp: {
      unsafeInlineCompatibility: true,
      reportOnly: false,
      // policies: {
      //   'default-src': ["'self'"],
      //   'img-src': ["'self'", 'https://mc.yandex.ru'],
      //   'script-src': ["'self'", "'unsafe-inline'", 'https://mc.yandex.ru'],
      //   'style-src': ["'self'", "'unsafe-inline'"],
      //   'connect-src': ["'self'", 'https://mc.yandex.ru']
      // }
    }
  }
}
