export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/': {static:true},
    '/test/index': {static:true}
  }
})
