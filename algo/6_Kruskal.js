// Source - https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/

// Minimum Spanning tree
// Graph containing all edges with minimum edges


function getMiniSpanningTree(mat){
    return `
    First sort the edges in increasing order
    Then make disjoint set of all vertices
    Now we can go through all the edges and make the vertices of those edges into one set
    If vertices is already in one set we skip that edge
    Whenever we do union we will save that edge for our edge count
    `;
}

module.exports = {
    runAlgo: getMiniSpanningTree
}