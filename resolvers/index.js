const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./userResolvers');
const Product = require('./productResolvers');
const Provider = require('./providerResolvers');
const Cashout = require('./cashoutResolvers');
const Sales = require('./saleResolvers');
const PaymentMethods = require('./paymentMethodResolvers');
const CashShifts = require('./cashShiftResolvers');

module.exports = mergeResolvers([
  User,
  Product,
  Provider,
  Cashout,
  Sales,
  PaymentMethods,
  CashShifts,
]);
