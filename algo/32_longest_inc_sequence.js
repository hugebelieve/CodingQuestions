// source https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/

// Input  : arr[] = {3, 10, 2, 1, 20}
// Output : Length of LIS = 3 => [3, 10, 20]

function longestInSe(array){

    let mem = {};
    let result = findRec(array,0,mem);
    console.log(result);
    
}

function findRec(array, index, mem){

    let max = 1;
    let checkValue = array[index];
    let result = 1;
    for(let i=index+1; i<array.length; i++){
        if(checkValue<=array[i]){
            result++;
            if(result>max){
                max = result;
            }
            checkValue = array[i];
        }else{
            let newResult = 0;
            if(mem[i]){
                newResult = mem[i];
                console.log("From mem - "+i);
                
            }else{
                newResult = findRec(array,i,mem);
                console.log("From actual - "+i);
            }
            if(newResult>max){
                max = newResult;
            }
        }
    }

    mem[index] = max;
    return max;
}