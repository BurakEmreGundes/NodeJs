const http = require('http');

const server=http.createServer((req,res)=>{
  //  console.log(req.url, req.method, req.headers);
   
    if(req.url==="/"){
        res.write("<h1 style='color:red'>Hello, welcome to my web services.</h1>");
        res.end();
    }else if(req.url==="/about"){
        res.write("<h1 style='color:blue'>You are looking for about page.</h1>");
        res.end();
    }
});

server.listen(3000);


