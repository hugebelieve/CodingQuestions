// source - https://leetcode.com/problems/snakes-and-ladders/?envType=study-plan-v2&envId=top-interview-150


// Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
// Output: 4
// Explanation: 
// In the beginning, you start at square 1 (at row 5, column 0).
// You decide to move to square 2 and must take the ladder to square 15.
// You then decide to move to square 17 and must take the snake to square 13.
// You then decide to move to square 14 and must take the ladder to square 35.
// You then decide to move to square 36, ending the game.
// This is the lowest possible number of moves to reach the last square, so return 4.


const boardChecker = [];

function ijFromNumber(grid, number) {
    const numberToIndex = number - 1;
    const I = Math.floor(numberToIndex/grid[0].length);
    const newI = grid.length - I - 1;
    let newJ = numberToIndex%grid[0].length;
    if (I%2 !== 0) {
        // reverse column
        newJ = grid[0].length - newJ - 1;
    }

    // shortestCount
    if (!boardChecker[newI]) {
        boardChecker[newI] = [];
    }
    boardChecker[newI][newJ] = number;
    // test
    
    return {i: Math.max(newI, 0), j: newJ}
}


function checkForSnakerLadder(grid, moveNumber) {
    const maxLength = grid[0].length*grid.length;
    if (moveNumber > maxLength) {
        return maxLength;
    }
    const {i, j} = ijFromNumber(grid, moveNumber);
    const number = grid[i][j];
    if (number && number > -1) {
        // movement
        return number;
    }
    return moveNumber
}

function BFSSnakes(board) {
    const maxLength = board[0].length*board.length;
    let shortestCount = Infinity;
    const bfsQue = [{move: 1, count: 0}];
    const visitedNumber = {};
    while(bfsQue.length) {
        const {move, count} = bfsQue.shift();
        if (!visitedNumber[move]) {
            visitedNumber[move] = true;
            const newMove = checkForSnakerLadder(board, move);
            if (newMove === maxLength) {
                shortestCount = Math.min(shortestCount, count);
            }
            for(let i=1; i<=6; i++) {
                const nextMove = newMove + i;
                if (!visitedNumber[nextMove]) {
                    bfsQue.push({move: nextMove, count: count+1});
                }
            }   
        }
    }
    return shortestCount;
}

var snakesAndLadders = function(board) {
    const result = BFSSnakes(board)
    console.log("board", boardChecker)
    console.log("result", result)
    return result === Infinity ? -1 : result;
};

module.exports = {
    runAlgo: snakesAndLadders
}