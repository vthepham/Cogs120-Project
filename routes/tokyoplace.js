/*
Generate page that user picks
*/
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	data["viewAlt"] = false;
	res.render('tokyoplace', data)
};

exports.viewAlt = function(req, res){
	console.log(data);
	data["viewAlt"] = true;
	res.render('tokyoplace', data)
};