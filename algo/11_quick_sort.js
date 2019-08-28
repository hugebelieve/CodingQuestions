// source - https://www.geeksforgeeks.org/quick-sort/

function quickSort(array){
    return divide(array);
}

function divide(array){

    if(array.length<=1){
        return array;
    }

    let pivot = array.pop();
    let result = [[],[]];
    array.forEach(element => {
        if(element<pivot){
            result[0].push(element);
        }else{
            result[1].push(element);
        }
    });

    result[0] = divide(result[0]);
    result[1] = divide(result[1]);

    return result[0].concat([pivot]).concat(result[1]);
}