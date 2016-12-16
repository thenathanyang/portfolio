// Index
exports.index = function(req, res) {
	res.render('index', {
		title : "Nathan Yang's Portfolio"
	});
};

// Single Project
exports.project_single = function(req, res) {
	var project = req.params.project_name;
	res.send("This is the page for " + project);
};

// Not Found
exports.notFound = function(req, res) {
	res.send("Page not found.")
};
