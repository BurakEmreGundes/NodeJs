const axios = require('axios');



const myAxiosObject=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts",
});


async function getPosts(){
    const response=await myAxiosObject.get();
    return response.data;
}


/*async function postPost(object){
    console.log(object);
    const response=await myAxiosObject.post(
        JSON.stringify(object)
    );

    return response.data;
}*/

module.exports={getPosts};




