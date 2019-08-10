//source: https://leetcode.com/problems/balanced-binary-tree/


var findBalanceHeight = (array)=>{

    let height = {left: 0, right: 0};
    return balancing(array);
}

var balancing = (array, index = 0) => {
    if(index>=array.length-1 || !array[index]){
        return 0; //node not present
    }

    let leftIndex = 2*index + 1;
    let rightIndex = leftIndex + 1;

    let leftCount = balancing(array,leftIndex);
    let rightCount = balancing(array,rightIndex);

    if(index!=0 && Math.abs(leftCount-rightCount)<2 && leftCount!==false && rightCount!==false){
        return 1 + Math.max(leftCount,rightCount);
    }else{
        if(leftCount===false || rightCount===false){
            return false;
        }
        return Math.abs(leftCount-rightCount)<2;
    }
}


module.exports = {
    runAlgo: findBalanceHeight
}