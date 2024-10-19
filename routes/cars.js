var express = require('express');
var router = express.Router();

const CarsControllers = require("../controllers/CarsControllers.js")
const controllers = new CarsControllers()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', controllers.addCars)

module.exports = router;
