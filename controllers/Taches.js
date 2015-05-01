/**
 * Created by marius koudou on 01/05/2015.
 */

/**
 * Created by marius koudou on 26/04/2015.
 */
var tachesModel = require('../models/Taches')
var tachesCitoyen = require('../models/TachesCitoyens');

/**
 * recuperation de toutes les etapes
 */

exports.getTache = function(req,res){
    tachesModel.find().exec(function(err,taches){
        if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
        res.json({response: true,data:taches})
    });
};

exports.addTache = function(req,res){
    var tache = new tachesModel();
    tache.libelle     = req.body.libelle;
    tache.description = req.body.description;
    tache.dateDebut   = req.body.dateDebut;
    tache.dateFin     = req.body.dateFin;
    tache._etapes     = req.body.etapes;
    tache.save(function(err,etape){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"la tache a été enregistrée avec success ",data:etape})
    });
};

exports.tacheById = function(req,res){
    tachesModel.findOne({_id:req.params.tache_id}).exec(function(err,tache){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:tache});
    });
}

exports.updateTache = function(req,res){

    tachesModel.findById(req.params.tache_id,function(err,tache){
        tache.libelle     = req.body.libelle;
        tache.description = req.body.description;
        tache.dateDebut   = req.body.dateDebut;
        tache.dateFin     = req.body.dateFin;
        tache._etapes     = req.body.etapes;
        tache.save(function(err){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
            res.json({response: true,message: "La tache a été modifiéss avec succes ",data:tache});
        });
    });
};

exports.deleteTache   = function(req,res){
    tacheModel.remove({_id:req.params.tache_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};

exports.tachesTerminees = function(req,res){
       tachesCitoyen.find({_citoyens:req.params.citoyen_id,status:Boolean,_etapes:req.params.etapes_id})
           .exec(function(err,taches){
           if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
           res.json({response: true,data:taches});
       });
};

exports.updateTacheCitoyen = function(req,res){
    tachesCitoyen.find({_citoyens:req.params.citoyen_id,status:Boolean})
        .exec(function(err,taches){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
            res.json({response: true,data:taches});
        });
}

exports.tachesEtape = function(req,res){
    tachesModel.findOne({_etapes:req.params.etape_id}).exec(function(err,taches){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:taches});
    });
};

