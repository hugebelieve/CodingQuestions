// source - https://www.hackerrank.com/challenges/queens-attack-2

// Input -
// {n: 5, r_q: 4, c_q: 3, obstacles: [[5,5],[4,2],[2,3]] }

// Output - 10



function queensAttack({n, r_q, c_q, obstacles}) {

    let obstacleMap = {};
    obstacles.forEach((value)=>{
        obstacleMap[value[0]+";"+value[1]] = true;
    });

    return recurQueen(n,r_q,c_q,obstacleMap);
}

function recurQueen(n,y,x,obstacleMap){

    let count = 0;
    // go in eight directions

    //left
    let i=y, j=x-1;
    while(obstacleMap[i+";"+j]==undefined && j>0){
        count++;
        j = j-1;
    }

    //right
    i=y, j=x+1;
    while(obstacleMap[i+";"+j]==undefined && j<=n){
        count++;
        j = j+1;
    }
    
    //top
    i=y+1, j=x;
    while(obstacleMap[i+";"+j]==undefined && i<=n){
        count++;
        i = i+1;
    }

    //bottom
    i=y-1, j=x;
    while(obstacleMap[i+";"+j]==undefined && i>0){
        count++;
        i = i-1;
    }

    //left-bottom
    i=y-1, j=x-1;
    while(obstacleMap[i+";"+j]==undefined && j>0 && i>0){
        count++;
        j = j-1;
        i = i-1;
    }

    //left-top
    i=y+1, j=x-1;
    while(obstacleMap[i+";"+j]==undefined && j>0 && i<=n){
        count++;
        j = j-1;
        i = i+1;
    }

    //right-bottom
    i=y-1, j=x+1;
    while(obstacleMap[i+";"+j]==undefined && j<=n && i>0){
        count++;
        j = j+1;
        i = i-1;
    }

    //right-top
    i=y+1, j=x+1;
    while(obstacleMap[i+";"+j]==undefined && j<=n && i<=n){
        count++;
        j = j+1;
        i = i+1;
    }

    return count;
}

module.exports = {
    runAlgo: queensAttack
}