var infoBox;
var gridBox;
var contentBox;
var content;
var starterBox;
var homeNav;
var infoNav;

function init(){
  infoBox = document.getElementById("infoBox");
  gridBox = document.getElementById("gridBox");
  contentBox = document.getElementById("contentBox");
  content = document.getElementById("content");
  starterBox = document.getElementById("mainBox");
  homeNav = document.getElementById("homeNav");
  infoNav = document.getElementById("infoNav");
  showHome();
}

window.onload = init;

function showInfo(){
  starterBox.style.display="none";
  infoBox.style.display="block";
  contentBox.style.display="block";
  content.style.display="block";
  homeNav.classList.remove("active");
  infoNav.classList.add("active");
}

function showHome(){
  infoBox.style.display="none";
  contentBox.style.display="none";
  content.style.display="none";
  starterBox.style.display="block";
  homeNav.classList.add("active");
  infoNav.classList.remove("active");
}
