export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    // https://github.com/nuxt-modules/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    config: {
      /* Extend the Tailwind config here. */
      content: ['content/**/**.md', 'components/**/**.vue'],
      theme: {
        extend: {
          colors: {
            primary: '#215ae5'
          }
        }
      }
    }
  },

  dir: {
    public: 'static'
  }
});
