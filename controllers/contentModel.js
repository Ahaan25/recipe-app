const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title:String,
    cuisine:String,
    course:String,
    ingredients:[String],
    recipe:String
})

module.exports = mongoose.model("recipe", recipeSchema);