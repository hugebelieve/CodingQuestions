//source - https://theanubhav.com/2019/02/03/js-currying-in-interview/#what-is-currying

function sumFunc(a){
	let sum = a;
	return function func(b){
		sum += b || 0;
		return !arguments.length ? sum : func;
	}
}

sumFunc(23)(33)();