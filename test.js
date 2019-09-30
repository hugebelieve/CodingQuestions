const fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, contents) {
    let result = getTimes([5,0,0,1],[0,0,1,1]);
    console.log(result);
});

function getTimes2(time, direction) {
    // Write your code here
    let zip = []; // [man, time, direction]
    time.forEach((t,i)=>zip.push([i,t,direction[i]]));
    zip = zip.sort((a,b)=>a[1]-b[1]);

    let passA = new Array(time.length);

    let lastT = 0;
    let lastPass = -1;
    let remains = []; // [man, time, direction]
    
    while(zip.length>0){
        while(zip.length>0 && zip[0][1]==lastT){
            let item = zip.shift();
            remains.push([item[0], item[1], item[2]]);
        }
        if(remains.length>0){
            let findCheck = 1;
            if(lastPass==0) findCheck = 0;

            let findIndex = remains.findIndex((val)=>val[2]==findCheck);
            if(findIndex<0) findIndex=0;

            let allowedP = remains.splice(findIndex,1)[0];
            passA[allowedP[0]] = Math.max(allowedP[1],lastT);
            lastPass = allowedP[2];
        }
        lastT++;
    }

    //clear remains 
    remains.forEach((item)=>{
        passA[item[0]] = Math.max(item[1],lastT);
    });

    console.log(passA);
    return passA;

}

function getTimes(time, direction) {
    // Write your code here

    let passA = new Array(time.length);

    let man = 0;
    let lastT = 0;
    let lastPass = -1;
    let remains = []; // [man, time, direction]
    
    while(time.length>0){
        while(time[0]==lastT && time.length>0){
            remains.push([man, time.shift(), direction.shift()]);
            man++;
        }
        if(remains.length>0){
            let findCheck = 1;
            if(lastPass==0) findCheck = 0;

            let findIndex = remains.findIndex((val)=>val[2]==findCheck);
            if(findIndex<0) findIndex=0;

            let allowedP = remains.splice(findIndex,1)[0];
            passA[allowedP[0]] = Math.max(allowedP[1],lastT);
            lastPass = allowedP[2];
        }
        lastT++;
    }

    //clear remains 
    remains.forEach((item)=>{
        passA[item[0]] = Math.max(item[1],lastT);
    });

    console.log(passA);
    return passA;

}