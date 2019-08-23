var Ram = {}; //Global

// Add - Adds two values --------------------------------------------- 1
// R.add(2, 3);       //=>  5
// R.add(7)(10);      //=> 17

Ram.add = function(...args){
    if(args.length==0){
        return Ram.add;
    }if(args.length>1){
        return args.reduce((prev,value)=>prev+value,0);
    }else{
        return function(...newArgs){
            return args.concat(newArgs).reduce((prev,value)=>prev+value,0);
        }
    }
}

console.log( 
    "Add - Adds two values : ",
    "\n-Ram.add()(2)(3) -> ",
    Ram.add()(2)(3),
    "\n-Ram.add(4,5) -> ",
    Ram.add(4,5)
);

// map --------------------------------------------- 2
// const double = x => x * 2;
// R.map(double, [1, 2, 3]); //=> [2, 4, 6]
// R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
Ram.map = function(fn, argument){
    if(typeof(fn)!="function" || typeof(argument)!="object"){
        return null;
    }
    let isArray = false;
    if(Array.isArray(argument)){
        argument = {...argument}
        isArray = true;
    }
    for(let [key,value] of Object.entries(argument)){
        argument[key] = fn(value);
    }
    if(isArray){
        return Object.values(argument);
    }else{
        return argument;
    }
}

const double = x => x * 2;
console.log( 
    "Map : ",
    "\n-Ram.map(double, [1, 2, 3]) -> ",
    Ram.map(double, [1, 2, 3]),
    "\n-Ram.map(double, {x: 1, y: 2, z: 3}) -> ",
    Ram.map(double, {x: 1, y: 2, z: 3})
);


// adjust --------------------------------------------- 3
// R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
// R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']

Ram.adjust = function(index, fn, array){
    if(typeof(fn)!="function" || !Array.isArray(array)){
        return null;
    }
    if(index<0){
        index =  array.length + index;
    }
    if(array[index])
        array[index] = fn(array[index]);
    return array;
}

Ram.toUpper = x => x.toUpperCase();
console.log( 
    "adjust : ",
    "\n-R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']) -> ",
    Ram.adjust(1, Ram.toUpper, ['a', 'b', 'c', 'd']),
    "\n-R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']) -> ",
    Ram.adjust(-1, Ram.toUpper, ['a', 'b', 'c', 'd'])
);

// propEq --------------------------------------------- 4
const fred = {name: 'Fred', age: 12, hair: 'brown'};
const rusty = {name: 'Rusty', age: 10, hair: 'black'};
const hasBrownHair = R.propEq('hair', 'brown');
// hasBrownHair(fred)   //=> true
// hasBrownHair(rusty)   //=> false

Ram.propEq =  function(key,value){
    return function(object){
        if(!key || !value){
            return true;
        }
        return object[key] == value;
    }
}
console.log( 
    "propEq : ",
    "\n-hasBrownHair(fred) -> ",
    Ram.propEq('hair', 'brown')(fred),
    "\n-hasBrownHair(rusty) -> ",
    Ram.propEq('hair', 'brown')(rusty)
);

// allPass --------------------------------------------- 5
// const isQueen = R.propEq('rank', 'Q');
// const isSpade = R.propEq('suit', '♠︎');
// const isQueenOfSpades = R.allPass([isQueen, isSpade]);
// isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
// isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true


Ram.allPass = function(funcA){
    if(!funcA || !Array.isArray(funcA)){
        return null;
    }
    return function(object){
        if(typeof(object)!="object"){
            return true;
        }
        for(let i=0; i<funcA.length; i++){
            if( !(funcA[i])(object) ){
                return false;
            }
        }
        return true;
    }
}
const isQueen = Ram.propEq('rank', 'Q');
const isSpade = Ram.propEq('suit', '♠︎');
const isQueenOfSpades = Ram.allPass([isQueen, isSpade]);
console.log( 
    "allPass : ",
    "\n-isQueenOfSpades({rank: 'Q', suit: '♣︎'}) -> ",
    isQueenOfSpades({rank: 'Q', suit: '♣︎'}),
    "\n-isQueenOfSpades({rank: 'Q', suit: '♠︎'}) -> ",
    isQueenOfSpades({rank: 'Q', suit: '♠︎'})
);

// flip the first two arguments--------------------------------------------- 6
// const mergeThree = (a, b, c) => [].concat(a, b, c);
// mergeThree(1, 2, 3); //=> [1, 2, 3]
// R.flip(mergeThree)(1, 2, 5); //=> [2, 1, 5]

Ram.flip = function(func){
    if(!func){
        return this.flip; //return self
    }
    return function(...args){
        if(args.length>1){
            let fistArg = args[0];
            args[0] = args[1];
            args[1] = fistArg;
        }
        return func(...args);
    }
}

const mergeThree = (a, b, c) => [].concat(a, b, c);
console.log( 
    "flip : ",
    "\n-Ram.flip(mergeThree)(1, 2, 5) -> ",
    Ram.flip(mergeThree)(1, 2, 5)
);

// fromPairs --------------------------------------------- 7
// R.fromPairs([['a', 1], ['a', 2], ['b', 2], ['c', 3]]); //=> {a: 2, b: 2, c: 3}

Ram.fromPairs = function(array){
    if(!array){
        return this.fromPairs; //return self
    }
    let result = {};
    array.forEach(element => {
        if(element[0]){
            result[element[0]] = element[1];
        }
    });
    return result;
}

