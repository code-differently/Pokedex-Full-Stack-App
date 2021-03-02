const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./rest");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use("/api/v2/allPokemon", apiRouter);

/*
function (req, res) {
 res.sendFile(path.join(public, "index.html"));
});
*/

//Setting up server
var server = app.listen(process.env.PORT || 4000, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
