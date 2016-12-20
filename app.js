var express = require('express');
var routes = require('./routes');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');		// Try switching to handlebars later

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes

// Index
app.get('/', routes.index);

// Single Project
app.get('/projects/:project_name?', routes.project_single);

// Not Found
app.get('*', routes.notFound);


const port = process.env.PORT || 3000;

// app.listen(3000, function() {
// 	console.log("Application running on port 3000")
// });

app.listen(port, () => {
  console.log('Application running on port', port);
})