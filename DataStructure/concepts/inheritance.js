import { spawnSync } from "child_process";

// source - https://www.youtube.com/watch?v=MfxBfRD0FVU

class Particle {
    constructor(speed){
        this.speed = speed;
    }

    setRadius(rad){
        this.rad = rad;
    }

    getSpeed(){
        return this.speed;
    }
}

class RoundP extends Particle {
    constructor(speed){
        super(speed);
    }
}

class SquareP extends Particle {
    constructor(speed){
        super(speed);
    }

    setRadHeight(rad, height){
        super.setRadius(rad);
        this.height = height
    }
}

var createClass = ()=>{
    let a = new RoundP(10);
    a.setRadius(12);
    
    let b = new SquareP(10);
    b.setRadHeight(12,13);
    
    return {a,b};
}

module.exports = {
    runAlgo: createClass
}

