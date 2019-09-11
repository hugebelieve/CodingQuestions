// Input
array = [
    [1,1,0,1,0],
    [0,1,1,1,0],
    [1,1,1,0,0],
    [0,1,1,1,1]
]

// Output - 3

// instead of checking square forward check square before


function findLargestSquare({array}){

    let maxSquare = 0;
    let hashMap = {};

    for(let i=0; i<array.length; i++){
        let iArray = array[i];
        for(let j=0; j<iArray.length; j++){
            if(i==0 || j==0){
                hashMap[`${i};${j}`] = iArray[j];
            }else{
                // add up
                let top = hashMap[`${i-1};${j}`];
                let left = hashMap[`${i};${j-1}`];
                let topLeft = hashMap[`${i-1};${j-1}`];

                let minimum = Math.min(top, left, topLeft);
                let newSquare = iArray[j] + minimum;
                hashMap[`${i};${j}`] = newSquare;

                if(newSquare>maxSquare){
                    maxSquare = newSquare;
                }
            }
        }
    }

    return maxSquare;
}