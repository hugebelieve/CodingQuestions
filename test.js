const fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, contents) {
    //let result = getTimes([5,0,0,1],[0,0,1,1]);
    console.log(result);
});

searchForSynonymsAndDef = (param) =>{
        if(this.state.scholarMode==true){
        console.log("INSIDE SYNONYMS")

        var synonyms = require("synonyms");
        let p = new Promise((resolve,reject,param)=>{
            resolve(synonyms(param,"n"));
        });
        return p;
    }else{
        console.log("sorry scholar mode is off")
    }
}