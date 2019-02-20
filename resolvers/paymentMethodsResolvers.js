const http = require("../http");

const endpoint = "/paymentMethods";
module.exports = {
  Query: {
    paymentmethods: async (parent, args, context) => {
      try {
        const { data } = await http.get(endpoint);

        return data;
      } catch (e) {
        console.error(e.message);

        return e;
      }
    }
  }
};
