import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'

const colors = resolveConfig(tailwindConfig).theme.colors

const siteTitle = 'Умная поддержка'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: siteTitle || '',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'theme-color', content: colors.indigo['500'] }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600&display=swap&subset=cyrillic'
      }
    ]
  },
  manifest: {
    name: 'Умная поддержка',
    short_name: 'Умная поддержка',
    description: 'Умная поддержка фигурантов «московского дела»',
    background_color: colors.indigo['100'],
    theme_color: colors.indigo['500'],
    lang: 'ru'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.indigo['400'], height: '.25rem' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/composition-api', '~/plugins/sanitize-html'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  purgeCSS: {
    whitelist: ['nuxt-link-active'],
    whitelistPatterns: []
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        'postcss-nested': {},
        'postcss-import': {},
        autoprefixer: {}
      }
    },
    filenames: {
      css: ({ isDev }) =>
        isDev ? '[name].css' : '[hash:7].[contenthash:7].css'
      // isDev ? '[name].css' : '[contenthash].css'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
