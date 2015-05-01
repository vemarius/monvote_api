/**
 * Created by marius koudou on 10/04/2015.
 */
var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    console.log(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('monVoteDb est connectée ');
    });
}