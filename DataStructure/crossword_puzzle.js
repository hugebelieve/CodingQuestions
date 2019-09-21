// Source - https://www.hackerrank.com/challenges/crossword-puzzle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking

// Input - 
//  puzzle = [
//     '+-++++++++',
//     '+-++-+++++',
//     '+-------++',
//     '+-++-+++++',
//     '+-++-+++++',
//     '+-++-+++++',
//     '++++-+++++',
//     '++++-+++++',
//     '++++++++++',
//     '----------'
// ], 

// hint  = 'CALIFORNIA;NIGERIA;CANADA;TELAVIV'

//Output - 
// +C++++++++
// +A++T+++++
// +NIGERIA++
// +A++L+++++
// +D++A+++++
// +A++V+++++
// ++++I+++++
// ++++V+++++
// ++++++++++
// CALIFORNIA


// Code starts here
function crosswordPuzzle({crossword, hints}) {
    hints = hints.split(";");
    crossword = crossword.map(val=>val.split(""));
    let maxI = crossword.length;
    let maxJ = crossword[0]?crossword[0].length:0;

    let hintObj = {};
    hints.forEach(hint => {
        if(hintObj[hint.length]==undefined){
            hintObj[hint.length] = [];
        }
        hintObj[hint.length].push(hint);
    });

    let result = checkAndSet(crossword, hintObj, maxI, maxJ);
    if(!result){
        result = crossword;
    }
    result = result.map(val=>val.join(""));
    return (result?result:crossword).reduce((prev,val)=>prev+val+"\n", "");
}

function checkAndSet(crossword, hintObj, maxI, maxJ){

    for(let i=0; i< crossword.length; i++){
        let row = crossword[i];
        for(let j=0; j<=crossword[i].length; j++){
            if(row[j]=="-"){
                let {stackTrack, length, trueForH, start, end} = getEmptyLength(crossword, i, j, maxI, maxJ);

                if(hintObj[length])
                for(let [index,hint] of hintObj[length].entries()){
                    if(!checkEquality(hint, stackTrack)){
                        continue;
                    }
                    let hintIndex = 0;
                    for(let k=start; k<=end; k++){
                        crossword[trueForH?i:k][trueForH?k:j] = hint[hintIndex];
                        hintIndex++;
                    }
                    let removed = hintObj[length].splice(index,1);
                    let result = checkAndSet(crossword, hintObj, maxI, maxJ);
                    if(result!=null){
                        return result;
                    }
                    hintObj[length].splice(index, 0, removed[0]); //push back
                    hintIndex = 0;
                    for(let k=start; k<=end; k++){
                        crossword[trueForH?i:k][trueForH?k:j] = stackTrack[hintIndex];
                        hintIndex++;
                    }
                }
                return null;
            }
        }
    }
    return crossword;
}

function checkEquality(hint, stackTrack){
    stackTrack = stackTrack.reduce((prev,value,index)=>{
        if(value=="-"){
            return prev+hint[index];
        }else{
            return prev+value;
        }
    },"");
    return stackTrack===hint;
}

function getEmptyLength(crossword, startI, startJ, maxI, maxJ){

    let filledSpace = ["+","X"];

    // left
    let stackTrack = [];
    let start = startJ;
    while(start>=0 && !filledSpace.includes(crossword[startI][start]) ){
        stackTrack.splice(0,0,crossword[startI][start]);
        start--;
    }
    start++;
    // right
    let end = startJ+1;
    while(end<maxJ && !filledSpace.includes(crossword[startI][end]) ){
        stackTrack.push(crossword[startI][end]);
        end++;
    }
    end--;

    let stackTrack2 = [];
    let start2 = startI;
    // top
    while(start2>=0 && !filledSpace.includes(crossword[start2][startJ]) ){
        stackTrack2.splice(0,0,crossword[start2][startJ]);
        start2--;
    }
    start2++;
    // bottom
    let end2 = startI+1;
    while(end2<maxI && !filledSpace.includes(crossword[end2][startJ]) ){
        stackTrack2.push(crossword[end2][startJ]);
        end2++;
    }
    end2--;

    let trueForH = stackTrack.length>stackTrack2.length;
    let finalST = trueForH?stackTrack:stackTrack2;
    return {trueForH , stackTrack: finalST,
            length: finalST.length,
            start: trueForH?start:start2, end: trueForH?end:end2};
}

module.exports = {
    runAlgo: crosswordPuzzle
}