const Joueur = require("../models/joueur");

async function getAll(req, res, next) {
    try {
        const joueurs = await Joueur.find();
        res.status(200).send(joueurs);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function addJoueur(req, res, next) {
    try {
        await new Joueur({
            pseudo: req.body.pseudo,
            sante: req.body.sante = 100,
            score: req.body.score = 0
        }).save();
        res.status(200).send("Joueur added succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function getById(req, res, next) {
    try {
        const joueur = await Joueur.findById(req.params.id);
        res.status(200).send(joueur);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteById(req, res, next) {
    try {
        await Joueur.findByIdAndDelete(req.params.id);
        res.status(200).send("Joueur deleted succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function updateById(req, res, next) {
    try {
        const joueur = await Joueur.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(joueur);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function attaque(req, res, next) {
    try {
        const attacker = await Joueur.findById(req.params.attacker);
        const defender = await Joueur.findById(req.params.defender);
        defender.sante -= 20;
        attacker.score += 10;
        await attacker.save();
        await defender.save();
        res.status(200).send({"attacker" : attacker, "defender": defender});
    } catch (error) {
        res.status(400).send(error);
    }
};
module.exports = { getAll, addJoueur, getById, deleteById, updateById, attaque};