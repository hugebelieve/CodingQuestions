// Source https://www.geeksforgeeks.org/insertion-sort/

// Input [3,4,1,2,7,5]
// Output [1,2,3,4,5,7]

function insertionSort(array){

    let finalA = [];
    for(let i=0; i<array.length; i++){
        if(finalA.length==0){
            finalA.push(array[i]);
        }else{
            if(array[i]<finalA[0]){
                finalA.splice(0,0,array[i]);
            }else if(array[i]>finalA[finalA.length-1]){
                finalA.push(array[i]);
            }else
            for(let j=1; j<finalA.length;j++){
                if(array[i]<finalA[j]){
                    finalA.splice(j,0,array[i]);
                    break;
                }
            }
        }
    }
    return finalA;
}

module.exports = {
    runAlgo: insertionSort
}