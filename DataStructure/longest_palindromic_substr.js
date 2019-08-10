// Source - https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/

//Input - forgeeksskeegfor
//Output - geeksskeeg
// trice is find "ss" middle

var findPalindromicSubString = function({input}){

    let allSubS = input.split("");
    let PS = [];
    let maxLength = 0;
    let LPS = "";
    let allPS = [];

    for(let i=0; i<allSubS.length-1; i++ ){
        //find even "ss"
        if(allSubS[i]==allSubS[i+1]){
            PS.push([i,i+1]);
        }

        //find odd "sas"
        if(i!=0 && allSubS[i-1]==allSubS[i+1]){
            PS.push([i-1,i+1]);
        }
    }

    //check each possibility
    PS.forEach((item)=>{
        let subString = allSubS.slice(item[0],item[1]+1).join("");
        item[0]--;
        item[1]++;
        while(item[0]>=0 && item[1]<allSubS.length){
            if(allSubS[item[0]] == allSubS[item[1]]){
                subString = allSubS[item[0]] + subString + allSubS[item[0]];
                item[0]--;
                item[1]++;
                if(subString.length>maxLength){
                    LPS = subString;
                }
            }else{
                allPS.push(subString);
                break;
            }
        }
    });

    return {LPS,allPS};
}

module.exports = {
    runAlgo: findPalindromicSubString
}

// Time Complexity
// O(n^2)