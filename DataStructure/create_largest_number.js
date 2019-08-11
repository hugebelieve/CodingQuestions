// source : https://www.interviewbit.com/problems/largest-number/

// Input : [3, 342, 34, 5, 9]
// Combine them and make largest number
// Output : "95343423"



var createLargest = function(array){

    //sort for arranging in our way

    let newArray = array.sort((a,b)=>{
        // 1 switch position and -1 doesn't switch positions

        let compareString = [a+"",b+""]

        if( compareString[0].length != compareString[1].length ){
            compareString = compareString.map((item)=>{
                //keep the last digit only
                return item.split("").pop();
            });
        }
        if(compareString[0]>compareString[1]) { // 342 & 34 then 2>4 // update instead of this check all digits 3>3, 4>4, **2>4** and continue
            return -1; //don't swap as we need descending
        }else{
            return 1; //swap
        }
    });

    return newArray.join("");
}

module.exports = {
    runAlgo: createLargest
}