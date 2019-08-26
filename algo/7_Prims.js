// source - https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/

function getMiniSpanningTree(mat){
    return `
    Here is are actually traversing the whole tree unlike Kruskal where we check each edges
    Create a "Done Set" - and while loop until DoneSet is equal to number of vertices
    Create a HeapMap which will have vertices and Infinity as value.
    Take "A" vertex out and push to "Done Vertex" and then set the value of "A" neighbours in Heapmap
    (** only if new value is smaller than current)
    then for other iteration take vertex from HeapMap which has lowest value (makes it greedy)
    while taking a vertex out of HeapMap save it in a array for final path

    ** Dijkstra is also same, just that Dijkstra store total, and Prim stores current minimum
    `;
}

module.exports = {
    runAlgo: getMiniSpanningTree
}