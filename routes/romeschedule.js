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
	
	var romedata = {
		//Rome Activities
		'Colosseum': req.query.Colosseum,
		'endColosseum': req.query.endColosseum,
		'Pantheon': req.query.Pantheon,
		'endPantheon': req.query.endPantheon,
		'Vatican': req.query.Vatican,
		'endVatican': req.query.endVatican,
		'Tivoli': req.query.Tivoli,
		'endTivoli': req.query.endTivoli,
		'Trevi': req.query.Trevi,
		'endTrevi': req.query.endTrevi,
		//Rome Food
		'Pane': req.query.Pane,
		'endPane': req.query.endPane,
		'Prosciutteria': req.query.Prosciutteria,
		'endProsciutteria': req.query.endProsciutteria,
		'Il': req.query.Il,
		'endIl': req.query.endIl,
		'La': req.query.La,
		'endLa': req.query.endLa,
		'Federica': req.query.Federica,
		'endFederica': req.query.endFederica,
		//Rome Shopping
		'Paciotti': req.query.Paciotti,
		'endPaciotti': req.query.endPaciotti,
		'Castel': req.query.Castel,
		'endCastel': req.query.endCastel,
		'Mercato': req.query.Mercato,
		'endMercato': req.query.endMercato,
	};

	console.log(romedata)
	// console.log(data1)
	res.render('romeschedule', romedata)
};
