
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
//connecting calender picker
var calpick = require('./routes/calpick')
var pickplace = require('./routes/pickplace')
var schedule = require('./routes/schedule')
var chooseplace = require('./routes/chooseplace')
var login = require('./routes/login')
var tokyoplace = require('./routes/tokyoplace')


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/calpick', calpick.view)
app.get('/pickplace', pickplace.view)
app.get('/schedule',schedule.view)
app.get('/chooseplace', chooseplace.view)
app.get('/login', login.view)
app.get('/tokyoplace', tokyoplace.view)

app.post('/index', index.view)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
