//requires
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

//connect to db
mongoose.connect('mongodb://localhost/User', (err) => {
  console.log(err ? err : 'Connected to database!');
});

var app = express();

//middlewares
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routing middlewares
app.use('/', indexRouter);
app.use('/users', userRouter);

//error handler middlewares
//404
app.use((req, res, next) => {
  res.send('Page Not Found!');
});

//custom error handler middleware
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
