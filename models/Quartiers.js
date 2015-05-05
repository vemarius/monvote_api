/**
 * Created by marius koudou on 30/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var quartiersSchema =  Schema({
    code :String,
    libelle:String,
    _villes:{type:String,ref:'villesSchema'}
});

module.exports = mongoose.model('quartiers',quartiersSchema);
