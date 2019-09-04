// Source - https://www.hackerrank.com/challenges/determining-dna-health/problem

// Sample Input
// 6
// a b c aa d b
// 1 2 3 4 5 6
// 3
// 1 5 caaab
// 0 4 xyz
// 2 4 bcdybc

// Sample Output
// 0 19

var Node = class {
    constructor() {
        this.keys = new Map();
        this.healthMap = new Map(); // map of healthIndex and healthValue
    }
}

var Trie = class {
    constructor(WordsArray, HealthValueArray) {
        this.root = new Node();
        this.WordsArray = WordsArray;
        this.HealthValueArray = HealthValueArray;
    }
    AddWord() {
        this.WordsArray.forEach((Word, WordIndex) => {
            var charArray = [...Word];
            var node = this.root;
            charArray.forEach((char, index) => {
                if (!node.keys.has(char)) {
                    let newNode = new Node();
                    node.keys.set(char, newNode);
                    node = newNode;
                }else{
                    node = node.keys.get(char);
                }
                if(index == charArray.length - 1){ //set health value to next empty node
                    //last letter
                    node.healthMap.set(WordIndex,this.HealthValueArray[WordIndex]);
                }
            });
        });
    }
    GeneValueCalculator(input) { // {first,last,d}
        let max = 0;
        let min = Infinity;

        input.forEach((strandObj)=>{
            const first = strandObj.first;
            const last = strandObj.last;
            const d = strandObj.d;

            let letterA = d.split("");
            let health = 0;

            for(let i=0; i<letterA.length;i++){
                let node = this.root;
                let whileLoopSum = i;
                while(true){
                    if(whileLoopSum>=letterA.length){
                        break;
                    }
                    if(node.keys.has(letterA[whileLoopSum])){
                        node = node.keys.get(letterA[whileLoopSum]);
                        if(node.healthMap.size>0){
                            //this node is also an end node
                            node.healthMap.forEach((healthValue,heathIndex)=>{
                                if(heathIndex>=first && heathIndex<=last){
                                    health = health + healthValue;
                                }
                            });
                        }
                        whileLoopSum++;
                    }else{
                        break;
                    }
                }
            }

            if(health>max){
                max = health;
            }
            if(health<min){
                min = health;
            }
        });
        return min+" "+max;
    }
}

function determineHealth2(strIn){
    strIn = strIn.str;
    let allLines = strIn.split("\n");

    const n = parseInt(allLines[0], 10);
    const genes = allLines[1].trim().split(' ');
    const healthA = allLines[2].trim().split(' ').map(healthTemp => parseInt(healthTemp, 10));
    const s = parseInt(allLines[3].trim(), 10);

    let inputs = [];

    for (let sItr = 4; sItr < 4+s; sItr++) {
        const firstLastd = allLines[sItr].trim().split(' ');

        const first = parseInt(firstLastd[0], 10);
        const last = parseInt(firstLastd[1], 10);
        const d = firstLastd[2];
        inputs.push({first,last,d});
    }

    let c = new Trie(genes, healthA);
    c.AddWord();

    return c.GeneValueCalculator(inputs);
}

function determineHealth(strIn){
    strIn = strIn.str;
    let allLines = strIn.split("\n");

    const n = parseInt(allLines[0], 10);
    const genes = allLines[1].trim().split(' ');
    const healthA = allLines[2].trim().split(' ').map(healthTemp => parseInt(healthTemp, 10));
    const s = parseInt(allLines[3].trim(), 10);

    let inputs = [];

    for (let sItr = 4; sItr < 4+s; sItr++) {
        const firstLastd = allLines[sItr].trim().split(' ');

        const first = parseInt(firstLastd[0], 10);
        const last = parseInt(firstLastd[1], 10);
        const d = firstLastd[2];
        inputs.push({first,last,d});
    }

    let max = 0;
    let min = Infinity;
    let healthFinal = {};

    genes.forEach((eachGene, index)=>{
        inputs.forEach((eachInput)=>{
            const first = eachInput.first;
            const last = eachInput.last;
            const d = eachInput.d;
            if(!healthFinal[d]){
                healthFinal[d] = 0;
            }

            if(index>=first && index<=last){
                for(let j=0;j<=d.length-eachGene.length;j++){
                    if(d.substr(j,eachGene.length)==eachGene){
                        healthFinal[d] += healthA[index];
                    }
                }
                if(healthFinal[d]>max){
                    max = healthFinal[d];
                }
                if(healthFinal[d]<min){
                    min = healthFinal[d];
                }
            }
        });
    });
    return min+" "+max;
}


module.exports = {
    runAlgo: determineHealth2
}