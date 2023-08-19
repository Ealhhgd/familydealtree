const express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send("<h2> Express Web app</h2>");

});

app.listen(process.env.PORT || 3000, () => console.log("Listening on port 3000!"));