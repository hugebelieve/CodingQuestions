//source - https://www.youtube.com/watch?v=VX2oZkDJeGA&t=183s

//Input [1,2,1,3,4,8]
//Here each item is index in the same array
//Using Rabbit and Tortoise pointer and check if they meet

var findCyclic = function(array){

    let cyclic = false;
    let firstLoop = true;
    let fastIndex = 0,
        slowIndex = 0,
        fastMovement = 0;
    while(fastIndex>=0 && slowIndex>=0 && fastIndex<array.length && slowIndex<array.length){

        if(slowIndex==fastIndex && !firstLoop){
            cyclic = true;
            break;
        }
        firstLoop = false;
        if(fastMovement<2){
            fastIndex = array[fastIndex];
            fastMovement++;
        }else{
            slowIndex = array[slowIndex];
            fastMovement = 0;
        }
    }

    return cyclic;
}

module.exports = {
    runAlgo: findCyclic
}