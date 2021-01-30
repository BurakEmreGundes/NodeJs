const fs=require('fs');
const chalk=require('chalk');

const dosyadanKisileriOku=function(fileName){
    try{
        return JSON.parse(fs.readFileSync(fileName));
    }catch(e){
    console.log("hata"+e);
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
    let idValidation=kisiler.filter(element=>{
        return element.id==id;
    });
    idValidation.length>0 ? console.log((chalk.green.bold("Lütfen tekrar deneyiniz.Bu id degeri sisteme kayitli!"))) :dosyayaKisileriYaz(kisiler,"eklendi!");
    dosyayaKisileriYaz(kisiler,"eklendi!");

}

const kisiSil=function(id){
    let kisiler=dosyadanKisileriOku("kisiler.json");
    let yeniKisiler=kisiler.filter((element)=>{
        return element.id!=id;
    });
    if(yeniKisiler.length<kisiler.length){
        dosyayaKisileriYaz(yeniKisiler,"silindi!");
    }else{
        console.log(chalk.green.bold("Bu kişi dosyada bulunmamaktadır!"));
    }
   
    
}

const kisiGuncelle=function(id,isim,tel){
    let idValidation=kisiler.filter(element=>{
        return element.id==id;
    })
    let kisiler=dosyadanKisileriOku("kisiler.json");
    if(idValidation.length>0){
        kisiler.forEach(element => {
            if(element.id==id){
                element.isim=isim;
                element.tel=tel;
            }        
        });
        dosyayaKisileriYaz(kisiler,"güncellendi!");
    }else{
        console.log(chalk.green.bold("Bu kişi dosyada bulunmamaktadır"));
    }

}

module.exports={
    kisiEkle,
    kisiGuncelle,
    kisiSil
}

