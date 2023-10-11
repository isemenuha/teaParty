const express = require("express");

const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/Home");

const router = express.Router();

const { checkUser } = require("../middlewares/common");

router.get("/", checkUser, (req, res) => {
  const { name } = req.session;
  renderTemplate(Home, { name }, res);
});

router.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("TeaCookie");
    res.redirect("/");
  });
});

module.exports = router;
