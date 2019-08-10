// Source - https://www.youtube.com/watch?v=zGv3hOORxh0

//Rectangles with bottom left and top right coordinated
// Input {"rect1":[{"x":2,"y":1},{"x":5,"y":5}], "rect2":[{"x":3,"y":2},{"x":5,"y":7}]}

// Output Area 3*2 = 5; if not overlapping false


var findOverlapArea = function({rect1, rect2}){

    let xDistance = findOverlapDistance(rect1[0].x,rect2[0].x,rect1[1].x,rect2[1].x);
    if(xDistance<=0) return "Rectangles not overlapping!";
    let yDistance = findOverlapDistance(rect1[0].y,rect2[0].y,rect1[1].y,rect2[1].y);
    if(yDistance<=0) return "Rectangles not overlapping!";

    return "Area " + xDistance*yDistance;
}

var findOverlapDistance = (r1x1, r2x1, r1x2, r2x2)=>{

    let leftPoint = Math.max(r1x1,r2x1);
    let rightPoint = Math.min(r1x2,r2x2);

    return rightPoint-leftPoint;
}

module.exports = {
    runAlgo: findOverlapArea
}