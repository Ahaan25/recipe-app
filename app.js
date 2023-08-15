const express = require("express");
const cors = require("cors")
const http = require("http")
const mongoose = require('mongoose')
const bodyparser = require("body-parser")
const content = require("./controllers/content")
var mongourl = ""
if (!process.env.MONGO_URL) { 
  const config = require("./config")
  mongourl = config.mongourl
}
else{
  mongourl = process.env.MONGO_URL
}

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],

}

mongoose.connect(mongourl, {
  useNewUrlParser: true
})

app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Request Handler
app.get("/recipe", content.findRecipe)
app.get("/recipecuisine", content.findCuisine)
app.get("/recipecourse", content.findCourse)

server.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}.`);
});
