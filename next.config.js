/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['cn', 'en'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  externals: [
    (function () {
      var IGNORES = ['electron'];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })(),
  ],
};

module.exports = nextConfig;
