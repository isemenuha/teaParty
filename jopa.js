const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const { render } = require('react-dom');

const router = express.Router();

router.get('/', async (req, res) => {
 const {role} = req.session;
 if(role === 'admin') {
	const teas = await Tea.findAll({raw : true})
	renderTemplate(Profile, {teas}, res)
 } else if(role === 'user'){
	const {email} = req.session
	const user = await Tea.findOne({where: { email }})
	const {id} = user;
	const comments = Comments.findAll({where: {userId: id}})
	renderTemplate(Profile, {comments}, res)
 }
});

module.exports = router;
