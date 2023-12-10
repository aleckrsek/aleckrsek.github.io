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
  content.style.display="inline";
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

function education(){
  content.innerHTML = "Besides being a freshman in college, I was studying at Central Oregon Community College for 3 terms while I was a junior in high school.";
}

function relevantSkills(){
  content.innerHTML = "I’m working on expanding my Java and Python skills in my current classes I’m enrolled in. I’ve used C++ in the past in 2021 when studying at a community college. I am familiar with diagnosing hardware problems and assembling computing systems.";
}

function documentedSourceCode(){
  content.innerHTML = "My <a href='https://github.com/aleckrsek/aleckrsek.github.io'>portfolio website</a> that is using html and css";
}

function personalProjects(){
  content.innerHTML = "Completed projects I’ve done would be my dotfiles for my old Linux desktop. Not really programming, but really in-depth configuration. I am currently working on this portfolio website, hopefully with some fancy css.";
}

function relevantExperiences(){
  content.innerHTML = "Working on this portfolio website. And a few other introductory java projects, some of which are using Processing.";
}