// global variables

// localStorage.clear()

var filmimages = ["fight-club.png", "dunkirk-art.png", "clockwork-orange-art.png", 
                    "inception-art.png", "frances-ha-art.png", "call-me-by-your-name-art.png", "psycho-art.png"]

class film {
    constructor(title, year, stars, directors, writers, companies, budget, boxoffice, contentRating, poster, tagline, language, releasedate, runningtime, plot){

            this.title = title;
            this.year = year;
            this.stars = stars;
            this.directors = directors;
            this.writers = writers;
            this.companies = companies;
            this.budget = budget;
            this.boxoffice = boxoffice;
            this.contentRating = contentRating;
            this.poster = poster;
            this.tagline = tagline;
            this.language = language;
            this.releasedate = releasedate;
            this.runningtime = runningtime;
            this.plot = plot;
    }
}

class review {
    constructor(film, quote, rating, bechdel, availability, review, gallery) {
        this.film = film;
        this.quote = quote;
        this.rating = rating;
        this.bechdel = bechdel;
        this.availability = availability;
        this.review = review; // JSON of the title keys with the content values (ex. cinematography : lorem ipsum .... )
        this.gallery = gallery;
    }
}

class movie {
    constructor(title, year, stars, directors, writers, boxoffice, contentRating, poster, language, releasedate, runningtime, plot, genres, awards, availability) {
        this.title = title;
        this.year = year;
        this.stars = stars;
        this.directors = directors;
        this.writers = writers;
        this.boxoffice = boxoffice;
        this.contentRating = contentRating;
        this.poster = poster;
        this.language = language;
        this.releasedate = releasedate;
        this.runningtime = runningtime;
        this.plot = plot;
        this.genres = genres;
        this.awards = awards
        this.availability = availability
    }
}



const moviesIHaveSeen = ["Fight Club", 
                        "The Shawshank Redemption", 
                        "10 Things I Hate About You", 
                        "The Usual Suspects", 
                        "Call Me By Your Name", 
                        "Primal Fear", 
                        "12 Angry Men", 
                        "V for Vendetta", 
                        "Miss Sloane", 
                        "Destination Wedding", 
                        "Good Will Hunting", 
                        "Bridget Jones",
                        "Moonlight", 
                        "Leon the Professional", 
                        "Black Swan",
                        "Sing Street", 
                        "Game Night", 
                        "Kingsman", 
                        "Crazy Rich Asians",
                        "A Few Good Men", 
                        "Avengers Endgame",
                        "Legally Blonde", 
                        "Ordinary People", 
                        "Parasite", 
                        "Love, Simon", 
                        "About a Boy",
                        "Mad Max Fury Road", 
                        "Mean Girls", 
                        "Train to Busan",
                        "The Godfather", 
                        "About Time", 
                        "Bohemian Rhapsody",
                        "The Shape of Water",  
                        "Mrs. Doubtfire", 
                        "The Italian Job", 
                        "Big Fat Liar",
                        "Star Wars", 
                        "The Anchorman", 
                        "The Guilty",
                        "Night at the Museum",
                        "Dead Poets Society",
                        "1917", 
                        "27 Dresses", 
                        "Gattaca",
                        "Ocean's Eleven", 
                        "The Devil Wears Prada",
                        "La La Land", 
                        "The Adjustment Bureau",
                        "Table 19",  
                        "Scott Pilgrim vs The World",
                        "Meet Joe Black", 
                        "Arrival", 
                        "No Strings Attached", 
                        "Annihilation"]




// FETCHING THE DATA THROUGH THE API IF ITS NOT IN LOCAL STORAGE

if (localStorage.getItem("filmObjects") == null){

    // initialize filmObjects array
    var filmObjects = [];

    // initialize reviewObjects array
    var reviewObjects = []

    // get data from api
    getAPIids()
    console.log("setting the film objects based on local storage")


} else {

    console.log(localStorage.getItem("filmObjects"))
    console.log(localStorage.getItem("reviewObjects"))
    console.log("getting the film objects from local storage")
    var filmObjects = JSON.parse(localStorage.getItem("filmObjects"));
    var reviewObjects = JSON.parse(localStorage.getItem("reviewObjects"));
    
}

// to store ids for each movie for fetching data
const moviesIHaveSeenIds = []

