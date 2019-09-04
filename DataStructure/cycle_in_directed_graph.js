// source - https://www.youtube.com/watch?v=rKQaZuoUR4M&t=35s


// Input : 
//    {
//     "vertices": {"1":1,"2":1,"4":1,"5":1,"6":1},
//     "edges": {
//         4: {1: 1,5: 1},
//         1: {2: 1},
//         5: {6: 1},
//         6: {4: 1}
//     }

//Output: false

//Used Depth first search ,i.e., explore current before going to next
var findIfCyclic = ({graph})=>{

    let freshSet = Object.keys(graph.vertices);
    let totalLength = freshSet.length;
    let progressSet = new Map(); // { 4: [1,5] }
    let completeSet = new Map();

    let pathMap = {};
    let exploringVertex = null
    while(completeSet.size<totalLength){
        //set exploringVertex
        if(exploringVertex==null && progressSet.size==0){
            //get new from freshSet
            exploringVertex = freshSet.shift();
            pathMap[exploringVertex] = null;
            if(graph.edges[exploringVertex]){
                progressSet.set(exploringVertex, Object.keys(graph.edges[exploringVertex]) );
            }else{
                progressSet.set(exploringVertex, []);
            }
        } else if(exploringVertex==null) {
            exploringVertex = progressSet.keys().next().value; //means already out of freshSet //when back trace got nothing
        }
        //set exploringVertex

        if(progressSet.get(exploringVertex).length==0){
            // no direction edge
            completeSet.set(exploringVertex,1);
            progressSet.delete(exploringVertex);
            exploringVertex = pathMap[exploringVertex] || null; //reset pointer by back trace
        }else{
            //move to next pointer
            let newVertex = progressSet.get(exploringVertex).shift();
            if(progressSet.get(newVertex)!=undefined){
                //found a cycle
                return {result:true, pathMap};
            }else if(completeSet.get(newVertex)!=undefined){
                //already complete
                exploringVertex = pathMap[exploringVertex] || null; //reset
            }else{
                //means in freshSet
                freshSet = freshSet.filter(item=>item!=newVertex);
                pathMap[newVertex] = exploringVertex;
                exploringVertex = newVertex;
                if(graph.edges[exploringVertex]){
                    progressSet.set(exploringVertex, Object.keys(graph.edges[exploringVertex]) );
                }else{
                    progressSet.set(exploringVertex, []);
                }
            }

        }
    }
    return {result:false, pathMap}; // not cyclic
}

module.exports = {
    runAlgo: findIfCyclic
}