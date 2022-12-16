export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/index':{static:true},
    '/posts/**': {static:true},
  }
})
