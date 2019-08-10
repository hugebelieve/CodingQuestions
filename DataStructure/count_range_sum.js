//source - https://leetcode.com/problems/count-of-range-sum/

// Input: nums = [-2,5,-1], lower = -2, upper = 2,
// Output: 3 
// Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2


// index        0  1  2
// nums:      [ 1, 2, 3 ]
// cache:  [ 0, 1, 3, 6 ]   index 3 of the cache becomes nums[2] + runningSumCache[2]
// Cindex    0  1  2  3

var calculateRangeCount = ({nums,lower,upper})=>{
    let runningSumCache = [0];
    for (let i = 0; i < nums.length; i++) {
        runningSumCache[i + 1] = nums[i] + runningSumCache[i];
    }
    let result = getCombinations(nums, lower, upper, runningSumCache);
    return result.length;
}

function getCombinations(arr, lower , upper, runningSumCache,  combs = []){
    for(let startIndex=0; startIndex<=arr.length-1; startIndex++){
        for(let endIndex=startIndex; endIndex<=arr.length-1; endIndex++){
            let sum = runningSumCache[endIndex+1] - runningSumCache[startIndex];
            sum>=lower && sum<=upper && combs.push([startIndex,endIndex]);
        }
    }
    return combs;
}

var findRangeRec = (nums, lower, upper, runningSumCache, result = [])=>{

    let startIndex = 0;
    for(let endIndex=0; endIndex<nums.length; endIndex++){
        let sum = runningSumCache[endIndex+1] - runningSumCache[startIndex];
        if(sum>=lower && sum<=upper){
            result[`${startIndex},${endIndex}`] = sum;
        }
    }

    let endIndex = nums.length-1;
    for(let startIndex=0; startIndex<nums.length; startIndex++){
        let sum = runningSumCache[endIndex+1] - runningSumCache[startIndex];
        if(sum>=lower && sum<=upper){
            result[`${startIndex},${endIndex}`] = sum;
        }
    }

    return result;
}

module.exports = {
    runAlgo: calculateRangeCount
}