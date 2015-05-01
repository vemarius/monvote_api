/**
 * Created by marius koudou on 26/04/2015.
 */
var paysModel = require('../models/Pays')

/**
 * recuperation de toutes les pieces à fournir
 */

exports.getPays = function(req,res){
    paysModel.find().exec(function(err,pays){
          if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
          res.json({response: true,data:pays})
    });
};

exports.addPays = function(req,res){
    var pays = new paysModel();
    pays.code       = req.body.code;
    pays.libelle    = req.body.libelle;
    pays.indicatif  = req.body.indicatif;
    pays.langue     = req.body.langue;

    pays.save(function(err,pays){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"le pays a été enregistré avec success ",data:pays})
    });
};

exports.paysById = function(req,res){
    paysModel.findOne({_id:req.params.pays_id}).exec(function(err,pays){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:piece});
    });
}

exports.updatePays = function(req,res){
    paysModel.findById(req.params.pays_id,function(err,pays){
        pays.code       = req.body.code;
        pays.libelle    = req.body.libelle;
        pays.indicatif  = req.body.indicatif;
        pays.langue     = req.body.langue;
        pays.save(function(err){
             if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
             res.json({response: true,message: "Le pays a été modifiée avec succes ",data:pays});
         });
     });
}

exports.deletePays   = function(req,res){
    paysModel.remove({_id:req.params.pays_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};
