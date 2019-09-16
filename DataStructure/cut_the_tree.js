// source : https://www.hackerrank.com/challenges/cut-the-tree/problem

// Input : `{"nodes":[ 100, 200, 100, 500, 100, 600 ], "edges": [ [ 1, 2 ], [ 2, 3 ], [ 2, 5 ], [ 4, 5 ], [ 5, 6 ] ]}`
// Output : 400

function cutTheTree({nodes, edges}){

    let gMin = Infinity;

    edges.forEach((edge, index)=>{
        let side1 = [edge[0]];
        let side2 = [edge[1]];
        let diff =  - nodes[edge[0]-1] + nodes[edge[1]-1];

        let newLoop = edges.slice(index+1).concat(edges.slice(0,index).reverse());

        newLoop.forEach((runEdge, index2)=>{
            if(side1.includes(runEdge[0])){
                side1 = side1.concat(runEdge[1]);
                diff =  diff - nodes[runEdge[1]-1];
            }else if(side1.includes(runEdge[1])){
                side1 = side1.concat(runEdge[0]);
                diff =  diff - nodes[runEdge[0]-1];
            }else if(side2.includes(runEdge[1])){
                side2 = side2.concat(runEdge[0]);
                diff =  diff + nodes[runEdge[0]-1];
            }else {
                side2 = side2.concat(runEdge[1]);
                diff =  diff + nodes[runEdge[1]-1];
            }
        });

        if(Math.abs(diff)<gMin){
            gMin = Math.abs(diff);
        }
    });

    return gMin;
}

module.exports = {
    runAlgo: cutTheTree
}