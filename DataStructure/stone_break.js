// Input stones array
// [2,4,5,8,9,14]
//stones are in descending order
// Takes biggest two stone smash them 
// 12 and 12 stone will give delete each other
// 12 and 11 will create one new stone of size 1
// do this until one stone remains (return last size) or no stones remains
// Output - 0

function lastStoneWeight(stones) {
    //stones are in descending order
    if(stones.length>=(Math.pow(10,5))){
        return 0; //base case where; 1 < n < 10^5
    }
    stones = stones.sort((a,b)=>a-b);
    while(true){
        if(stones.length==1) return stones[0];
        if(stones.length==0) return 0;
        let stone1 = stones.pop();
        let stone2 = stones.pop();

        if(stone1!=stone2){
            let newStone = Math.abs( Number(stone1) - Number(stone2) );
            
            // insert this stone back
            if(newStone>=stones[stones.length-1]){
                stones.push(newStone);
            }else if( newStone<=stones[0]){
                stones.splice(0,0,newStone);
            }else{
                let findIndex = stones.findIndex(stone=>stone>newStone);
                stones.splice(findIndex,0,newStone);
            }
        }
    }
}

module.exports = {
    runAlgo: lastStoneWeight
}