const { mergeResolvers } = require("merge-graphql-schemas");

const User = require("./userResolvers");
const Product = require("./productResolvers");

module.exports = mergeResolvers([User, Product]);
