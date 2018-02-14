/*
Generate page that user picks
*/
var data = require('../tokyodata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('tokyoplace', data)
};