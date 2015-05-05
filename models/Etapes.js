/**
 * Created by marius koudou on 25/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var etapeSchema =  Schema({
    libelle       :{type:String},
    description   :String,
    _taches       :[{type:String,ref:"taches"}],
    status:Boolean
});
module.exports      = mongoose.model("etapes",etapeSchema);
