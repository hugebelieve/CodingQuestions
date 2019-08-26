// source https://www.geeksforgeeks.org/count-number-of-ways-to-reach-destination-in-a-maze-using-bfs/

// Given a maze with obstacles, count number of paths to reach rightmost-bottom most cell from the topmost-leftmost cell. A cell in the given maze has value -1,0 if it is a blockage or dead-end, else 1.
// From a given cell, we are allowed to move to cells (i+1, j) and (i, j+1) only.
// Input: mat[][] = {
//     {1, 0, 0, 1},
//     {1, 1, 1, 1},
//     {1, 0, 1, 1}}
//     Output: 2


function findNumberOfWays(maze){
    let explain = `
    Breath First search says you have to check all neighbours first.
    So not like DFS where you are going deep first

    For doing that we will make a que and insert in that que all neighbours

    Then check que in que basis that way you going in sequence of breadth first.

    And after checking  each que element remove it from the que.
    `;

    return explain;
}



module.exports = {
    runAlgo: findNumberOfWays
}