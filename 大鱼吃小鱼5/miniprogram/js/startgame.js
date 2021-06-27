import{ DataBus } from './databus.js'
let databus= new DataBus()

export class StartGame
{
  constructor()
  {
    this.image=wx.createImage();
   /* this.image.src='images/background.png'*/
    this.x=0;
    this.y=0;
    this.w=160;
    this.h=80;
  }
  display()
  {
      /*databus.ctx.drawImage(this.image,0,0,284,207,databus.canvas.width/2-this.w/2,databus.canvas.height/2-this.h/2,this.w,this.h)*/
      databus.ctx.font='30px 华文彩云';
      databus.ctx.fillStyle='#fff';
      databus.ctx.fillText("开始游戏",databus.canvas.width/2-this.w/3,databus.canvas.height/2,200)
  }
}