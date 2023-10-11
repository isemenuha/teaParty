const express = require('express');

const { Tea, User, Comment } = require('../../db/models')
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile.jsx');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    if(req.session.role === 'admin'){
      const { email } = req.session;
      const user = await User.findOne({ where: { email } });
      const data = await Tea.findAll({ raw: true });
      renderTemplate(Profile, { data, user }, res);
    } else if (req.session.role === 'user') {
      const {id} = req.session;
      const myComments = await Comment.findAll({ where: { userId: id } });
      renderTemplate(Profile, { data, myComments }, res);
    }
  } catch (error) {
    res.send(`ОШИБКА, ${error}`);
  }
});


module.exports = router;
