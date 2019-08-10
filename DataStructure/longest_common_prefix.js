// Source - https://www.interviewbit.com/problems/longest-common-prefix/

// Input - ["abcdefgh", "aefghijk", "abcefgh"]
//Output - "a"


var longestPrefix = function(array){
    if(array.length==0){return "";}
    return recPrefix(array);
}

var recPrefix = function(array, startIndex = 0, result = ""){

    let prefix = array[array.length-1].slice(startIndex,startIndex+1);
    let isMatching = array.findIndex((value)=>value.slice(startIndex,startIndex+1)!=prefix);
    if(isMatching==-1){
        return recPrefix(array, startIndex+1, result+prefix);
    }else{
        return result;
    }
}

module.exports = {
    runAlgo: longestPrefix
}