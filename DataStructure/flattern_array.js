//Input - [ 2 , 3 , [ 10 , 8 , [ 7 , 6 , 2 , [ 9 , 10 ] ] , 4 , 6 ] , 9 , [ 12 , [13] ] ]

// Output - [2, 3, 10, 8, 7, 6, 2, 9, 10, 4, 6, 9, 12, 13]



var flatternA = function(array){
    if(!Array.isArray(array)) return array; //really good way

    let reduceResult = array.reduce((acc, current)=>{
        return acc.concat(flatternA(current));
    }, []);
    return reduceResult;
}

module.exports = {
    runAlgo: flatternA
}