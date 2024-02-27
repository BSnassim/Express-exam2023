const express = require("express");
const router = express.Router();
const partieController = require("../controller/partieController");
const validator = require("../middleware/validate");

router.get('/affichage', (req, res) => {
    res.render('affichagePartie');
});

router.post('/newpartie/:joueur1/:joueur2', partieController.addPartie);

router.get('/:id', partieController.getById);

router.get('/', partieController.getAll);

// router.delete('/deletePartie/:partie', partieController.deleteByPartie);

// router.delete('/deleteById/:id', partieController.deleteById);

// router.put('/update/:id', partieController.updateById);

module.exports = router;