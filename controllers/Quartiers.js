/**
 * Created by marius koudou on 26/04/2015.
 */
var quatiersModel = require('../models/Quartiers')

/**
 * recuperation de toutes les pieces à fournir
 */

exports.getQuartiers = function(req,res){
    quatiersModel.find().exec(function(err,quartiers){
        if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
        res.json({response: true,data:quartiers})
    });
};

exports.addQuartier = function(req,res){
    var quartier = new quatiersModel();
    quartier.code       = req.body.code;
    quartier.libelle    = req.body.libelle;
    quartier._villes    = req.body.quartier;

    quartier.save(function(err,quartier){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"le quartier a été enregistré avec success ",data:quartier})
    });
};

exports.quartierById = function(req,res){
    quatiersModel.findOne({_id:req.params.quartier_id}).exec(function(err,quartier){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:quartier});
    });
}

exports.updateQuartier = function(req,res){
    quatiersModel.findById(req.params.quartier_id,function(err,quartier){
        quartier.code       = req.body.code;
        quartier.libelle    = req.body.libelle;
        quartier._villes    = req.body.quartier;
        quartier.save(function(err){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
            res.json({response: true,message: "Le quartier a été modifié avec succes ",data:quartier});
        });
    });
}

exports.deleteQuartier   = function(req,res){
    quatiersModel.remove({_id:req.params.quartier_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};
