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

class NodeLRU {
    constructor(){
        this.prev = null;
        this.next = null;
        this.key = null;
        this.value = null;
    }
}
class LRU2{ // LRU optimized with head as latest
    constructor(cacheSize){
        this.cacheSize = cacheSize;
        this.headNode = new NodeLRU();
        this.tailNode = new NodeLRU();
        this.map = new Map(); //cache value and length
    }

    addCache(key,value){
        if(this.map.get(value)){
            //already present move to start
            moveToHead(this.map.get(value));
        }else if(this.cache.length==this.cacheSize){
            let newNode = new NodeLRU();
            newNode.key = key;
            newNode.value = value;
            this.map.set(key,newNode);

            addHead(newNode);
            //remove one
            let lastKey = removeLast();
            this.map.delete(lastKey);
        }
    }

    addHead(node){
        let firstNode = this.headNode.next;
        this.headNode.next =  node;

        firstNode.prev = node;
        node.next = firstNode;
        node.prev = this.headNode;
    }

    moveToHead(node){
        let prevN = node.prev;
        let nextN = node.next;
        prevN.next = nextN;
        nextN.prev = prevN;

        let firstNode = this.headNode.next;
        this.headNode.next =  node;

        firstNode.prev = node;
        node.next = firstNode;
        node.prev = this.headNode;
    }

    removeLast(){
        let lastNode = this.tailNode.prev;
        lastNode.prev.next = this.tailNode;
        this.tailNode = this.lastNode.prev;
        return lastNode.key;
    }

    getSpecific(key){
        let target = this.map.get(key);
        if(!target){
            return -1;
        }else{
            moveToHead(target);
            return target.value;
        }
    }
}

module.exports = {
    runAlgo: LRUcache
}