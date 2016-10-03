/**
 * GymsController
 *
 * @description :: Server-side logic for managing gyms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * @author 			:: Anurag Tiwari
 */


module.exports = {
	'index' : function(req, res){
		//To fetch the gyms from the location

	},
	'gym' : function(req, res) {
		var gym_listings = [];
		if(!req.session.authenticated){
		var http = require('http'), options = {
			host : "fitsquareapp.cloudapp.net",
			port : 1330,
			path : "/gyms?lat=12.9667&long=77.5667&currentPage=1",
			method : "GET"
		};
		var data = "";
		var request = http.get(options, function(response){
			response.on('error', function(){
				console.log('error');
			});
			response.on('data', function(chunk){
				data += chunk;
			});
			response.on('end', function(){
				if(data){
					view_gyms(data);
				}
			});
		});
		function view_gyms(data){
			data = JSON.parse(data);
			var item = data.gyms;
			var reply = data
			//console.log(reply);
			if(reply.status === 1){
				// console.log(item.length);
				var count = 0;
						var length = item.length;
				_.each(item, function(gym){
					var url = gym.gym_name;
					url = url.replace(/ /g,'-');
					var city = gym.city;
					var locality = gym.locality;
					locality = locality.split(',');
					locality = locality[0];
					locality = locality.replace(/ /g,'-');
					if(locality.charAt(0) === '-')
					locality = locality.substring(1);// to remove first char which is -
					var item = {
			'gym_name':gym.gym_name,
			'gym_address':gym.address,
			'gym_ratings':gym.ratings.services,
			'gym_city' : gym.city,
			'url' : url,
			'locality' : locality

		}
		gym_listings.push(item);
							count = count + 1;
							if(count < length){
								return;
							}
							else{
								res.view({gym_listings:gym_listings});
							}
						});

				//res.view({gym:gym});
			} else if(reply.status === '0') {
				var error_message = "We faced an error while fetching the gyms. Please check back in some time.";
				/* Error Message on home */
			}
		}
	}
},

'view' : function(req, res) {
	var url = req.param('url');
	var city = req.param('city');
	var locality = req.param('locality');
	locality = locality.replace(/-/g, '@');
	url = url.replace(/-/g, '@');
	city = city.replace(/-/g, '@');
	var ch = locality.charAt(0);
	if(ch === '@')
	locality = locality.substring(1);

	var http = require('http'), options = {
		host : "fitsquareapp.cloudapp.net",
		port : 1330,
		path : "/gyms/view?city="+city+"&locality="+locality+"&name="+url,
		method : "GET"
	};
	var data = "";
	var request = http.get(options, function(response){
		response.on('error', function(){
			console.log('error');
		});
		response.on('data', function(chunk){
			data += chunk;
		});
		response.on('end', function(){
			if(data){
				view_gym(data);
			} else {
				console.log("Error occured");
			}
		});
	});
	function view_gym(data){
		data = JSON.parse(data);
		var reply = data;
		if(reply.status === 2) {
			var gym = reply.gym;
				res.view({gym:gym});
		} else {
			var error_message = "We faced a problem while fetching gym details";
			console.log("here");
		}
	}
},

};
