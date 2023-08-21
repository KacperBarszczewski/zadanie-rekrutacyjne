const macyInstance = new Macy({
    container: '.masonry-container',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        400: 2,
        700: 3,
    },
    margin: {
        x: 43,
        y: 43,
    }
});

// toggle

const foldDiv = document.getElementById("fold-div");
const foldGradient = document.getElementById("fold-gradient");
const foldButton = document.getElementById("fold-button");

foldButton.addEventListener("click", () => {
    if (foldGradient.classList.contains("hidden")) {

        foldGradient.classList.remove("hidden");
        foldButton.classList.add("absolute");
        foldDiv.classList.add("h-[150vh]");

        foldButton.getElementsByTagName("button")[0].innerHTML = 'Rozwiń <img class="" src="./assets/VectorBB.svg" />';

    } else {

        foldGradient.classList.add("hidden");
        foldButton.classList.remove("absolute");
        foldDiv.classList.remove("h-[150vh]");

        foldButton.getElementsByTagName("button")[0].innerHTML = 'Zwiń <img class="rotate-180" src="./assets/VectorBB.svg" />';
    }
})

// copy email

const emailbtn = document.getElementById("email-btn");

emailbtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailbtn.innerText);
})


// serch

const searchInput = document.getElementById("search");
const searchDiv = document.getElementById("search-div");

searchInput.addEventListener("focus", () => {
    searchDiv.classList.add("border-beige");
})

searchInput.addEventListener("focusout", () => {
    searchDiv.classList.remove("border-beige");
})


// Slider

function currentSlide() {
    const mySlides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < mySlides.length; i++) {
        if (mySlides[i].classList.contains("flex")) {
            return i;
        }
    }
}

function hiddenSlides() {
    const mySlides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < mySlides.length; i++) {
        if (mySlides[i].classList.contains("flex")) {
            mySlides[i].classList.remove("flex");
            mySlides[i].classList.add("hidden");

        }
    }
}

function showSlide(n) {

    hiddenSlides();
    document.getElementsByClassName("mySlides")[n].classList.remove("hidden");

    document.getElementsByClassName("mySlides")[n].classList.add("animate-fade");
    document.getElementsByClassName("mySlides")[n].classList.add("flex");
}

function slideNext() {
    const mySlides = document.getElementsByClassName("mySlides");
    let currentslide = currentSlide();
    let n;

    if (currentslide+1 < mySlides.length){
        n= currentslide+1;
    }else{
        n=0;
    }
        showSlide(n);
}

function slidePrev() {
    const mySlides = document.getElementsByClassName("mySlides");
    let currentslide = currentSlide();
    let n;

    if (currentslide-1 >= 0){
        n= currentslide-1;
    }else{
        n=mySlides.length-1;
    }
        showSlide(n);
}

// popup

function showPopup(img){
    const popupDiv = document.getElementById("popup-div");
    const popupImg = document.getElementById("popup-img");

    popupDiv.classList.remove("hidden")
    popupDiv.classList.add("flex");

    popupImg.src = img;

}

function closePopup(){
    const popupDiv = document.getElementById("popup-div");

    popupDiv.classList.remove("flex")
    popupDiv.classList.add("hidden");
}

function nextImge(){
    const popupImg = document.getElementById("popup-img");
    const imagesDiv = document.getElementById("images-div");


    for (let i = 0; i < imagesDiv.children.length; i++) {
        if (imagesDiv.children[i].src==popupImg.src) {
            if (i+1 < imagesDiv.children.length){
                popupImg.src=imagesDiv.children[i+1].src;
                return;
            }else{
                popupImg.src=imagesDiv.children[0].src;
                return;
            }
        }
    } 
}

function prevImge(){
    const popupImg = document.getElementById("popup-img");
    const imagesDiv = document.getElementById("images-div");


    for (let i = 0; i < imagesDiv.children.length; i++) {

        if (imagesDiv.children[i].src==popupImg.src) {
            if (i-1 >= 0){
                popupImg.src=imagesDiv.children[i-1].src;
                return;
            }else{
                popupImg.src=imagesDiv.children[imagesDiv.children.length-1].src;
                return;
            }
        }
    } 
}

