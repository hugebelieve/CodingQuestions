//source - https://www.youtube.com/watch?v=lAXZGERcDf4




// Input - {
//     "vertices": {
//         "A":1,"B":1,"C":1,"D":1,"E":1,"F":1
//     },
//     "edges": [
//         ["A","B",5],["A","D",9],["A","E",2],["B","C",2],["C","D",3],["D","F",2],["E","F",3]
//     ]
// }
// Start - A

// Output - 
// {
//     A: 0,
//     B: 3,
//     C: 4,
//     D: 5,
//     E : 7
// }



var findRouteTime = ({graph, startVertex})=>{

    let initialRouteTime = new Map(); // <====
    let correspondenceMap = {};       // <====
    Object.keys(graph.vertices).forEach(key=>{
        initialRouteTime.set(key,Infinity);
        correspondenceMap[key] = [];
    });
    
    graph.edges.forEach((item)=>{
        correspondenceMap[item[0]].push([item[1],item[2]]);
        correspondenceMap[item[1]].push([item[0],item[2]]);
    });

    let finalRouteTime = {}; // <==== // fill only on removal
    let pathMap = {};        // <==== // fill on every set

    initialRouteTime.delete(startVertex);
    finalRouteTime[startVertex] = 0; //it is A
    pathMap[startVertex] = null;
    while(initialRouteTime.size>0){
        correspondenceMap[startVertex].forEach((neighbour)=>{ // ["B",5]
            if(finalRouteTime[neighbour[0]]==undefined){
                let newTime = finalRouteTime[startVertex] + neighbour[1];
                if(initialRouteTime.get(neighbour[0])<newTime){
                    //value in final map is optimum already
                }else {
                    initialRouteTime.set(neighbour[0],newTime);
                    pathMap[neighbour[0]] = startVertex; // { B => A } as you reached B from A
                }
            }
        });
        let nextVertex = getMinimumTimeVertex(initialRouteTime);
        finalRouteTime[nextVertex] = initialRouteTime.get(nextVertex);
        startVertex = nextVertex; //reset start vertex
        initialRouteTime.delete(startVertex);
    }

    return {finalRouteTime, pathMap};
}

var getMinimumTimeVertex = function(initialRouteTime){
    let result = [...initialRouteTime.values()].reduce((acc, current, index)=>{
        if(current<acc.value){
            acc.minI = index;
            acc.value = current;
        }
        return acc;
    }, {minI: 0, value: Infinity} );
    return [...initialRouteTime.keys()][result.minI];
}

module.exports = {
    runAlgo: findRouteTime
}