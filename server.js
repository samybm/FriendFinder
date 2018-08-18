// NPM PACKAGE
  var express = require('express');
  var bodyParser = require('body-parser');
  var path = require('path');

  // Server-SIDE connections
  var app = express();
  var PORT = process.env.PORT || 8080;//2nd port-option-3000

  // CSS
app.use(express.static(__dirname + "/app/css"));

  // EXPRESS - data parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

  //ROUTING 
  require('./app/routing/api-routes.js')(app);
  require('./app/routing/html-routes.js')(app);

  //INITIATE SERVER
  app.listen(PORT, function () {
      console.log('App listening on PORT: ' + PORT);
});