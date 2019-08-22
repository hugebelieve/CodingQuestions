var Ram = {}; //Global

// Add - Adds two values ---------------------------------------------
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

