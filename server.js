var express = require("express").Router();

var app = express();
var PORT = process.env.PORT || 3000;
var apiRoutes = require("./routes/apiRoutes")(app);
var htmlRoutes = require("./routes/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});