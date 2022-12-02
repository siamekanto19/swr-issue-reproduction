export default defineNuxtConfig({
  routeRules: {
    "/swr": { swr: 30 },
    "/static": { static: true },
  },
});
