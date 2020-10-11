var mouseEvent = "";
var last_position_x;
var last_position_y;
var current_position_x;
var current_position_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(event) {
    mouseEvent = "mouseup_event";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(event) {
    mouseEvent = "mouseleave_event";

}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(event) {
    mouseEvent = "mousedown_event";
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(event) {
    current_position_x = event.clientX - canvas.offsetLeft;
    current_position_y = event.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown_event") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}
function Clear_Area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}