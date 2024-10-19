var express = require('express');
var router = express.Router();

const LoginControllers = require("../controllers/LoginControllers.js")
const controllers = new LoginControllers()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", controllers.loginUser)

module.exports = router;
