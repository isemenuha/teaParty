const express = require('express');
const router = express.Router();
const { Tea } = require('../../db/models'); 
const renderTemplate = require('../lib/renderTemplate');
const TeaCard = require('../views/TeaCard')


router.get('/tea-details', async (req, res) => {
try {
    const tea = await Tea.findAll({ where: { id: req.query.id } })
    console.log(tea)
    if (!tea) {
    return res.status(404).json({ error: 'Чай не найден' });
    }
    renderTemplate(TeaCard, { tea }, res)
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
}
});

module.exports = router;