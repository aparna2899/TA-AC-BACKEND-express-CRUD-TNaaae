var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

var userRouter = require('./routes/user');

app.use('/users', userRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send('Page Not Found!');
});

app.listen(4000, () => {
  console.log('server is listening on port 4000');
});
