
let instance
export class DataBus
{
  constructor()
  {
    if(instance)
    {
      return instance
    }
    instance=this
    this.gamestatus=2;
    this.canvas;
    this.ctx;
    this.level=1;
    this.fishlist1=[]
    this.fishlist2=[]
    this.fishlist3=[]
    this.fishlist4=[]
    this.fishlist5=[]
    //this.levellist=[0,25,50,100,200,400,800,0]
    this.levellist=[0,20,40,80,160,9999999]
    this.score=0;
    this.maxscore1=0;
    this.maxscore2=0;
    this.maxscore3=0;
    this.coin=1000;
  }
  showscore()
  {
    this.ctx.font='30px 华文彩云';
    this.ctx.fillStyle='#fff';
    this.ctx.fillText("score:"+this.score,0,75,200)
    this.ctx.fillText("level:"+this.level,0,50,200)
  }
  showcoin()
  {
    this.ctx.font='30px 华文彩云';
    this.ctx.fillStyle='#fff';
    this.ctx.fillText("coin:"+this.coin,0,105,200)
  }
}