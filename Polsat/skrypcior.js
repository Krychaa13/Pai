const crack = document.querySelector(".rysa");
const crack1 = document.querySelector(".rysa1");
const tiles = document.querySelectorAll(".Box");
const deadPixels = document.querySelectorAll(".kropka");

crack.addEventListener("click", function () {
  this.style.visibility = "hidden";
  crack1.style.visibility = "hidden";
});

crack1.addEventListener("click", function () {
  this.style.visibility = "hidden";
  crack.style.visibility = "hidden";
});

tiles.forEach(function (Box) {
  Box.addEventListener("click", function () {
    this.style.backgroundImage = "url('./images.png')";
  });
});

deadPixels.forEach(function (deadPixel) {
  deadPixel.addEventListener("click", function () {
    this.style.background = "red";
  });
});
