const axios = require('axios');



const axiosObject = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

async function getUser(param) {
    const response = await axiosObject.get(`${param}`);
    return response.data;
}



module.exports = getUser;