/**
 * Default middleware configuration
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 * Author :: Anurag Tiwari
 */


/*******************************************************************************
                       Passport Social Authentication
*******************************************************************************/
var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

/*******************************************************************************
                Function To handle the data received from oauth
*******************************************************************************/

var verifyHandler = function(token, tokenSecret, profile, done) {
  process.nextTick(function() {
      var flag = 0;
      var user = "";
/**************** Start getting the data from the profile *********************/
    var err = "";
    //console.log("The token is" + token);
/******* Remember token is the access_token for facebook api request **********/
    if(profile.provider === 'facebook')
    {
      getEmailFacebook(token);// to get users info from facebook
    }    else { // to get users info from google
    var item = {
             provider: profile.provider,
             uid: profile.id,
             name: profile.displayName
           };
           if (profile.emails && profile.emails[0] && profile.emails[0].value) {
             item.email = profile.emails[0].value;
           }
           if (profile.name && profile.name.givenName) {
             item.firstname = profile.name.givenName;
           }
           if (profile.name && profile.name.familyName) {
             item.lastname = profile.name.familyName;
           }
           var email = item.email;
           //console.log(email + 'is the mail');
           /*Checking for the email received*/
           if(!email){
/*********** If no email is received from oauth *******************************/
            return done(null, false);
          } else {
/**** If email is received from oauth calling function to perform request *****/
           SendGetRequest(email);
         }
    }
  });// process.nextTick ends

/*** Function to send get reuqest to server and validate the email ************/
  function SendGetRequest(email)
  {
    var http = require('http'), options = {
     host: "52.91.86.68",
     port: 1330,
     path: "/login/gplus?email="+email+"&isWebAppRequest=true",
     method: "GET"
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
       var reply = data;
       reply = JSON.parse(reply);
/*************** Status code : 2 means user is valid **************************/
       if(reply.status === 2){
         flag = 1;
         user = reply.user;
            return done(null,user);
       } else {
/********************** Account Doesn't exist *********************************/
          return done(null, false);
       }
     });
   });
  }


function loginFacebook(email){
  // console.log(email + "is the email");
  SendGetRequest(email);
}



/********************* Facebook Email from authtoken **************************/
function getEmailFacebook(token){
  var http = require('https'), options = {
   host: "graph.facebook.com",
   port: 443,
   path: "/me?access_token="+token+"&fields=email",
   method: "GET"
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
     var reply = data;
     reply = JSON.parse(reply);
      var email = reply.email;
      if(!email) {
        return(null, false);
      } else {
        loginFacebook(email);
      }
   });
 });
}

}

passport.serializeUser(function(user, done) {
  if(!user){
    done(null, false);
  }
  else{
    done(null, user.id);
  }
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/**
 * Configure advanced options for the Express server inside of Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */
module.exports.http = {

  customMiddleware: function(app) {

    passport.use(new FacebookStrategy({
      clientID: "520405918140970",
      clientSecret: "d287710fe5a8bad74c5ad8f40afee85b",
      callbackURL: "http://wyfto.cloudapp.net:1337/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    }, verifyHandler));

    passport.use(new GoogleStrategy({
      clientID: '453747433234-gips4b7qnfe3bf9ug4sf9mr505j44r6b.apps.googleusercontent.com',
      clientSecret: 'Pg3WPu-w1uQTrEXzyB1gSclJ',
      callbackURL: 'http://wyfto.cloudapp.net:1337/auth/google/callback'
    }, verifyHandler));

    app.use(passport.initialize());
    app.use(passport.session());
  }

};

module.exports.cache = {

  // The number of seconds to cache files being served from disk
  // (only works in production mode)
  maxAge: 31557600000
};
