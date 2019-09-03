// source https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/

// Input:  arr[] = {1, 6, 11, 5} 
// Output: 1
// Subset1 = {1, 5, 6}, sum of Subset1 = 12 
// Subset2 = {11}, sum of Subset2 = 11

function findMiniDiff(array){

    let result = findRec(array, array.reduce((prev,val)=>prev+val,0), 0, 0);
    console.log(result);
}

function findRec(array, totalSum, sum2, index){

    if(index>=array.length){
        return Math.abs((totalSum-sum2)-sum2);
    }

    return Math.min(
        findRec(array, totalSum, sum2+array[index], index+1), //in 2nd array
        findRec(array, totalSum, sum2, index+1)
    );
}


function findMiniDiff2(array){

    let result = findRec2(array, 0, 0, 0);
    console.log(result);
}

function findRec2(array, sum1, sum2, index){

    if(index>=array.length){
        return Math.abs(sum1-sum2);
    }

    return Math.min(
        findRec2(array, sum1+array[index], sum2, index+1),
        findRec2(array, sum1, sum2+array[index], index+1)
    );
}