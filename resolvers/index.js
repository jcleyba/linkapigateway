const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./userResolvers');
const Product = require('./productResolvers');
const Provider = require('./providerResolvers');
const Cashout = require('./cashoutResolvers');

module.exports = mergeResolvers([User, Product, Provider, Cashout]);
