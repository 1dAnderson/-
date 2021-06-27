import{ DataBus } from './databus.js'
let databus =new DataBus()


export class ShopMallFish1
{
  constructor()
  {
    this.image=wx.createImage()
    this.image.src='images/mfishl2.png'
    this.px=databus.canvas.width/5;
    this.py=databus.canvas.height/3*2;
    this.w=100;
    this.h=120;
    this.ishave=0;
    this.used=0;
  }
  display()
  {
    databus.ctx.drawImage(this.image,0,0,541,461,this.px,this.py,this.w,this.h)
    databus.ctx.fillStyle='#fff';
    databus.ctx.fillText("$500",this.px+10,this.py+160,200)
    databus.ctx.fillStyle='#000';
    if(this.ishave==0)
      databus.ctx.fillText("购买",this.px+15,this.py+190,200)
    else
    {
      if(this.used) 
      {
        databus.ctx.fillText("已使用",this.px+5,this.py+190,200)
      }
      else 
      {
        databus.ctx.fillText("使用",this.px+15,this.py+190,200)
      }
    }
  }
}