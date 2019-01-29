const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./userResolvers');
const Product = require('./productResolvers');
const Provider = require('./providerResolvers');

module.exports = mergeResolvers([User, Product, Provider]);
