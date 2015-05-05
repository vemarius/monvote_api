/**
 * Created by marius koudou on 30/04/2015.
 */
mongoose = require("mongoose");
Schema   = mongoose.Schema;

var tachesCitoyensSchema = Schema({
    _taches  :{type:String , ref:'taches'},
    _citoyens:{type:String , ref:'citoyens'},
    _etapes  :{type:String, ref:'etapes'},
    status:Boolean
});

 module.exports = mongoose.model('tacheCitoyens',tachesCitoyensSchema);
