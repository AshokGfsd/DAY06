
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }

}


let movie = new Movie("Casino Royale", "Eon Productions", "PG-13")
console.log(`Title : ${movie.title}
Studio : ${movie.studio}
Rating : ${movie.rating}`)