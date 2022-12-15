export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/': {static:true},
    '/test/3': {static:true}
  }
})
