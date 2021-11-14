var MouseEventType = "Nothing";
var Last_Position_of_X, Last_Position_of_Y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "green";
width = 2;

canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e) {
    MouseEventType="MouseDown";
}

canvas.addEventListener("mousemove", mouseMove);
function mouseMove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (MouseEventType == "MouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last Coordinates Are: "+Last_Position_of_X+", "+Last_Position_of_Y);
        ctx.moveTo(Last_Position_of_X, Last_Position_of_Y);
        console.log("Current Coordinates Are: "+current_x_position+", "+current_y_position);
        ctx.lineTo(current_x_position, current_y_position);
        ctx.stroke();
    }
    Last_Position_of_X = current_x_position
    Last_Position_of_Y = current_y_position
}

canvas.addEventListener("mouseup", mouseUp)
function mouseUp(e) {
    MouseEventType = "MouseUp"
}

canvas.addEventListener("mouseleave", mouseLeave)
function mouseLeave(e) {
    MouseEventType = "MouseLeft"
}

