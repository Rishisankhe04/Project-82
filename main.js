canvas=document.getElementById("myCanvas");
pen_color="red";
pen_width=1;
radius=20;
var lastpositionX,lastpositionY;
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=pen_color;
        ctx.lineWidth=pen_width;
        ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    lastpositionX=current_position_x;
    lastpositionY=current_position_y;
}
canvas.addEventListener("mouseup",mouseup);
function mouseup(){
    mouseevent="mouseup";
}