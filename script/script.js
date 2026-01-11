const navBar = document.querySelector("header");
const getStarted = document.querySelector(".button");
const viewPortHeightElement = document.querySelector(".mainHeader");
let statusViewPortHeight = false;

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





window.onscroll = scroll;

