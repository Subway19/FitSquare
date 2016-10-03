/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 * @Author      :: Anurag Tiwari
 */

/*******************************************************************************
                      Passport Social Authentication
*******************************************************************************/

var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;


var AuthController = {

  index: function (req, res) {
    /*Checking for the user session using policies*/
    if(req.isAuthenticated() || req.session.authenticated)
    {
      res.redirect('/dashboard');
    } else {
	     res.redirect('/');
    }
  },


  logout: function(req, res) {
        req.logout();
        // res.redirect('/');
        if(req.session.authenticated){
          req.session.destroy();
          res.redirect('/'); // If there is an active user session present
        } else {
          res.redirect('/'); // If no user session exists
        }
  },

  'facebook': function (req, res, next) {
	 passport.authenticate('facebook', { scope: ['email', 'public_profile', 'user_friends']},
		function (err, user) {
			req.logIn(user, function (err) {
			if(err) {
				console.log(err); // If no user account is present or (null, false) is received from the middleware.js
				res.redirect('/login');
				return;
			}
			res.redirect('/');
			return;
		});
	})(req, res, next);
  },

   'facebook/callback': function (req, res, next) {
	 passport.authenticate('facebook',
		function (req, res) {
			res.redirect('/');
		})(req, res, next);
  },

  google: function(req, res) {
    passport.authenticate('google', { failureRedirect: '/login', scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'] }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.redirect('/login');
          return;
        }
        res.redirect('/');
        return;
      });
    })(req, res);
  },

  'google/callback': function (req, res, next) {
  	 passport.authenticate('google',
  		function (req, res) {
  			res.redirect('/');
  		})(req, res, next);
  },

};

/*Exporting the Controller*/
module.exports = AuthController;
