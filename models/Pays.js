/**
 * Created by marius koudou on 30/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var paysSchema = Schema({
    code :String,
    libelle:String,
    indicatif:String,
    langue:String
});

module.exports = mongoose.model('pays',paysSchema);
