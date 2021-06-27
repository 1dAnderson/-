import{ DataBus } from './databus.js'
let databus= new DataBus()

export class BackGround
{
  constructor()
  {
    this.image=wx.createImage();
    this.image.src='images/bg2.png'
    this.x=0;
    this.y=0;
    this.w=200;
    this.h=400;
    this.log=1;
    this.bgm = wx.createInnerAudioContext()
    this.bgm.autoplay = true
    this.bgm.loop = true
    this.bgm.src = 'audio/bgm.mp3'
    /*wx.onShow(function () {
      bgm.play()
    })*/
  }
  display()
  {
    if(this.log)
    {
      databus.ctx.drawImage(this.image,this.x,this.y,this.w,this.h,0,0,databus.canvas.width,databus.canvas.height)
    }
  }
  changetobg1()
  {
    this.image.src='images/bg3.jpg'
    this.w=480;
    this.h=800;
  }
  changetobg2()
  {
    this.image.src='images/bg2.png'
    this.w=200;
    this.h=400;
  }
}