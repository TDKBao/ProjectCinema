var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var jwt= require('jsonwebtoken');
var session = require('express-session');
require('./api/model/Movie')
require('./api/model/Users')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movieRouter = require('./api/route/movie')
var usersRouter = require('./api/route/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secure: true,
  httpOnly: true,
  secret: 'asdqwe',
  resave: false,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/movie', movieRouter);
app.use('/api/users', usersRouter);

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
//Nhập mô-đun mongoose

//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://admin:admin123@ds057244.mlab.com:57244/cinema';
mongoose.connect(mongoDB);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));