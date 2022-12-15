export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/': {static:true},
    '/test/test': {swr:true}
  }
})
