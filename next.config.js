  const withPWA = require("next-pwa");


  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'sw.js',
  //...
})

module.exports = withPWA({

   images: {
        domains: [ "cdn.discordapp.com" ]
    },
    i18n: {
        locales: Object.keys(require("./locales.config.js")),
        defaultLocale: 'en',
        localeDetection: true,
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    },
    async redirects() {
        return [
          {
            source: '/invite',
            destination: 'https://api.lunyx.me/v1/invite/bot',
            permanent: true,
          },
        ]
      },
});
