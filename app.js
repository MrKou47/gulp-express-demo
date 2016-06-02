var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
// 引入swig
var swig = require('swig');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
// 设置静态文件托管
app.use('/public', express.static('public'));

// 解析所有字符串
swig.setDefaults({autoescape:false});

app.use(require('connect-livereload')());
// aaa

app.use('/', routes);
app.use('/users', users);

app.listen(1337);

module.exports = app;
