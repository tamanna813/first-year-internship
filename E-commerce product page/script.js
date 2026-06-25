const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

const quantityText = document.getElementById("quantity");

const addCartBtn = document.getElementById("addCartBtn");
const cartCount = document.getElementById("cartCount");

let quantity = 1;
let totalItems = 0;

// Image gallery

thumbnails.forEach(function(image){
    image.addEventListener("click", function(){
        mainImage.src = image.src;
    });
});

// Quantity selector

plusBtn.addEventListener("click", function(){
    quantity++;
    quantityText.textContent = quantity;
});

minusBtn.addEventListener("click", function(){

    if(quantity > 1){
        quantity--;
        quantityText.textContent = quantity;
    }

});

// Add to cart

addCartBtn.addEventListener("click", function(){

    totalItems += quantity;

    cartCount.textContent = totalItems;

    alert(quantity + " item(s) added to cart 💖");
});