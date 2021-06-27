import { DataBus }    from './databus.js'
import { BackGround } from './background.js'
import { BeginUI } from './beginui.js'
import { ShopMall } from './shopmall.js'
import { Fish1 }      from './fish1.js'
import { Fish2 }      from './fish2.js'
import { Fish3 }      from './fish3.js'
import { Fish4 }      from './fish4.js'
import { Fish5 }      from './fish5.js'
import { Player }     from './player.js'
import { Rank } from './rank.js'
import { ShopMallBg1 } from './shopmallbg1.js'
import { ShopMallBg2 } from './shopmallbg2.js'
import { ShopMallFish1 } from './shopmallfish1.js'
import { ShopMallFish2 } from './shopmallfish2.js'
let databus = new DataBus()
let main 
let tx=50,ty=50;
export class Main {                                                         
  constructor() 
  {
    main=this
    this.canvas = wx.createCanvas()
    this.ctx=this.canvas.getContext("2d")
    databus.canvas=this.canvas
    databus.ctx=this.ctx
    this.pl=new Player()
    this.bg=new BackGround()
    this.sm=new ShopMall()
    this.bu=new BeginUI()
    this.rk=new Rank()
    this.smbg1=new ShopMallBg1()
    this.smbg2=new ShopMallBg2()
    this.smfh1=new ShopMallFish1()
    this.smfh2=new ShopMallFish2()
    this.list1=[7,3,2,1,5]
    this.list2=[3,4,3,2,5]
    this.list3=[0,3,3,2,5]
    this.list4=[0,0,2,3,5]
    this.list5=[0,0,0,2,5]
    
    this.init()
  }
  init()
  {
    tx=databus.canvas.width/2;
    ty=databus.canvas.height/2;
    wx.onTouchMove(function (res) {
        tx = res.changedTouches[0].clientX
        ty = res.changedTouches[0].clientY
        if(tx>main.pl.px)
      {
        if(main.smfh1.used==1) main.pl.image.src='images/mfishr2.png'
        else  main.pl.image.src='images/mfishr.png'
      }
      else
      {
        if(main.smfh1.used==1) main.pl.image.src='images/mfishl2.png'
        else  main.pl.image.src='images/mfishl.png'
      }
    })
    wx.onTouchStart(function (res) {
      if(databus.gamestatus==1)
      {
        if(res.changedTouches[0].clientX >=databus.canvas.width-100  &&  res.changedTouches[0].clientY <=85)
        {
          databus.gamestatus=2;
        }
      }
      if(databus.gamestatus==2) 
      {
        if(res.changedTouches[0].clientX <=databus.canvas.width/2+80 && res.changedTouches[0].clientX >=databus.canvas.width/2-80
        &&  res.changedTouches[0].clientY <=databus.canvas.height/2+40 &&  res.changedTouches[0].clientY >=databus.canvas.height/2-40)
        {
          databus.gamestatus=1;
        }
        if(res.changedTouches[0].clientX <=databus.canvas.width/2+80 && res.changedTouches[0].clientX >=databus.canvas.width/2-80
          &&  res.changedTouches[0].clientY <=databus.canvas.height/2-40 &&  res.changedTouches[0].clientY >=databus.canvas.height/2-120)
        {
          databus.gamestatus=3;
        }
        if(res.changedTouches[0].clientX <=databus.canvas.width/2+80 && res.changedTouches[0].clientX >=databus.canvas.width/2-80
          &&  res.changedTouches[0].clientY >=databus.canvas.height/2+40 &&  res.changedTouches[0].clientY <=databus.canvas.height/2+100)
        {
          databus.gamestatus=4;
        }
        
      }
      if(databus.gamestatus==3) 
      {
        if(res.changedTouches[0].clientX >=databus.canvas.width-100  &&  res.changedTouches[0].clientY <=105)
        {
          databus.gamestatus=2;
        }
        if(res.changedTouches[0].clientX <=main.smbg1.px+80 && res.changedTouches[0].clientX >=main.smbg1.px
          &&  res.changedTouches[0].clientY >=main.smbg1.py+170 &&  res.changedTouches[0].clientY <=main.smbg1.py+190)
        {
          if(main.smbg1.ishave==0)
          {
            wx.showModal({
              title: '是否购买',
              content: '余额：'+databus.coin,
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '购买成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.smbg1.ishave=1;
                  databus.coin-=500;
                } 
              }
            })
          }
          else
          {
            wx.showModal({
              title: '是否使用',
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '使用成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.bg.changetobg1()
                  main.smbg1.used=1;
                  main.smbg2.used=0;
                } 
              }
            })
          }
        }
        if(res.changedTouches[0].clientX <=main.smbg2.px+80 && res.changedTouches[0].clientX >=main.smbg2.px
          &&  res.changedTouches[0].clientY >=main.smbg2.py+170 &&  res.changedTouches[0].clientY <=main.smbg2.py+190)
        {
          if(main.smbg2.ishave==0)
          {
            wx.showModal({
              title: '是否购买',
              content: '余额：'+databus.coin,
              success (res) {
                if (res.confirm) {
                  wx.showToast({
                    title: '购买成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.smbg2.ishave=1;
                  databus.coin-=500;
                } else if (res.cancel) {
                  databus.gamestatus=3;
                }
              }
            })
          }
          else
          {
            wx.showModal({
              title: '是否使用',
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '使用成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.bg.changetobg2()
                  main.smbg2.used=1;
                  main.smbg1.used=0;
                } 
              }
            })
          }
        }
        if(res.changedTouches[0].clientX <=main.smfh1.px+80 && res.changedTouches[0].clientX >=main.smfh1.px
          &&  res.changedTouches[0].clientY >=main.smfh1.py+170 &&  res.changedTouches[0].clientY <=main.smfh1.py+190)
        {
          if(main.smfh1.ishave==0)
          {
            wx.showModal({
              title: '是否购买',
              content: '余额：'+databus.coin,
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '购买成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.smfh1.ishave=1;
                  databus.coin-=500;
                } 
              }
            })
          }
          else
          {
            wx.showModal({
              title: '是否使用',
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '使用成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.pl.changetofish1()
                  main.smfh1.used=1;
                  main.smfh2.used=0;
                } 
              }
            })
          }
        }
        if(res.changedTouches[0].clientX <=main.smfh2.px+80 && res.changedTouches[0].clientX >=main.smfh2.px
          &&  res.changedTouches[0].clientY >=main.smfh2.py+170 &&  res.changedTouches[0].clientY <=main.smfh2.py+190)
        {
          if(main.smfh2.ishave==0)
          {
            wx.showModal({
              title: '是否购买',
              content: '余额：'+databus.coin,
              success (res) 
              {
                if (res.confirm) 
                {
                  main.smfh2.ishave=1;
                  databus.coin-=500;
                } 
              }
            })
          }
          else
          {
            wx.showModal({
              title: '是否使用',
              success (res) 
              {
                if (res.confirm) 
                {
                  wx.showToast({
                    title: '使用成功！',
                    icon: 'success！',
                    duration: 2000
                  })
                  main.pl.changetofish2()
                  main.smfh2.used=1;
                  main.smfh1.used=0;
                } 
              }
            })
          }
        }
      }
      if(databus.gamestatus==4) 
      {
        if(res.changedTouches[0].clientX >=databus.canvas.width-100  &&  res.changedTouches[0].clientY <=105)
        {
          databus.gamestatus=2;
        }
      }
  })
    this.start()
  }
  start()
  {
    this.bg.display()
    if(databus.gamestatus==1)
    { 
      databus.showscore();
      databus.ctx.fillStyle='#000';
      databus.ctx.fillText("返回",databus.canvas.width-100,85,200)
      if(tx<=this.pl.px+this.pl.w/2 && tx >= this.pl.px-this.pl.w/2 &&ty>=this.pl.py-this.pl.h/2 &&ty<=this.pl.py+this.pl.h/2)
      {
        this.pl.px=tx;
        this.pl.py=ty;
      }
      else 
      {
        this.pl.px=(1*tx+9*this.pl.px)/10;
        this.pl.py=(1*ty+9*this.pl.py)/10;
      }
      this.pl.display()
      this.check()
      this.createfish()
      this.display()
    }
    else 
    {
      this.deletefish()
      this.pl.level=1;
      this.pl.w=45;
      this.pl.h=35;
      this.pl.px=150;
      this.pl.py=250;
      databus.coin+=databus.score;
      databus.score=0;
    }
    if(databus.gamestatus==2)
    {
      this.bu.display()
    }
    if(databus.gamestatus==3)
    {
      this.sm.display()
      this.smbg1.display()
      this.smbg2.display()
      this.smfh1.display()
      this.smfh2.display()
      databus.ctx.fillText("返回",databus.canvas.width-100,105,200)
    }
    if(databus.gamestatus==4)
    {
      this.rk.display()
      databus.ctx.fillStyle='#fff';
      databus.ctx.fillText("返回",databus.canvas.width-100,105,200)
      databus.ctx.fillText("我的战绩",databus.canvas.width-210,170,490)
      databus.ctx.fillText("第一名："+databus.maxscore1,databus.canvas.width-250,250,500)
      databus.ctx.fillText("第二名："+databus.maxscore2,databus.canvas.width-250,350,500)
      databus.ctx.fillText("第三名："+databus.maxscore3,databus.canvas.width-250,450,500)
    }
    databus.showcoin();
    requestAnimationFrame(()=>this.start())
  }
  createfish()
  {
    if(databus.fishlist1.length<5) 
    {
      if(Math.random()*2>1)
        databus.fishlist1.push(new Fish1(-49,Math.random()*databus.canvas.height-30))
      else
        databus.fishlist1.push(new Fish1(databus.canvas.width,Math.random()*databus.canvas.height-30))
    }
    if(databus.fishlist2.length<this.list2[this.pl.level-1]) 
    {
      if(Math.random()*2>1)
        databus.fishlist2.push(new Fish2(-49,Math.random()*databus.canvas.height-30))
      else
        databus.fishlist2.push(new Fish2(databus.canvas.width,Math.random()*databus.canvas.height-30))
    }
    if(databus.fishlist3.length<this.list3[this.pl.level-1]) 
    {
      if(Math.random()*2>1)
        databus.fishlist3.push(new Fish3(-49,Math.random()*databus.canvas.height-30))
      else
        databus.fishlist3.push(new Fish3(databus.canvas.width,Math.random()*databus.canvas.height-30))
    }
    if(databus.fishlist4.length<this.list4[this.pl.level-1]) 
    {
      if(Math.random()*2>1)
        databus.fishlist4.push(new Fish4(-49,Math.random()*databus.canvas.height-30))
      else
        databus.fishlist4.push(new Fish4(databus.canvas.width,Math.random()*databus.canvas.height-30))
    }
    if(databus.fishlist5.length<this.list5[this.pl.level-1]) 
    {
      if(Math.random()*2>1)
        databus.fishlist5.push(new Fish5(-49,Math.random()*databus.canvas.height-30))
      else
        databus.fishlist5.push(new Fish5(databus.canvas.width,Math.random()*databus.canvas.height-30))
    }
  }
  deletefish()
  {
    while(databus.fishlist1.length>0) databus.fishlist1.shift()
    while(databus.fishlist2.length>0) databus.fishlist2.shift()
    while(databus.fishlist3.length>0) databus.fishlist3.shift()
    while(databus.fishlist4.length>0) databus.fishlist4.shift()
    while(databus.fishlist5.length>0) databus.fishlist5.shift()
  }
  display()
  {
    databus.fishlist1.forEach(function(val) {val.display();})
    databus.fishlist2.forEach(function(val) {val.display();})
    databus.fishlist3.forEach(function(val) {val.display();})
    databus.fishlist4.forEach(function(val) {val.display();})
    databus.fishlist5.forEach(function(val) {val.display();})
  }
  check()
  {
    if(databus.score>=databus.levellist[this.pl.level]) 
    {
      this.pl.w=this.pl.level*30+30;
      this.pl.h=this.pl.level*30+20;
      this.pl.level++;
      databus.level++;
    }
    const plboder={
      top:this.pl.py-this.pl.h/2,
      bottom:this.pl.py+this.pl.h/2,
      left:this.pl.px-this.pl.w,
      right:this.pl.px+this.pl.w/2,
      level:this.pl.level
    }
    //fishlis1
    for(let i=0;i<databus.fishlist1.length;i++)
    {
      const fishboder={
        top:databus.fishlist1[i].py,
        bottom:databus.fishlist1[i].py+databus.fishlist1[i].h,
        left:databus.fishlist1[i].px,
        right:databus.fishlist1[i].px+databus.fishlist1[i].w,
        level:databus.fishlist1[i].level,
        livetime:databus.fishlist1[i].livetime
      }
      if(fishboder.top>databus.canvas.height+100||fishboder.top<-100||fishboder.left>databus.canvas.width+100||fishboder.right<-100)
      {
        databus.fishlist1[i]=databus.fishlist1[0]
        databus.fishlist1.shift()
        continue;
      }
      if(!(fishboder.bottom<plboder.top||fishboder.top>plboder.bottom||fishboder.right<plboder.left||fishboder.left>plboder.right))
      {
          if(plboder.level<fishboder.level) 
          {
            databus.gamestatus=0;
            wx.showModal({
              title: '游戏结束',
              content: '得分：'+databus.score,
              success (res) {
                if (res.confirm) {
                  databus.gamestatus=1;
                } else if (res.cancel) {
                  databus.gamestatus=2;
                }
              }
            })
            console.log("游戏结束")
          }
          else 
          {
            databus.score+=fishboder.level;
            databus.fishlist1[i]=databus.fishlist1[0];
            databus.fishlist1.shift()
            continue;
          }
      }
      databus.fishlist1[i].px+=databus.fishlist1[i].dx;
      databus.fishlist1[i].py+=databus.fishlist1[i].dy;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.bottom>=databus.canvas.height))  databus.fishlist1[i].dy=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.top<=0))  databus.fishlist1[i].dy=1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.right>=databus.canvas.width)) databus.fishlist1[i].dx=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==0)) databus.fishlist1[i].dx=1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==databus.canvas.width/2)&&Math.random()>0.5) databus.fishlist1[i].dx*=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.down==databus.canvas.height/2)&&Math.random()>0.5) databus.fishlist1[i].dy*=-1;
      databus.fishlist1[i].livetime++;
    }
    //fishlist2
    for(let i=0;i<databus.fishlist2.length;i++)
    {
      const fishboder={
        top:databus.fishlist2[i].py,
        bottom:databus.fishlist2[i].py+databus.fishlist2[i].h,
        left:databus.fishlist2[i].px,
        right:databus.fishlist2[i].px+databus.fishlist2[i].w,
        level:databus.fishlist2[i].level,
        livetime:databus.fishlist2[i].livetime
      }
      if(fishboder.top>databus.canvas.height+100||fishboder.top<-100||fishboder.left>databus.canvas.width+100||fishboder.right<-100)
      {
        databus.fishlist2[i]=databus.fishlist2[0]
        databus.fishlist2.shift()
        continue;
      }
      if(!(fishboder.bottom<plboder.top||fishboder.top>plboder.bottom||fishboder.right<plboder.left||fishboder.left>plboder.right))
      {
          if(plboder.level<fishboder.level) 
          {
            if(databus.score>databus.maxscore1)
            {
              databus.maxscore3=databus.maxscore2;
              databus.maxscore2=databus.maxscore1;
              databus.maxscore1=databus.score;
            }
            else if(databus.score>databus.maxscore2)
            {
              databus.maxscore3=databus.maxscore2;
              databus.maxscore2=databus.score;
            }
            else if(databus.score>databus.maxscore3)
            {
              databus.maxscore3=databus.score;
            }
            databus.gamestatus=0;
            wx.showModal({
              title: '游戏结束',
              content: '得分：'+databus.score+',是否再来一局',
              success (res) {
                if (res.confirm) {
                  databus.gamestatus=1;
                } else if (res.cancel) {
                  databus.gamestatus=2;
                }
              }
            })
            console.log("游戏结束")
          }
          else 
          {
            databus.score+=fishboder.level;
            databus.fishlist2[i]=databus.fishlist2[0];
            databus.fishlist2.shift()
            continue;
          }
      }
      databus.fishlist2[i].px+=databus.fishlist2[i].dx;
      databus.fishlist2[i].py+=databus.fishlist2[i].dy;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.bottom>=databus.canvas.height))  databus.fishlist2[i].dy=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.top<=0))  databus.fishlist2[i].dy=1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.right>=databus.canvas.width)) databus.fishlist2[i].dx=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==0)) databus.fishlist2[i].dx=1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==databus.canvas.width/2)&&Math.random()>0.5) databus.fishlist2[i].dx*=-1;
      if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.down==databus.canvas.height/2)&&Math.random()>0.5) databus.fishlist2[i].dy*=-1;
      databus.fishlist2[i].livetime++;
    }

