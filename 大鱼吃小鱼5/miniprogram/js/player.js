import{ DataBus } from './databus.js'
let databus =new DataBus()


export class Player
{
  constructor()
  {
    this.image=wx.createImage()
    this.image.src='images/mfishl.png'
    this.px=150;
    this.py=250;
    this.w=45;
    this.h=35;
    this.level=1;
    this.log=1;
    this.ww=383;
    this.hh=236;
  }
  display()
  {
    databus.ctx.drawImage(this.image,0,0,this.ww,this.hh,this.px-this.w/2,this.py-this.h/2,this.w,this.h)
  }
  changetofish1()
  {
    this.image.src='images/mfishl2.png'
    this.ww=541;
    this.hh=461;
  }
  changetofish2()
  {
    this.image.src='images/mfishl.png'
    this.ww=383;
    this.hh=236;
  }
}