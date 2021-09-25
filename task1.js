// Problem a
class Movie {
    constructor(title, studio, rating="PG"){
        this.title=title,
        this.studio=studio,
        this.rating=rating
    }
    //Porblem b 
    getPG(movies){
        console.log(movies.filter((movie)=>movie.rating=="PG").map((movie)=>movie.title))
    }
}

// Problem d
const Casino_Royale = new Movie("Casino Royale", "Eon Productions", "PG13");
const tangled = new Movie("tangled", "tangled Productions");
const cars = new Movie("cars", "cars Productions");
const bolt = new Movie("bolt", "bolt Productions", "PG");

let movies=[]
movies.push(Casino_Royale)
movies.push(tangled)
movies.push(cars)
movies.push(bolt)

console.log(movies)

// Problem c
console.log(bolt.getPG(movies))