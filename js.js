canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth=1;
ctx.rect(150,143,550,260);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=5;
ctx.arc(310,240,40,0,2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth=5;
ctx.arc(357,280,40,0,2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=5;
ctx.arc(400,240,40,0,2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth=5;
ctx.arc(450,280,40,0,2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth=5;
ctx.arc(495,240,40,0,2*Math.PI );
ctx.stroke();