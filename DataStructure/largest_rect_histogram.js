// source - https://leetcode.com/problems/largest-rectangle-in-histogram/

// Given an array of integers A of size N. A represents a histogram i.e A[i] denotes height of 
// the ith histogram’s bar. Width of each bar is 1.

// Input - [2,1,5,6,2,3]

//The largest rectangle is shown in the shaded area

// Output - 10 [4,2,0,3,2,5]


var findLargestRect = function(array){

    let len = array.length;
    let stack = [];
    let stackLast = 0;
    let maxA = 0;
    let i=0;
    for(i=0; i<len; i++){
        if(stack.length==0 || array[i]>=array[stackLast] ){
            stack.push(i);
            stackLast = i;
        }else{
            //start removing
            while(stack.length){
                let lastItem = stack.pop(); //removing the item with largest height from stack to avoid its calculation
                if(array[i]>=array[lastItem]){ //for later loops
                    stack.push(lastItem);
                    break;
                }
                if(stack.length==0){
                    //this is smallest hence multiply it by full length
                    let area = array[lastItem] * i; //because if array[lastItem] is not smallest then we would has all items previous that as well
                    if(area>maxA){maxA = area;}
                    break;
                }else{
                    //let area = array[lastItem] * (i - lastItem); //we are considering array[lastItem] as max and all length after that until i\
                    let area = array[lastItem] * (i - stack[stack.length-1] - 1); //better area calculation as it considers in between removed items as well
                    
                    if(area>maxA){
                        maxA = area;
                    }
                }
            }
            stack.push(i);
            stackLast = i;
        }
    }

    while(stack.length){
        let lastItem = stack.pop();
        if(stack.length==0){
            let area = array[lastItem] * i;
            if(area>maxA){maxA = area;}
            break;
        }else{
            let area = array[lastItem] * (i - stack[stack.length-1] - 1);
            if(area>maxA){
                maxA = area;
            }
        }
    }
    
    return maxA;
}

module.exports = {
    runAlgo: findLargestRect
}