const contentModel = require("./contentModel")
exports.findRecipe = async (req, res) => {
    const name = req.query.title
    console.log(name)
    var recipe = await contentModel.findOne({ title: name.toString()}).exec()
    if (recipe) {
        console.log(recipe)
        res.status(200).send(recipe)
    }
    else{
        console.log("not found")
    }
}