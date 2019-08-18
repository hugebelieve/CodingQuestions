// https://www.geeksforgeeks.org/edit-distance-dp-5/

// Input str1 = "geek", str2 = "gesek"
// Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.
// Output: 1


var findMinimumEdits = function({str1,str2}){
    let operation = findCountRecur(0,0,str1.split(""),str2.split(""),[]);
    return {count:operation.length,operations: operation};
}

function findCountRecur(i,j,str1A,str2A,count){


    if(i>=str1A.length){
        // add remaining in str2
        for(let k=j; k<str2A.length; k++){
            count.push({operation:"add",index:k,array:2});
        }
        return count;
    }

    if(j>=str2A.length){
        // remove remaining in str1
        for(let k=i; k<str1A.length; k++){
            count.push({operation:"remove",index:k,array:1});
        }
        return count;
    }

    if(str1A[i]==str2A[j]){
        return findCountRecur(i+1,j+1,str1A,str2A,count);
    }

    let addLetter = findCountRecur( i,j+1,str1A,str2A,[{operation:"add",letter:str2A[j],index:j,array:2}].concat(count)) ;
    let removeLetter = findCountRecur(i+1,j,str1A,str2A,[{operation:"remove",letter:str1A[i],index:i,array:1}].concat(count));
    let replaceLetter = findCountRecur(i+1,j+1,str1A,str2A,[{operation:"replace",letter:str1A[i],withLetter:str2A[j],index:i,array:1}].concat(count));

    if(addLetter.length<removeLetter.length && addLetter.length<replaceLetter.length){
        // we will add a letter at this index
        count = addLetter;
    } else if(removeLetter.length<addLetter.length && removeLetter.length<removeLetter.length){
        // we will remove a letter at this index
        count = removeLetter;
    } else {
        // we will replace a letter at this index
        count = replaceLetter;
    }
    return count;
}


module.exports = {
    runAlgo: findMinimumEdits
}