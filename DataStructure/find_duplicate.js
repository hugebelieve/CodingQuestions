// input - [3 , 4 , 1 , 5 , 1];
// output - 1


var findDuplicate = (array)=>{
    let duplicate = {};
    let map = {};

    array.forEach(element => {
        if(map[element]){
            map[element] = map[element]+1;
            duplicate[element] = map[element];
        }else{
            map[element] = 1;
        }
    });
    return Object.keys(duplicate).length>0?duplicate:"No Duplicate";
};

module.exports = {
    runAlgo: findDuplicate
}