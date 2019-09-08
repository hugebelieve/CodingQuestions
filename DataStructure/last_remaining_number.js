// Input given array
// [2,4,5,8,9,14]
// numbers are in descending order
// Takes biggest two number and subtract them
// 12 and 12 will give delete each other
// 12 and 11 will create one number of size 1
// do this until last number remains (return last number) or 0 if nothing remains
// Output - 0

function lastNumber(array) {
    //numbers are in descending order
    if(array.length>=(Math.pow(10,5))){
        return 0; //base case where; 1 < n < 10^5
    }
    array = array.sort((a,b)=>a-b);
    while(true){
        if(array.length==1) return array[0];
        if(array.length==0) return 0;
        let num1 = array.pop();
        let num2 = array.pop();

        if(num1!=num2){
            let newNumber = Math.abs( Number(num1) - Number(num2) );
            
            // insert this number back
            if(newNumber>=array[array.length-1]){
                array.push(newNumber);
            }else if( newNumber<=array[0]){
                array.splice(0,0,newNumber);
            }else{
                //place new number in sorted position in array
                let findIndex = array.findIndex(value=>value>newNumber);
                array.splice(findIndex,0,newNumber);
            }
        }
    }
}

module.exports = {
    runAlgo: lastNumber
}