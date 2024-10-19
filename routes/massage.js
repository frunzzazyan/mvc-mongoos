var express = require('express');
var router = express.Router();
const MassageControllers = require("../controllers/MassageControllers.js")
const controllers = new MassageControllers()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/" , controllers.setMassage)

module.exports = router;