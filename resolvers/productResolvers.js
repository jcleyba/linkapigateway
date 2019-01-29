const http = require('../http');

module.exports = {
  Query: {
    products: async (parent, args, context) => {
      try {
        const { data } = await http.get('/products');

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },

    product: async (parent, { id }, context) => {
      console.log('entra');
      try {
        const { data } = await http.get(`/products/${id}`);
        console.log(id);
        console.log(data);
        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
  },
  Mutation: {
    products: async (parent, args, context) => {
      try {
        const { data } = await http.post('/products', args);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
  },
};
