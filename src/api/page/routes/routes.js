module.exports = {
  routes: [
    {
      method: "GET",
      path: "/pages/slug/:slug",
      handler: "api::page.page.findBySlug",
    },
    {
      method: "GET",
      path: "/pages/events/all-events",
      handler: "api::page.page.getAllEvent",
    },
  ],
};
