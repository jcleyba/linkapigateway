const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'content-type': 'application/json',
  },
});

module.exports = instance;
