var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Change = require('./api/models/changeModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.2/Changedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/changeRoutes'); //importing route
routes
(app); //register the route

app.listen(port);

console.log(`changelog RESTful API server started on port ${port}`);