console.log( 
    "fromPairs : ",
    "\n-Ram.fromPairs([['a', 1], ['a', 2], ['b', 2], ['c', 3]]) -> ",
    Ram.fromPairs([['a', 1], ['a', 2], ['b', 2], ['c', 3]])
);

// groupBy --------------------------------------------- 8
// const byGrade = R.groupBy(function(student) {
//     const score = student.score;
//     return score < 65 ? 'F' :
//            score < 70 ? 'D' :
//            score < 80 ? 'C' :
//            score < 90 ? 'B' : 'A';
//   });
//   const students = [{name: 'Abby', score: 60},
//                   {name: 'Eddy', score: 58},
//                   {name: 'Jack', score: 69}];
//   byGrade(students);
//     // {
//     //   'D': [{name: 'Jack', score: 69}],
//     //   'F': [{name: 'Abby', score: 60},{name: 'Eddy', score: 58}]
//     // }

Ram.groupBy = function(func){
    let returnFunction = function(array){
        if(!array){
            return returnFunction
        }
        if(!Array.isArray(array)){
            array = [array];
        }
        let result = {};
        array.forEach((element)=>{
            let keyResult = func(element);
            if(!result[keyResult]){
                result[keyResult] = [];
            }
            result[keyResult].push(element);
        });
        return result;
    }
    return returnFunction;
}
const byGrade = Ram.groupBy(function(student) {
    const score = student.score;
    return score < 65 ? 'F' :
           score < 70 ? 'D' :
           score < 80 ? 'C' :
           score < 90 ? 'B' : 'A';
  });
  const students = [{name: 'Abby', score: 60},
                  {name: 'Eddy', score: 58},
                  {name: 'Jack', score: 69}];
console.log( 
    "groupBy : ",
    "\n-byGrade(students) -> ",
    byGrade(students)
);

// groupWith --------------------------------------------- 9
// R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
// //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
// R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
// //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

Ram.groupWith = function(func, array){
    if(!array || !Array.isArray(array)){
        return null;
    }
    let result = [];
    let previousVal;
    let previousValIndex;
    for(let i=0; i<array.length; i++){
        if(i==0){
            previousVal = array[i];
            previousValIndex = 0;
            result.push([previousVal]);
        }else{
            let currentValue = array[i];
            let boolResult = func(previousVal,currentValue);
            if(boolResult==true){
                result[previousValIndex].push(currentValue);
                previousVal = currentValue;
            }else{
                previousVal = currentValue;
                previousValIndex = previousValIndex+1;
                result.push([previousVal]);
            }
        }
    }
    return result;
}

console.log( 
    "groupWith : ",
    "\n-R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]) -> ",
    Ram.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]),
    "\n-R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]) -> ",
    R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
);

// Curry --------------------------------------------- 10
// const addFourNumbers = (a, b, c, d) => a + b + c + d;
// const curriedAddFourNumbers = R.curry(addFourNumbers);
// const f = curriedAddFourNumbers(1, 2);
// const g = f(3);
// g(4); //=> 10

Ram.curry = function(func){
    if(!func){
        func = this; // this way prototype can be done
    }
    let argsCount = func.length;
    if(argsCount==0){
        return func.call(this);
    }
    function curryFunc(){
        if(argsCount<=arguments.length){
            return func.call(this,...arguments);
        }else{
            return curryFunc.bind(this,...arguments);
        }
    }
    return curryFunc;
}

Function.prototype.curry2 = Ram.curry;

const addFourNumbers = (a, b, c, d) => a + b + c + d;
const curriedAddFourNumbers = Ram.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
console.log(
    "curry : ",
    g(4) );


// compose --------------------------------------------- 11
// const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
// const yellGreeting = R.compose(R.toUpper, classyGreeting);
// yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
// R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7

Ram.compose = function(...fns){
    return function(...args){
        let result = args;
        fns.reverse().forEach((func)=>{
            result = func(result);
        });
        return result;
    }
}
console.log( 
    "compose : ",
    "\n-Ram.compose(Math.abs, R.add(1), R.multiply(2))(-4) -> ",
    Ram.compose(Math.abs, R.add(1), R.multiply(2))(-4)
);


// Lift --------------------------------------------- 12
// const madd3 = R.lift((a, b, c) => a + b + c);
// madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
// const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
// madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]

Ram.lift = function(func){
    let curryF = Ram.curry(func);
    return function(){
        let result = [];
        for(let i=0; i<arguments.length; i++){
            let values = arguments[i];
            let newArrayToConcat = [];
            for(j=0;j<values.length;j++){
                if(i==0){
                    newArrayToConcat.push(curryF(values[j]));
                }else{
                    let newResult  = result.map(eachFunc=>{
                        return eachFunc(values[j])
                    });
                    newArrayToConcat = newArrayToConcat.concat(newResult);
                }
            }
            result = newArrayToConcat;
        }
        return result;
    }
}
const madd3 = Ram.lift((a, b, c) => a + b + c);
const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
console.log( 
    "Lift : ",
    "\n-madd3([1,2,3], [1,2,3], [1]); -> ",
    madd3([1,2,3], [1,2,3], [1]),
    "\n-madd5([1,2], [3], [4, 5], [6], [7, 8]); -> ",
    madd5([1,2], [3], [4, 5], [6], [7, 8])
);