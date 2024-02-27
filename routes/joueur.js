const express = require("express");
const router = express.Router();
const joueurController = require("../controller/joueurController");
const validator = require("../middleware/validate");

// router.get('/chat', (req, res) => {
//     res.render('chat');
// });

router.post('/newjoueur', joueurController.addJoueur);

router.get('/getjoueur/:id', joueurController.getById);

router.get('/getalljoueur', joueurController.getAll);

router.delete('/deletejoueur/:id', joueurController.deleteById);

router.put('/update/:id', joueurController.updateById);

router.put('/attaque/:attacker/:defender', joueurController.attaque);

module.exports = router;