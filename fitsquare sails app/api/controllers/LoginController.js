/**
 * LoginController
 *
 * @description :: Server-side logic for managing login
 * @help        :: See http://links.sailsjs.org/docs/controllers
 * @Author			:: Anurag Tiwari
 */


module.exports = {

/*******************************************************************************
	            Controller for login through Email and Passoword
*******************************************************************************/

	'authenticate' : function(req, res) {
		 if(!req.session.authenticated){
/******************Checking if the user session is valid or not****************/
			if(req.param('email') && req.param('password')){
				var email = req.param('email');
				var password = req.param('password');
/**********************Preparing for the HTTP Request**************************/
				var http = require('http'), options = {
					host: "fitsquareapp.cloudapp.net",
					port: 1330,
					path: "/login/create?email="+email+"&password="+password,
					method: "GET"
				};
				// To save data received from the http request
				var data = "";
/***************************Sending the HTTP Request***************************/
				var request = http.get(options, function(response){
					response.on('error', function(){
						console.log('error');
					});
					response.on('data', function(chunk){
						data += chunk;
					});
					response.on('end', function(){
						var reply = data;
						reply = JSON.parse(reply);
/******************Checking for the status of reply received*******************/
						// Status code : 105 means users is valid
						if(reply.status === 105){
							var user = reply.user;
							req.session.authenticated = true;
							req.session.User = user;
							req.session.reply = reply;
							//console.log(req.session.User.name);
						  res.redirect('/dashboard');
						} else {
							req.session.flash = {
							 err :	"Sorry, we may've encountered a problem. We are on it!"
							}
							res.locals.flash = _.clone(req.session.flash);
							res.redirect('/login');
						}
					});
				}); // request finished
			} else { //if improper parameters are passed or parameters not passed
				console.log("error");
				res.redirect('/');

			}
		} else { // i.e. valid user who is already authenticated
			res.redirect('/dashboard');
		}
	},

/*******************************************************************************
		            Controller for signup through Email and Passoword
*******************************************************************************/
	'signup' : function(req, res) {
		if(req.param('name') && req.param('email') && req.param('password')  && req.param('number') ){
			var name = req.param('name');
			var number = req.param('number');
			var email = req.param('email');
			var password = req.param('password');
			console.log(name + "  " + email + "  " + password + "  " + number);

			var http = require('http'), options = {
				host: "fitsquareapp.cloudapp.net",
				port: 1330,
				path: "/user/signup?name="+name+"&password="+password+"&email="+email+"&number="+number,
				method: "GET"
			};
			console.log( "/user/signup?name="+name+"&password="+password+"&email="+email+"&number="+number);
			var data = "";
			var request = http.get(options, function(response){
				response.on('error', function(){
					console.log('error');
				});
				response.on('data', function(chunk){
					data += chunk;
				});
				response.on('end', function(){
					var reply = data;
					console.log(reply);
					reply = JSON.parse(reply);
					if(reply.status === 95) {
						var user = reply.user;
						req.session.authenticated = true;
						req.session.User = user;
						req.session.reply = reply;
						res.redirect('/dashboard');
					} else {
						res.redirect('/');
					}
				});
			});
		} else {
			res.redirect('/');
		}
	},

	'sendsms' : function(req, res) {
		if(req.param('name')){
			var number = req.param('name');
			var http = require('http'), options = {
				host : "fitsquareapp.cloudapp.net",
				port : 1330,
				path : "/sendsms?number="+number,
				method : "POST"
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
						if(data) {
							send_respone(data);
						}
				});
			});
					function send_respone(data) {
						data = JSON.parse(data);
						var item = data.status;
						var reply = data;
						if(reply.status === 1)
						{
							var success = "Sent the message successfully";
							var result= {
				          'status':1,
				          'message':'The server found the Mobile Number to be valid.'
				        	};
	        				res.status(200).json(result);
						} else {
							var result = {
									'status':0,
									'message':'The server found the Mobile Number to be invalid.'
									};
									res.status(200).json(result);
						}
					}

		} else {
			var result = {
					'status':0,
					'message':'The server found the Mobile Number to be invalid.'
					};
					res.status(200).json(result);
		}
}

};
