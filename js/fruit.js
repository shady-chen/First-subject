var fruitObj=function()
{
		this.alive=[];   //bool  true or false
		this.orange=new Image();
		this.blue=new Image();
		this.x=[];
		this.y=[];
		this.l=[];
		this.t=[];
		this.spd=[];
		this.fruitType=[];
}
fruitObj.prototype.num=30;

fruitObj.prototype.init=function()
{
	 for(var i=0; i<this.num;i++)
	 {
	 	this.alive[i]=false;
	 	this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.012+0.003;
		this.fruitType[i]='';

	 }
	 this.orange.src='./img/fruit.png'
	 this.blue.src='./img/blue.png'
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		//draw fruit
		//find an one ,grow ,fly up
		if(this.fruitType[i]=="blue")
		{
			var pic=this.blue;
		}
		else
		{
			var pic=this.orange;
		}
		if(this.alive[i])
		{
			if(this.l[i]<=14)
			{
				this.l[i]+=this.spd[i]*deltaTime;
			}
			else{
				this.y[i]-=this.spd[i]*6*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]/2,this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
		
	}
}
fruitObj.prototype.dead=function(i)
{
	this.alive[i]=false;
}
fruitObj.prototype.born=function(i)
{
	var aneId=Math.floor(Math.random()*ane.num);
	// confirm fruit born in which ane 
	this.x[i]=ane.rootx[aneId];
	this.y[i]=ane.heady[aneId];
	this.l[i]=0;
	this.t[i]=0;
	this.alive[i]=true;
	var ram=Math.random();
	if(ram<0.2)
	{
		this.fruitType[i]="blue";
	}
	else
	{
		this.fruitType[i]="orange";
	}


}
function fruitMonitor()
{
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i])
		{
			num++
		}
	}
	if(num<15)
	{
		sendFruit()
		// send an fruit
		return;
	}
}
function sendFruit()
{
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}

	}
}
