const axios = require('axios');



const axiosObject = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

async function getUsers() {
    try {
        const response = await axiosObject.get();
        return response.data;
    } catch (error) {
        return{
            errorMassage:"404 Not Found"
        }
    }
 
}


async function getOneUser(userId){

    try {
        const response=await axiosObject.get(`${userId}`);
        return response.data;
    } catch (error) {
        return{
            errorMassage:"404 Not Found"
        }
    }
   
}


module.exports ={ getUsers,getOneUser};
