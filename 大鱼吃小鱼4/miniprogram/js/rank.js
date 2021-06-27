import{ DataBus } from './databus.js'
let databus= new DataBus()

export class Rank
{
  constructor()
  {
    this.image=wx.createImage();
    this.image.src='images/rank.jpg'
    this.x=0;
    this.y=0;
    this.w=350;
    this.h=630;
  }
  display()
  {
      databus.ctx.drawImage(this.image,this.x,this.y,this.w,this.h,0,0,databus.canvas.width,databus.canvas.height)
  }
}