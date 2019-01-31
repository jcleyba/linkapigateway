const http = require('../http');

const endpoint = '/providers';

module.exports = {
  Query: {
    providers: async (parent, args, context) => {
      try {
        const { data } = await http.get(`${endpoint}`);

        return data;
      } catch (e) {
        console.error(e.response.status);
        return e;
      }
    },

    provider: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(`${endpoint}/search/${id}`);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
  },

  Mutation: {
    providers: async (parent, args, context) => {
      try {
        const { data } = await http.post('/providers', args);

        return data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    },
  },
};
