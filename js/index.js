function init(){
  var infoBox = document.getElementById("infoBox");
  infoBox.style.display="none";
}

window.onload = init;

function showInfo(){
  var starterBox = document.getElementById("mainBox")
  starterBox.style.display="none";
  infoBox.style.display="block";
}
