/**
 * Created by marius koudou on 30/04/2015.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var villesSchema = Schema({
    code :String,
    libelle:String,
    _pays:{type:Schema.Types.ObjectId,ref:'pays'}
});

module.exports = mongoose.model('villes',villesSchema);
