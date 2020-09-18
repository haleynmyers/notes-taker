var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
var routes = require("./routes");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));run
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});