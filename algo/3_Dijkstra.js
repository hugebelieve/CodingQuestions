// Single Source Shorted Path

// Source - https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

// Find in graph all shorted distance from node A to other nodes

function findShortestPath(graph){
    return `
    Here will have two main memory stack.
    One will keep all vertex with infinity value. (Stack 1)
    Other will save the vertex name with minimum distance from "A", initially empty. (Stack 2)
    Now remove A from Stack 1 and place to Stack 2 with zero as value.
    Then check the neighbours of A.
    Set their values as their distance from A.
    Then check the smallest value key in stack 1
    Move that node to stack 2 and check its neighbour nodes which are in stack 1 **.
    Set the values of those neighbour nodes by adding directly the value of current parent node like "B".
    (but remember set only if current value os greater than value you found)
    After that again check the smallest value in stack 1 and move it to stack 2 and check its neightbour
    At last move all value of to stack 2.
    `;
}

module.exports = {
    runAlgo: findShortestPath
}