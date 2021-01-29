const myModule=require("./module.js");

function selamVer(){
    console.log("Merhaba Node JS");
    global.console.log("bu yazı global listesinden geldi");
}

console.log(myModule.isim);
myModule.topla(9,3);
console.log(myModule.personel);

selamVer();