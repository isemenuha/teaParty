const express = require('express');
const router = express.Router();
const { Tea, Comment, User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const TeaCard = require('../views/TeaCard');

router.get('/tea-details', async (req, res) => {
  try {
    const { name } = req.session;

    const tea = await Tea.findAll({ where: { id: req.query.id } });
    const comments = await Comment.findAll({
      where: { teaId: req.query.id },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    if (!tea) {
      return res.status(404).json({ error: 'Чай не найден' });
    }
    renderTemplate(TeaCard, { tea, comments, name }, res);
  } catch (error) {
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

module.exports = router;
