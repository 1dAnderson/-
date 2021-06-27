import{ DataBus } from './databus.js'
let databus =new DataBus()

export class Fish4
{
  constructor(px,py)
  {
    this.image=wx.createImage()
    this.image.src='images/f004r.png'
    this.px=px;
    this.py=py;
    this.w=130;
    this.h=100;
    this.dx=1;
    this.dy=1;
    this.log=1;
    this.level=4;
    this.livetime=1;
    if(px>0) this.dx=-1;
    if(Math.random()>0.5) this.dy=-1;
  }
  display()
  {
    if(this.dx>0)
      this.image.src='images/f004r.png'
    else 
      this.image.src='images/f004l.png'
      databus.ctx.drawImage(this.image,0,0,265,197,this.px,this.py,this.w,this.h)
  }
}