const images = [
    "IMG_1073.jpg",
    "IMG_4267.jpg",
    "IMG_1672.jpg"
];

let currentIndex = 0;

const slide = document.getElementById("slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    currentIndex = index;

    slide.src = images[currentIndex];

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    dots[currentIndex].classList.add("active");
}

function nextSlide(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showSlide(currentIndex);
}

function currentSlide(index){
    showSlide(index);
}

setInterval(nextSlide, 3000);