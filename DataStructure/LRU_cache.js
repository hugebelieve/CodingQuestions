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

// Least recently Used (LRU)
class LRU2{ // LRU optimized with head as latest
    constructor(cacheSize){
        console.log(cacheSize);
        
        this.cacheSize = cacheSize;
        this.headNode = new NodeLRU();
        this.tailNode = new NodeLRU();
        this.headNode.next = this.tailNode;
        this.tailNode.prev = this.headNode;
        this.map = new Map(); //cache value and length
    }

    addCache(key,value){
        if(this.map.get(value)){
            //already present move to start
            this.moveToHead(this.map.get(value));
            return
        }
        let newNode = new NodeLRU();
        newNode.key = key;
        newNode.value = value;
        this.map.set(key,newNode);

        this.addHead(newNode);

        if(this.map.size>this.cacheSize){
            //remove one
            let lastKey = this.removeLast();
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
        this.tailNode.prev = lastNode.prev;
        return lastNode.key;
    }

    getSpecific(key){
        let target = this.map.get(key);
        if(!target){
            return -1;
        }else{
            this.moveToHead(target);
            return target.value;
        }
    }

    clearCache(){
        this.headNode.next = this.tailNode;
        this.tailNode.prev = this.headNode;

        this.headNode.prev = null;
        this.tailNode.next = null;
    }

    reverseLinedList(){
        this.recurReverse(null, this.headNode, this.headNode.next);
        let oldHead = this.headNode;
        this.headNode = this.tailNode;
        this.tailNode = oldHead;
    }

    recurReverse(prevNode, node, nextNode){ //3 pointer
        node.next = prevNode;
        node.prev = nextNode;
        if(nextNode==null){
            return "Done";
        }
        let loopNext = nextNode.next;
        nextNode.next = node;



        if(node.prev==null || nextNode==null){
            return "Done";
        }

        return this.recurReverse(node,nextNode,loopNext);
    }
}

module.exports = {
    runAlgo: LRUcache
}