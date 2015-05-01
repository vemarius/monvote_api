/**
 * Created by marius koudou on 10/04/2015.
 */
var citoyenController = require('../controllers/Citoyens');
var etapeController   = require('../controllers/Etapes');
var tachesController  = require('../controllers/Taches');
var lieuxController   = require('../controllers/LieuxEnrolement');
var piecesController  = require('../controllers/PiecesFournir');
var paysController  = require('../controllers/Pays');
var villesController  = require('../controllers/Villes');
var quartiersController  = require('../controllers/Quartiers');
module.exports = function(app,apiRoutes){

    /*
    * Route api de l'authentification
    * */
    apiRoutes.post('/auth',citoyenController.authentification)

    /**
     * injection de la fonction de verification dans le middleware
     */
     apiRoutes.use(citoyenController.checkAuth);

    /*
    * Route api du citoyen
    * */
    apiRoutes.post('/citoyen',citoyenController.addCitoyen)
    apiRoutes.get('/citoyen',citoyenController.getCitoyen);
    apiRoutes.get('/citoyen/:citoyen_id',citoyenController.getCitoyenById)
    apiRoutes.put('/citoyen/:citoyen_id',citoyenController.updateCitoyen)
    apiRoutes.delete('/citoyen/:citoyen_id',citoyenController.deleteCitoyen);

    /**
     * route api de creation des etapes
     */
    apiRoutes.post('/etapes',etapeController.addEtape)
    apiRoutes.get('/etapes',etapeController.getEtapes);
    apiRoutes.get('/etapes/:etape_id',etapeController.etapeById)
    apiRoutes.put('/etapes/:etape_id',etapeController.updateEtape)
    apiRoutes.delete('/etapes/:etape_id',etapeController.deleteEtape);

    /**
     * route api de creation de tache
     */
    apiRoutes.post('/taches',tachesController.addTache)
    apiRoutes.get('/taches',tachesController.getTache);
    apiRoutes.get('/taches/:taches_id',tachesController.tacheById)
    apiRoutes.put('/taches/:taches_id',tachesController.updateTache)
    apiRoutes.delete('/taches/:taches_id',tachesController.deleteTache);
    apiRoutes.get('tachesterminee/:etapes_id/:citoyen_id',tachesController.tachesTerminees);


    /**
     *route api de gestion des lieux
     */
    apiRoutes.post('/lieux',lieuxController.addLieux)
    apiRoutes.get('/lieux',lieuxController.getLieux);
    apiRoutes.get('/lieux/:lieu_id',lieuxController.lieuById)
    apiRoutes.put('/lieux/:lieu_id',lieuxController.updateLieu)
    apiRoutes.delete('/lieux/:lieu_id',lieuxController.deleteLieu);

    /**
     * route api de gestion des pieces à fournir
     */
    apiRoutes.post('/pieces',piecesController.addpiece)
    apiRoutes.get('/pieces',piecesController.getPieces);
    apiRoutes.get('/pieces/:piece_id',piecesController.pieceById)
    apiRoutes.put('/pieces/:piece_id',piecesController.updatePiece)
    apiRoutes.delete('/pieces/:piece_id',piecesController.deletePiece);


    /**
     * route api de gestion des pays
     */

    apiRoutes.post('/pays',paysController.addPays)
    apiRoutes.get('/pays',paysController.getPays);
    apiRoutes.get('/pays/:pays_id',paysController.paysById)
    apiRoutes.put('/pays/:pays_id',paysController.updatePays)
    apiRoutes.delete('/pays/:pays_id',paysController.deletePays);

    /**
     * route api de gestion des villes
     */

    apiRoutes.post('/villes',villesController.addVilles)
    apiRoutes.get('/villes',villesController.getVilles);
    apiRoutes.get('/villes/:villes_id',villesController.villesById)
    apiRoutes.put('/villes/:villes_id',villesController.updateVille)
    apiRoutes.delete('/villes/:villes_id',villesController.deleteVilles);

    /**
     * route de gestion des quartiers
     */
    apiRoutes.post('/quartiers',quartiersController.addQuartier)
    apiRoutes.get('/quartiers',quartiersController.getQuartiers);
    apiRoutes.get('/quartiers/:quartier_id',quartiersController.quartierById)
    apiRoutes.put('/quartiers/:quartier_id',quartiersController.updateQuartier)
    apiRoutes.delete('/quartiers/:quartier_id',quartiersController.deleteQuartier);

    app.use('/api', apiRoutes);

}
