// The Codejamon monsters talk in enciphered messages. Here is how it works:

// Each kind of monster has its own unique vocabulary: a list of V different words consisting only of lowercase English letters. 
// When a monster speaks, it first forms a sentence of words in its vocabulary; the same word may appear multiple times in a sentence. Then, it turns the sentence into an enciphered string, as follows:

// Randomly shuffle each word in the sentence.
// Remove all spaces.
// Understanding the monsters can bring you huge advantages, so you are building a tool to do that. 
// As the first step, you want to be able to take an enciphered string and determine how many possible original sentences could have generated that enciphered string. 
// For example, if a monster's vocabulary is 
// ["this", "is", "an", "a", "monster", "retsnom"],  <<<<=====
// and it speaks the enciphered string "ishtsiarestmon", there are four possible original sentences:
// "is this a monster"
// "is this a retsnom"
// "this is a monster"
// "this is a retsnom"
// You have S enciphered strings from the same monster. For each one, can you figure out the number of possible original sentences?

// IMPORTANT: Since the output can be a really big number, we only ask you to output the remainder of dividing the result by the prime 109 + 7 (1000000007).


//input - ishtsiarestmon


var getCombination =  function({vocalA, cipher}){ //ishtsiaanrestmon
    cipher = ""+cipher;
    let sortVocabMap = {};
    let wordLengthMap = {};
    vocalA.forEach(element => {
        let sElement = element.split("");
        sElement = sElement.sort((a,b)=>a>b).join("");

        if(!sortVocabMap[sElement]){
            sortVocabMap[sElement] = [];
        }
        sortVocabMap[sElement].push(element);

        if(!wordLengthMap[sElement.length]){
            wordLengthMap[sElement.length] = [];
        }
        if(!wordLengthMap[sElement.length].includes(sElement)){
            wordLengthMap[sElement.length].push(sElement);
        }
    });

    let lengthA = Object.keys(wordLengthMap).map(item=>Number(item));

    //wordLengthMap = { 1: ["a"], 7: ["emnorst"], 2: ["is","an"] }
    let mapOfVocabPosition = checkAllLengthOfCipher(0, 0, lengthA, wordLengthMap, cipher, {});
    // mapOfVocabPosition = { "is" : { 0:1 , 4:5} , "a": { 6: 6} }

    return returnCombinationOutput(0, sortVocabMap, mapOfVocabPosition, cipher, []);
}

var returnCombinationOutput =( start, sortVocabMap, mapOfVocabPosition, 
                                        cipher, resultStrA, finalResult = []) =>{
    //string can start with these words only
    let nextTargetWord = Object.keys(mapOfVocabPosition).reduce((acc, key)=>{
        if( mapOfVocabPosition[key][start] ){ //if start object present
            acc.push(key); //push "is"
        }
        return acc;
    },[]);

    for(let i=0; i<nextTargetWord.length; i++){
        let current = [...resultStrA,nextTargetWord[i]];
        if(current.join("").length==cipher.length){
            finalResult = finalResult.concat(setProperWords(0,current,sortVocabMap, [],[]));
        }else{
            let allRemainingWord = returnCombinationOutput(
                start+nextTargetWord[i].length, sortVocabMap,
                mapOfVocabPosition, cipher, current
                );
            finalResult = finalResult.concat(allRemainingWord);
        }
    }
    return finalResult;
}

var setProperWords = (wordIndex,sentence,sortVocabMap, eachLoop, result=[])=>{
    let actualWordArray = sortVocabMap[sentence[wordIndex]];
    for(let j=0; j<actualWordArray.length;j++){
        let actualWord = actualWordArray[j];
        let current = [...eachLoop,actualWord];
        if(current.length==sentence.length){
            result = result.concat([current.join(" ")]);
        }else{
            result = result.concat( setProperWords(wordIndex+1,sentence,sortVocabMap,current) );
        }
    }
    return result;
}

var checkAllLengthOfCipher =  function(start, lengthMapIndex, lengthA, wordLengthMap, cipher, result){
    let lengthEnd = start+Number(lengthA[lengthMapIndex]);
    let checkStr = cipher.substring(start,lengthEnd);
    checkStr = checkStr.split("");
    checkStr = checkStr.sort((a,b)=>a>b).join("");
    if( wordLengthMap[lengthA[lengthMapIndex]].includes(checkStr) ){
        //present
        if(!result[checkStr]){
            result[checkStr] = {};
        }
        result[checkStr][start] = start+lengthA[lengthMapIndex]; // position - { start: end }
    }
    if(lengthMapIndex<lengthA.length-1){
        lengthMapIndex++; //check for other length in same start of cipher
    }else if(start<cipher.length-1){
        lengthMapIndex = 0; //length map reset now
        start++; //start from next letter as substring
    }else{
        return result; //nothing to increment all done
    }

    return checkAllLengthOfCipher(start, lengthMapIndex, lengthA, wordLengthMap, cipher, result);
}



module.exports = {
    runAlgo: getCombination
}