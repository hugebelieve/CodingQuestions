// source - https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/

// Input: symbol[]    = {T, F, T}
//        operator[]  = {^, &}
// Output: 2
// The given expression is "T ^ F & T", it evaluates true
// in two ways "((T ^ F) & T)" and "(T ^ (F & T))"

function evaluate(symbol, operator){
    let result = recur(symbol, operator, 0);
    console.log(result);
}

function recur(symbol, operator, index){

    if(index+1>=symbol.length){
        return symbol[index];
    }

    let result = eval(`${symbol[index]} ${operator[index]} ${symbol[index+1]}`);
    if(index+1<operator.length)
        result = eval(`${result} ${operator[index+1]} ${recur(symbol,operator, index+2)}`);

    let result2 = eval(`${symbol[index]} ${operator[index]} ${recur(symbol,operator, index+1)}`);

    let final = 0;
    if(result==1){
        final++;
    }
    if(result2==1){
        final++;
    }
    if(index==0){
        return final;
    }
    return result ||  result2;
}

evaluate([1,0, 1], ["^","&"]);