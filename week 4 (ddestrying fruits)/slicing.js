document.addEventListener('mousedown', function(evt){
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;
  mouseX = (evt.clientX - rect.left) * scaleX;
  mouseY = (evt.clientY - rect.top) * scaleY;
})

var mouseX=-1;
var mouseY=-1;

function checkSlicing(){
  if(mouseX>0){
    i=0;
    while(i<fruits.length){
      if(fruits[i].x+fruits[i].width>mouseX&&fruits[i].x<mouseX&&
      fruits[i].y+fruits[i].height>mouseY&&fruits[i].y<mouseY){
        fruits.push(new Fruit(fruits[i].x,fruits[i].y,mouseX-fruits[i].x,mouseY-fruits[i].y,-1,-1,fruits[i].Vx,fruits[i].Vy,fruits[i].shape));
        fruits.push(new Fruit(mouseX,fruits[i].y,(fruits[i].x+fruits[i].width)-mouseX,mouseY-fruits[i].y,1,-1,fruits[i].Vx,fruits[i].Vy,fruits[i].shape));
        fruits.push(new Fruit(fruits[i].x,mouseY,mouseX-fruits[i].x,(fruits[i].y+fruits[i].height)-mouseY,-1,1,fruits[i].Vx,fruits[i].Vy,fruits[i].shape));
        fruits.push(new Fruit(mouseX,mouseY,(fruits[i].x+fruits[i].width)-mouseX,(fruits[i].y+fruits[i].height)-mouseY,1,1,fruits[i].Vx,fruits[i].Vy,fruits[i].shape));
        fruits.splice(i,1);
        mouseX=-1;
        mouseY=-1;
      }
      i++;
    }
  }
}
