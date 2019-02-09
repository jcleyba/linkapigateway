const http = require('../http');

const endpoint = '/sales';
module.exports = {
  Query: {
    sales: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(endpoint);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
    sale: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(`${endpoint}/${id}`);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
  Mutation: {
    sales: async (parent, args, context) => {
      try {
        const { data } = await http.post(`${endpoint}`, args);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
  },
};
