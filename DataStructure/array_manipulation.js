//source - https://www.youtube.com/watch?v=VzQ2KacyDLw

// Input - [0,2,1,0,8]
// Output - move zero to end [2,1,8,0,0]

var shift = (array)=>{
    for(let i=0; i<array.length; i++){
        if(array[i]===0){
            let j = nextValidNonZero(i,array);
            if(j<array.length)
                array = swap(i,j,array);
        }
    }
    return array;
}

var shift2 = (array)=>{
    let nonZero = [];
    array.forEach(element => {
        if(element!=0)
            nonZero.push(element)
    });
    let diff = array.length-nonZero.length;
    for(let j=0; j<diff;j++){
        nonZero.push(0);
    }

    return nonZero;
}

var nextValidNonZero = (i,array)=>{
    let j = i+1;
    while(j<array.length && array[j]==0){
        j++;
    }
    return j;
}

var swap = (i,j,array)=>{
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
    return array;
};

module.exports = {
    runAlgo: shift2
}

// time complexity
// worse case we are looping through all the elements and all while
// Space complexity is below
// O(n*2)

//with shift2()
// O(n)