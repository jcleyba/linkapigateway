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
      let resp = {};
      const { id, ...otherArgs } = args;
      try {
        if (id) {
          resp = await http.put(`${endpoint}/${id}`, args);
        } else {
          resp = await http.post(`${endpoint}`, otherArgs);
        }

        return resp.data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
};
