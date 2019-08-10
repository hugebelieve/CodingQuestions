//source - https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.



var findDepth = (array, index=0)=>{

    if(index>=array.length-1 || !array[index]){
        return 0;
    }
    let leftIndex = 2*index+1;
    let rightIndex = leftIndex + 1;
    let leftCount = findDepth(array, leftIndex);
    let rightCount = findDepth(array, rightIndex);

    return 1 + Math.max(leftCount,rightCount);
}


var getDepth = function(node){
    
    if(!node){
        return 0;
    }

    let leftCount = getDepth(node.left);
    let rightCount = getDepth(node.right);

    return 1+Math.max(leftCount,rightCount);
}


module.exports = {
    runAlgo: findDepth
}