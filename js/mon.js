var momObj=function()
{
	this.x=[];
	this.y=[];
	this.angle;
	// this.bigEye=new Image();
	// this.bigBody=new Image();
	// this.bigTail=new Image();	

	this.bigTailTimer=0;
	this.bigTailCount=0;

	this.bigEyeTimer=0;
	this.bigEyeCount=0;
	this.bigEyeInterval=1000;


	this.momBodyCount=0;


}

momObj.prototype.init=function()
{
	this.angle=0;
	this.x=canWidth/2;
	this.y=canHeight/2;
	// this.bigEye.src='./img/bigEye0.png';
	// this.bigBody.src='./img/bigSwim0.png';
	// this.bigTail.src='./img/bigTail0.png';
}

momObj.prototype.draw=function()
{
	//lerp x y
	if(!data.gameOver)
	{
		this.x=lerpDistance(mx, this.x, 0.99);
		this.y=lerpDistance(my, this.y, 0.99);



		//delta angle
		//Math.atan2(y,x);
		var deltaY=my-this.y;
		var deltaX=mx-this.x;
		var beta=Math.atan2(deltaY,deltaX)+Math.PI;

		//lerp angle
		this.angle=lerpAngle(beta,this.angle,0.8);
	}
	

	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>50)
	{
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=50;
	}
	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval)
	{
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
		if(this.bigEyeCount==0)
		{
			this.bigEyeInterval=Math.random()*1500+200;

		}
		else
		{
			this.bigEyeInterval=200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);

	ctx1.rotate(this.angle);
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(momEye[bigEyeCount],-momEye[bigEyeCount].width/2,-momEye[bigEyeCount].height/2);
	var momBodyCount=this.momBodyCount;
	if(data.double==1)
	{
		ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width/2,-momBodyOra[momBodyCount].height/2);		
	}
	else
	{
		ctx1.drawImage(momBodyBlu[momBodyCount],-momBodyBlu[momBodyCount].width/2,-momBodyBlu[momBodyCount].height/2);
	}
	var bigTailCount=this.bigTailCount;
	ctx1.drawImage(momTail[bigTailCount],-momTail[bigTailCount].width/2+30,-momTail[bigTailCount].height/2);


	ctx1.restore()

}