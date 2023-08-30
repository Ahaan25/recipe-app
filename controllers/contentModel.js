const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    Name:String,
    Cuisine:String,
    Course:String,
    url:String,
    Description:String,
    Author:String,
    Ingredients:[String],
    Mehthod:[String]
})

module.exports = mongoose.model("recipe", recipeSchema);