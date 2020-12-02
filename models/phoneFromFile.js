const fs =require('fs');
const path = require('path'); ///see on objekt, kuhu salvestatakse teekonna fail. antud objektil on mugav meetod join.
const pathToRegularPhoneFile = path.join(path.dirname(process.mainModule.filename),'data','regularPhone.json');

module.exports=class Phone{
    constructor(phone){
        phone.description; ///võib panna task.description kui on rohkem kui üks omandus
    }

    savePhone(){
        fs.readFile(pathToRegularPhoneFile,(error, fileContent)=>{
            let phones=[]; ///tasks massiiv on ajutine
            if (!error){
                phones =JSON.parse(fileContent);
            }else{
                console.log(error);
            }
            phones.push(this); ////this=item
            fs.writeFile(pathToRegularPhoneFile,JSON.stringify(phones),(error)=>{
                console.log('Error',error); 
        });

        });




        ///toDoList.push(this);
    }

    static fetchTasks(callBack){
        fs.readFile(pathToRegularPhoneFile,(error,fileContent)=>{
            if (error){
                    callBack([]);
            }
            callBack(JSON.parse(fileContent)); ///see return peaks olema väljaspool meetodit, sest muidu peale readFile lõppemist on return tühi. See pärast kasutamisel callBack
    });


        ///return phoneList;
    }
    static deletePhone(description){
        fs.readFile(pathToRegularPhoneFile,(error,fileContent)=>{
            let phones =[];
            if(!error){
                phones=JSON.parse(fileContent);
            }
            for(let i=0; i<phones.length; i++){
                if(phones[i].description===description){
                    console.log(phones[i].description, "deleted");
                    phones.splice(i,1);
                    break;
                }
            }
        fs.writeFile(pathToRegularPhoneFile,JSON.stringify(phones),(error)=>{
        console.log("Error while trying to delete",error);
        });

        });        
    }
}
