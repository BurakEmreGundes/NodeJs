const os=require('os');
const fs=require('fs');
const { topla } = require('../module');

let freeRam=byteToGB(os.freemem());
let totalRam=byteToGB(os.totalmem());
let usedRam=totalRam-freeRam;

let cpuSayisi=os.cpus().length;

function byteToGB(toplamByte){
    return (toplamByte/1024/1024/1024).toFixed(2);
}

let pcInfo=function(){
  fs.writeFile('deneme.txt', pcInfoGoster(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

function pcInfoGoster(){
    return(`toplam ram: ${totalRam} kullanılan ram: ${usedRam} free ram: ${freeRam} cpu sayısı: ${cpuSayisi}`);
  
    }
}

module.exports=pcInfo;



