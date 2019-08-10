// source - https://www.interviewbit.com/problems/max-sum-contiguous-subarray/

// Input - [-2,1,-3,-6,4,-9,14,-1,2,1,-5,8]
//Output - 19

// here concept is that array will have negative to reduce your number to -ve


var findMaxContinuous = function(array){

    let finalAns = 0;
    let acc = 0;
    for(let i=0 ;i<array.length; i++){
        acc += array[i];
        if(acc<0){
            acc = 0; //don't carry negative forward
        }

        if(acc>finalAns){
            finalAns = acc;
        }
    }
    return finalAns;
}

module.exports = {
    runAlgo: findMaxContinuous
}