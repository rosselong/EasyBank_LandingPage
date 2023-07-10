const body = document.querySelector("body");
const btnhumberger = document.querySelector("#btnhumberger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnhumberger.addEventListener("click", () => {
  console.log("click humberger");

  if (header.classList.contains("open")) {
    //close humberger menu
    body.classList.remove("noscroll");
    header.classList.remove("open");

    fadeElements.forEach(function (elements) {
      elements.classList.add("fade-out");
      elements.classList.remove("fade-in");
    });
  } else {
    //open humberger menu
    body.classList.add("noscroll");
    header.classList.add("open");

    fadeElements.forEach(function (elements) {
      elements.classList.add("fade-in");
      elements.classList.remove("fade-out");
    });
  }
});
