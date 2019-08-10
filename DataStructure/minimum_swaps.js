// source - https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// solution ref - https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
// hackerrank was not checking the output correctly and its Expected Output was not correct below code gives more optimized then hackerrank expected

// Input [7, 1, 3, 2, 4, 5, 6]
// Output 5
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]


//Approach is finding the cycle for sorting

var minimumSwaps = function(array){

    let arrayWithIndex = array.map((value,index)=>[value,index]);
    arrayWithIndex = arrayWithIndex.sort((a,b)=>a[0]>b[0]);

    let visited = new Array(arrayWithIndex.length).fill(false);
    let result = 0;
    for(let i=0; i<arrayWithIndex.length; i++){

        if(arrayWithIndex[i][1]==i){
            //was already at correct place
        }else{
            //cycle check
            let j = i;
            let cycleNodes = 0;
            while(!visited[j]){
                visited[j] = true;
                cycleNodes++;
                j = arrayWithIndex[j][1];
            }
            if(cycleNodes>0)
            result += cycleNodes - 1;
        }
    }

    let result2 = 0;
    for(let i=arrayWithIndex.length-1; i>=0; i--){

        if(arrayWithIndex[i][1]==i){
            //was already at correct place
        }else{
            //cycle check
            let j = i;
            let cycleNodes = 0;
            while(!visited[j]){
                visited[j] = true;
                cycleNodes++;
                j = arrayWithIndex[j][1];
            }
            if(cycleNodes>0)
            result2 += cycleNodes - 1;
        }
    }

    return Math.max(result,result2);
}

module.exports = {
    runAlgo: minimumSwaps
}