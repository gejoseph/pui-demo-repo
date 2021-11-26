// global variables

var filmimages = ["fight-club.png", "dunkirk-art.png", "clockwork-orange-art.png", 
                    "inception-art.png", "frances-ha-art.png", "call-me-by-your-name-art.png", "psycho-art.png"]

class film {
    constructor(name, rating, genres, director, 
        screenplay, producers, cast, cinematography, 
        releasedate, runningtime, country, language, budget, 
        boxoffice, poster, availability, quote, bechdel, artposter, gallery){

        this.name = name;
        this.rating = rating;
        this.genres = genres;
        this.director = director;
        this.screenplay = screenplay;
        this.producers = producers;
        this.cast = cast;
        this.cinematography = cinematography;
        this.releasedate = releasedate;
        this.runningtime = runningtime;
        this.country = country;
        this.language = language;
        this.budget = budget;
        this.boxoffice = boxoffice;
        this.poster = poster;
        this.availability = availability;
        this.quote = quote;
        this.bechdel = bechdel;
        this.artposter = artposter;
        this.gallery = gallery;
    }
}

class review {
    constructor(film, quote) {
        this.film = film;
        this.quote = quote;
    }
}

const FightClub = new film("Fight Club", "4.9", ["Action", "Thriller", "Drama", "Comedy", "Crime"], "David Fincher", "Jim Uhls", 
                    "Art Linson, Ce&aacute;n Chaffin, Ross Grayson Bell", 
                    "Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf Aday", "Jeff Cronenweth", "October 15, 1999", 
                    "139", "United States", "English", "63 million", "101.2 million", "fight-club.png", ["HBO Max", "Amazon Prime"], 
                    "we buy things we don't need with money we don't have for people we don't like", "X", "fight-club-art.png", ["fight-club-1.png", "fight-club-2.png"]);
const TheShawshankRedemption = new film("The Shawshank Redemption", "4.7", ["Drama"], "Frank Darabont", "Frank Darabont", 
                                "Niki Marvin", "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler, Clancy Brown, Gil Bellows, James Whitmore", 
                                "Roger Deakins", "September 23, 1994", "142", "United States", "English", "25 million", "58.3 million", 
                                "shawshank-redemption.png", ["HBO Max"], "Get Busy Living, Or Get Busy Dying.", "X");

var films = [FightClub, TheShawshankRedemption];



var genres = ["Action", "Adventure", "Crime", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "International", "Mystery", "Romance", "Satire", "Sci-Fi", "Thriller"];

var platforms = ["Amazon Prime", "Disney+", "HBO Max", "Hulu", "Netflix", "YoutubeTV"]