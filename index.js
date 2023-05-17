// let checkbox = document.getElementById("dark-mode"); //get the checkbox to a variable

// //check storage if dark mode was on or off
// if (sessionStorage.getItem("darkmode") == true) {
//   darkmode(); //if dark mode was on, run this funtion
// } else {
//   nodark(); //else run this funtion
// }

// //if the checkbox state is changed, run a funtion
// checkbox.addEventListener("click", function () {
//   //check if the checkbox is checked or not
//   if (!checkbox.checked) {
//     darkmode(); //if the checkbox is checked, run this funtion
//   } else {
//     nodark(); //else run this funtion
//   }
// });

// //function for checkbox when checkbox is checked
// function darkmode() {
//   document.documentElement.classList.add("dark"); //add a class to the body tag
//   checkbox.checked = true; //set checkbox to be checked state
//   sessionStorage.setItem("darkmode", true); //store a name & value to know that dark mode is on
// }

// //function for checkbox when checkbox is not checked
// function nodark() {
//   document.documentElement.classList.remove("dark"); //remove added class from body tag
//   checkbox.checked = false; //set checkbox to be unchecked state
//   sessionStorage.setItem("darkmode", false); //store a name & value to know that dark mode is off or light mode is on
// }

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

let welcomeFrontEndBtn = document.getElementById("welcome-frontend-btn");
let welcomeDevBtn = document.getElementById("welcome-dev-btn");

let frontEndBtn = document.getElementById("projects-frontend-btn");
let devBtn = document.getElementById("projects-dev-btn");

let frontEndGrid = document.getElementById("frontend-grid");
let devGrid = document.getElementById("dev-grid");

let promoSummary = document.getElementById("promo");
let devSummary = document.getElementById("promo-dev");

welcomeFrontEndBtn.addEventListener("click", toggleFrontEndMode);
welcomeDevBtn.addEventListener("click", toggleDevMode);
frontEndBtn.addEventListener("click", toggleFrontEndMode);
devBtn.addEventListener("click", toggleDevMode);

frontEndBtn.style.transition = "transform 150ms ease";
devBtn.style.transition = "transform 150ms ease";

function toggleFrontEndMode() {
  devSummary.style.display = "none";
  promoSummary.style.display = "flex";

  frontEndGrid.style.display = "grid";
  frontEndBtn.style.background = "#89fc00";
  frontEndBtn.style.borderColor = "#89fc00";
  frontEndBtn.style.color = "black";
  frontEndBtn.style.fontWeight = "600";

  devGrid.style.display = "none";
  devBtn.style.background = "transparent";
  devBtn.style.borderColor = "#89fc00";
  devBtn.style.color = "#89fc00";
  devBtn.style.fontWeight = "500";
}
function toggleDevMode() {
  devSummary.style.display = "flex";
  promoSummary.style.display = "none";

  devGrid.style.display = "grid";
  devBtn.style.background = "#89fc00";
  devBtn.style.borderColor = "#89fc00";
  devBtn.style.color = "black";
  devBtn.style.fontWeight = "600";

  frontEndGrid.style.display = "none";
  frontEndBtn.style.background = "transparent";
  frontEndBtn.style.borderColor = "#89fc00";
  frontEndBtn.style.color = "#89fc00";
  frontEndBtn.style.fontWeight = "500";
}
