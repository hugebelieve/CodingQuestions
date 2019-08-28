// source - https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/

function findMaxPath(array){
    let result = {max:0};
    findMax([10,2,10,20,1,0,-25,0,0,0,0,0,0,3,4], 0, 0, result)
    return result.max
}

function findMax(array, nodeIndex, sum, maxObj){

    if(nodeIndex>=array.length){
        return sum;
    }

    let leftIndex = 2*nodeIndex+1;
    let left = findMax(array, leftIndex, 0, maxObj);
    let right = findMax(array, leftIndex+1, 0, maxObj);

    let selfMax = Math.max( Math.max(left,right) + array[nodeIndex], array[nodeIndex] )

    let maxTop = Math.max(selfMax, left+right+array[nodeIndex]);
    maxObj.max = Math.max(maxObj.max,maxTop);
    return selfMax;
}

module.exports = {
    runAlgo: findMaxPath
}