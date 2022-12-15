export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/': {static:true},
    '/test/index': {swr:true}
  }
})
