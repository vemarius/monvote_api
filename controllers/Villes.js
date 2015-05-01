/**
 * Created by marius koudou on 26/04/2015.
 */
var villesModel = require('../models/Villes')

/**
 * recuperation de toutes les pieces à fournir
 */

exports.getVilles = function(req,res){
    villesModel.find().exec(function(err,villes){
        if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
        res.json({response: true,data:villes})
    });
};

exports.addVilles = function(req,res){
    var villes = new villesModel();
    villes.code       = req.body.code;
    villes.libelle    = req.body.libelle;
    villes._pays      = req.body.pays;

    villes.save(function(err,villes){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"la ville a été enregistré avec success ",data:villes})
    });
};

exports.villesById = function(req,res){
    villesModel.findOne({_id:req.params.villes_id}).exec(function(err,villes){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:villes});
    });
}

exports.updateVille = function(req,res){
    villesModel.findById(req.params.villes_id,function(err,villes){
        villes.code       = req.body.code;
        villes.libelle    = req.body.libelle;
        villes._pays      = req.body.pays;
        villes.save(function(err){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
            res.json({response: true,message: "La ville a été modifiée avec succes ",data:villes});
        });
    });
}

exports.deleteVilles   = function(req,res){
    villesModel.remove({_id:req.params.villes_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};
