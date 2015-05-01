/**
 * Created by marius koudou on 30/04/2015.
 */
mongoose = require("mongoose");
Schema   = mongoose.Schema;

var tachesCitoyensSchema = Schema({
    _taches  :{type:Schema.Types.ObjectId , ref:'taches'},
    _citoyens:{type:Schema.Types.ObjectId , ref:'citoyens'},
    _etapes :{type:Schema.Types.ObjectId, ref:'etapes'},
    status:Boolean
});

 module.exports = mongoose.model('tacheCitoyens',tachesCitoyensSchema);
