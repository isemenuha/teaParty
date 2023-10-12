const express = require('express');
const multer = require('multer');
const { Tea, User, Comment } = require('../../db/models')
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile.jsx');
const tea = require('../../db/models/tea');

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const { email } = req.session;
    if(req.session.role === 'admin'){
      const user = await User.findOne({ where: { email } });
      const data = await Tea.findAll({ raw: true });
      renderTemplate(Profile, { data, user }, res);
    } else if (req.session.role === 'user') {
      const { userid } = req.session;
      const user = await User.findOne({ where: { email } });
      const myComments = await Comment.findAll({
        where: { userId: userid },
        include: [
          {
            model: Tea
          },
        ],
        raw: true,
      });

      const teas = await Tea.findAll({ raw: true });

      const userName = user.name;

      renderTemplate(Profile, { myComments, teas, user, userName }, res);
    }
  } catch (error) {
   console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.destroy({ where: { id } });
    res.json({ msg: 'Успешно удалено' });
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка УДАЛЕНИЯ!' });
  }
});

router.delete('/tea/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Tea.destroy({ where: { id } });
    res.json({ msg: 'Успешно удалено' });
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка УДАЛЕНИЯ!' });
  }
});

router.post('/', upload.single('file'), async (req,res) => {
  try {
    console.log("Jopa=========>", req.body.type);
// console.log(Object.fromEntries(req.body))
    const { file } = req;
    console.log(file.originalname);
    const { type, shirota, dolgota, description } = req.body
    const image = `/img/${file.originalname}`;
    const newTea = await Tea.create({image, type, shirota, dolgota, description })
    res.json(newTea)
  }catch(error) {
    console.log(error)
  }
})



module.exports = router;