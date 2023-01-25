'use strict';

/**
 * myapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::myapi.myapi');
