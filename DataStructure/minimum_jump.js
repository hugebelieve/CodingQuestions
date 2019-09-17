// source - https://www.youtube.com/watch?v=cETfFsSTGJI
// Input - [2,3,1,1,4]
// Output - 2

function minimumJump(array){


    return recur2(array, 0, {});
}

function recur(array, index, mem){

    if(index>=array.length-1){
        return 0; //reached
    }
    if(array[index]<=0){
        return Infinity; // In case value is zero
    }

    if(mem[index]){
        return mem[index];
    }
    
    let minJump = Infinity;
    for(let i=1; i<=array[index]; i++){
        let jump = 1 + recur(array, index+i, mem);
        if(jump<minJump){
            minJump = jump;
        }
    }
    
    mem[index] = minJump;
    return minJump;
}

function recur2(array, index, mem){

    if(index>=array.length-1){
        return 0; //reached
    }
    if(array[index]==1){
        return Infinity; // In case value is 1 (cannot jump there)
    }

    if(mem[index]){
        return mem[index];
    }
    
    let minJump = Infinity;
    for(let i=1; i<=2; i++){
        let jump = 1 + recur2(array, index+i, mem);
        if(jump<minJump){
            minJump = jump;
        }
    }
    
    mem[index] = minJump;
    return minJump;
}


module.exports = {
    runAlgo: minimumJump
}