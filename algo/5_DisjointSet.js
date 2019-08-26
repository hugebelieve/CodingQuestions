// Source - https://www.geeksforgeeks.org/union-find/

// check unidirectional graph contains cycle
// using Disjoint Set

function checkCycle(mat){
    return `
    Disjoint Sets are sets whole elements are not related to each other
    How we can do this in JS is by making a common parent
    disJointSet = {A: [A,2], B: [A,0], C: [A,0], F:[G,0], G:[G,1]} -> form [pointed,rank]
    Here we can see [A*,B,C] and [G*,F] as two disjoint sets

    So first all vertex will have own set [selfPoint, 0]
    So now you through all vertex and set value of pointing parent 
    Combining two parent give preference to higher rank vertex
    (while setting the combining try to set direct parent for better performance)
    Then if you find a ege/path with its both end vertices in same set you stop and return cyclic

    **This problem can also be solved using DFS by checking if visited
    `;
}

module.exports = {
    runAlgo: checkCycle
}