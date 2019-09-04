//source - https://leetcode.com/problems/coin-change/

var calculateCoinChange = function({coins,amount}){
    //coins = coins.sort((a,b)=>a<b); //desc
    return "Minimum change possible count "+getMinCoinsRec(coins , amount, {});
};

function getMinCoinsRec(coins , rem, count){

        if (rem < 0) return -1;
        if (rem == 0) return 0;
        if (count[rem] && count[rem] != 0) return count[rem];
        let min = Infinity;
        coins.forEach((coin)=>{
           let res = getMinCoinsRec(coins, rem - coin, count);
                if (res >= 0 && res < min)
                    min = 1 + res; 
        })
        count[rem] = (min == Infinity) ? -1 : min;
        return count[rem];

}

//this function is good for finding all possible coin change but does not give optimum lesser coin count
var runDynamicFunction = (startIndex , total, coins, counts, mem)=>{
    if(mem[`${startIndex}:${total}`]){
        return mem[`${startIndex}:${total}`];
    }
    if(total==0){
        mem[`${startIndex}:${total}`] = counts;
        return counts;
    }
    if(total<0){
        mem[`${startIndex}:${total}`] = 0;
        return 0
    }
    if(startIndex<0){
        mem[`${startIndex}:${total}`] = 0;
        return 0;
    }

    let multiplier = Math.floor(total/coins[startIndex]);
    for(let i=multiplier; i>=0; i--){
        //problem is I am fixing use of last value
        let value = runDynamicFunction(startIndex-1, total-coins[startIndex]*i,coins,counts+1*i, mem);
        if( value>0 ){
            return value;
        }else{
            mem[`${startIndex}:${total}`] = 0;
        }
    }
    return -1;
}

module.exports = {
    runAlgo: calculateCoinChange
}