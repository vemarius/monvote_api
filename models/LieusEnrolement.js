/**
 * Created by marius koudou on 25/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var lieuEnrolementSchema = Schema({
       libelle:String,
       Description:String,
       _pays         :{type:Schema.Types.ObjectId,ref:'pays'},
       _ville        :{type:Schema.Types.ObjectId,ref:'villes'},
       _quartier     :{type:Schema.Types.ObjectId,ref:'quartiers'},
       longitude:String,
       latitude:String
});

module.exports                = mongoose.model('lieuEnrolement',lieuEnrolementSchema);
