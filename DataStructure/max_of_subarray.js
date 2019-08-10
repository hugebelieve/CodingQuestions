// source - https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/

// Input [ 10, 5, 2, 7, 8, 7]
// k = 3

// Output - [10,7,8,8]


var maxOfSubArray = function({array, k}){

    let low = 0;
    let high = 0;

    let maxA = [];

    while(low!=array.length-k+1){ //consider 3 length case
        let isWindowPerfect = high-low+1==k;
        if(isWindowPerfect){
            let subarray = array.slice(low,high+1);
            maxA.push( Math.max(...subarray) );
        }
        isWindowPerfect ? low++ :  high++;
    }

    return maxA;
}

module.exports = {
    runAlgo: maxOfSubArray
}