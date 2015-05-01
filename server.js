/**
 * Created by marius koudou on 09/04/2015.
 */
var express    = require('express');
var app        = express();
var env        = process.env.NODE_ENV = process.env.NODE_ENV || "developpement";
var config     = require('./config/config')[env];
var apiRoutes  = express.Router();
require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/route')(app,apiRoutes);
app.listen(config.port);

process.on('uncaughtException', function(err) {
    console.log(err);
});
console.log("mon Vote API sur le port: "+config.port);
