export default {
  nitro: {
    preset: 'vercel-edge',
  },
  routeRules:{
    '/index': { static: true },
  }
};
