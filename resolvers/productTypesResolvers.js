const http = require('../http');

const endpoint = '/productsTypes';
module.exports = {
  Query: {
    producttypes: async (parent, args, context) => {
      try {
        const { data } = await http.get(endpoint);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
  Mutation: {
    producttypes: async (parent, args, context) => {
      try {
        const { data } = await http.post(endpoint, args);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
};
