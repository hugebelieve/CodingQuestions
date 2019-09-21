// source - https://www.hackerrank.com/challenges/matrix/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=graphs

// Input
// 5 cities
// Roads
// [
//     [2,1,8],
//     [1,0,5],
//     [2,4,5],
//     [1,3,4]
// ]
// Machines position
// [2,4,0]
// find which roads to remove so that machines are not connected at all
// TIme for removal is fixed "6"

function timeForRemoval({roads,machines}){
    let connection = {};
    roads.forEach((road)=>{
        if(connection[road[0]]==undefined){
            connection[road[0]] = new Set(); //inside this [end,time]
        }
        if(connection[road[1]]==undefined){
            connection[road[1]] = new Set();
        }

        connection[road[0]].add(road[1]+";"+road[2]);
        connection[road[1]].add(road[0]+";"+road[2]);
    });

    let allMachines = {};
    machines.forEach((machine)=>allMachines[machine]=true);

    let totalDeleteTime = 0;

    machines.forEach((machine)=>{
        let newTime = DFS(connection,machine, allMachines);
        totalDeleteTime += newTime;
    });

    return totalDeleteTime;
}

function DFS(connection, machine, allMachines){
    // DFS to check one route at a time

    let visited = {};
    let stack = [];
    stack.push([machine,[]]); //machine and path( [{roadS:1,roadE:2,time:6}] )

    let deleteTime = 0;

    while(stack.length>0){

        let [target, path] = stack.pop();

        if(visited[target]!=true && target!=machine && allMachines[target]==true){
            // new machine connected
            path = path.sort((a,b)=>a.time-b.time); //asc
            if(path.length>0){
                let {roadS,roadE,time} = path[0];
                connection[roadS].delete(roadE+";"+time);
                connection[roadE].delete(roadS+";"+time);
                deleteTime += time;
            }
        }
        visited[target] = true;

        // push neighbours
        for(let endCityTime of connection[target]){
            let [endCity,time] = endCityTime.split(";").map(val=>Number(val));
            if(visited[endCity]!=true){
                stack.push([endCity, path.concat({roadS:target,roadE:endCity,time}) ]);
            }
        }
    }

    return deleteTime;
}

module.exports = {
    runAlgo: timeForRemoval
}