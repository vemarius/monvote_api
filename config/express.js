/**
 * Created by marius koudou on 10/04/2015.
 */
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
var morgan     = require("morgan");
process.env.JWT_SECRET = 'iloveyouJESUS';
module.exports = function(app,config)
{
    app.set('superSecret', config.secret);
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(morgan("dev"));
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });
}
