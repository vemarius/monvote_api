/**
 * Created by marius koudou on 10/04/2015.
 */
var path     = require('path');
var rootPath = path.normalize(__dirname+"/../");
module.exports =  {
    secret: 'iloveyouJESUS',
    developpement: {
        db: "mongodb://localhost/monvotedb",
        rootPath: rootPath,
        port: process.env.PORT || 2015
    },
    production: {
        db: "mongodb://marius:JDdexter20@ds061631.mongolab.com:61631/antdb",
        rootPath: rootPath,
        port: process.env.PORT || 80
    }

}