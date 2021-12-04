
// RECOMMENDATIONS PAGE

//<h4 class="gray-box">${filteredFilms[i].rating}</h4>

localStorage.setItem("genre-filters", "[]")
localStorage.setItem("platform-filters", "[]")
localStorage.setItem("content-rating-filters", "[]")
var genrefilters = [];
var platformfilters = [];
var contentRatingfilters = [];

// TOP TEN SECTION

var toptensection = document.getElementById("top-ten-section")

if (toptensection != null && localStorage.getItem("filmObjects") != null){

    var filmObjects = JSON.parse(localStorage.getItem("filmObjects"))

    for (let i = 0; i < 10; i++){

        
        toptensection.insertAdjacentHTML("beforeend",

        `<a id="topten-${filmObjects[i].title}" class="scroll-unit" href="film.html">
        <img src="${filmObjects[i].poster}" class="hscroll-img">
        <div class="scroll-unit-text">
            <h4 class="gray-box">${reviewObjects[i].rating}</h4>
            <h4 class="film-name">${filmObjects[i].title}</h4>
        </div>
        </a>`)
    
        document.getElementById("topten-" + filmObjects[i].title).addEventListener("click", function (e) {
            
            
            localStorage.setItem("film-page-selected", filmObjects[i].title);
            console.log(localStorage.getItem("film-page-selected"))
    
        })
    }

}


// genre buttons
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

                // if already selected
                if (JSON.parse(localStorage.getItem("genre-filters")).includes(genres[i])){

                    

                    genrefilters = JSON.parse(localStorage.getItem("genre-filters"))
                    genrefilters.splice(genrefilters.indexOf(genres[i]), 1)

                    document.getElementById("genre-" + genres[i]).firstChild.style.backgroundColor = "#e5e5e5";
                    document.getElementById("genre-" + genres[i]).firstChild.style.border = "1px solid black"
                    document.getElementById("genre-" + genres[i]).firstChild.style.fontWeight = "400"

                }
                else {

                    genrefilters.push(genres[i]);
                    
                    document.getElementById("genre-" + genres[i]).firstChild.style.backgroundColor = "#cacaca";
                    document.getElementById("genre-" + genres[i]).firstChild.style.border = "2px solid black"
                    document.getElementById("genre-" + genres[i]).firstChild.style.fontWeight = "bold"

                }

                localStorage.setItem("genre-filters", JSON.stringify(genrefilters));
                filter()
                
            }
        )
    }

}


// platform buttons
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

                // if already selected
                if (JSON.parse(localStorage.getItem("platform-filters")).includes(platforms[i])){

                    platformfilters = JSON.parse(localStorage.getItem("platform-filters"))
                    platformfilters.splice(platformfilters.indexOf(platforms[i]), 1)

                    document.getElementById("platform-" + platforms[i]).firstChild.style.backgroundColor = "#e5e5e5";
                    document.getElementById("platform-" + platforms[i]).firstChild.style.border = "1px solid black"
                    document.getElementById("platform-" + platforms[i]).firstChild.style.fontWeight = "400"
                    
                }
                // else select
                else {

                    platformfilters.push(platforms[i]);

                    document.getElementById("platform-" + platforms[i]).firstChild.style.backgroundColor = "#cacaca";
                    document.getElementById("platform-" + platforms[i]).firstChild.style.border = "2px solid black"
                    document.getElementById("platform-" + platforms[i]).firstChild.style.fontWeight = "bold"
                }

                localStorage.setItem("platform-filters", JSON.stringify(platformfilters));
                filter()

                
                
            }
        )

    }

}

// content rating buttons
var contentRatingfilter = document.getElementById("content-rating-filters");
console.log(contentRatingfilter)

