// global variables

var filmimages = ["fight-club.png", "dunkirk-art.png", "clockwork-orange-art.png", 
                    "inception-art.png", "frances-ha-art.png", "call-me-by-your-name-art.png", "psycho-art.png"]

class film {
    constructor(name, rating, genres, director, 
        screenplay, producers, cast, cinematography, 
        releasedate, runningtime, country, language, budget, boxoffice, poster, availability){

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
    }
}

class review {
    constructor() {

    }
}

const FightClub = new film("Fight Club", "4.9", ["Action", "Thriller", "Drama", "Comedy", "Crime"], "David Fincher", "Jim Uhls", 
                    "Art Linson, Ceán Chaffin, Ross Grayson Bell", 
                    ["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Meat Loaf Aday"], "Jeff Cronenweth", "October 15, 1999", 
                    "139", "United States", "English", "63 million", "101.2 million", "fight-club.png", ["HBO Max", "Amazon Prime"]);

var films = [FightClub, FightClub, FightClub, FightClub, FightClub, FightClub, FightClub, FightClub, FightClub, FightClub]

var genres = ["Action", "Adventure", "Crime", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "International", "Mystery", "Romance", "Satire", "Sci-Fi", "Thriller"];

var platforms = ["Amazon Prime", "Disney+", "HBO Max", "Hulu", "Netflix", "YoutubeTV"]

// HOME PAGE

var carousel = document.getElementById("carousel-images");

var carouselimages = document.getElementsByClassName("carousel-img");

var leftcarousel = document.getElementById("left-carousel");
var rightcarousel = document.getElementById("right-carousel");

for (let i = 0; i < carouselimages.length; i++){
    carouselimages[i].src = "film-assets/" + filmimages[i];
}

function left(e) {
    console.log("left")
    console.log(filmimages)
    var end = filmimages.pop()
    console.log(filmimages)
    console.log(end)
    filmimages.unshift(end);
    console.log(filmimages)
    for (let i = 0; i < carouselimages.length; i++){
        carouselimages[i].src = "film-assets/" + filmimages[i];
    }
}

function right(e) {
    console.log("right")
    console.log(filmimages)
    var beginning = filmimages.shift()
    console.log(filmimages)
    console.log(beginning)
    filmimages.push(beginning)
    console.log(filmimages)
    for (let i = 0; i < carouselimages.length; i++){
        carouselimages[i].src = "film-assets/" + filmimages[i];
    }
}

// RECOMMENDATIONS PAGE



localStorage.setItem("genre-filters", "[]")
localStorage.setItem("platform-filters", "[]")
var genrefilters = [];
var platformfilters = [];

var toptensection = document.getElementById("top-ten-section")
var topten = [["Fight Club", "4.8", "fight-club.png"], 
              ["The Shawshank Redemption", "4.7", "fight-club.png"], 
              ["Miss Sloane", "4.6", "fight-club.png"], 
              ["10 Things I Hate About You", "4.5", "fight-club.png"],  
              ["The Usual Suspects", "4.4", "fight-club.png"], 
              ["Call Me By Your Name", "4.3", "call-me-by-your-name-art.png"],
              ["Primal Fear", "4.3", "fight-club.png"],  
              ["12 Angry Men", "4.2", "fight-club.png"], 
              ["V for Vendetta", "4.1", "fight-club.png"], 
              ["Destination Wedding", "4.1", "fight-club.png"]]

