const chalk = require('chalk');
const yargs = require('yargs');
const kisiModule=require('./kisi');

function baslangic() {
    console.log(chalk.blue('Hello world!'));

    console.log(process.argv);

    console.log(process.argv[2]);

    let gelenKomut = process.argv[2];

    if (gelenKomut == "ekle") {
        console.log("ekleme yapılacak");
    }
    console.log(yargs.argv);
}


yargs.version("1.5.3");//->>versiyonu değiştirdik


//kişi ekle komutu
yargs.command({
    command: 'ekle',
    describe: 'yeni kişi eklemeye yarar',
    builder:{
        isim:{
            describe:'eklenecek kisinin adi',
            demandOption:true,
            type:'string'
        },
        tel:{
            describe:'eklenecek kisinin telefon numarasi',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv) {
     kisiModule.kisiEkle(argv.isim,argv.tel);
    }

});

//kişi sil komutu 
yargs.command({
    command: 'sil',
    describe: 'kişi silmeye yarar.',
    builder:{
        id:{
            describe:'kullanici id\'si',
            demandOption:true,
            type:'integer'
        }
    },
    handler(argv){
       kisiModule.kisiSil(argv.id);
    }
});

//kisi guncelle komutu
yargs.command({
    command:'guncelle',
    describe:'kişi güncellemeye yarar',
    builder:{
        id:{
            describe:'kullanici id\'si',
            demandOption:true,
            type:'integer'
        },
        isim:{
            describe:'eklenecek kisinin adi',
            demandOption:true,
            type:'string'
        },
        tel:{
            describe:'eklenecek kisinin telefon numarasi',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
       kisiModule.kisiGuncelle(argv.id,argv.isim,argv.tel);
    }
});


yargs.parse();
//console.log(yargs.argv);