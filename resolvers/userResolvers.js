const http = require('../http');

module.exports = {
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const { data } = await http.post('/users/login', {
          email,
          pwd: password,
        });

        return data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
