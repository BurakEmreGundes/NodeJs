const axios=require('axios');
const { log } = require('console');
const myAxiosObject=axios.create({
    baseURL:'https://restcountries.eu',
    // headers:{},
    // params:{
      

    // }
});
const myWeatherAxiosObject=axios.create({
    baseURL:'api.openweathermap.org/data/2.5/weather',
    params:{
        appid:"b83be45605eff8359f033abb75f773ff"
    }
});

myAxiosObject.get("rest/v2/name/turkey").then((res) => {
    console.log(res.data);
    const ulke=res.data[0];
    const baskent=ulke.capital;
    const nufus=ulke.population;
    const enlem=ulke.lating[0];
    const boylam=ulke.lating[1];
    console.log(`Nufusu : ${nufus} Enlem : ${enlem} Boylam : ${boylam} ve Başkent : ${baskent}`);

    myWeatherAxiosObject.get({
        params:{
            q:baskent
        }
    }).then((result) => {
        console.log(result);
        }).catch((err) => {

            console.log(err);
        });
        
    
}).catch((err) => {
    console.log(err.message);
});

