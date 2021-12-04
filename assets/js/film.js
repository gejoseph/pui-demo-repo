
// FILM PAGE


// get film object
var currentFilm = filmObjects.filter(film => film.title == localStorage.getItem("film-page-selected"))[0]

// get review object
var currentReview = reviewObjects.filter(review => review.film.title == localStorage.getItem("film-page-selected"))[0]



// poster gallery

var postergallery = document.getElementById("poster-gallery");

postergallery.innerHTML = `

    <img src="${currentFilm.poster}" class="film-page-main-img">

`

// film title + year

var filmtitle = document.getElementById("film-page-title");

filmtitle.innerHTML = `

    <h3>${currentFilm.title}<span class="year">(${currentFilm.year})</span></h3>

`
// film details 

var filmdetails = document.getElementById("film-details");

console.log(filmdetails)

filmdetails.innerHTML = 
`
    <h4>
        Directed by	<strong>${currentFilm.directors}</strong><br>
        Screenplay by <strong>${currentFilm.writers}</strong><br>
        Starring <strong>${currentFilm.stars}</strong><br>
        Release date: <strong>${currentFilm.releasedate}</strong><br>
        Running time: <strong>${currentFilm.runningtime}</strong><br>
        Content Rating: <strong>${currentFilm.contentRating}</strong><br>
        Box office:	<strong>${currentFilm.boxoffice}</strong><br>
        <i>Awards:	<strong>${currentFilm.awards}</strong><br><br>
        <strong>Synopsis</strong>: ${currentFilm.plot}</i>
    </h4>

`

// quote 

var filmquote = document.getElementById("quote");

if (currentReview.quote == ""){
    filmquote.parentElement.style.display = "none";
}
else {
    filmquote.innerText = `" `  + currentReview.quote + ` "`;
}




// extra info

var extrainfo = document.getElementById("extra-info");
var filmgenres = document.getElementById("film-genres");

for (let i = 0; i < currentFilm.genres.length; i++){

    filmgenres.insertAdjacentHTML("beforeend", 
    
    `<h4 class="gray-box">${currentFilm.genres[i]}</h4>`
    
    )

}

var bechdel = document.getElementById("bechdel-test");
bechdel.innerHTML = `<h4 class="gray-box">${currentReview.bechdel}</h4>`

var filmplatforms = document.getElementById("availability");

for (let i = 0; i < currentReview.availability.length; i++){

    filmplatforms.insertAdjacentHTML("beforeend", 
    
    `<h4 class="gray-box">${currentReview.availability[i]}</h4>`
    
    )

}

var rating = document.getElementById("my-rating");
rating.innerHTML = `<h4 class="gray-box">${currentReview.rating}</h4>`


// // ticket

var ticket = document.getElementById("ticket")

ticket.innerHTML = `

    <div class="ticket">
            <h2 class="ticket-title"><strong>${currentFilm.title}</strong></h2>
            <h2 class="ticket-stars">${currentFilm.stars}</h2>
            <h1 class="ticket-stars">${currentFilm.releasedate}</h1>
    </div>

`


// review + gallery

var gallery = document.getElementById("review-gallery");
var filmreview = document.getElementById("review-content");

if (currentReview.review.length > 0){

    for (let i = 0; i < currentReview.gallery.length; i++){

        gallery.insertAdjacentHTML("beforeend", 
        
        `<img src="film-assets/${currentReview.gallery[i]}">`
        
        )
    
    }

    for (let i = 0; i < currentReview.review.length; i++){

        filmreview.insertAdjacentHTML("beforeend",  
        `<strong>${currentReview.review[i][0]}</strong>:${currentReview.review[i][1]}<br><br>`)

    }

} else {

    document.getElementById("spoilers").style.display="none";
    document.getElementById("film-review").style.display="none";

}





