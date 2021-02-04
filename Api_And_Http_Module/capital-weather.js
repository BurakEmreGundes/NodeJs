const axios = require('axios');

const myAxiosObject = axios.create({
    baseURL: 'https://restcountries.eu',
    // headers:{},
    // params:{


    // }
});


const myWeatherAxiosObject = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    params:{
        appid:"0c92f646120b88a50ff4bc27b25cb975",
        lang:"tr"
    }
   
});


function getWeatherByCountry(country){
    
myAxiosObject.get(`rest/v2/name/${country}`).then((res) => {
   /* console.log(res.data);
    const ulke = res.data[0];
    const baskent = ulke.capital;
    const nufus = ulke.population;
    const enlem = ulke.latlng[0];
    const boylam = ulke.latlng[1];*/

    const [{population:nufus,capital:baskent,latlng:[enlem,boylam]}]=res.data

    console.log(`Nufusu : ${nufus} Enlem : ${enlem} Boylam : ${boylam} ve Başkent : ${baskent}`);

    myWeatherAxiosObject.get("/weather",{
        params: {
            q: baskent
        }
    }).then((res) => {
        const {name,weather:[{description}],main:{temp:sicaklik}}=res.data;
        //console.log(res.data);
        console.log(`Başkent ${name} bugün hava ${description} sıcaklık ${sicaklik}`);
    }).catch((err) => {
 
        console.log(err);
    });


}).catch((err) => {
    console.log(err.message);
});
}

module.exports={
    getWeatherByCountry
}
