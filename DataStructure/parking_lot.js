//source - https://www.youtube.com/watch?v=DSGsa0pu8-k

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

class World {
    constructor(){
        this.allCarMap = {};
    }

    addCar(type){
        let vehicle = new Vehicle(Object.keys(this.allCarMap).length,type);
        this.allCarMap[vehicle.plate] = vehicle;
    }

    getCarByPlate(plate){
        return this.allCarMap[plate];
    }
}

class ParkingLot {
    constructor(name){
        this.name = name;
        this.spots ={
            "S" : [], //only pop and push so acts as stack
            "M" : [],
            "L" : [],
            "XL": []
        }

        this.vehicleMap = {};
    }

    addSpot(type){
        if(this.spots[type]){
            let spot = new Spot(uuidv4(),type);
            this.spots[type].push(spot);
        }
    }

    parkVehicle(vehicle){
        let spot = this.findSpot(vehicle.type);
        if(spot==null){
            return "Cannot park your vehicle because of space constraint!";
        }
        vehicle.park(spot);
        this.vehicleMap[vehicle.plate] = vehicle;
        return "Successfully Parked!";
    }

    removeVehicle(plate){
        if(!this.vehicleMap[plate]){
            return "Sorry, Your vehicle does now present in this parking lot!";
        }
        let vehicle = this.vehicleMap[plate];
        delete this.vehicleMap[vehicle.plate];
        let spot = vehicle.unPark(); //remove spot from car class
        this.spots[spot.type].push(spot); //add spot to the stack again
        return vehicle; //give vehicle back now
    }

    findSpot(type){
        switch(type){
            case "S": {
                if(this.spots["S"].length>0){
                    return this.spots["S"].pop();
                }
            }
            case "M": {
                if(this.spots["M"].length>0){
                    return this.spots["M"].pop();
                }
            }
            case "L": {
                if(this.spots["L"].length>0){
                    return this.spots["L"].pop();
                }
            }
            case "XL": {
                if(this.spots["XL"].length>0){
                    return this.spots["XL"].pop();
                }
            }
            default: {
                return null;
            }
        }
    }
}

class Vehicle {
    constructor(plate,type){
        this.plate = plate;
        this.type = type;
        this.filledSpot = [];
    }
    park(spot){
        this.filledSpot.push(spot); //in future if multiple spots is used for same vehicle
    }
    unPark(){
        return this.filledSpot.pop();
    }
}

class Spot {
    constructor(id,type){
        this.id = id;
        this.type = type; // S,M,L,XL
    }
}



var runProgram = function({spots, cars, plate}){  // {"spots": {"S":5,"M":10,"L":12,"XL":7}, "cars": {"S":10,"M":6,"L":9,"XL":8} , "plate": 4 }
    let world = new World();
    let parkingLot = new ParkingLot("Main");
    Object.keys(spots).forEach((key)=>{
        for(let i=0; i<spots[key]; i++){
            parkingLot.addSpot(key); //adding all spots
        }
    });

    Object.keys(cars).forEach((key)=>{
        for(let i=0; i<cars[key]; i++){
            world.addCar(key); //adding all cars
        }
    });


    //add Car
    parkingLot.parkVehicle(world.getCarByPlate(plate));

    //remove car
    parkingLot.removeVehicle(plate);

    return "Done";
}

module.exports = {
    runAlgo: runProgram
}