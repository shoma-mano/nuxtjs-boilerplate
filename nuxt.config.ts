export default defineNuxtConfig({
  pages: true,
  runtimeConfig: {
    test: process.env.test
  },
  routeRules: {
    '/index': {static:true},
    '/test/**': {static:true}
  }
})
