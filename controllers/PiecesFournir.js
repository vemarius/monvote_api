/**
 * Created by marius koudou on 26/04/2015.
 */
var piecesModel = require('../models/PiecesFournir')

/**
 * recuperation de toutes les pieces à fournir
 */

exports.getPieces = function(req,res){
    piecesModel.find().exec(function(err,pieces){
          if(err){ res.json({response:false, message:"Une erreur s'est produite : " + err}) }
          res.json({response: true,data:pieces})
    });
};

exports.addpiece = function(req,res){
    var piece = new piecesModel();
    piece.libelle     = req.body.libelle;
    piece.Description = req.body.description;
    piece.save(function(err,piece){
        if(err){res.json({"response":false, "message":"Une erreur s'est produite : " + err})}
        res.json({response: true,message:"la piece a été enregistrée avec success ",data:piece})
    });
};

exports.pieceById = function(req,res){
    piecesModel.findOne({_id:req.params.piece_id}).exec(function(err,piece){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:piece});
    });
}

exports.updatePiece = function(req,res){

    piecesModel.findById(req.params.etape_id,function(err,piece){
         piece.libelle     = req.body.libelle;
         piece.Description = req.body.description;
         piece.save(function(err){
             if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
             res.json({response: true,message: "La piece a été modifiée avec succes ",data:piece});
         });
     });
}

exports.deletePiece   = function(req,res){
    piecesModel.remove({_id:req.params.piece_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
};
