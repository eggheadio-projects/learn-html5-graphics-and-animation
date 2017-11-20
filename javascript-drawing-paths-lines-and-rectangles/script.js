window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.lineTo(300, 200);
  context.lineTo(100, 200);
  
  context.closePath();
  context.stroke();
};