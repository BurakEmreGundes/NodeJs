//object destructuring
let options={
    title:"Menu",
    width:100,
    heigth:200
}

let {title="baslık",width,heigth}=options;


const kisi={
    ad:'burak',yasi:19
}

const{ad:isim,yasi:yas}=kisi; //--> other name

const meslek="mühendis";
const il="istanbul";

const person={
    meslek,
    il,
    yas:20,
    ilce:"kartal"
}

const {meslek:m,il:i,...geriyeKalanlar}=person;

console.log("meslek: "+m);
console.log("yas: "+geriyeKalanlar.yas);

//exhaustive destructuring


const person_detail={
    fullName:{
        firstName:"burak",
        lastName:"gundes"
    },
    favouriteColors:["sarı","mavi","kırmızı","yeşil","mor","pembe"]
}

const {fullName:{firstName,lastName},favouriteColors:[...favouriteColors] }=person_detail;
console.log(firstName);



console.log(favouriteColors);


function kisiyiGoster(isim,boy=0,yas=0,renkler){

}
kisiyiGoster("burak",undefined,undefined,["mavi","yeşil","sarı","kırmızı","mor"]);

//with destructuring ->

const parametreler={
    isim:"burak",
    sevdigiRenkler:["mavi","yeşil","sarı"]
}

kisiyiGoster2(parametreler);

function kisiyiGoster2({isim,sevdigiRenkler=[],yas=0,boy=0}){

}
