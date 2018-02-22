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
	
	var nydata = {
		//New York Activities
		'Central': req.query.Central,
		'endCentral': req.query.endCentral,
		'Statue': req.query.Statue,
		'endStatue': req.query.endStatue,
		'Top': req.query.Top,
		'endTop': req.query.endTop,
		'The': req.query.The,
		'endThe': req.query.endThe,
		'Times': req.query.Times,
		'endTimes': req.query.endTimes,
		//New York Food
		'Five': req.query.Five,
		'endFive': req.query.endFive,
		'Juliana': req.query.Juliana,
		'endJuliana': req.query.endJuliana,
		'Bleecker': req.query.Bleecker,
		'endBleecker': req.query.endBleecker,
		'Amélie': req.query.Amélie,
		'endAmélie': req.query.endAmélie,
		'Keens': req.query.Keens,
		'endKeens': req.query.endKeens,
		//New York Shopping
		'Bergdorf': req.query.Bergdorf,
		'endBergdorf': req.query.endBergdorf,
		'Grand': req.query.Grand,
		'endGrand': req.query.endGrand,
		'Fifth': req.query.Fifth,
		'endFifth': req.query.endFifth,

	};

	console.log(nydata)
	// console.log(data1)
	res.render('newyorkschedule', nydata)
};
