// Source - https://www.interviewbit.com/problems/length-of-last-word/
// Input - "Hello World"
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.

// Output - 5

// Please make sure you try to solve this problem without using library functions. Make sure you only traverse the string once.

var lengthOfLastWord = function({word}){

    let result = "";
    for(let i=0; i<word.length; i++){
        let letter = word.substr(i,1); //each letter
        if(letter==" "){
            result = "";
        }else{
            result += letter;
        }
    }

    return {result, length: result.length};
}

module.exports = {
    runAlgo: lengthOfLastWord
}