//fishlist3
for(let i=0;i<databus.fishlist3.length;i++)
{
  const fishboder={
    top:databus.fishlist3[i].py,
    bottom:databus.fishlist3[i].py+databus.fishlist3[i].h,
    left:databus.fishlist3[i].px,
    right:databus.fishlist3[i].px+databus.fishlist3[i].w,
    level:databus.fishlist3[i].level,
    livetime:databus.fishlist3[i].livetime
  }
  if(fishboder.top>databus.canvas.height+100||fishboder.top<-100||fishboder.left>databus.canvas.width+100||fishboder.right<-100)
  {
    databus.fishlist3[i]=databus.fishlist3[0]
    databus.fishlist3.shift()
    continue;
  }
  if(!(fishboder.bottom<plboder.top||fishboder.top>plboder.bottom||fishboder.right<plboder.left||fishboder.left>plboder.right))
  {
      if(plboder.level<fishboder.level) 
      {
        if(databus.score>databus.maxscore1)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.maxscore1;
          databus.maxscore1=databus.score;
        }
        else if(databus.score>databus.maxscore2)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.score;
        }
        else if(databus.score>databus.maxscore3)
        {
          databus.maxscore3=databus.score;
        }
        databus.gamestatus=0;
        wx.showModal({
          title: '游戏结束',
          content: '得分：'+databus.score+',是否再来一局',
          success (res) {
            if (res.confirm) {
              databus.gamestatus=1;
            } else if (res.cancel) {
              databus.gamestatus=2;
            }
          }
        })
        console.log("游戏结束")
      }
      else 
      {
        databus.score+=fishboder.level;
        databus.fishlist3[i]=databus.fishlist3[0];
        databus.fishlist3.shift()
        continue;
      }
  }
  databus.fishlist3[i].px+=databus.fishlist3[i].dx;
  databus.fishlist3[i].py+=databus.fishlist3[i].dy;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.bottom>=databus.canvas.height))  databus.fishlist3[i].dy=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.top<=0))  databus.fishlist3[i].dy=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.right>=databus.canvas.width)) databus.fishlist3[i].dx=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==0)) databus.fishlist3[i].dx=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==databus.canvas.width/2)&&Math.random()>0.5) databus.fishlist3[i].dx*=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.down==databus.canvas.height/2)&&Math.random()>0.5) databus.fishlist3[i].dy*=-1;
  databus.fishlist3[i].livetime++;
} 
//fishlist4
for(let i=0;i<databus.fishlist4.length;i++)
{
  const fishboder={
    top:databus.fishlist4[i].py,
    bottom:databus.fishlist4[i].py+databus.fishlist4[i].h,
    left:databus.fishlist4[i].px,
    right:databus.fishlist4[i].px+databus.fishlist4[i].w,
    level:databus.fishlist4[i].level,
    livetime:databus.fishlist4[i].livetime
  }
  if(fishboder.top>databus.canvas.height+100||fishboder.top<-100||fishboder.left>databus.canvas.width+100||fishboder.right<-100)
  {
    databus.fishlist4[i]=databus.fishlist4[0]
    databus.fishlist4.shift()
    continue;
  }
  if(!(fishboder.bottom<plboder.top||fishboder.top>plboder.bottom||fishboder.right<plboder.left||fishboder.left>plboder.right))
  {
      if(plboder.level<fishboder.level) 
      {
        if(databus.score>databus.maxscore1)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.maxscore1;
          databus.maxscore1=databus.score;
        }
        else if(databus.score>databus.maxscore2)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.score;
        }
        else if(databus.score>databus.maxscore3)
        {
          databus.maxscore3=databus.score;
        }
        databus.gamestatus=false;
        wx.showModal({
          title: '游戏结束',
          content: '得分：'+databus.score+',是否再来一局',
          success (res) {
            if (res.confirm) {
              databus.gamestatus=1;
            } else if (res.cancel) {
              databus.gamestatus=2;
            }
          }
        })
        console.log("游戏结束")
      }
      else 
      {
        databus.score+=fishboder.level;
        databus.fishlist4[i]=databus.fishlist4[0];
        databus.fishlist4.shift()
        continue;
      }
  }
  databus.fishlist4[i].px+=databus.fishlist4[i].dx;
  databus.fishlist4[i].py+=databus.fishlist4[i].dy;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.bottom>=databus.canvas.height))  databus.fishlist4[i].dy=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.top<=0))  databus.fishlist4[i].dy=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.right>=databus.canvas.width)) databus.fishlist4[i].dx=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==0)) databus.fishlist4[i].dx=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==databus.canvas.width/2)&&Math.random()>0.5) databus.fishlist4[i].dx*=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.down==databus.canvas.height/2)&&Math.random()>0.5) databus.fishlist4[i].dy*=-1;
  databus.fishlist4[i].livetime++;
}

