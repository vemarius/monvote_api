/**
 * Created by marius koudou on 25/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var lieuEnrolementSchema = Schema({
       libelle:String,
       Description:String,
       _pays         :{type:String,ref:'pays'},
       _ville        :{type:String,ref:'villes'},
       _quartier     :{type:String,ref:'quartiers'},
       longitude:String,
       latitude:String
});

module.exports                = mongoose.model('lieuEnrolement',lieuEnrolementSchema);
