/*
Generate page that user picks
*/
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('tokyoplace', data)
};