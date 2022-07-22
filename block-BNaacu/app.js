var express = require('express');
var path = require('path');

var app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/student');

app.use('/', indexRouter);
app.use('/students', studentsRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send('Page Not Found!');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
