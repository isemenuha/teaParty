const express = require('express');
const router = express.Router();
const { Tea, Comment, User } = require('../../db/models');

// Роут для обновления данных
router.post('/add', async (req, res) => {
  try {
    const { userid } = req.session;
    const { teaId } = req.body;
    const { text } = req.body;
    const newComment = await Comment.create({ teaId, userId: userid, text });
    res.status(201).json({ message: 'Комментарий успешно добавлен' });
  } catch (error) {
    console.error('An error occurred', error);
  }
});

module.exports = router;
