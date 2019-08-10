// source - https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=3s

// Input - 
// [
//     [1 ,0 ,1 ,0 ,0 ,1],
//     [1 ,0 ,1 ,1 ,1 ,1],
//     [1 ,1 ,1 ,1 ,1 ,0],
//     [1 ,0 ,1 ,1 ,1 ,1],
//     [1 ,0 ,1 ,1 ,1 ,1]
// ]

// Output - 3


var longestSquare =  function(array){

    let max = 0;
    let checkMap = [];
    for(let i=0; i<array.length; i++){
        let rowA = array[i];
        checkMap.push([]);
        for(let j=0; j<rowA.length; j++){
            let currentMax = 0;
            if(i==0 || j==0 || rowA[j]==0){
                currentMax = rowA[j];
            }else{
                let top = checkMap[i-1][j];
                let left = checkMap[i][j-1];
                let topLeft = checkMap[i-1][j-1];
                currentMax = rowA[j] + Math.min(top,left,topLeft);
            }
            checkMap[i][j] = currentMax;
            if(currentMax>max){
                max = currentMax;
            }
        }
    }
    return max;
}

module.exports = {
    runAlgo: longestSquare
}