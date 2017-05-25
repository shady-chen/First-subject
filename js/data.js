var dataObj=function()
{
	this.fruitNum=0;
	this.double=1;
	this.score = 0;
	this.gameOver = false;
	this.alpha=0;

}



dataObj.prototype.draw=function()
{
	var w=can1.width;
	var h=can1.height;
    ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'white';
	ctx1.fillStyle='white';
	
	// ctx1.fillText("num :"+this.fruitNum,w/2,h-50);
	// ctx1.fillText("double:" + this.double,w/2,h-80);
	ctx1.fillText("SCORE:" + this.score,w/2,h-10);
	if(this.gameOver)
	{

		this.alpha+=deltaTime*0.001;
		if(this.alpha>1)
		{
			this.alpha=1;
		}
		ctx1.fillStyle = 'rgba(255,255,255,'+this.alpha+')';

		ctx1.fillText('Game Over 敢差板，鱼里都养不生',w/2,h/2)
	}
	 ctx1.restore();
}

dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum * 100 * this.double;
	this.fruitNum=0;
	this.double = 1;
}