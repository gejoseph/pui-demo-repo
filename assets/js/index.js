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