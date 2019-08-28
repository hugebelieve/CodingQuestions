// source https://www.geeksforgeeks.org/merge-sort/

function mergeSort(array){

    let divideArray = getDividedArray(array);
    
    return (divideArray);
    
}

function getDividedArray(array){

    if(array.length==1){
        return array;
    }

    
    let rightHalf = array.splice(parseInt(array.length/2));
    let result = [];
    result[0] = getDividedArray(array);
    result[1] = getDividedArray(rightHalf);

    if(result[0]<result[1]){ //can be combined her also
        return result[0].concat(result[1]);
    }else{
        return result[1].concat(result[0]);
    }
}

function combine(array){

    if(array.length==1){
        return array
    }

    let combine1 = combine(array[0]);
    let combine2 = combine(array[1]);

    if(!combine2){
        return combine1;
    }


    if(combine1<combine2){
        return combine1.concat(combine2);
    }else{
        return combine2.concat(combine1);
    }
}

module.exports = {
    runAlgo: mergeSort
}