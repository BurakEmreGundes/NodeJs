const fs=require('fs');
const chalk=require('chalk');

const dosyadanKisileriOku=function(fileName){
    try{
        return JSON.parse(fs.readFileSync(fileName));
    }catch(e){
    console.log(e);
    return [];
    }
   
}
const dosyayaKisileriYaz=function(kisiler,mesaj){
    fs.writeFile("kisiler.json",JSON.stringify(kisiler),(err)=>{
        if(err) console.log(err);
        console.log(chalk.green.bold(`kisi ${mesaj}`));
    })
}


const kisiEkle=function(isim,tel){
    let kisiler=dosyadanKisileriOku("kisiler.json");
    let id=(kisiler[(kisiler.length-1)].id)+1;
    kisiler.push({
        id,
        isim,
        tel
    });
    dosyayaKisileriYaz(kisiler,"eklendi!");

}

const kisiSil=function(id){
    let kisiler=dosyadanKisileriOku("kisiler.json");
    let yeniKisiler=kisiler.filter((element)=>{
        return element.id!=id;
    });
    dosyayaKisileriYaz(yeniKisiler,"silindi!");
    
}

const kisiGuncelle=function(id,isim,tel){
    let kisiler=dosyadanKisileriOku("kisiler.json");
    kisiler.forEach(element => {
        if(element.id==id){
            element.isim=isim;
            element.tel=tel;
        }        
    });
    dosyayaKisileriYaz(kisiler,"güncellendi!");
}

module.exports={
    kisiEkle,
    kisiGuncelle,
    kisiSil
}

