const express = require("express");
const cors = require("cors")
const http = require("http")
const mongoose = require('mongoose')
const bodyparser = require("body-parser")
const content = require("./controllers/content")
const config = require("./config")

const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],

}

const mongoUrl = process.env.MONGO_URL || config.mongourl ;

mongoose.connect(mongoUrl,{useNewUrlParser:true
})

app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Request Handler
app.get("/recipe", content.findRecipe)

server.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}.`);
});
