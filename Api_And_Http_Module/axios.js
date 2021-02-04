const yargs=require('yargs');
const getWeatherByCountry=require('./capital-weather');


calistir();



function calistir(){
    yargs.command({

        command:"ara",
        describe:"Ulkenin başkentinin bugunki hava durumunu bulma komutu",
        builder:{
            ulke:{
                describe:"Secilen ulke",
                type:'string',
                demandOption:true
            }
        }, 
        handler(argv){
            console.log("sea");
            getWeatherByCountry.getWeatherByCountry(argv.ulke);
        }
    
    });
    yargs.parse();
}

module.exports=calistir;