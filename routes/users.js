var express = require('express');
var router = express.Router();
const UsersControllers = require("../controllers/UsersControllers.js")
const controllers = new UsersControllers()
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", controllers.addUsers)

module.exports = router;
