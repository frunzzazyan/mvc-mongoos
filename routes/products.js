var express = require('express');
var router = express.Router();
const ProductsControllers = require("../controllers/ProductsControllers.js")
const controllers = new ProductsControllers()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", controllers.addProduct)

module.exports = router;