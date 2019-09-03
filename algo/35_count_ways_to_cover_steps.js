// source - https://www.geeksforgeeks.org/count-number-of-ways-to-cover-a-distance/

// Input:  n = 3
// Output: 4
// Below are the four ways
//  1 step + 1 step + 1 step
//  1 step + 2 step
//  2 step + 1 step
//  3 step

function findWays(number){

    let result = findRecur(number, number);
    console.log(result);
}

function findRecur(number,totalNumber){


    if(number<0){
        return 0
    }

    if(number==0){
        return 1;
    }

    let result = 0;
    for(let i=1; i<((totalNumber%2==1)?totalNumber+1:totalNumber); i++){
        result += findRecur(number-i, totalNumber);
    }

    return result;
}

