// source https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/

// Input "AGGTAB", "GXTXAYB"
// Output GTAB

function longestLength(str1, str2){

    if(str1.length==0 || str2.length==0){
        return [0,""];
    }

    if(str1.substr(0,1) == str2.substr(0,1)){
        let result = longestLength( str1.substr(1) , str2.substr(1));
        return  [1+result[0], str1.substr(0,1)+result[1] ];
    }else{
        let res1 = longestLength( str1.substr(1), str2);
        let res2 = longestLength( str1, str2.substr(1));
        if(res1[0]>res2[0]){
            return res1
        }else{
            return res2
        }
    }
}
longestLength("AGGTAB","AGXTXAYB");

module.exports = {
    runAlgo: longestLength
}