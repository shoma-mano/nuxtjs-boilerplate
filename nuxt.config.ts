export default {
  nitro: {
    preset: 'vercel-edge',
  },
  pages: true,
  routeRules:{
    '/index': { static: true },
  }
};
