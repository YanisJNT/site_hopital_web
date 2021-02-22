"use strict";

var aApp = document.querySelector(".a-app");
var menuBoxApp = document.querySelector(".box--menu--app");
var active = true;
aApp.addEventListener("click", function () {
  if (active) {
    menuBoxApp.style.width = "150px";
    menuBoxApp.style.height = "100px";
    active = false;
  } else {
    menuBoxApp.style.width = "0px";
    menuBoxApp.style.height = "0px";
    active = true;
  }
});