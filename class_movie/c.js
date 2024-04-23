
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    
    get PG(){
        let movie = [];
        if(this.rating == "PG"){
           movie.push(this.title);
        }
        return movie;
    }
}

let movie = new Movie("Jai Bhim", "Amazon prime");
  console.log(movie.PG);
