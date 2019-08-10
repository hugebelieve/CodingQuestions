// source - https://www.youtube.com/watch?v=eaYX0Ee0Kcg&t=65s

// Input
// [
//     [-2,4],
//     [0,-2],
//     [-1,0],
//     [3,5],
//     [-2,-3],
//     [3,2]
// ]

// 3 closest points


// Output - [[3.6,[-2,-3]],[2,[0,-2]],[1,[-1,0]]]

// Optimise time
// Max Heap Method


var findKpoints =  ({points,k})=>{

    let centerDistance = [];
    points.forEach((point)=>{
        let distance = Math.sqrt( Math.pow(point[0],2) + Math.pow(point[1],2) );
        centerDistance.push([distance,point]);
    });

    let heap = centerDistance.splice(0,k);
    let sorted = false; //saves some sort O(nlogn)
    centerDistance.forEach((item)=>{
        if(!sorted)
            head = heap.sort((a,b)=>a[0]<b[0]); //desc
        
        if(heap[0][0]>item[0]){
            heap[0] = item;
            sorted = false;
        }else{
            sorted = true;
        }
    });

    return heap;
}


module.exports = {
    runAlgo: findKpoints
}