import{ DataBus } from './databus.js'
let databus =new DataBus()

export class Fish1
{
  constructor(px,py)
  {
    this.image=wx.createImage()
    this.image.src='images/f001l.png'
    this.px=px;
    this.py=py;
    this.w=40;
    this.h=30;
    this.dx=1;
    this.dy=1;
    this.level=1;
    this.livetime=1;
    this.log=1;
    if(px>0) this.dx=-1;
    if(Math.random()>0.5) this.dy=-1;
  }

  display()
  {
    if(this.dx>0)
      this.image.src='images/f001r.png'
    else 
      this.image.src='images/f001l.png'
    databus.ctx.drawImage(this.image,0,0,363,178,this.px,this.py,this.w,this.h)
  }
}