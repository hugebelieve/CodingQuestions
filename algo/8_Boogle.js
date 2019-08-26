// source - https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/

// Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
//        boggle[][]   = {{'G', 'I', 'Z'},
//                        {'U', 'E', 'K'},
//                        {'Q', 'S', 'E'}};
//       isWord(str): returns true if str is present in dictionary
//                    else false.

// Output:  Following words of dictionary are present
//          GEEKS
//          QUIZ

function getPresentWords(mat){
    return `
    Take each [i][j] and do DFS with all neighbours recursively
    Every time check is word is in dictionary like "GI" in dic or "GE" in dict
    and continue until you checked all neighbour an their neighbours to the depth possible
    This way you will find all words in boggle
    `;
}

module.exports = {
    runAlgo: getPresentWords
}