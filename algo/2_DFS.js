// source - https://www.geeksforgeeks.org/find-number-of-islands/

// Given a boolean 2D matrix, find the number of islands. 
// A group of connected 1s forms an island. For example, the below matrix contains 5 islands

// Input : mat[][] = {{1, 1, 0, 0, 0},
//                    {0, 1, 0, 0, 1},
//                    {1, 0, 0, 1, 1},
//                    {0, 0, 0, 0, 0},
//                    {1, 0, 1, 0, 1} 
// Output : 5

function getConnectedCount(mat){
    return `
    DFS can be done better with recursion as you have to take one node and check till end

    DFS need visited tag so that we do not visit same node again.

    And while recursion one check is whether visited.
    `;
}

module.exports = {
    runAlgo: getConnectedCount
}