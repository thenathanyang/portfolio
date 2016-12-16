var express = require('express');

var app = express();

app.set('view engine', 'ejs');		// Try switching to handlebars later

// Routes

// Home
app.get('/', function(req, res) {
	res.render('index', {
		title : "Nathan Yang's Portfolio"
	});
});

// Single Project
app.get('/projects/:project_name?', function(req, res) {
	var project = req.params.project_name;
	res.send("This is the page for " + project);
});

// Not Found
app.get('*', function(req, res) {
	res.send("Page not found.")
});

app.listen(3000, function() {
	console.log("Application running on port 3000")
});