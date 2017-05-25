var can1,can2,ctx1,ctx2;
var canWidth,canHeight;
var lastTime,deltaTime;
// 定义背景图片
var bgPic=new Image();
// 定义海葵的类
var ane;
// 定义果实的类
var fruit;
var mom,baby;


var mx,my;
var data;
// 小鱼的动画
var babyTail=[];
var babyEye=[];
var babyBody=[];


// 大鱼的动画
var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlu=[];


var wave;
var halo;

document.body.onload = game;
function game()
{
	// 初始化函数
	init();
	lastTime = Date.now(); //初始化lastTime 定义为现在的时间
	deltaTime=0;
	gameloop();
	loadRecord();
	myscore();
}

function init()
{
	// 获取绘图元素和环境
	can1=document.getElementById('canvas1')//fisher dust circle
	can2=document.getElementById('canvas2')//background ane fruits
	ctx1 = can1.getContext('2d');
	ctx2 = can2.getContext('2d');
	bgPic.src = './img/background.jpg';

	canWidth=can1.width;
	canHeight=can1.height;
	can1.addEventListener('mousemove',onMouseMove,false);

	ane = new aneObj();
	ane.init();


	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	mx=canWidth/2;
	my=canHeight/2;

	baby=new babyObj();
	baby.init();

	ctx1.font = "30px Verdana";
	ctx1.textAlign =  "center";

	// 初始化图片
	for(var i=0;i<8;i++)
	{
		babyTail[i]=new Image();
		babyTail[i].src='./img/babyTail'+i+'.png';
		momTail[i]=new Image();
		momTail[i].src='./img/bigTail'+i+'.png';
	}
	for(var i=0;i<2;i++)
	{
		babyEye[i]=new Image();
		babyEye[i].src='./img/babyEye'+i+'.png';
		momEye[i]=new Image();
		momEye[i].src='./img/bigEye'+i+'.png';
	}
	for(var i=0;i<20;i++)
	{
		babyBody[i]=new Image();
		babyBody[i].src='./img/babyFade'+i+'.png';

	}
	data=new dataObj();

	for(var i=0;i<8;i++)
	{
		momBodyOra[i]=new Image();
		momBodyBlu[i] = new Image();
		momBodyOra[i].src = './img/bigSwim'+i+'.png';
		momBodyBlu[i].src = './img/bigSwimBlue' + i +'.png'; 
	}
	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();
	

}

function gameloop()
{
	window.requestAnimationFrame(gameloop);//frame per second  ==fps
	// console.log("loop")
	var now = Date.now();
	deltaTime =now -lastTime;
	lastTime=now;
	if(deltaTime>40)
	{
		deltaTime=40
	}
	// console.log(deltaTime)

	 drawBackground();

	 ane.draw();

	 fruit.draw();
	 fruitMonitor();
	 ctx1.clearRect(0,0,canWidth,canHeight);
	 mom.draw();
	 eatFruit();
	 momBaby();
	 baby.draw();
	 data.draw();
	 wave.draw();
	 halo.draw();

}


function onMouseMove(e)
{
	if(e.offsetX||e.layerX)
	{
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
		my=e.offsetY==undefined?e.layerY:e.offsetY;
		
	}
}


