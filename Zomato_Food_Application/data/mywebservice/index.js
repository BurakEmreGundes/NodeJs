const axios = require('axios');
const express = require('express');
const app = express();


let myKey = "156sdD851d18S1%0&%6ad6fF4v8eed";


const myAxios = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    headers: {
        "user-key": "9e8d5edfc21a97ae6ee0b1b9d8693c72"
    }
});


app.use((req, res, next) => {
    if (req.headers.mykey == myKey)
        next();
    else
        res.status(404).send({
            statusMessage: "Not Found"
        })


});


app.get("/categories", (req, res) => {

    myAxios.get("")
    fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
        method: "GET",
        headers: {
          Authorization: `84015d0ce3644a419b80165ab0b3d16d`
        }
      })
      .then(response => response.json())
      .then(({beats}) => {
        beats.forEach((beat, index) => {
          console.log(`Beat ${index} starts at ${beat.start}`);
        })
      })
});





app.listen(3000);