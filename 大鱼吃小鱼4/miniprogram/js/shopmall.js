import{ DataBus } from './databus.js'
let databus= new DataBus()

export class ShopMall
{
  constructor()
  {
    this.image=wx.createImage();
    this.image.src='images/shopmall.jpg'
    this.x=0;
    this.y=30;
    this.w=500;
    this.h=542;
  }
  display()
  {
      databus.ctx.drawImage(this.image,this.x,this.y,this.w,this.h,0,0,databus.canvas.width,databus.canvas.height+60)
  }
}