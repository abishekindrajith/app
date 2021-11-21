canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX - canvas.offset.Left;
    mouse_y=e.clientX - canvas.offset.Top;
    
    console.log("X =" + mouse_x + ", Y= "+ mouse_y );

    circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0,0,canvas.Width,canvas.height);
}