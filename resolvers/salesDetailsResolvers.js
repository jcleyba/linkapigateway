const http = require('../http');

const endpoint = '/sales';
module.exports = {
  Query: {
    saledetails: async (parent, { id, from, to, type }, context) => {
      const salesEP = type ? 'productsTypes' : 'products';
      try {
        const { data } = await http.get(
          `/${salesEP}/${id}${endpoint}?from=${from}&to=${to}`
        );

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
};
