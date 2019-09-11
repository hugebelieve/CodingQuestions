// Input
a1= [2,6,9,11,13,17]
a2= [3,6,7,10,13,18]
a3= [4,5,6,9,11,13]

// Output [6,13]

// findIntersection({a1,a2,a3});

function findIntersection({a1,a2,a3}){

    let pt1 = 0, pt2 = 0, pt3 = 0;
    let result = [];

    while( pointerValid({a1,a2,a3, pt1,pt2,pt3}) ){
        if(a1[pt1]==a2[pt2] && a2[pt2]==a3[pt3]){
            result.push(a1[pt1]);
            pt1++;pt2++;pt2++;
        }else{
            // increment lesser
            if( a1[pt1]<a2[pt2] && a1[pt1]<a3[pt3] ) pt1++;
            else if( a2[pt2]<a3[pt3] ) pt2++;
            else pt3++;
        }
    }
    return result;
}

function pointerValid({a1,a2,a3, pt1,pt2,pt3}){
    return !(pt1>=a1.length || pt2>=a2.length || pt3>=a3.length);
}