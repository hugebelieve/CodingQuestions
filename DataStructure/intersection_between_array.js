//source - https://www.youtube.com/watch?v=B6Tsrmgsy3k

// find intersection elements of n arrays
// [2,5,7,3] [3,6,8,2] [3,9,2,5,7]  = [2,3]

let a1 = [2,5,7,3];
let a2 = [3,6,8,2];
let a3 = [3,9,2,5,7];

var findInterSection = (arrayOfArray)=>{
    //first sort the array in ascending order
    arrayOfArray.forEach((item)=>{
        item = item.sort((a,b)=>a>b);
    });

    a1= arrayOfArray[0] || [];
    a2= arrayOfArray[1] || [];
    a3= arrayOfArray[2] || [];

    let i1=0,i2=0,i3=0;
    let result = [];
    while(!OOB({[i1]: a1, [i2]: a2, [i3]: a3})){
        if(allEqualInArray( [ a1[i1], a2[i2], a3[i3] ] )){
            result.push(a1[i1]);
            i1++; i2++; i3++;
        }else if( a1[i1]<a2[i2] ){
            i1++;
        }else if( a2[i2]<a3[i3] ){
            i2++;
        }else {
            i3++;
        }
    }
    return result;
};

var allEqualInArray = (array)=>{
    let uniqueArray = array.filter((item,index)=>array.indexOf(item)===index);
    let uniqueArray2 = [...new Set(array)]; //used spread operator
    return uniqueArray2.length==1;
};

var OOB = (arrayObj)=>{ //out of bound
    let allIndex = Object.keys(arrayObj);
    for(let index=0; index<allIndex.length; index++){
        let targetIndex = allIndex[index];
        let targetArray = arrayObj[targetIndex];

        if(targetIndex>=targetArray.length){
            return true; //index out of bound
        }
    }
    return false;
}
module.exports = {
    runAlgo: findInterSection
}

// time complexity
// worse case we are looping through all the elements in all array
// Space complexity is below
// O( a1.length + a2.length + a3.length )

// Quick sort takes O( nlogn )