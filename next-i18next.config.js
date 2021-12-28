module.exports = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  ns: ['common', 'home', 'about-us', 'products', 'services'],
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
  localeDetection: false,
  debug: true,
  interpolation: {
    escapeValue: false
  }
}