const navBar = document.querySelector("header");
const getStarted = document.querySelector(".button");
const viewPortHeightElement = document.querySelector(".mainHeader");
let statusViewPortHeight = false;

const letters = document.querySelectorAll("g>g");
console.log(letters);
const scroll = () => {
  let viewPortHeight = viewPortHeightElement.offsetHeight;

  if (window.scrollY >= viewPortHeight - 50 && !statusViewPortHeight) {
    navBar.style.animation = "none";
    navBar.style.animation = "fadeIn 1s forwards";
    getStarted.style.animation = "none";
    getStarted.style.animation = "fadeInButton 1s forwards";
    statusViewPortHeight = true;
  } else if (window.scrollY < viewPortHeight - 50 && statusViewPortHeight) {
    navBar.style.animation = "none";
    navBar.style.animation = "fadeOut 1s forwards";
    getStarted.style.animation = "none";
    getStarted.style.animation = "fadeOutButton 1s forwards";
    statusViewPortHeight = false;
  }
};

const animateLetters = () => {

  const randomIndex = Math.floor(Math.random() * letters.length);
  const singleLetter = letters[randomIndex];
   const currentOpacity = singleLetter.getAttribute("opacity");
    singleLetter.setAttribute("opacity", currentOpacity === "0" ? "1" : "0");
};
window.onscroll = scroll
window.addEventListener("load", () => {
  setInterval(animateLetters, 50);
});
