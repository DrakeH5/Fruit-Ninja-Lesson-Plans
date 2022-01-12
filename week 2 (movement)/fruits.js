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
    //add more shapes latter lessson
    if(this.shape="square"){
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }
  };
}
