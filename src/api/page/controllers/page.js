"use strict";

/**
 *  page controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const page = await strapi.entityService.findMany("api::page.page", query);
    const sanitizedEntity = await this.sanitizeOutput(page);

    return this.transformResponse(sanitizedEntity[0]);
  },

  async getAllEvent(ctx) {
    ctx.query = {
      ...ctx.query,
      filters: {
        type: {
          $eq: "event",
        },
      },
    };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