async function searchIMDb(id) {

        var obj;
        var film;
        var rev;
        
        // finds availability
        // setTimeout(() => {
        // fetch("https://streaming-availability.p.rapidapi.com/get/ultra?imdb_id="+ moviesIHaveSeenIds[id] +"&output_language=en", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        //         "x-rapidapi-key": "bac3f22a66msh07e4bd8fa995be0p111d93jsn137611d4c837"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => obj = data)
        // .then(() => console.log(obj))
        
        // // .then(() => console.log(obj.collection.locations.map(val => val.display_name)))
        // // .then(() => availability = obj.collection.locations.map(val => val.display_name))
        // .catch(err => {
        //     console.error(err);
        // }); }, 20);

        // finds the rest of the film info
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=" + moviesIHaveSeenIds[id], {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "bac3f22a66msh07e4bd8fa995be0p111d93jsn137611d4c837"
            }
        })
        .then(response => response.json())
        .then(data => obj = data)
        .then(() => console.log(obj))
        .then(() => film = new movie(obj.Title, obj.Year, obj.Actors, obj.Director, obj.Writer, obj.BoxOffice, 
                                    obj.Rated, obj.Poster, obj.Language, obj.Released, obj.Runtime, obj.Plot,
                                    obj.Genre.split(", "), obj.Awards, []))
        .then(() => rev = new review(film, "", "", "", [], [], []))
        .then(() => console.log(film))
        .then(() => filmObjects[id] = film)
        .then(() => reviewObjects[id] = rev)
        .then(() => localStorage.setItem("filmObjects", JSON.stringify(filmObjects)))
        .then(() => localStorage.setItem("reviewObjects", JSON.stringify(reviewObjects)))
        .catch(err => {
            console.error(err);
        });


        // THE ORIGINAL API I WAS USING IS DOWN :(

        // fetch("https://imdb-api.com/en/API/Title/k_w5r8sycw/" + moviesIHaveSeenIds[id])
        // .then(response => response.json())
        // .then(data => obj = data)
        // .then(() => console.log(obj))
        // .then(() => film = new movie(obj.title, obj.year, obj.stars, obj.directors, obj.writers, obj.companies,
        //                             obj.boxOffice.budget, obj.boxOffice.cumulativeWorldwideGross, 
        //                             obj.contentRating, obj.image, obj.tagline,
        //                             obj.languages, obj.releaseDate, obj.runtimeMins, obj.plot))
        // .then(() => rev = new review(film, null, null, null, [], [], []))
        // .then(() => console.log(film))
        // .then(() => filmObjects[id] = film)
        // .then(() => reviewObjects[id] = rev)
        // .then(() => localStorage.setItem("filmObjects", JSON.stringify(filmObjects)))
        // .then(() => localStorage.setItem("reviewObjects", JSON.stringify(reviewObjects)));
}


async function getAPIids() {
    for (let i = 0; i < moviesIHaveSeen.length; i++){

        var results;

        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+ moviesIHaveSeen[i] +"&r=json&page=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": "bac3f22a66msh07e4bd8fa995be0p111d93jsn137611d4c837"
            }
        })
        .then(response => response.json())
        .then(data => results = data)
        .then(() => console.log(results))
        .then(() => console.log(results.Search[0].imdbID))
        .then(() => moviesIHaveSeenIds[i] = results.Search[0].imdbID)
        .then(() => searchIMDb(i))
        .then(() => console.log(localStorage.getItem("filmObjects")))
        .then(() => console.log(localStorage.getItem("reviewObjects")))
        .catch(err => {
            console.error(err);
        });


        // THE ORIGINAL API I WAS USING IS DOWN :(

        // fetch("https://imdb-api.com/API/SearchMovie/k_w5r8sycw/" + moviesIHaveSeen[i])
        //     .then(response => response.json())
        //     .then(data => results = data)
        //     .then(() => console.log(results))
        //     .then(() => console.log(results.results[0].id))
        //     .then(() => moviesIHaveSeenIds[i] = results.results[0].id)
        //     .then(() => searchIMDb(i));
        
    }
    localStorage.setItem("filmObjects", JSON.stringify(filmObjects))
    localStorage.setItem("reviewObjects", JSON.stringify(reviewObjects))
    console.log(localStorage.getItem("filmObjects"))
    console.log(localStorage.getItem("reviewObjects"))

}







