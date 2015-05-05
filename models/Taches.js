/**
 * Created by marius koudou on 25/04/2015.
 */
mongoose = require("mongoose");
Schema   = mongoose.Schema;
var tacheEtapeSchema =  Schema({
    libelle:String,
    description:String,
    dateDebut       : {type:Date},
    dateFin         : {type:Date},
    _etapes         : {type:String,ref:'etapes'},
    _lieuEnrolement : [{type:String,ref:'lieuEnrolement'}],
    _pieceFournir   : [{type:String,ref:'pieceFournir'}]
});
module.exports  = mongoose.model('taches',tacheEtapeSchema);