if (toptensection != null){

    for (let i = 0; i < 10; i++){
        toptensection.insertAdjacentHTML("beforeend",
    
        `<a id="topten-${topten[i][0]}" class="scroll-unit" href="film.html">
            <img src="film-assets/${topten[i][2]}" class="hscroll-img">
            <div class="scroll-unit-text">
                <h4 class="gray-box">${topten[i][1]}</h4>
                <h4 class="film-name">${topten[i][0]}</h4>
            </div>
        </a>`
        
        )
    
        document.getElementById("topten-" + topten[i][0]).addEventListener("click", function (e) {
            
            localStorage.setItem("film-page-selected", topten[i][0]);
            console.log(localStorage.getItem("film-page-selected"))
    
        })
    

}


var genrefilter = document.getElementById("genre-filters");
console.log(genrefilter)

if (genrefilter != null){

    for (let i = 0; i < genres.length; i++){
        genrefilter.insertAdjacentHTML("beforeend", 
        
        `<button type="button" class="gray-button" id="genre-${genres[i]}"><h4 class="gray-box">${genres[i]}</h4></button>`
    
        )
    
        var genreButton = document.getElementById("genre-" + genres[i]);
    
        genreButton.addEventListener("click", 
            function (e) {
                filterGenre(genres[i]);
            }
        )
    }

}



function filterGenre(genre) {

    console.log(genre)

    // change look of the gray box
    var genreButton = document.getElementById("genre-" + genre).firstChild;

    // if already selected
    if (genrefilters.includes(genre)) {
        console.log("selected")
        genreButton.style.backgroundColor = "#e5e5e5";
        genreButton.style.border = "1px solid black"
        genreButton.style.fontWeight = "400"
        // remove from genre filters
        genrefilters.splice(genrefilters.indexOf(genre), 1);
        localStorage.setItem("genre-filters", JSON.stringify(genrefilters));
        console.log(localStorage.getItem("genre-filters"))
    }
    // else select
    else {
        console.log("unselected")
        genreButton.style.backgroundColor = "#cacaca";
        genreButton.style.border = "2px solid black"
        genreButton.style.fontWeight = "bold"
        // add to genre filters
        genrefilters.push(genre);
        localStorage.setItem("genre-filters", JSON.stringify(genrefilters));
        console.log(localStorage.getItem("genre-filters"))
    }

    // filter content of movies displayed
    filter()

}

var platformfilter = document.getElementById("platform-filters");
console.log(platformfilter)

if (platformfilter != null){

    for (let i = 0; i < platforms.length; i++){
        platformfilter.insertAdjacentHTML("beforeend", 
        
        `<button type="button" class="gray-button" id="platform-${platforms[i]}"><h4 class="gray-box">${platforms[i]}</h4></button>`
    
        )
    
        var platformButton = document.getElementById("platform-" + platforms[i]);
    
        platformButton.addEventListener("click", 
            function (e) {
                filterPlatform(platforms[i]);
            }
        )
    }

}



function filterPlatform(platform) {

    console.log(platform)

    // change look of the gray box
    var platformButton = document.getElementById("platform-" + platform).firstChild;

    // if already selected
    if (platformfilters.includes(platform)) {
        console.log("selected")
        platformButton.style.backgroundColor = "#e5e5e5";
        platformButton.style.border = "1px solid black"
        platformButton.style.fontWeight = "400"
        // remove from platform filters
        platformfilters.splice(platformfilters.indexOf(platform), 1);
        localStorage.setItem("platform-filters", JSON.stringify(platformfilters));
        console.log(localStorage.getItem("platform-filters"))
    }
    // else select
    else {
        console.log("unselected")
        platformButton.style.backgroundColor = "#cacaca";
        platformButton.style.border = "2px solid black"
        platformButton.style.fontWeight = "bold"
        // add to platform filters
        platformfilters.push(platform);
        localStorage.setItem("platform-filters", JSON.stringify(platformfilters));
        console.log(localStorage.getItem("platform-filters"))
    }

    // filter content of movies displayed
    filter()
}



var gf = localStorage.getItem("genre-filters")
var pf = localStorage.getItem("platform-filters")
var filmsection = document.getElementById("films-filtered")

// there are filters
if (filmsection != null && (gf != "" || pf != "")){

    console.log("in filters")

    var filteredFilms = [];
    var fitsG = true;
    var fitsP = true;

    for (let i = 0; i < films.length; i++){

        if (gf != "[]"){

            for (let j = 0; j < gf.length; j++){

                if (!films[i].genres.includes(gf[j])){
                    fitsG = false;
                }

            }

        }
        if (pf != "[]"){

            for (let j = 0; j < pf.length; j++){

                if (!films[i].platforms.includes(pf[j])){
                    fitsP = false;
                }

            }

        }

        // if the film meets both the genre and platform req
        // add it to the filteredfilms array
        if (fitsG && fitsP){

            filteredFilms.push(films[i])

        }

    }


    // display filtered films
    for (let i = 0; i < filteredFilms.length; i++){

        console.log(filteredFilms[i])

        filmsection.insertAdjacentHTML("beforeend",

        `<div id="film-${filteredFilms[i].name}" class="scroll-unit">
            <img src="film-assets/${filteredFilms[i].poster}" class="filtered-films-img">
            <div class="scroll-unit-text">
                <h4 class="gray-box">${filteredFilms[i].rating}</h4>
                <h4 class="film-name">${filteredFilms[i].name}</h4>
            </div>
        </div>`
        
        )
        
    }

}
// no filters
else if (filmsection != null){
    
    for (let i = 0; i < films.length; i++){

        console.log(films[i])

        filmsection.insertAdjacentHTML("beforeend",

        `<div id="film-${films[i].name}" class="scroll-unit">
            <img src="film-assets/${films[i].poster}" class="filtered-films-img">
            <div class="scroll-unit-text">
                <h4 class="gray-box">${films[i].rating}</h4>
                <h4 class="film-name">${films[i].name}</h4>
            </div>
        </div>`
        
        )
        
    }

}

function filter() {

    console.log(localStorage.getItem("genre-filters"))
    console.log(localStorage.getItem("platform-filters"))
    var gf = JSON.parse(localStorage.getItem("genre-filters"))
    var pf = JSON.parse(localStorage.getItem("platform-filters"))
    var filmsection = document.getElementById("films-filtered")
    // there are filters
    console.log(gf)
    console.log(pf)
    if (gf != "[]" || pf != "[]"){

        console.log("in filters")

        var filteredFilms = [];
        var fitsG = true;
        var fitsP = true;

        for (let i = 0; i < films.length; i++){

            if (gf != ""){

                console.log(gf)

                for (let j = 0; j < gf.length; j++){

                    if (!(films[i].genres.includes(gf[j]))){
                        console.log("false?")
                        fitsG = false;
                    }

                }

            }
            if (pf != ""){

                console.log(pf)

                for (let j = 0; j < pf.length; j++){

                    if (!films[i].availability.includes(pf[j])){
                        fitsP = false;
                    }

                }

            }

            // if the film meets both the genre and platform req
            // add it to the filteredfilms array
            if (fitsG && fitsP){

                filteredFilms.push(films[i])

            }

        }

        filmsection.innerHTML = "";
        console.log("emptied")

        // display filtered films
        for (let i = 0; i < filteredFilms.length; i++){

            console.log(filteredFilms[i])

            filmsection.insertAdjacentHTML("beforeend",

            `<div id="film-${filteredFilms[i].name}" class="scroll-unit">
                <img src="film-assets/${filteredFilms[i].poster}" class="filtered-films-img">
                <div class="scroll-unit-text">
                    <h4 class="gray-box">${filteredFilms[i].rating}</h4>
                    <h4 class="film-name">${filteredFilms[i].name}</h4>
                </div>
            </div>`
            
            )
            
        }

    }
    // no filters
    else {

        filmsection.innerHTML = "";
        console.log("emptied")
        
        for (let i = 0; i < films.length; i++){

            console.log(films[i])

            filmsection.insertAdjacentHTML("beforeend",

            `<div id="film-${films[i].name}" class="scroll-unit">
                <img src="film-assets/${films[i].poster}" class="filtered-films-img">
                <div class="scroll-unit-text">
                    <h4 class="gray-box">${films[i].rating}</h4>
                    <h4 class="film-name">${films[i].name}</h4>
                </div>
            </div>`
            
            )
            
        }

    }
}

// FILM PAGE

var filmtitle = document.getElementById("film-page-title")

if (filmtitle != null){

    filmtitle.innerText = localStorage.getItem("film-page-selected");

}