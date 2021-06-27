import{ DataBus } from './databus.js'
let databus =new DataBus()

export class Fish2
{
  constructor(px,py)
  {
    this.image=wx.createImage()
    this.image.src='images/f002r.png'
    this.px=px;
    this.py=py;
    this.w=57.5;
    this.h=47.5;
    this.dx=1;
    this.dy=1;
    this.level=2;
    this.log=1;
    this.livetime=1;
    if(px>0) this.dx=-1;
    if(Math.random()>0.5) this.dy=-1;
  }
  display()
  {
    if(this.dx>0)
      this.image.src='images/f002r.png'
    else 
      this.image.src='images/f002l.png'
      databus.ctx.drawImage(this.image,0,0,574,472,this.px,this.py,this.w,this.h)
  }
}