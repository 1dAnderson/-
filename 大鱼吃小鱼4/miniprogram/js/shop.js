import{ DataBus } from './databus.js'
let databus= new DataBus()

export class Shop
{
  constructor()
  {
    this.image=wx.createImage();
    this.image.src='images/background.png'
    this.x=0;
    this.y=0;
    this.w=110;
    this.h=80;
  }
  display()
  {
      //databus.ctx.drawImage(this.image,0,0,284,207,databus.canvas.width/2-this.w/3,databus.canvas.height/2-120,this.w,this.h)
      databus.ctx.font='30px 华文彩云';
      databus.ctx.fillStyle='#fff';
      databus.ctx.fillText("商城",databus.canvas.width/2-this.w/3,databus.canvas.height/2-this.h)
  }
}