import './style.css'

$(document).ready(function () {
  $(".marquee").marqueeify({
    speed: 200,
    bumpEdge: function () {
      var randomColorInt = Math.floor(Math.random() * 360)
      var newColor = "hsl(" + randomColorInt + ", 100%, 50%)";
      var newUnderColor = "hsl(" + randomColorInt + ", 100%, 40%)";
      $(".marquee .main-color").css("fill", newColor);
      $(".marquee .under-color").css("fill", newUnderColor);
    },
  });
});
