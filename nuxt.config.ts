export default defineNuxtConfig({
  pages: true,
  runtimeConfig: {
    test: process.env.test
  },
  routeRules: {
    '/': {static:true},
    '/test/**': {static:true}
  }
})
