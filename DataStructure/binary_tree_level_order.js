// Source - https://leetcode.com/problems/binary-tree-level-order-traversal/

// Input - [3,9,20,null,null,15,7]
// Output - 
//  [
//     [3],
//     [9,20],
//     [15,7]
//  ]


var levelOrder = function(array){

    if(array.length==0){
        return [];
    }
    let stackA = [];
    let resultMap = {};
    let currentLevel = 1;

    stackA.push([0,1]); // [index,level]

    while(stackA.length){
        let current = stackA.shift(); //initially zero

        if(array[current[0]]!=null){ //check for null or undefined
            let left = 2*current[0]+1
            let right = left+1;
    
            if(left<array.length){
                stackA.push([left,current[1]+1]);
            }
            if(right<array.length){
                stackA.push([right,current[1]+1]);
            }
    
            if(current[1]!=currentLevel){
                currentLevel = current[1];
            }
            if(!resultMap[currentLevel]){
                resultMap[currentLevel] = [];
            }
            resultMap[currentLevel].push(array[current[0]]);
        }
    }


    return resultMap;
}

module.exports = {
    runAlgo: levelOrder
}