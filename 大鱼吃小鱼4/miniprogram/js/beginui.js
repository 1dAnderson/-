import{ DataBus } from './databus.js'
let databus= new DataBus()

export class BeginUI
{
  constructor()
  {
    this.image=wx.createImage();
    this.image.src='images/bg4.jpg'
    this.x=0;
    this.y=0;
    this.w=300;
    this.h=600;
  }
  display()
  {
      databus.ctx.drawImage(this.image,this.x,this.y,this.w,this.h,0,0,databus.canvas.width,databus.canvas.height)
      databus.ctx.font='30px 华文彩云';
      databus.ctx.fillStyle='#fff';
      databus.ctx.fillText("商城",databus.canvas.width/2-100/3,databus.canvas.height/2-80)
      databus.ctx.fillText("开始游戏",databus.canvas.width/2-160/3,databus.canvas.height/2,200)//h=80
      databus.ctx.fillText("排行榜",databus.canvas.width/2-130/3,databus.canvas.height/2+80)
  }
}