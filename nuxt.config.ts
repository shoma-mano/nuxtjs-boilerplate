export default {
  nitro: {
    preset: 'vercel-edge',
  },
  pages: true,
  routeRules:{
    '/**': { static: true },
  }
};
