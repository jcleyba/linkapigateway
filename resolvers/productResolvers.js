const http = require("../http");

module.exports = {
  Query: {
    products: async (parent, args, context) => {
      try {
        const { data } = await http.get("/products");

        return data;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
