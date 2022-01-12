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
  this.update = function() {
    this.x+=this.Dx*this.Vx;
    this.y+=this.Dy*this.Vy;
    if(this.Vy<=0){this.Dy*=-1;this.Vy=0.1} else if(this.Dy<0) {this.Vy-=0.1} else if(this.Dy>0){this.Vy+=0.1}
    //add more shapes latter lessson
    if(this.shape="square"){
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }
  };
}
