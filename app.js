// Storing our variables
const slides = document.getElementsByClassName("carousel-item");
// setting the slides position to the beginning.
let slidePosition = 0
// storing out amount of total slides.
const totalSlides = slides.length 

// our event handlers for our buttons. At the end we are using functions, but instead of calling our functions on the handlers, we create the functions on there own.
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)
// function.

// Hide all slides functions, within the function we are removing the class carousel-item-visible and then adding the class carousel-item-hidden. This is all done within a for of loop and will target each iteration of our slides array. This is a re usable function and will be called on the move to next and move to previous function for our buttons. 
function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden;")
    }
}

function moveToNextSlide() {
    hideAllSlides()
    // creating our conditional to check which slide we are on.
    if (slidePosition === totalSlides -1) {
        slidePosition = 0
    } else {
            slidePosition++
    }
    // outside of the conditional, we want to make whichever slide we are on visible. To do so we are adding our class name to the current slide.

    slides[slidePosition].classList.add("carousel-item-visible")
    // We can access our array content by passing in our slidePosition. Remember, our slides is technically an array, by passing in slidePosition we are checking which item in the array we are on.
}
function moveToPrevSlide() {
    hideAllSlides()
    // Here we are checking for slide position 0, if true we have to go back.
    // if (false) not at position zero, we need to decrement
    if (slidePosition === 0) {
        slidePosition = totalSlides -1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}








