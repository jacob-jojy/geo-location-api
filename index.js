const express = require("express");

const app = express();

const port = 3000;

const unirest = require("unirest");

app.get("/", (req, res) => {

  var apiCall = unirest("GET",

    "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"

  );

  apiCall.headers({

    "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",

    "x-rapidapi-key": "76a70a27a5msh7c3cdc0c2d15744p1dc8d1jsn824095115d30"

  });

  apiCall.end(function(result) {

    if (res.error) throw new Error(result.error);

    console.log(result.body);

    res.send(result.body);

  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));