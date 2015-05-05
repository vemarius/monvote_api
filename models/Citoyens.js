/**
 * Created by marius koudou on 25/04/2015.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var citoyensSchema =  Schema({
    nom           :{type:String},
    prenoms       :{type:String},
    _pays         :{type:String,ref:'pays'},
    _ville        :{type:String,ref:'villes'},
    _quartier     :{type:String,ref:'quartiers'},
    telephone     :String,
    email         :{type:String},
    password      :{type:String}

});

module.exports = mongoose.model('citoyens',citoyensSchema);
