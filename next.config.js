const path = require('path')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
}
