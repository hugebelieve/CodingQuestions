// source: https://www.youtube.com/watch?v=fAuF0EuZVCk

// Input - 
// {
//     "vertices": {
//         "A": 1,"B": 1,"C": 1,"D": 1,"E": 1,"F": 1
//     },
//     "edges": [
//         ["AD" , 1],["AB" , 3],["BD" , 3],["BC" , 1],["DC" , 1],
//         ["DE" , 6],["EC" , 5],["CF" , 4],["EF" , 2]
//     ]
// }

// Output - 
// ["A", "D"]
// ["B", "C"]
// ["D", "C"]
// ["E", "F"]
// ["A", "B"]
// ["C", "F"]
// ["E", "C"]
// ["D", "E"]

var minCostSpanningTree =  function(graph){

    let edges = graph.edges;
    edges = edges.sort((a,b)=>a[1]>b[1]);

    let disjSet = {}; // <<<=== Disjoint set implementation
    Object.keys(graph.vertices).forEach((key)=>{
        disjSet[key] = [key,0]; // [pointedTo, level]
    });

    let finalGroup = [];

    edges.forEach((edge)=>{
        let [vertex1, vertex2] = edge[0].split("");

        let vertex1Parent = vertex1;
        while(disjSet[vertex1Parent][0]!=vertex1Parent){
            vertex1Parent = disjSet[vertex1Parent][0];
        }
        let vertex2Parent = vertex2;
        while(disjSet[vertex2Parent][0]!=vertex2Parent){
            vertex2Parent = disjSet[vertex2Parent][0];
        }
        if(vertex1Parent==vertex2Parent){
            //same set
        }else{
            //different set
            if(disjSet[vertex1Parent][1]>=disjSet[vertex2Parent][1]){
                disjSet[vertex2Parent][0] = vertex1Parent;
                disjSet[vertex1Parent][1]++;
            }else{
                disjSet[vertex1Parent][0] = vertex2Parent;
                disjSet[vertex2Parent][1]++;
            }

            finalGroup.push([vertex1,vertex2]);
        }
    });
    return finalGroup;
}

module.exports = {
    runAlgo: minCostSpanningTree
}