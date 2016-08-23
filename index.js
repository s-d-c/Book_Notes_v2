var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//test database connection
var models = require('./server/models/');
models.sequelize
  .authenticate()
  .then(function() {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log('Error creating connection:', error);
  });

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname + '/public')));

app.use('/users', require('./server/controllers/user.js'));

// app.get('/', function(req, res) {
// 	res.status('200');
// });

// app.get('/about', function(req, res) {
// 	res.status('200');
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});