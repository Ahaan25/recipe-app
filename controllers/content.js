const contentModel = require("./contentModel")
exports.findRecipe = async (req, res) => {
    const recipename = req.query.title
    var recipe = await contentModel.findOne({ Name: recipename.toString()}).exec()
    if (recipe) {
        console.log(recipe)
        res.status(200).send(recipe)
    }
    else{
        console.log("not found")
    }
}

exports.findCuisine = async (req, res) => {
    const cuisinename = req.query.cuisine
    var recipe = await contentModel.find({ Cuisine: cuisinename.toString()}).exec()
    if (recipe) {
        console.log(recipe)
        res.status(200).send(recipe)
    }
    else{
        console.log("not found")
    }
}

exports.findCourse = async (req, res) => {
    const coursename = req.query.course
    var recipe = await contentModel.find({ Course: coursename.toString()}).exec()
    if (recipe) {
        console.log(recipe)
        res.status(200).send(recipe)
    }
    else{
        console.log("not found")
    }
}