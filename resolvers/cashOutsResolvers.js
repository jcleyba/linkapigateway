const http = require('../http');

const endpoint = '/cashouts';
module.exports = {
  Query: {
    cashouts: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(endpoint);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
    cashout: async (parent, { id }, context) => {
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
    cashout: async (parent, args, context) => {
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
    removecashout: async (parent, { id }, context) => {
      try {
        const { data } = await http.delete(`${endpoint}/${id}`);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    },
  },
};
