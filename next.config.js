const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n,
    reactStrictMode: true,
    experimental: {
        styledComponents: true,
    },
    images : {
        domains: ['www.kitconet.com'],
        formats: ['image/webp'],
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128]
    }
}