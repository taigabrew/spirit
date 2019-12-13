import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'

import pkg from './package'
const colors = resolveConfig(tailwindConfig).theme.colors

const siteTitle = 'Spirit'

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
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: colors.blue['500'] }
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
    name: 'Spirit',
    short_name: 'Spirit',
    description: 'Умная поддержка',
    background_color: colors.blue['100'],
    theme_color: colors.blue['500'],
    lang: 'ru'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue['400'], height: '.25rem' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
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
