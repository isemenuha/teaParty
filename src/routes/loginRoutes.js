const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  const {name} = req.session
  renderTemplate(Login, {name}, res);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      console.log('ПАРОЛИ==========================>', user.password, password)
      if (checkPass) {
        req.session.name = user.name;
        req.session.email = user.email;
        req.session.userid = user.id;
        req.session.role = user.role;
        // req.session.name = newUser.name;
        req.session.save(() => {
          res.json({
            msg: 'Пользователь авторизован',
            name: req.session.name,
            role: req.session.role
          });
        //   res.redirect('/');
        //   res.sendStatus(200) ///!!!
        });
      } else {
        res.json({ err: 'Неверный пароль!' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден!' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
