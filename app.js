const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require("./routes/login.js")
const productsRouter = require("./routes/products.js")
const carsRouter = require("./routes/cars.js")
const massageRouter = require("./routes/massage.js")

const mongoose = require("mongoose")

const UsersServices = require("./services/UsersServices.js");
const LoginServices = require("./services/LoginServices.js")
const ProductsServices = require('./services/ProductsServices.js');
const CarsServices = require('./services/CarsServices.js');

const models = require('./models');
const MassageServices = require('./services/MassageServices.js');

const app = express();

mongoose.connect("mongodb://localhost:27017/myapp")
.then(()=>console.log("db ok"))
.catch(()=>console.log("db no"))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.models = {
  users : models.users,
  login : models.login,
  products : models.products,
  cars : models.cars,
  massage : models.massage
}
app.locals.services = {
  users : new UsersServices(app.locals.models),
  login : new LoginServices(app.locals.models),
  products : new ProductsServices(app.locals.models),
  cars : new CarsServices(app.locals.models),
  massage : new MassageServices(app.locals.models)
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use("/products", productsRouter)
app.use("/cars", carsRouter)
app.use("/massage", massageRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
