const mongo = require("mongoose");
const schema = mongo.Schema;
const Partie = new schema(
    {
        nom: String,
        joueur_1: String,
        joueur_2: String,
        etat: String,
    }
)

module.exports = mongo.model("partie",Partie);