/*
Shows schedule
*/
var data = require('../schedule.json');

exports.view = function(req, res){

	// var obj = {
	// schedule:[]
	// };

	// obj.schedule.push({event: 'Tokyo Place', time: req.query.Tokyo});
	// obj.schedule.push({event: 'Eat a dick', time: req.query.Ivan});
	// obj.schedule.push({event: 'Go fuck yourself', time: req.query.Lucy});
	// var json = JSON.stringify(obj);
	// var fs = require('fs');
	// fs.writeFile('schedule.json', json, 'utf8');
	
	var japandata = {
		'Ebisuya': req.query.Ebisuya,
		'endEbisuya': req.query.endEbisuya,
		'tokyotour': req.query.Tokyo,
		'endtokyotour': req.query.endTokyo,
		// 'endTokyo': req.query.endTokyo,
		// 'Tokyo': req.query.Tokyo
	};
	console.log(japandata)
	// console.log(data1)
	res.render('schedule', japandata)
};

//console.log(req.query.Tokyo)
	//var data = {}
	//if req.query.Tokyo != 0
		//data['Tokyo'] = req.query.Tokyo
	//var data = {
		//Tokyo: 5,
		//Russia: 6,
		//San Jose: 0,
	//}
	//if req.query.gfdsgdfsg != 0: