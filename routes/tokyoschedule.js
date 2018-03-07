/*
Shows schedule
*/
var data = require('../japandata.json');

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
		//Japan Activities Start and End
		'Ebisuya': req.query.Ebisuya,
		'endEbisuya': req.query.endEbisuya,
		'tokyotour': req.query.Tokyo,
		'endtokyotour': req.query.endTokyo,
		'Shinjuku': req.query.Shinjuku,
		'endShinjuku': req.query.endShinjuku,
		'Fuji': req.query.Mt,
		'endFuji': req.query.endMt,
		'Ryogoku': req.query.Ryogoku,
		'endRyogoku': req.query.endRyogoku,
		//Japan Food Start and End
		'Ichiran': req.query.Ichiran,
		'endIchiran': req.query.endIchiran,
		'Nabezo': req.query.Nabezo,
		'endNabezo': req.query.endNabezo,
		'Daiwa': req.query.Daiwa,
		'endDaiwa': req.query.endDaiwa,
		'Ise': req.query.Ise,
		'endIse': req.query.endIse,
		'Han': req.query.Han,
		'endHan': req.query.endHan,
		//Japan Shopping 
		'Isetan': req.query.Isetan,
		'endIsetan': req.query.endIsetan,
		'Diver': req.query.Diver,
		'endDiver': req.query.endDiver,
		'Shin': req.query.Shin,
		'endShin': req.query.endShin,
	};

	console.log(japandata);
	console.log(data);

	data.japan.push(japandata);
	res.render('tokyoschedule', japandata)

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