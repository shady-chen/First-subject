var g=localStorage;

var oP=document.querySelector('#record');
var record='record';
function myscore()
{
	if(data.score>g.getItem(record))
	{
		g.setItem(record,data.score);
	}
	
}
function loadRecord()
{
	var getRecord=g.getItem(record);
	oP.innerHTML="highest record:"+getRecord;
}
