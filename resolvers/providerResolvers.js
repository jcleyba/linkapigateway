const http = require('../http');

module.exports = {
  Query: {
    providers: async (parent, args, context) => {
      try {
        const { data } = await http.get('/providers');

        return data;
      } catch (e) {
        console.error(e.message);
      }
    },

    provider: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(`/providers/search/${id}`);

        return data[0];
      } catch (e) {
        console.error(e.message);
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
      }
    },
  },
};