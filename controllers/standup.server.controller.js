var Standup = require('../models/standup.server.model.js');
exports.list = function(req, res) {
	var query = Standup.find();
	query.sort({createdOn: 'desc'}).limit(10).exec(function(err, data) {
		res.render('index', {title: 'Standup - list of notes', notes: data});
	});
};
exports.filterByMember = function(req, res) {
	var query = Standup.find();
	var filter = req.body.memberName;
	query.sort({createdOn: 'desc'});
	if(filter.length > 0) {
		query.where({memberName: filter});
	}
	query.exec(function(err, data) {
		res.render('index', {title: 'Standup - list of notes', notes: data});
	});
};
exports.create = function(req, res) {
	console.log(req);
	var entry = new Standup({
		impediment: req.body.impediment,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		project: req.body.project,
		memberName: req.body.memberName
	});

	entry.save(function(err) {
		if(err) {
			var errMsg = 'Sorry, there was an error saving the stand-up meeting note ' + err;
			res.render('newnote', {title: 'Standup - New note (error)', message: errMsg})
		} else {
			res.redirect(301, '/');
		}
	});
};
exports.getNote = function(req, res) {
	res.render('newnote', {title: 'Standup - New note'});
};