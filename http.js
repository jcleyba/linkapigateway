const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'content-type': 'application/json',
    // Added only to test on playground
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6ImpjQG1haWwuY29tIiwicHdkIjoiJDJiJDEwJG9QQ2tlem5VL3NNaDhUNS8wVGNSZmVSWWVyaUR5UC42V0VSbm5DLkZNaC9iMnNmeC5RZFZ1IiwiY3JlYXRlZEF0IjoiMjAxOS0wMS0xMFQwMDowMDo0Mi45MzNaIiwidXBkYXRlZEF0IjoiMjAxOS0wMS0xMFQwMDowMDo0Mi45MzNaIn0sImlhdCI6MTU0ODQ0MDUyMiwiZXhwIjoxNTQ4NDQ0MTIyfQ.ob7pYHgErhTbcm-PpgLJOZ9D6WQhfvmxvmDK2YsNZxA',
  },
});

module.exports = instance;
