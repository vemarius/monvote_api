/**
 * Created by marius koudou on 01/05/2015.
 */
/**
 * Created by marius koudou on 26/04/2015.
 */
var lieuxModel = require('../models/LieusEnrolement')

/**
 * recuperation de tous les lieux
 */

exports.getLieux = function(req,res){
    lieuxModel.find()
        .populate('_pays')
        .populate('_ville')
        .populate('_quartier')
        .exec(function(err,lieux){
        if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
        res.json({response: true,data:lieux})
    });
};

exports.addLieux = function(req,res){
    var lieu = new lieuxModel();
    lieu.libelle = req.body.libelle;
    lieu.Description = req.body.Description;
    lieu._pays       = req.body.pays;
    lieu._ville      = req.body.ville;
    lieu._quartier   = req.body.quartier;
    lieu.longitue    = req.body.longitue;
    lieu.latitude    = req.body.latitude;

    lieu.save(function(err,lieu){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"le lieu a été enregistré avec success ",data:lieu})
    });
};

exports.lieuById = function(req,res){
    lieuxModel.findOne({_id:req.params.lieu_id})
        .populate('_pays')
        .populate('_ville')
        .populate('_quartier')
        .exec(function(err,lieu){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:lieu});
    });
}

exports.updateLieu = function(req,res){

    lieuxModel.findById(req.params.lieu_id,function(err,lieu){
        lieu.libelle = req.body.libelle;
        lieu.Description = req.body.Description;
        lieu._pays       = req.body.pays;
        lieu._ville      = req.body.ville;
        lieu._quartier   = req.body.quartier;
        lieu.longitue    = req.body.longitue;
        lieu.latitude    = req.body.latitude;
        lieu.save(function(err){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
            res.json({response: true,message: "Le lieu a été modifiés avec succes ",data:etape});
        });
    });
}

exports.deleteLieu   = function(req,res){
    lieuxModel.remove({_id:req.params.lieu_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};