if (contentRatingfilter != null){

    for (let i = 0; i < contentRatings.length; i++){
        contentRatingfilter.insertAdjacentHTML("beforeend", 
        
        `<button type="button" class="gray-button" id="content-rating-${contentRatings[i]}"><h4 class="gray-box">${contentRatings[i]}</h4></button>`
    
        )
    
        var contentRatingButton = document.getElementById("content-rating-" + contentRatings[i]);
    
        contentRatingButton.addEventListener("click", 
            function (e) {

                // if already selected
                if (JSON.parse(localStorage.getItem("content-rating-filters")).includes(contentRatings[i])){

                    contentRatingfilters = JSON.parse(localStorage.getItem("content-rating-filters"))
                    contentRatingfilters.splice(contentRatingfilters.indexOf(contentRatings[i]), 1)

                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.backgroundColor = "#e5e5e5";
                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.border = "1px solid black"
                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.fontWeight = "400"
                    
                }
                // else select
                else {

                    contentRatingfilters.push(contentRatings[i]);

                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.backgroundColor = "#cacaca";
                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.border = "2px solid black"
                    document.getElementById("content-rating-" + contentRatings[i]).firstChild.style.fontWeight = "bold"
                }

                localStorage.setItem("content-rating-filters", JSON.stringify(contentRatingfilters));
                filter()

                
                
            }
        )

    }

}




var filmsection = document.getElementById("films-filtered")

// initial state of film objects
if (JSON.parse(localStorage.getItem("genre-filters")).length == 0 && JSON.parse(localStorage.getItem("platform-filters")).length == 0){

    for (let i = 0; i < filmObjects.length; i++){

        console.log(filmObjects[i])

        filmsection.insertAdjacentHTML("beforeend",

        `<a id="film-${filmObjects[i].title}" class="scroll-unit" href="film.html">
            <img src="${filmObjects[i].poster}" class="filtered-films-img">
            <div class="scroll-unit-text">
                <h4 class="gray-box">${reviewObjects[i].rating}</h4>
                <h4 class="film-name">${filmObjects[i].title}</h4>
            </div>
        </a>`
        
        )

        document.getElementById("film-" + filmObjects[i].title).addEventListener("click", function (e) {
            
            localStorage.setItem("film-page-selected", filmObjects[i].title);
            console.log(localStorage.getItem("film-page-selected"))

        })
        
    }

}


function filter() {

    var gf = JSON.parse(localStorage.getItem("genre-filters"))
    var pf = JSON.parse(localStorage.getItem("platform-filters"))
    var crf = JSON.parse(localStorage.getItem("content-rating-filters"))

    console.log(gf)
    console.log(pf)
    console.log(crf)
    console.log(filteredFilms)

    var filteredFilms = filmObjects.filter(film => 
        
        // check that genres match
        gf.every(genre => film.genres.includes(genre)) &&

        // check that availability matches
        pf.every(platform => reviewObjects.filter(review => (review.film.title == film.title))[0] != null ?
                reviewObjects.filter(review => (review.film.title == film.title))[0].availability.includes(platform) :
                false) &&
         
        // check that content rating(s) if selected, matches
        (crf.length == 0 || crf.includes(film.contentRating))
    )

    console.log(gf)
    console.log(pf)
    console.log(crf)
    console.log(filteredFilms)

    // reset
    filmsection.innerHTML = "";

    for (let i = 0; i < filteredFilms.length; i++){

        filmsection.insertAdjacentHTML("beforeend",

        `<a id="film-${filteredFilms[i].title}" class="scroll-unit" href="film.html">
            <img src="${filteredFilms[i].poster}" class="filtered-films-img">
            <div class="scroll-unit-text">
                <h4 class="gray-box">${reviewObjects.filter(rev => rev.film.title == filteredFilms[i].title)[0].rating}</h4>
                <h4 class="film-name">${filteredFilms[i].title}</h4>
            </div>
        </a>`)

        document.getElementById("film-" + filteredFilms[i].title).addEventListener("click", function (e) {
            
            localStorage.setItem("film-page-selected", filteredFilms[i].title);
            console.log(localStorage.getItem("film-page-selected"))

        })
        
    }


    
}