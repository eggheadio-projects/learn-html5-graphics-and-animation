window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  
  
  var num = 30;
  context.translate(300, 300);
  for(var i = 0; i < num; i++) {
    context.rotate(Math.PI * 2 / num);
    context.beginPath();
    context.arc(100, 0, 10, 0, Math.PI * 2);
    context.fill();
  }
  
  
//   context.translate(300, 300);
//   context.scale(1, -1);
//   context.beginPath();
//   context.moveTo(-300, 0);
//   context.lineTo(300, 0);
//   context.moveTo(0, -300);
//   context.lineTo(0, 300);
//   context.stroke();
  
//   context.beginPath();
//   context.arc(100, 100, 10, 0, Math.PI * 2);
//   context.fill();
  
//   context.font = "30px Arial";
//   context.fillText("Text", 120, 120);
  
  
//   context.translate(300, 0);
//   context.rotate(Math.PI / 4);
//   context.fillRect(0, 0, 100, 100);
  
  
//   context.save();
//   context.scale(2, 0.5);
//   for(var j = 0; j < 10; j++) {
//     context.save();
//     for(var i = 0; i < 10; i++) {
//       context.fillRect(0, 0, 30, 30);
//       context.translate(40, 0);
//     }
//     context.restore();
//     context.translate(0, 40);
//   }
//   context.restore();
//   context.fillStyle = "red";
//   context.fillRect(0, 0, 100, 100);
  
//   context.translate(100, 100);
//   context.fillRect(0, 0, 100, 100);
};