export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/': {static:true},
    '/posts/1': {swr:true},
    '/posts/2': {static:true},
  }
})
