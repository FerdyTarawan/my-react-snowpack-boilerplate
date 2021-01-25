/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    '@app': './src',
  },
  buildOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  mount: {
    public: { static: true, url: '/' },
    src: { url: '/dist' },
  },
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { dest: '/index.html', match: 'routes', src: '.*' },
  ],
};
