
// FILM PAGE


// get film object

for (let i = 0; i < films.length; i++){

    if (films[i].name == localStorage.getItem("film-page-selected")){

        var currentFilm = films[i];
        console.log(currentFilm);

    }

}

// poster gallery

var postergallery = document.getElementById("poster-gallery");

postergallery.innerHTML = `

    <img src="film-assets/${currentFilm.poster}" class="film-page-main-img">

`

// film title + year

var filmtitle = document.getElementById("film-page-title");

filmtitle.innerHTML = `

    <h3>${currentFilm.name}<span class="year">(${currentFilm.releasedate.substring(currentFilm.releasedate.length - 4)})</span></h3>

`

// film details 

var filmdetails = document.getElementById("film-details");

filmdetails.innerHTML = 
`
    <h4>
    Directed by	<strong>${currentFilm.director}</strong><br>
    Screenplay by <strong>${currentFilm.screenplay}</strong><br>
    Produced by	<strong>${currentFilm.producers}</strong><br>
    Starring <strong>${currentFilm.cast}</strong><br>
    Cinematography by <strong>${currentFilm.cinematography}</strong><br>
    Release date: <strong>${currentFilm.releasedate}</strong><br>
    Running time: <strong>${currentFilm.runningtime} minutes</strong><br>
    Country: <strong>${currentFilm.country}</strong><br>
    Language: <strong>${currentFilm.language}</strong><br>
    Budget: <strong>$${currentFilm.budget}</strong><br>
    Box office:	<strong>$${currentFilm.boxoffice}</strong><br>
    </h4>

`

// quote 

var filmquote = document.getElementById("quote");

filmquote.innerText = `" ` + currentFilm.quote + ` "`;


// extra info

var extrainfo = document.getElementById("extra-info");
var filmgenres = document.getElementById("film-genres");

for (let i = 0; i < currentFilm.genres.length; i++){

    filmgenres.insertAdjacentHTML("beforeend", 
    
    `<h4 class="gray-box">${currentFilm.genres[i]}</h4>`
    
    )

}

var bechdel = document.getElementById("bechdel-test");
console.log(bechdel)
bechdel.innerHTML = `<h4 class="gray-box">${currentFilm.bechdel}</h4>`

var filmplatforms = document.getElementById("availability");

for (let i = 0; i < currentFilm.availability.length; i++){

    filmplatforms.insertAdjacentHTML("beforeend", 
    
    `<h4 class="gray-box">${currentFilm.availability[i]}</h4>`
    
    )

}

var rating = document.getElementById("my-rating");
rating.innerHTML = `<h4 class="gray-box">${currentFilm.rating}</h4>`


// ticket

var ticket = document.getElementById("ticket")

ticket.innerHTML = `

    <img src="film-assets/${currentFilm.name.replace(/\s+/g, '-').toLowerCase()}-ticket.png">

`

// review 

var gallery = document.getElementById("review-gallery");

for (let i = 0; i < currentFilm.gallery.length; i++){

    gallery.insertAdjacentHTML("beforeend", 
    
    `<img src="film-assets/${currentFilm.gallery[i]}">`
    
    )

}

var filmreview = document.getElementById("review-content");

filmreview.innerHTML = `

<strong>Acting</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in et tempus amet. Non hendrerit tristique id nibh turpis luctus mauris. Pellentesque nunc sed hendrerit feugiat mi. Vel, id molestie vestibulum pulvinar sit pulvinar. Eleifend amet fermentum odio dictum vel massa tempus. Lacus, molestie nunc bibendum sed turpis interdum. Arcu risus quis faucibus pharetra semper nisl, aliquam at. Lectus pellentesque nunc, dui arcu lectus ultricies aliquam. Volutpat platea senectus sit ut in tellus. Integer aliquet sed quis porta est donec iaculis. Pharetra consectetur arcu sit amet massa mi lectus egestas. Parturient elit, sem amet neque, consectetur nunc neque. Nullam ipsum et mattis nullam neque urna. Porttitor neque dignissim volutpat euismod pretium sed dui.<br><br>
<strong>Direction</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in et tempus amet. Non hendrerit tristique id nibh turpis luctus mauris. Pellentesque nunc sed hendrerit feugiat mi. Vel, id molestie vestibulum pulvinar sit pulvinar. Eleifend amet fermentum odio dictum vel massa tempus. Lacus, molestie nunc bibendum sed turpis interdum. Arcu risus quis faucibus pharetra semper nisl, aliquam at. Lectus pellentesque nunc, dui arcu lectus ultricies aliquam. Volutpat platea senectus sit ut in tellus. Integer aliquet sed quis porta est donec iaculis. Pharetra consectetur arcu sit amet massa mi lectus egestas. Parturient elit, sem amet neque, consectetur nunc neque. Nullam ipsum et mattis nullam neque urna. Porttitor neque dignissim volutpat euismod pretium sed dui.<br><br>
<strong>Cinematography</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in et tempus amet. Non hendrerit tristique id nibh turpis luctus mauris. Pellentesque nunc sed hendrerit feugiat mi. Vel, id molestie vestibulum pulvinar sit pulvinar. Eleifend amet fermentum odio dictum vel massa tempus. Lacus, molestie nunc bibendum sed turpis interdum. Arcu risus quis faucibus pharetra semper nisl, aliquam at. Lectus pellentesque nunc, dui arcu lectus ultricies aliquam. Volutpat platea senectus sit ut in tellus. Integer aliquet sed quis porta est donec iaculis. Pharetra consectetur arcu sit amet massa mi lectus egestas. Parturient elit, sem amet neque, consectetur nunc neque. Nullam ipsum et mattis nullam neque urna. Porttitor neque dignissim volutpat euismod pretium sed dui.<br><br>
<strong>My Take</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in et tempus amet. Non hendrerit tristique id nibh turpis luctus mauris. Pellentesque nunc sed hendrerit feugiat mi. Vel, id molestie vestibulum pulvinar sit pulvinar. Eleifend amet fermentum odio dictum vel massa tempus. Lacus, molestie nunc bibendum sed turpis interdum. Arcu risus quis faucibus pharetra semper nisl, aliquam at. Lectus pellentesque nunc, dui arcu lectus ultricies aliquam. Volutpat platea senectus sit ut in tellus. Integer aliquet sed quis porta est donec iaculis. Pharetra consectetur arcu sit amet massa mi lectus egestas. Parturient elit, sem amet neque, consectetur nunc neque. Nullam ipsum et mattis nullam neque urna. Porttitor neque dignissim volutpat euismod pretium sed dui.

`