'use strict';






function addEventOnElements(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}







const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-taggler]");

function togglenav() {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}


addEventOnElements(navTogglers, " click ", togglenav);




const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-to-the-top-btn]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100 ) {
    header.classList.add("avtive");
    backTopBtn.classList.add("active");
} else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
}

});








const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-previous]");
const sliderNextBtn = document.querySelector("[data-slider-next");

let totalSliderVisibleItems = Number(getCommputedStyle("slider").getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childELementCount - totalSliderVisibleItems;

let currentSlidePos = 0;
 
const moveSliderItem = function () {
    sliderContainer.style.tranform = `translatex(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}





const sliderNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem ();

}

sliderNextBtn.addEventListener("click", sliderNext);






const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }
    moveSliderItem ();
}

sliderPrevBtn.addEventListener("click",slidePrev);





window.addEventListener("resize", function () {
   totalSliderVisibleItems =Number(this.getComputedStyle(slider).getPropertyValue("--slider-items"));
   totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
   
   moveSliderItem ();
});

const newBody = document.getElementsByClassName('btn-primary').addEventListener('click',  () => {
      if(newBody === clicked){
    newBody.innertext = 'SUBSCRIBED'
      newBody.style.body.color = 'rgba(0,0,0,0.5)'
      }else{
        newBody.innertext = ''
      }
});


function savedUser() {

const email = document.getElementsByClassName("input-field").value;
const username = document.getElementById("name").value;

const user = {
    email: '', 
    username: ''
};

const userJSON = JSON.stringify(user);


localStorage.setItem("userData", userJSON);

alert("user information stored!");
};





function  dispalyUser() {

    const userJSON =localStorage.getItem("userData");

    if (!userJSON) {

        console.log("No user data found");
        
    } else {
        const user = JSON.parse(userJSON);

        console.log("username: " + user.username);
        console.log("Email: "+ user.email);
       
    }
}

displayUser()