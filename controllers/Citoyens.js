/**
 * Created by marius koudou on 10/04/2015.
 */
var citoyenModel = require('../models/Citoyens');
var villesModel    = require('../models/Villes')
var quartierModel  = require('../models/Quartiers')
var paysModel      = require('../models/Quartiers')
var jwt          = require('jsonwebtoken');

exports.checkAuth        = function(req,res,next){
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['authorization'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) {
                return res.json({ response: false, message: ' token incorrecte.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                req.token=token;
                console.log(req);

                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            response: false,
            message: 'Absence de token.'
        });

    }
}

exports.authentification = function(req,res){
    citoyenModel.findOne({
        email: req.body.email
    }, function(err, citoyen) {

        if (err) throw err;

        if (!citoyen) {
            res.json({ response: false, message: "l'authentification a echouée . le citoyen est inexistant." });
        } else if (citoyen) {

            // check if password matches
            if (citoyen.password != req.body.password) {
                res.json({ success: false, message: "l'authentification a echouée . Le mot de passe en incorrecte." });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(citoyen, process.env.JWT_SECRET);
                req.token = token;
                res.json({
                    response: true,
                    message: 'Authentification reussite!',
                    token: token
                });
            }

        }

    });
}


exports.getCitoyen = function(req,res){
    citoyenModel.find()
        .populate('_pays')
        .populate('_ville')
        .populate('_quartier')
        .exec(function(err,citoyens){
        if(err){  res.json({response: false,message: "Une erreur s'est produite : " + err}); }
        res.json({response: true,data:citoyens});
    })
};

exports.addCitoyen = function(req,res){
    var citoyens      = new citoyenModel();

    /*
    * verifions si l'adresse email n'est pas deja utilisée
    * */

    citoyenModel.findOne({email:req.body.email}).exec(function(err,citoyen){
        if(err){
            res.json({response: false,message: "Une erreur s'est produite : " + err});
        }else{
            if(citoyen){
                res.json({response: false,data: "Cette adresse email est déja utilisée : " + err})
            }else{
                citoyens.nom               = req.body.nom;
                citoyens.prenoms           = req.body.prenoms;
                citoyens._pays             = req.body.pays;
                citoyens._ville            = req.body.ville;
                citoyens._quartier         = req.body.quartier;
                citoyens.telephone         = req.body.telephone;
                citoyens.email             = req.body.email;
                citoyens.password          = req.body.password;
                citoyens.save(function(err){

                    if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'enregistrement" })};
                    res.json({response: true,message: "Le citoyen a été enregistré avec succes ",data:citoyens});
                });
            }
        }
    })


};

exports.getCitoyenById = function(req,res){
    citoyenModel.findOne({_id:req.params.citoyen_id})
        .populate('_pays')
        .populate('_ville')
        .populate('_quartier')
        .exec(function(err,citoyen){
        if(err){ res.json({response: false,data: "Une erreur s'est produite pendant l'operation" }) }
        res.json({response: true,data:citoyen});
    });
};

exports.updateCitoyen = function(req,res){
    citoyenModel.findById(req.params.citoyen_id,function(err,citoyens){
        if(err){ res.send(err); }
        citoyens.nom               = req.body.nom;
        citoyens.prenoms           = req.body.prenoms;
        citoyens._pays             = req.body.pays;
        citoyens._ville            = req.body.ville;
        citoyens._quartier         = req.body.quartier;
        citoyens.telephone         = req.body.telephone;
        citoyens.email             = req.body.email;
        citoyens.password          = req.body.password;
        citoyens.save(function(err){
            if(err){ res.json({response: false,data: "Une erreur s'est produite pendant la modification" })};
            res.json({response: true,message: "Le citoyen a été modifiéss avec succes ",data:citoyens});
        })
    });
};

exports.deleteCitoyen = function(req,res){
    citoyenModel.remove({_id:req.params.citoyen_id},function(err){
        if(err){ res.send(err); }
        res.json("La suppression a été effectuée avec succes");
    });
}