//fishlist5
for(let i=0;i<databus.fishlist5.length;i++)
{
  const fishboder={
    top:databus.fishlist5[i].py,
    bottom:databus.fishlist5[i].py+databus.fishlist5[i].h,
    left:databus.fishlist5[i].px,
    right:databus.fishlist5[i].px+databus.fishlist5[i].w,
    level:databus.fishlist5[i].level,
    livetime:databus.fishlist5[i].livetime
  }
  if(fishboder.top>databus.canvas.height+100||fishboder.top<-100||fishboder.left>databus.canvas.width+100||fishboder.right<-100)
  {
    databus.fishlist5[i]=databus.fishlist5[0]
    databus.fishlist5.shift()
    continue;
  }
  if(!(fishboder.bottom<plboder.top||fishboder.top>plboder.bottom||fishboder.right<plboder.left||fishboder.left>plboder.right))
  {
      if(plboder.level<fishboder.level) 
      {
        if(databus.score>databus.maxscore1)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.maxscore1;
          databus.maxscore1=databus.score;
        }
        else if(databus.score>databus.maxscore2)
        {
          databus.maxscore3=databus.maxscore2;
          databus.maxscore2=databus.score;
        }
        else if(databus.score>databus.maxscore3)
        {
          databus.maxscore3=databus.score;
        }
        databus.gamestatus=false;
        wx.showModal({
          title: '游戏结束',
          content: '得分：'+databus.score+',是否再来一局',
          success (res) {
            if (res.confirm) {
              databus.gamestatus=1;
            } else if (res.cancel) {
              databus.gamestatus=2;
            }
          }
        })
        databus.gamestatus=false;
        console.log("游戏结束")
      }
      else 
      {
        databus.score+=fishboder.level;
        databus.fishlist5[i]=databus.fishlist5[0];
        databus.fishlist5.shift()
        continue;
      }
  }
  databus.fishlist5[i].px+=databus.fishlist5[i].dx;
  databus.fishlist5[i].py+=databus.fishlist5[i].dy;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.bottom>=databus.canvas.height))  databus.fishlist5[i].dy=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.top<=0))  databus.fishlist5[i].dy=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.right>=databus.canvas.width)) databus.fishlist5[i].dx=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==0)) databus.fishlist5[i].dx=1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.left==databus.canvas.width/2)&&Math.random()>0.5) databus.fishlist5[i].dx*=-1;
  if(fishboder.livetime>100&&fishboder.livetime<5000&&(fishboder.down==databus.canvas.height/2)&&Math.random()>0.5) databus.fishlist5[i].dy*=-1;
  databus.fishlist5[i].livetime++;
}

 }
}

