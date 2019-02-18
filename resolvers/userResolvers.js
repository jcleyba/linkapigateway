const http = require("../http");

module.exports = {
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const { data } = await http.post("/users/login", {
          email,
          pwd: password
        });

        return data;
      } catch (e) {
        console.error(e);

        return e;
      }
    }
  },

  Query: {
    auth: async (_, params) => {
      try {
        const { data } = await http.get("/users/auth");

        return data;
      } catch (e) {
        console.error(e);

        return e;
      }
    }
  }
};
