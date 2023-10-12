const express = require('express');
const router = express.Router();
const { Tea } = require('../../db/models'); 
const { Comment } = require('../../db/models'); 
const { User } = require('../../db/models'); 
const renderTemplate = require('../lib/renderTemplate');
const TeaCard = require('../views/TeaCard')


router.get('/tea-details', async (req, res) => {
try {
    const tea = await Tea.findAll({ where: { id: req.query.id } })
    const comments = await Comment.findAll({ where: {teaId: req.query.id} })
    if (!tea) {
    return res.status(404).json({ error: 'Чай не найден' });
    }
    renderTemplate(TeaCard, { tea, comments }, res)
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
}
});

module.exports = router;