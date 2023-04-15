const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  future: {
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
};
