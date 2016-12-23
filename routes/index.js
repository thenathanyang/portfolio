var workJSON = require('../work.json');

// Index
exports.index = function(req, res) {

	var workArr = workJSON.work;				// Array of work

	res.render('index', {
		title : "Nathan Yang's Portfolio",
		workArr : workArr
	});
};

// Single Work/Project
exports.work_single = function(req, res) {

	var work_name = req.params.work_name;
	var workArr = workJSON.work;				// Array of work
	var canRender = false;
	var workVal;
	
	if (work_name == "ucla-cs")
	{
		workVal = workArr[0];
		canRender = true;
	}
	else if (work_name == "saast")
	{
		workVal = workArr[1];
		canRender = true;
	}
	else if (work_name == "personal")
	{
		workVal = workArr[2];
		canRender = true;
	}

	if (canRender == true)
	{
		var title = workVal.title;
		var projects = workVal.projects;

		res.render('work_single', {
			workArr : workArr,
			workVal : workVal,
			title : title,
			projects : projects
		});
	}
	else
		res.send("Nope")
	
};

// Not Found
exports.notFound = function(req, res) {
	res.send("Page not found.")
};
