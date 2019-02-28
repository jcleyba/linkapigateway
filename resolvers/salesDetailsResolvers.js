const http = require('../http');

const endpoint = '/sales';
module.exports = {
  Query: {
    saledetails: async (parent, { id, from, to }, context) => {
      try {
        const { data } = await http.get(
          `/productsTypes/${id}${endpoint}?from=${from}&to=${to}`
        );

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
};
