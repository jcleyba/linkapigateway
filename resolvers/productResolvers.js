const http = require('../http');

const endpoint = '/products';
module.exports = {
  Query: {
    products: async (parent, { id }, context) => {
      try {
        let resp = {};
        if (id) {
          resp = await http.get(`/providers/${id}${endpoint}`);
        } else {
          resp = await http.get(endpoint);
        }

        return resp.data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
    product: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(`${endpoint}/${id}`);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
    search: async (parent, { term }, context) => {
      try {
        const { data } = await http.get(`${endpoint}/search?term=${term}`);

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
