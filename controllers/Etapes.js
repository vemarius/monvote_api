/**
 * Created by marius koudou on 26/04/2015.
 */
var etapeModel = require('../models/Etapes')

/**
 * recuperation de toutes les etapes
 */

exports.getEtapes = function(req,res){
    etapeModel.find()
          .populate('_taches')
          .exec(function(err,etapes){
          if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
          res.json({response: true,data:etapes})
    });
};

exports.addEtape = function(req,res){
    var etape = new etapeModel();
    etape.libelle = req.body.libelle;
    etape.description = req.body.description;
    etape.save(function(err,etape){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"l'etape a été enregistrée avec success ",data:etape})
    });
};

exports.etapeById = function(req,res){
    etapeModel.findOne({_id:req.params.etape_id}).exec(function(err,etape){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:etape});
    });
}

exports.updateEtape = function(req,res){

     etapeModel.findById(req.params.etape_id,function(err,etape){
         etape.libelle     = req.body.libelle;
         etape.description = req.body.description;

         etape.save(function(err){
             if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
             res.json({response: true,message: "L'etape a été modifiéss avec succes ",data:etape});
         });
     });
}

exports.deleteEtape   = function(req,res){
    etapeModel.remove({_id:req.params.etape_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};
