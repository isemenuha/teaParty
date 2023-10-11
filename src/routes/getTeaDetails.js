const express = require('express');

const { Tea } = require('../../db/models');
const router = express.Router();

router.get('/teas', async (req, res) => {
    try {
    const teas = await Tea.findAll()
    res.json(teas)
    } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' })
    }
})
module.exports = router;