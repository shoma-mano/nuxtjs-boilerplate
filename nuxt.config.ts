export default {
  nitro: {
    preset: 'vercel-edge',
  },
  pages: true,
  routeRules:{
    '/test/**': { static: true },
  }
};
