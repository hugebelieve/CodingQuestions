// Input ([})
// Output false


function validParenthesis({str}){

    let openPrRef = ["(","{","["];
    let closePrRef = [")","}","]"];
    let foundBrac = {}; // { "(": 0 }

    for(let i=0; i<str.length; i++){
        let eachLetter = str[i];
        
        if(openPrRef.includes(eachLetter)){
            if(!foundBrac[eachLetter]){
                foundBrac[eachLetter] = 1;
            }else{
                foundBrac[eachLetter]++;
            }
        }else{
            let index = closePrRef.findIndex(val=>val==eachLetter)
            if(index>=0){
                //base condition
                let presentOpenBrac = foundBrac[ openPrRef[index] ];
                if(presentOpenBrac){ //defined and non zero
                    if(presentOpenBrac==1){
                        delete foundBrac[openPrRef[index]];
                    }else{
                        foundBrac[openPrRef[index]]--;
                    }
                }else{
                    return false;
                }
            }
        }
    }

    return Object.keys(foundBrac)==0;
}

function validParenthesis2({str}){

    let bracketHash = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    }
    let closePrRef = [")","}","]"];

    let bracketStack = [];
    
    for(let i=0; i<str.length; i++){
        let eachLetter = str[i];

        if(bracketHash[eachLetter]){
            bracketStack.push(eachLetter);
        }else if(closePrRef.includes(eachLetter)){
            let lastStackValue = bracketStack.pop();
            if( bracketHash[lastStackValue]!=eachLetter ){
                return false;
            }
        }
    }

    return bracketStack.length==0;
}