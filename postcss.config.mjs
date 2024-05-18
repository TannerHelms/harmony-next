/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  experimental: {
    // Only run the plugin in development mode
    swcPlugins: process.env.NODE_ENV !== 'production' ? [
      ['harmony-ai-plugin', { rootDir: new URL('.', import.meta.url).pathname }]
    ] : []
  },
};

export default config;
