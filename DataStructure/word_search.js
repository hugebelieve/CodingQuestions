// source - https://leetcode.com/problems/word-search/

// Input -
// [
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
// ]
// Word - "ABCCED"

// Output - true

var wordSearch = ({board,word})=>{

    let usedIndexes = {};
    let wordA = word.split("");

    for(let i=0; i<board.length; i++){
        let boardRow = board[i];
        for(let j=0; j< boardRow.length; j++){
            if(boardRow[j]==wordA[0]){
                usedIndexes = {};
                usedIndexes[i+";"+j] = boardRow[j];
                let result = recFindWord(i,j, 0,board,wordA,usedIndexes);
                if(result != -1){
                    return {found:result, usedIndexes};
                }
            }
        }
    }

    return false;
}

var recFindWord = function(startI,startJ, currentIndex,board,wordA,usedIndexes){
    let nextIndex = currentIndex+1;
    if(nextIndex>=wordA.length){
        return true; //full word found
    }
    let nextWord = wordA[nextIndex];

    //checkRight
    let nextI = startI + 0;
    let nextJ = startJ + 1;
    if(nextI<board.length && nextJ<board[nextI].length && board[nextI][nextJ]==nextWord && !usedIndexes[nextI+";"+nextJ]){ //check is already used Index
        //found next word
        usedIndexes[nextI+";"+nextJ] = board[nextI][nextJ];
        let nextWordCheck = recFindWord(nextI,nextJ, nextIndex,board,wordA,usedIndexes);
        if(nextWordCheck==-1){
            delete usedIndexes[nextI+";"+nextJ]; //do not consider used
        }else{
            return true; //found the next word
        }
    }


    //checkleft
    nextI = startI + 0;
    nextJ = startJ - 1;
    if(nextI<board.length && nextI>-1 && nextJ>-1 && nextJ<board[nextI].length && board[nextI][nextJ]==nextWord && !usedIndexes[nextI+";"+nextJ]){ //check is already used Index
        //found next word
        usedIndexes[nextI+";"+nextJ] = board[nextI][nextJ];
        let nextWordCheck = recFindWord(nextI,nextJ, nextIndex,board,wordA,usedIndexes);
        if(nextWordCheck==-1){
            delete usedIndexes[nextI+";"+nextJ]; //do not consider used
        }else{
            return true; //found the next word
        }
    }

    //checkbottom
    nextI = startI + 1;
    nextJ = startJ + 0;
    if(nextI<board.length && nextI>-1 && nextJ>-1 && nextJ<board[nextI].length && board[nextI][nextJ]==nextWord && !usedIndexes[nextI+";"+nextJ]){ //check is already used Index
        //found next word
        usedIndexes[nextI+";"+nextJ] = board[nextI][nextJ];
        let nextWordCheck = recFindWord(nextI,nextJ, nextIndex,board,wordA,usedIndexes);
        if(nextWordCheck==-1){
            delete usedIndexes[nextI+";"+nextJ]; //do not consider used
        }else{
            return true; //found the next word
        }
    }

    
    //checktop
    nextI = startI - 1;
    nextJ = startJ + 0;
    if(nextI<board.length && nextI>-1 && nextJ>-1 && nextJ<board[nextI].length && board[nextI][nextJ]==nextWord && !usedIndexes[nextI+";"+nextJ]){ //check is already used Index
        //found next word
        usedIndexes[nextI+";"+nextJ] = board[nextI][nextJ];
        let nextWordCheck = recFindWord(nextI,nextJ, nextIndex,board,wordA,usedIndexes);
        if(nextWordCheck==-1){
            delete usedIndexes[nextI+";"+nextJ]; //do not consider used
        }else{
            return true; //found the next word
        }
    }

    return -1;
}

module.exports = {
    runAlgo: wordSearch
}