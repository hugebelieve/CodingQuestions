// source - https://www.interviewbit.com/problems/gas-station/

// Given two integer arrays A and B of size N.
// There are N gas stations along a circular route, where the amount of gas at station i is A[i].

// You have a car with an unlimited gas tank and it costs B[i] of gas to travel from station i 
// to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

// Return the minimum starting gas station’s index if you can travel around the circuit once, otherwise return -1.

// You can only travel in one direction. i to i+1, i+2, … n-1, 0, 1, 2.. Completing the circuit means starting at i and 
// ending up at i again.

// Input
//     A =  [1, 2]
//     B =  [2, 1]
// Output
//     1
//     Explanation 1:
//         If you start from index 0, you can fill in A[0] = 1 amount of gas. Now your tank has 1 unit of gas. But you need B[0] = 2 gas to travel to station 1. 
//         If you start from index 1, you can fill in A[1] = 2 amount of gas. Now your tank has 2 units of gas. You need B[1] = 1 gas to get to station 0. So, you travel to station 0 and still have 1 unit of gas left over. You fill in A[0] = 1 unit of additional gas, making your current gas = 2. It costs you B[0] = 2 to get to station 1, which you do and complete the circuit. 


var findMinimumIndexForCircuit = function({gasFills, cost}){

    for(let i=0; i<gasFills.length; i++){
        let result = checkIfCircuitPossible(i,i,0,gasFills,cost);
        if(result!=-1){
            return result;
        }
    }
    return -1;
}

var checkIfCircuitPossible = (startIndex, currentIndex, gasInTank, stationGasArray, travelGasArray)=>{

    if(gasInTank<0){
        return -1;
    }

    //fill the tank
    gasInTank += stationGasArray[currentIndex];
    
    //move to next station
    let gasRequiredForTravel = travelGasArray[currentIndex];
    if(currentIndex==stationGasArray.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    gasInTank -= gasRequiredForTravel;


    if(startIndex==currentIndex){
        return startIndex; //possible
    }else{
        return checkIfCircuitPossible(startIndex, currentIndex, gasInTank, stationGasArray, travelGasArray);
    }
}

module.exports = {
    runAlgo: findMinimumIndexForCircuit
}


//time complexity
// O(n*n) //can we optimise, may be all is unique route here