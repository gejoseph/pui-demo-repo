
// REVIEWS PAGE

var allreviews = document.getElementById("all-reviews")

for (let i = 0; i < films.length; i++){

    allreviews.insertAdjacentHTML("beforeend", 
    
        `<a id="review-${films[i].name}" class="review-row" href="film.html">
            <img src="film-assets/${films[i].poster}">
            <img src="film-assets/${films[i].artposter}">
            <div class="review-row-text">
                <h1 class="review-title"><strong>${films[i].name.toUpperCase()}</strong><span class="review-year">(${films[i].releasedate.substring(films[i].releasedate.length - 4)})</span></h1>
                <h4>Starring ${films[i].cast}</h4>
                <h4>Directed by ${films[i].director}</h4><br><br>
                <h4></h4>
            </div>
        </a>`
    
    )

    document.getElementById("review-" + films[i].name).addEventListener("click", function (e) {
            
        localStorage.setItem("film-page-selected", films[i].name);
        console.log(localStorage.getItem("film-page-selected"))

    })

}