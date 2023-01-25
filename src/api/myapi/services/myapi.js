'use strict';

/**
 * myapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::myapi.myapi');
