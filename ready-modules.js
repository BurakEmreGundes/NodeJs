const path=require("path");
const fs=require('fs');


const pathObject=path.parse(__dirname);
console.log(pathObject);

fs.readdir('./',{withFileTypes:true},function(err,files){
   if(err) console.log("hata cıktı:"+err);
   else console.log(files[0].isDirectory());
    
});