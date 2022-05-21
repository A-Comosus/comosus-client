/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn', 'en'],
    localeDetection: false,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
