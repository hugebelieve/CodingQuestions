// Source - https://www.geeksforgeeks.org/lexicographic-permutations-of-string/

// Input - ABC
// Output in order - ABC, ACB, BAC, BCA, CAB, CBA


var lexicographicOrder = function({word}){

    let firstP = word.split("").sort((a,b)=>a>b).join(""); //ascending
    let result = [firstP];
    let pPossible = true;
    let wordA = firstP.split("");
    while(pPossible){
        let nextOutOfOrder = findNextOutOfOrder(wordA);
        if(nextOutOfOrder==-1){
            break;
        }
        let remaining = wordA.slice(nextOutOfOrder+1);
        let remainingSort = remaining.sort((a,b)=>a>b);
        let nextInIndex = remainingSort.findIndex((item)=>item>wordA[nextOutOfOrder])+nextOutOfOrder+1;

        //swap
        let carry = wordA[nextOutOfOrder];
        wordA[nextOutOfOrder] = wordA[nextInIndex];
        wordA[nextInIndex] = carry;

        //Now order
        let newRemaining = wordA.slice(nextOutOfOrder+1);
        newRemaining = newRemaining.sort((a,b)=>a>b);
        wordA = wordA.slice(0,nextOutOfOrder+1).concat(newRemaining);
        result.push(wordA.join(""));
    }
    return result;
}

var findNextOutOfOrder = function(wordA){
    for(let i=wordA.length-1-1; i>=0; i--){
        if(wordA[i]<wordA[i+1]){
            return i;
        }
    }
    return -1;
}


module.exports = {
    runAlgo: lexicographicOrder
}