var express = require('express');
var app = express();
var axios = require('axios');
var port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    axios.request(`http://omdbapi.com/?s=${req.query.search}&apikey=thewdb`)
    .then((response) => {
        var data = response.data;
        res.render("results", {data: data});
    })
    .catch((error) => {
        console.log("Something went wrong!");
    });
});




app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});