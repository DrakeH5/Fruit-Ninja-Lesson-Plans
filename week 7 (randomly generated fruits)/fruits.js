var Fruit = function(x,y,width,height,dx,dy,vx,vy,shape) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.Dx = dx;
  this.Dy = dy;
  this.Vx = vx;
  this.Vy = vy;
  this.shape = shape;
  this.update = function(nbmInArray) {
    this.x+=this.Dx*this.Vx;
    this.y+=this.Dy*this.Vy;
    if(this.Vy<=0){this.Dy*=-1;this.Vy=0.1} else if(this.Dy<0) {this.Vy-=0.1} else if(this.Dy>0){this.Vy+=0.1}
    if(this.x<0){this.Dx=1}else if(this.x+this.width>canvas.width){this.Dx=-1}
    if(this.y<0){this.Dy=1}
    if(this.y>canvas.height){fruits.splice(nbmInArray,1)}
    if(this.shape=="square"){
      ctx.fillRect(this.x,this.y,this.width,this.height)
    } else if(this.shape=="circle"){
      this.width=this.height;
      ctx.beginPath();
      ctx.arc(this.x+(this.width/2), this.y+(this.width/2), this.width/2, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.fill();
    }
  };
}
