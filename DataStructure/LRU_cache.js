// Source - https://www.geeksforgeeks.org/lru-cache-implementation/

// Input - [2,4,5,7,3,4,8,9]
// Cache Size - 3

// Output [4,8,9];


var LRUcache = function({array,cacheSize}){

    let lru = new LRU(cacheSize);
    array.forEach(element => {
        lru.addCache(element);
    });

    return lru.getAll();
}

class LRU{
    constructor(cacheSize){
        this.cacheSize = cacheSize;
        this.cache = [];
        this.map = new Map(); //cache value and length
    }

    addCache(value){
        if(this.map.get(value)){
            //already present move to start
            this.cache = this.cache.filter(item=>item!=value);
        }else if(this.cache.length==this.cacheSize){
            //remove one
            let removedVal = this.cache.shift();
            this.map.delete(removedVal);
        }
        this.map.set(value,this.cache.length);
        this.cache.push(value);
    }

    getAll(){
        return this.cache;
    }
}

module.exports = {
    runAlgo: LRUcache
}