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

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
