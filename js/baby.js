var babyObj=function()
{	
	this.x;
	this.y;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();
	this.angle;
	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;

	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}
babyObj.prototype.init=function()
{
	this.x=canWidth/2-50;
	this.y=canHeight/2+50;
	
	this.babyBody.src='./img/babyFade0.png'

	this.angle=0;
}
babyObj.prototype.draw=function()
{
	this.x=lerpDistance(mom.x, this.x, 0.99);
	this.y=lerpDistance(mom.y, this.y, 0.99);

	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;

	//lerp angle
	this.angle=lerpAngle(beta,this.angle,0.9);


	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}

	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval)
	{
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;

		if(this.babyEyeCount==0)
		{
			this.babyEyeInterval=Math.random()*1500+2000;
		}
		else
		{
			this.babyEyeInterval=200;
		}

	}
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300)
	{
		this.babyBodyCount=this.babyBodyCount+1;
		if(this.babyBodyCount>19)
		{
			this.babyBodyCount=19;
			data.gameOver = true;
		}
		 this.babyBodyTimer%=300;
	}
	
	ctx1.save()
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var babyTailCount=this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width/2+23,-babyTail[babyTailCount].height/2)



	var babyBodyCount=this.babyBodyCount;
	
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width/2,-babyBody[babyBodyCount].height/2)
	var babyEyeCount=this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width/2,-babyEye[babyEyeCount].height/2)
	ctx1.restore()
}

