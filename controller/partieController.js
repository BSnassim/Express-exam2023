const Partie = require("../models/partie");

async function getAll(req, res, next) {
  try {
    const parties = await Partie.find();
    res.status(200).send(parties);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function addPartie(req, res, next) {
  try {
    await new Partie({
      nom: req.body.nom,
      joueur_1: req.params.joueur1,
      joueur_2: req.params.joueur2,
      etat: (req.body.etat = "en cours"),
    }).save();
    res.status(200).send("Partie added succesfuly");
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getById(req, res, next) {
  try {
    const partie = await Partie.findById(req.params.id);
    res.status(200).send(partie);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteByClass(req, res, next) {
  try {
    await Partie.findOneAndDelete({ class: req.params.class });
    res.status(200).send("Partie deleted succesfuly");
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteById(req, res, next) {
  try {
    await Partie.findByIdAndDelete(req.params.id);
    res.status(200).send("Partie deleted succesfuly");
  } catch (error) {
    res.status(400).send(error);
  }
}

async function updateById(req, res, next) {
  try {
    const partie = await Partie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(partie);
  } catch (error) {
    res.status(400).send(error);
  }
}
module.exports = {
  getAll,
  addPartie,
  getById,
  deleteByClass,
  deleteById,
  updateById,
};
