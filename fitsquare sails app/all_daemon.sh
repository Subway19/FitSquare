sails www --prod
pm2 start app.js -f -- --prod --port 1337
pm2 start app.js -f -- --prod --port 1338
