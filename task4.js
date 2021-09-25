class UberCalc {
    constructor(name, pickup, destination, distance, farePerKM){
        this.name=name
        this.pickup=pickup
        this.destination=destination
        this.distance=distance
        this.farePerKM=farePerKM
    }
    fare(){
        return this.distance*this.farePerKM
    }
}
// auto, moto, uberGo, Premier 

const trip1 = new UberCalc("Robin", "Beach road", "PVR theater", 12, 18)
console.log(trip1.fare())