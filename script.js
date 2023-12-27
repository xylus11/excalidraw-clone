const canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height= window.innerHeight;

const c= canvas.getContext("2d");


let previousPositio=null;


function onmousedown(e)
{
    previousPositio=[e.clientX,e.clientY]
    c.strokeStyle=drawingColor;
    
    canvas.addEventListener("mousemove",onmousemove);
    canvas.addEventListener("mouseup",onmouseup);
}
function onmousemove(e)
{
    let currentPosition = [e.clientX,e.clientY];
    c.beginPath();
    c.moveTo(...previousPositio);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPositio= currentPosition;
}
function onmouseup(e){
  
    canvas.removeEventListener("mousemove",onmousemove);

}