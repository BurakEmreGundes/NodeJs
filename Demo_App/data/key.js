const axios=require("axios");
const data={
    axiosNesnesi:axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    })
}
module.exports=data;