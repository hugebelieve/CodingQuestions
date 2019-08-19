// Source - https://www.hackerrank.com/challenges/determining-dna-health/problem

// Input - 


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

    inputs.forEach((eachInput)=>{
        const first = eachInput.first;
        const last = eachInput.last;
        const d = eachInput.d;

        let health = 0;

        for(let i=first; i<=last; i++){
            let eachGene = genes[i];
            for(let j=0;j<=d.length-eachGene.length;j++){
                if(d.substr(j,eachGene.length)==eachGene){
                    health += healthA[i];
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


module.exports = {
    runAlgo: determineHealth
}