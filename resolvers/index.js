const { mergeResolvers } = require("merge-graphql-schemas");

const User = require("./usersResolvers");
const Product = require("./productsResolvers");
const Provider = require("./providersResolvers");
const Cashout = require("./cashoutsResolvers");
const Sales = require("./salesResolvers");
const PaymentMethods = require("./paymentMethodsResolvers");
const CashShifts = require("./cashShiftsResolvers");
const ProductTypes = require("./productTypesResolvers");

module.exports = mergeResolvers([
  User,
  Product,
  Provider,
  Cashout,
  Sales,
  PaymentMethods,
  CashShifts,
  ProductTypes
]);
