class Person {
    constructor(fname, lname, gender, DOB, phoneNo, bloodGrp, city, country){
        this.fname=fname,
        this.lname=lname,
        this.gender=gender,
        this.DOB=DOB,
        this.phoneNo=phoneNo,
        this.bloodGrp=bloodGrp,
        this.city=city,
        this.country=country
    } 
}

let person1 = new Person("John", "Deo", "male", "30-11-1995", "9988776655", "B+", "Chennai", "India")
console.log(person1)