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

var newFunc = compose(
    (a)=>{return a*2},
    (a)=>{return a*3},
    (a)=>{return a*4}
);

