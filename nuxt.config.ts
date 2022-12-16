export default defineNuxtConfig( {
  pages: true,
  routeRules: {
    '/**':{static:true},
    '/posts/1':{static:true},
    '/posts/2':{static:true},
    '/posts/**': {static:true},
  }
})
