// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Отличные Наличные',
      meta: [
        {
          name: 'description',
          content:
            'Отличные наличные - получите деньги уже через 15 минут! В личном кабинете вы сможете контролировать сроки оплаты и внести платеж в любой момент без визита в офис.',
        },
      ],
      link: [
        { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32' },
      ],
      script: [{
        src: "/ga.js",
      }]
    },
  },
  experimental: {
    payloadExtraction: false,
  }
});
