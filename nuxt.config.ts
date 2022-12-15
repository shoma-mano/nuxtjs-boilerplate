export default {
  nitro: {
    preset: 'vercel-edge',
  },
  routeRules:{
    '/': { static: true },
  }
};
