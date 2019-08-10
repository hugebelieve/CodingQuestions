

//Input - 
// [
//     [0 , 0 , 1 , 2],
//     [0 , 1 , 2 , 1],
//     [2 , 1 , 1 , 1]
// ]

// 0 means no box


var maxSum = function(array){
    let incl = array[0];
	let excl = 0; //keeps the trailing max
	let excl_new;  

	for (let i = 1; i < array.length; i++) 
	{ 
		/* current max excluding i */
		excl_new = (incl > excl) ? incl : excl; // at a point inc ad excl is from different alternate set

		/* current max including i */
		incl = excl + array[i]; 
		excl = excl_new; 
	}

	/* return max of incl and excl */
	return ((incl > excl) ? incl : excl); 
}

module.exports = {
    runAlgo: maxSum
}