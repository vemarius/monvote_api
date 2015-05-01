/**
 * Created by marius koudou on 25/04/2015.
 */

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var citoyensSchema =  Schema({
    nom           :{type:String},
    prenoms       :{type:String},
    _pays         :{type:Schema.Types.ObjectId,ref:'pays'},
    _ville        :{type:Schema.Types.ObjectId,ref:'villes'},
    _quartier     :{type:Schema.Types.ObjectId,ref:'quartiers'},
    telephone     :String,
    email         :{type:String},
    password      :{type:String}

});

module.exports = mongoose.model('citoyens',citoyensSchema);