var genres = ["Action", "Adventure", "Crime", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "International", "Mystery", "Romance", "Satire", "Sci-Fi", "Thriller"];

var platforms = ["Amazon Prime", "Disney+", "HBO Max", "Hulu", "Netflix", "YoutubeTV", "Paramount+"]

var contentRatings = ["G", "PG", "PG-13", "R"]


// now that the movie objects have been populated, time to make the reviews!

// ONLY 10 OF THE MOVIES HAVE FULL REVIEWS CURRENTLY

reviewObjects = JSON.parse(localStorage.getItem("reviewObjects"))

if (reviewObjects.length > 0){



// Fight Club
reviewObjects[0].quote = "we buy things we don't need with money we don't have for people we don't like"
reviewObjects[0].availability = ["Amazon Prime"]
reviewObjects[0].rating = 5.0
reviewObjects[0].bechdel = 1
reviewObjects[0].review = [
    ["Where do I even begin?", " With the so casually revelatory narration that somehow in its sardonic monotony and disenfranchise draws you in almost immediately. Or with the entrance of Marla Singer in all her dead set glory, raining on our still unnamed main character's pity party. How about the way Tyler Durden slowly creates an unofficial army  of middle aged men ( + a young Jared Leto) determined to unleash chaos on our materialist society and all of corporate America by selling soap made of liposucted fat. To call this film my favorite movie feels like a trite understatement of the passion I feel towards this cinematic masterpiece of epic proportions. So much so that I'm even breaking the first and only rule of Fight Club by even talking about it."], 
    ["Plot", " As a self-proclaimed pacifist, whenever I express my undying love for this film, people are taken aback, obviously blinded by the title of the film, which promises the trappings of nothing more than Brad Pitt engaging in mischief. Which I suppose is exactly what the film is, but what people don't realize until they watch it is the deep social commentary on our consumerist captivity to capitalism at the hands of our corporate incarcerator (try saying that three times fast). "],
    ["Acting", " Edward Norton is notorious for being very involved in the films he does, even going as so far as to make calls regarding editing and the screenplay (often much to the dismay of others it seems), but I have no qualms in considering his portrayal in this film as the  art of acting in its purest form. From the first words of his narration, I felt submerged into his inner psyche, feeling the insomnia, rage, and distress he so evidently conveyed through every interaction on the screen. His character's lack of personal agency to make active changes to his life felt readily relatable. Brad Pitt's character in turn was meant to represent the manifestation of all carnal, primal urges affecting every facet of his lifestyle— a soap salesman on a proverbial and I guess nonproverbial soapbox. Helena Bonham Carter plays the destitute Marla Singer, who serves as the unlikely, but ultimately pragmatic catalytic cynosure of the film in its late climax despite breeding her own special brand of chaos throughout the bulk of plot."],
    ["Direction + Cinematography", " David Fincher is a god. He refused to have 20th Century Fox to interfere with the process and cherry-picked his collaboraters for this masterpiece, to which I for one am grateful. Every single frame fully captures not only the grit, grime, and neuroticism of its content in coloring and style, but also as a nod or more accurately a shake in the head at the coffee peddler, also contains a Starbuck cup. Every. single. frame. Do I need to say more."],
    ["Overall", " Fight Club is not a cult classic. It is the cult classic. It's a drama. A thriller. A romantic comedy. A coming and leaving of age art piece whose intrigue, satire, and relevance still pervade the film scene today. "]
]
reviewObjects[0].gallery = ["fight-club-1.png", "fight-club-2.png", "fight-club-art.png"]

// The Shawshank Redemption
reviewObjects[1].quote = "Get Busy Living, Or Get Busy Dying"
reviewObjects[1].availability = ["HBO Max"]
reviewObjects[1].rating = 4.9
reviewObjects[1].bechdel = 0
reviewObjects[1].review = [
    ["Review", " is coming soon!!!"]
]
reviewObjects[1].gallery = ["shawshank-redemption-1.png", "shawshank-redemption-2.png", "shawshank-redemption-art.png"]

// 10 Things I Hate About You
reviewObjects[2].quote = "I guess, in this society, being male and an asshole makes you worthy of our time."
reviewObjects[2].availability = ["Disney+", "Amazon Prime"]
reviewObjects[2].rating = 4.9
reviewObjects[2].bechdel = 3
reviewObjects[2].review = [
    ["Review", " is coming soon!!!"]
]
reviewObjects[2].gallery = ["10-things-i-hate-about-you-1.jpeg", "10-things-i-hate-about-you-2.jpeg", "10-things-i-hate-about-you-3.jpeg", "10-things-i-hate-about-you-4.jpeg"]

// The Usual Suspects
reviewObjects[3].quote = "The Greatest Trick The Devil Ever Pulled Was Convincing The World He Did Not Exist."
reviewObjects[3].availability = ["Amazon Prime"]
reviewObjects[3].rating = 4.8
reviewObjects[3].bechdel = 0
reviewObjects[3].review = [
    ["Review", " is coming soon!!!"]
]
reviewObjects[3].gallery = ["the-usual-suspects-1.jpg", "the-usual-suspects-2.jpg", "the-usual-suspects-3.jpeg"]

// Call Me By Your Name
reviewObjects[4].quote = "We rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of thirty and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything - what a waste!"
reviewObjects[4].availability = ["Hulu", "YoutubeTV"]
reviewObjects[4].rating = 4.7
reviewObjects[4].bechdel = 2
reviewObjects[4].review = [
    ["Review", " is coming soon!!!"]
]
reviewObjects[4].gallery = ["call-me-by-your-name-1.jpeg", "call-me-by-your-name-2.jpeg", "call-me-by-your-name-3.jpeg"]

// Primal Fear
reviewObjects[5].quote = "I believe in the notion that people are innocent until proven guilty. I believe in that notion because I choose to believe in the basic goodness of people. I choose to believe that not all crimes are committed by bad people. And I try to understand that some very, very good people do some very bad things."
reviewObjects[5].availability = ["Hulu", "Amazon Prime", "YoutubeTV"]
reviewObjects[5].rating = 4.7
reviewObjects[5].bechdel = 1
reviewObjects[5].review = []
reviewObjects[5].gallery = []

// 12 Angry Men
reviewObjects[6].quote = "Facts may be colored by the personalities of the people who present them."
reviewObjects[6].availability = []
reviewObjects[6].rating = 4.7
reviewObjects[6].bechdel = 0
reviewObjects[6].review = []
reviewObjects[6].gallery = []

// V for Vendetta
reviewObjects[7].quote = " Voila! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified!!!! and has vowed to vanquish these venal and virulent vermin van-guarding vice and vouchsafing the violently vicious and voracious violation of volition! The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it is my very good honor to meet you and you may call me V"
reviewObjects[7].availability = ["HBO Max"]
reviewObjects[7].rating = 4.6
reviewObjects[7].bechdel = 2
reviewObjects[7].review = []
reviewObjects[7].gallery = []

// Miss Sloane
reviewObjects[8].quote = "The current system is so porous it floats."
reviewObjects[8].availability = ["Netflix"]
reviewObjects[8].rating = 4.5
reviewObjects[8].bechdel = 3
reviewObjects[8].review = []
reviewObjects[8].gallery = []

// Destination Wedding
reviewObjects[9].quote = "Lindsay: But don't you believe there's someone for everyone? -- Frank: Close, I believe there's nobody for anyone"
reviewObjects[9].availability = ["Netflix"]
reviewObjects[9].rating = 4.5
reviewObjects[9].bechdel = 0
reviewObjects[9].review = []
reviewObjects[9].gallery = []

// Good Will Hunting
reviewObjects[10].availability = ["Hulu", "Amazon Prime", "YoutubeTV"]
reviewObjects[10].rating = 4.5
reviewObjects[10].bechdel = 2

// Bridget Jones
reviewObjects[11].availability = ["HBO Max"]
reviewObjects[11].rating = 4.5
reviewObjects[11].bechdel = 3

// Moonlight 
reviewObjects[12].availability = ["Hulu", "Amazon Prime", "YoutubeTV"]
reviewObjects[12].rating = 4.5
reviewObjects[12].bechdel = 3

// Leon the Professional 
reviewObjects[13].availability = ["Netflix"]
reviewObjects[13].rating = 4.5
reviewObjects[13].bechdel = 3

// Black Swan
reviewObjects[14].availability = ["Hulu"]
reviewObjects[14].rating = 4.5
reviewObjects[14].bechdel = 3

// Sing Street 
reviewObjects[15].availability = ["Amazon Prime"]
reviewObjects[15].rating = 4.5
reviewObjects[15].bechdel = 2

//Game Night
reviewObjects[16].availability = []
reviewObjects[16].rating = 4.3
reviewObjects[16].bechdel = 3

//Kingsman
reviewObjects[17].availability = []
reviewObjects[17].rating = 4.3
reviewObjects[17].bechdel = 2

//Crazy Rich Asians
reviewObjects[18].availability = ["Hulu", "HBO Max", "YoutubeTV"]
reviewObjects[18].rating = 4.3
reviewObjects[18].bechdel = 3

//A Few Good Men
reviewObjects[19].availability = []
reviewObjects[19].rating = 4.3
reviewObjects[19].bechdel = 3

//Avengers Endgame
reviewObjects[20].availability = ["Disney+"]
reviewObjects[20].rating = 4.3
reviewObjects[20].bechdel = 3

//Legally Blonde
reviewObjects[21].availability = ["Hulu", "Amazon Prime"]
reviewObjects[21].rating = 4.3
reviewObjects[21].bechdel = 3

//Ordinary People
reviewObjects[22].availability = ["Paramount+", "Amazon Prime"]
reviewObjects[22].rating = 4.3
reviewObjects[22].bechdel = 2

//Parasite
reviewObjects[23].availability = ["Hulu"]
reviewObjects[23].rating = 4.3
reviewObjects[23].bechdel = 3

//Love, Simon
reviewObjects[24].availability = ["Hulu", "YoutubeTV"]
reviewObjects[24].rating = 4.3
reviewObjects[24].bechdel = 3

//About a Boy
reviewObjects[25].availability = []
reviewObjects[25].rating = 4.2
reviewObjects[25].bechdel = 2

//Mad Max Fury Road
reviewObjects[26].availability = []
reviewObjects[26].rating = 4.2
reviewObjects[26].bechdel = 3

//Mean Girls
reviewObjects[27].availability = ["Paramount+", "Amazon Prime"]
reviewObjects[27].rating = 4.2
reviewObjects[27].bechdel = 3

//Train to Busan
reviewObjects[28].availability = ["Amazon Prime"]
reviewObjects[28].rating = 4.2
reviewObjects[28].bechdel = 2

//The Godfather
reviewObjects[29].availability = [""]
reviewObjects[29].rating = 4.1
reviewObjects[29].bechdel = 0

// About Time
reviewObjects[30].availability = ["Netflix"]
reviewObjects[30].rating = 4.1
reviewObjects[30].bechdel = 2

// Bohemian Rhapsody
reviewObjects[31].availability = ["Hulu", "YoutubeTV"]
reviewObjects[31].rating = 4.1
reviewObjects[31].bechdel = 2

// The Shape of Water
reviewObjects[32].availability = []
reviewObjects[32].rating = 4.0
reviewObjects[32].bechdel = 3

// Mrs. Doubtfire
reviewObjects[33].availability = ["Disney+", "Amazon Prime"]
reviewObjects[33].rating = 4.0
reviewObjects[33].bechdel = 2

// The Italian Job
reviewObjects[34].availability = ["Hulu", "HBO Max", "YoutubeTV"]
reviewObjects[34].rating = 4.0
reviewObjects[34].bechdel = 1

// Big Fat Liar
reviewObjects[35].availability = ["Amazon Prime", "Hulu", "YoutubeTV"]
reviewObjects[35].rating = 4.0
reviewObjects[35].bechdel = 2

// Star Wars
reviewObjects[36].availability = ["Disney+"]
reviewObjects[36].rating = 4.0
reviewObjects[36].bechdel = 2

// The Anchorman
reviewObjects[37].availability = ["Paramount+", "Amazon Prime"]
reviewObjects[37].rating = 3.9
reviewObjects[37].bechdel = 1

// The Guilty
reviewObjects[38].availability = ["Netflix"]
reviewObjects[38].rating = 3.9
reviewObjects[38].bechdel = 0

// Night at the Museum
reviewObjects[39].availability = ["Disney+"]
reviewObjects[39].rating = 3.9
reviewObjects[39].bechdel = 2

// Dead Poets Society
reviewObjects[40].availability = ["Amazon Prime"]
reviewObjects[40].rating = 3.9
reviewObjects[40].bechdel = 0

// 1917
reviewObjects[41].availability = ["Hulu", "Amazon Prime", "YoutubeTV"]
reviewObjects[41].rating = 3.9
reviewObjects[41].bechdel = 0

// 27 Dresses
reviewObjects[42].availability = ["Hulu", "HBO Max"]
reviewObjects[42].rating = 3.8
reviewObjects[42].bechdel = 1

// Gattaca
reviewObjects[43].availability = ["Hulu"]
reviewObjects[43].rating = 3.8
reviewObjects[43].bechdel = 1

// Ocean's Eleven 
reviewObjects[44].availability = ["Hulu"]
reviewObjects[44].rating = 3.8
reviewObjects[44].bechdel = 1

// The Devil Wears Prada
reviewObjects[45].availability = ["Hulu", "Amazon Prime"]
reviewObjects[45].rating = 3.7
reviewObjects[45].bechdel = 3

// La La Land
reviewObjects[46].availability = ["Hulu"]
reviewObjects[46].rating = 3.7
reviewObjects[46].bechdel = 3

// The Adjustment Bureau
reviewObjects[47].availability = []
reviewObjects[47].rating = 3.7
reviewObjects[47].bechdel = 1

// Table 19
reviewObjects[48].availability = []
reviewObjects[48].rating = 3.6
reviewObjects[48].bechdel = 2

// Scott Pilgrim vs The World
reviewObjects[49].availability = ["Hulu", "Amazon Prime", "Netflix", "YoutubeTV"]
reviewObjects[49].rating = 3.6
reviewObjects[49].bechdel = 1

// Meet Joe Black
reviewObjects[50].availability = ["Amazon Prime"]
reviewObjects[50].rating = 3.5
reviewObjects[50].bechdel = 1

// Arrival
reviewObjects[51].availability = ["Hulu", "Amazon Prime", "YoutubeTV", "Paramount+"]
reviewObjects[51].rating = 3.5
reviewObjects[51].bechdel = 3

// No Strings Attached
reviewObjects[52].availability = ["Amazon Prime", "Paramount+"]
reviewObjects[52].rating = 3.0
reviewObjects[52].bechdel = 2

// Annihilation
reviewObjects[53].availability = ["Hulu", "Amazon Prime", "YoutubeTV", "Paramount+"]
reviewObjects[53].rating = 2.0
reviewObjects[53].bechdel = 3

localStorage.setItem("review-objects", reviewObjects)






}






 




