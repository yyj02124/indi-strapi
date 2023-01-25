'use strict';

/**
 * myapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::myapi.myapi');
