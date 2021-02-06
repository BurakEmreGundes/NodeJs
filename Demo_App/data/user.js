const axios = require('axios');



const axiosObject = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

async function getUsers() {
    const response = await axiosObject.get();
    return response.data;
}


async function getOneUser(userId){
    const response=await axiosObject.get(`${userId}`);
    return response.data;
}


module.exports ={ getUsers,getOneUser};
