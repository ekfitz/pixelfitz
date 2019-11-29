document.body.onload = setMobile;
window.addEventListener("resize", setMobile);
var logopic = document.getElementById("logopic");

logopic.src = "images/logo.png";

function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    window.location.replace("m.html");
  }
}
