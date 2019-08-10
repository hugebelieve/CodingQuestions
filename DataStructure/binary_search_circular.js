//source - https://www.youtube.com/watch?v=uufaK2uLnSI


// Input - [16,18,20,21,4,6,7,9,12,15]; //circular sorted
// Find 12
// Output - 8 //index

//              _____________
// [16,18,20,21,4,6,7,9,12,15]
//  low         mid        high

//for duplicate case middle index will be given out
// [2,2,2,0,2,2]

var binarySearch = function({array,x}){
    let lowI = 0 ;
    let highI = array.length-1;

    while(lowI<=highI){
        let midI = Math.floor((highI+lowI)/2);

        if(array[midI]==x){
            return  "Found at index "+midI;
        }

        if(array[midI]<array[highI]){ //right side is sorted

            //this condition can only be check in the first sorted side
            if(x>array[midI] && x<=array[highI]){ //find if present in between right array
                //go to right
                lowI = midI+1;
            }else{
                //go to left side
                highI = midI-1;
            }
        }else{ //left side is sorted
            
            if(x<array[highI] && x>array[lowI]){
                //go to left
                highI = midI-1;
            }else{
                //go to right
                lowI = lowI+1;
            }
        }
    }
    return "Not found in array "+-1;
}

module.exports = {
    runAlgo: binarySearch
}

// time complexity
// worse case we are looping through all the elements
// Space complexity is below
// O(n)
