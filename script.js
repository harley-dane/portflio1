"use strict";

const hamburger = document.querySelector(".top .open-icon");

const close = document.querySelector("nav .close-icon");

const nav = document.querySelector("nav");

const headerAboutMe = document.getElementById("headerAboutMe");

const harleyAboutMe = document.getElementById("hAboutMe");

const developerAboutMe = document.getElementById("developerAboutMe");

const myWorldAboutMe = document.getElementById("myWorldAboutMe");

const hi = "Hi, I'm";
const harley = "- Harley -";
const developer = "I am a full-stack developer.";
const welcome = "Welcome to my little programming world.";

function autoWriter(target, string, speed) {
  let currentChar = 0;
  const textArray = string.split("");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function writer(currentChar) {
    const randomNum = getRandomInt(10);

    setTimeout(() => {
      target.textContent += textArray[currentChar];

      if (currentChar < textArray.length - 1) {
        currentChar += 1;
        writer(currentChar);
      }
    }, speed * randomNum);
  }

  writer(currentChar);
}

function greeting() {
  setTimeout(() => {
    autoWriter(headerAboutMe, hi, 15);
  }, 1000);
  setTimeout(() => {
    autoWriter(harleyAboutMe, harley, 20);
  }, 2500);
  setTimeout(() => {
    autoWriter(developerAboutMe, developer, 15);
  }, 4000);
  setTimeout(() => {
    autoWriter(myWorldAboutMe, welcome, 15);
  }, 7000);
}

greeting();

hamburger.addEventListener("click", () => {
  nav.classList.add("nav-display-block");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-display-block");
});

function myFunction() {
  let element = document.body;
  element.classList.toggle("white-mode");
  const navLinks = document.querySelector(".projects img ");

  navLinks.classList.toggle("change-color");
}
