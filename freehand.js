const pencil = document.getElementById('pencil');
let isPencilActive = false;
const colorPick = document.getElementById('col');

colorPick.addEventListener("change",()=>
{
    drawingColor= colorPick.value;
})


function onPencil()
{
pencil.classList.toggle("active");
isPencilActive=!isPencilActive;
if(isPencilActive)
{  
    
     canvas.style.cursor="crosshair";
   
    canvas.addEventListener("mousedown",onmousedown);
}
else{
    canvas.style.cursor="auto";
    canvas.removeEventListener("mousedown",onmousedown);
   
}


}
pencil.addEventListener("click",onPencil);