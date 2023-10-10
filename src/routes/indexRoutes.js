const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const { Tea } = require('../../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(Home, { name: 'Толик' }, res);
  } catch (error) {
    res.send(`ОШИБКА, ${error}`);
  }
});

module.exports = router;
