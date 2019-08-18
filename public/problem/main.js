function compose(...FuncArgs){
    let functionArray = [...FuncArgs];
    let result = null;
    let innerFunction = function(...args){
        if(functionArray.length==0){
            return result;
        }
        let currentExecute = functionArray.pop();
        if(typeof(currentExecute)!="function"){
            return "Exception please make sure initial inputs are functions!"
        }
        result = currentExecute.call(this,...args);
        return innerFunction.call(this,result);
    }
    return innerFunction;
}

function compose2(...FuncArgs){
    let functionArray = [...FuncArgs];
    return function(...args){
        if(functionArray.length==0){
            return "No function available";
        }
        let result = [...args];
        for(let i=functionArray.length-1; i>=0; i--){
            let currentExecute = functionArray[i];
            if(typeof(currentExecute)!="function"){
                return "Exception please make sure initial inputs are functions!"
            }
            result = [currentExecute.call(this,...result)];
        }
        return result[0]; //since each function return only one result
    }
}

var newFunc = compose2(
    (a)=>{return a*2},
    (a)=>{return a*3},
    (a)=>{return a*4}
);

