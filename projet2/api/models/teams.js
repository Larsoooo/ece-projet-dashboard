const mongoose = require("mongoose"); //import mongoose

// teams schema
const TeamsSchema = new mongoose.Schema({
    name: {type:String, required:true},
    flag: String,
    groupe: String,
    statistique: [{ point: String, matchJoue: String, matchGagne: String, matchNul: String, matchDefaite: String, bonusMalus: String,}],
    joueur: [{ nom: String, Apparence: String, but: String, passeDe: String}]
});

const Teams = mongoose.model('Teams', TeamsSchema); //convert to model named Teams
module.exports = Teams; //export for controller use