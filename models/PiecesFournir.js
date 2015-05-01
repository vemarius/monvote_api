var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var pieceFournirSchema = Schema({
    libelle:String,
    Description:String
});

module.exports              = mongoose.model('pieceFournir',pieceFournirSchema);
