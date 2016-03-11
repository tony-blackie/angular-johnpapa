var users = require('./src/models/users.json');

var express = require('express');
var app = express();

app.use(express.static('./public', {index: 'userList.html'}));

app.get('/users', function(req, res) {
	res.json(users);
});

app.listen(3000);
console.log('Listening on port 3000');