// const FightClub = new film("Fight Club", "4.9", ["Action", "Thriller", "Drama", "Comedy", "Crime"], "David Fincher", "Jim Uhls", 
//                     "Art Linson, Ce&aacute;n Chaffin, Ross Grayson Bell", 
//                     "Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf Aday", "Jeff Cronenweth", "October 15, 1999", 
//                     "139", "United States", "English", "63 million", "101.2 million", "fight-club.png", ["HBO Max", "Amazon Prime"], 
//                     "we buy things we don't need with money we don't have for people we don't like", "X", "fight-club-art.png", ["fight-club-1.png", "fight-club-2.png"]);
// const TheShawshankRedemption = new film("The Shawshank Redemption", "4.7", ["Drama"], "Frank Darabont", "Frank Darabont", 
//                                 "Niki Marvin", "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler, Clancy Brown, Gil Bellows, James Whitmore", 
//                                 "Roger Deakins", "September 23, 1994", "142", "United States", "English", "25 million", "58.3 million", 
//                                 "shawshank-redemption.png", ["HBO Max"], "Get Busy Living, Or Get Busy Dying.", "X", "shawshank-redemption-art.png", ["shawshank-redemption-1.png", "shawshank-redemption-2.png"]);


//this.rating = rating;
// this.bechdel = bechdel;
// this.availability = availability;
// this.review = review; // JSON of the title keys with the content values (ex. cinematography : lorem ipsum .... )
// this.gallery = gallery;