
var canvas = document.getElementById("drawboard");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

context.canvas.width = 960;
context.canvas.height = 960;

var pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX - canvas.offsetLeft;
  pos.y = e.clientY - canvas.offsetTop;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

function draw(e) {
    if(e.buttons !== 1) return;
    context.beginPath();

    context.lineWidth = 10;
    context.lineCap = 'round';
    context.strokeStyle = 'red';

    context.moveTo(pos.x, pos.y);
    setPosition(e);
    context.lineTo(pos.x, pos.y);

    context.stroke();
}