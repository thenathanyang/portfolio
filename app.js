var express = require('express');
var routes = require('./routes');

var app = express();

app.set('view engine', 'ejs');		// Try switching to handlebars later

// Routes

// Index
app.get('/', routes.index);

// Single Project
app.get('/projects/:project_name?', routes.project_single);

// Not Found
app.get('*', routes.notFound);

app.listen(3000, function() {
	console.log("Application running on port 3000")
});