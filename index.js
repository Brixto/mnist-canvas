
var canvas = document.getElementById("drawboard");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;

canvas.addEventListener('mousemove', draw);

function draw(e) {
    console.log(e.clientX - canvas.offsetLeft);
    console.log(e.clientY - canvas.offsetTop);
}