// source - https://leetcode.com/problems/group-anagrams/

// Given an array of strings, group anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


//we will use sorting to check anagrams
var groupAnagrams =  function(array){
    let result = {};
    for(let i=0 ; i<array.length; i++){
        let target = array[i];
        if(!result[array[i]]){ //if not already sorted and present in result map
            target = target.split("").sort((a,b)=>a>b).join(""); //ascending sort
    
            if(!result[target]){
                result[target] = [];
            }
        }
        result[target].push(array[i]);
    }

    return Object.values(result);
}

module.exports = {
    runAlgo: groupAnagrams
}

// time complexity
// n*nlog(n)