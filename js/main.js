let sliderImages =  document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let current = 0;

// Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
// Init Slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideleft(){
     sliderImages[current - 1].style.display = 'block';
     current--;
}

// Show next
function slideRight(){
    reset()
    sliderImages[current + 1].style.display = 'block';
    current++;
}



// Left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideleft();
});

// Right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide()