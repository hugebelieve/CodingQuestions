// source - https://leetcode.com/problems/delete-columns-to-make-sorted-ii/

// Input: ["ca","bb","ac"]
// Output: 1
// Explanation: 
// After deleting the first column, A = ["a", "b", "c"].
// Now A is in lexicographic order (ie. A[0] <= A[1] <= A[2]).
// We require at least 1 deletion since initially A was not in lexicographic order, so the answer is 1.

var deleteToMakeSorted = (A)=>{
    let removalCount = 0;
    let fullLength = A[0].length;
    for(let i=0; i<A[0].length; i++){
        let newColumnA = A.map((item)=>item.substring(0,i+1)); //take full slices of substring
        let result = checkIfLexicographic(newColumnA);
        if(result==false){
            A = A.map((str)=>str.slice(0, i) + str.slice(i+1));
            i--;
            removalCount++;
        }
    }
    return removalCount;
}

var checkIfLexicographic =  function(array){
    let returnV = true;
    for(let i=0; i<array.length-1; i++){
        if(array[i+1]>=array[i]){continue;}
        else{
            returnV = false;
            break;
        }
    }
    return returnV;
}


module.exports = {
    runAlgo: deleteToMakeSorted
}