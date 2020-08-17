const express = require('express');
const axios = require('axios');

const router = express.Router();

const BASE_URL = 'http://api.weatherapi.com/v1/current.json?';

router.get('/', async (req, res, next) => {
  try {
    const params = new URLSearchParams({
      api_key: process.env.WEATHER_API_KEY
    });

    const { data } = await axios.get(`${BASE_URL}${params}`);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
