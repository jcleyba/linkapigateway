const http = require("../http");

const endpoint = "/cashshifts";
module.exports = {
  Query: {
    cashshifts: async (parent, { id }, context) => {
      try {
        const { data } = await http.get(endpoint);
        let sumPrior = 0;
        let shiftStart = new Date().toISOString();

        return data.map(shift => {
          const resp = {
            ...shift,
            sumPrior,
            shiftStart
          };

          sumPrior = shift.existingAmount;
          shiftStart = shift.createdAt;

          return resp;
        });
      } catch (e) {
        console.error(e.message);
        return e;
      }
    }
  },
  Mutation: {
    cashshift: async (parent, args, context) => {
      try {
        const resp = await http.post(endpoint, { ...args });

        return resp.data;
      } catch (e) {
        console.error(e.message);
        return e;
      }
    }
  }
};
