window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = 600,
      height = canvas.height = 600;

  // radial
  var gradient = context.createRadialGradient(120, 80, 0, 110, 90, 70);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2);
  context.fill();
  
  
  // linear
  /*
  var linearGradient = context.createLinearGradient(100, 100, 200, 200);
  linearGradient.addColorStop(0, "red");
  linearGradient.addColorStop(0.5, "green");
  linearGradient.addColorStop(1, "blue");
  
  context.fillStyle = linearGradient;
  context.fillRect(100, 100, 100, 100);
  */
};