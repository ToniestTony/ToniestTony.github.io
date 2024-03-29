// Retrieve Elements
var executeCodeBtns = document.querySelectorAll('.editor__run');
var resetCodeBtns = document.querySelectorAll('.editor__reset');
var addCodeBtns = document.querySelectorAll('.editor__add');

var pauseCodeBtn = document.querySelector('.editor__pause');

var loadCodeBtns = document.querySelectorAll('.editorLoad');

// Setup Ace
var codeEditors=[];
var allEditors=document.querySelectorAll(".editor__code");
for(var i=0;i<allEditors.length;i++){
	var k=parseInt(i.toString());
	codeEditors.push(ace.edit(allEditors[i].id));
	console.log(allEditors[i].id)
	executeCodeBtns[i].addEventListener('click', function(){executeCode(k)}, false);

	resetCodeBtns[i].addEventListener('click', function(){resetCode(k)},false)
}

for(var i=0;i<loadCodeBtns.length;i++){
	loadCodeBtns[i].addEventListener('click', function(e){
		resetApp(0);
		console.log(e.srcElement)
		codeEditors[0].setValue($(this).attr("code"));
		run(0);
		showEditor();
		
	})
}

function executeCode(i){
	// Reset
	resetApp(i);
	//new Function(userCode)();
	run(i);
}

function testCode(i){
	// Clear ace editor
	codeEditors[i].setValue($(allEditors[i]).attr("code"));
	run(i);
}

function resetCode(i){
	resetApp(i);
	
	codeEditors[i].setValue(defaultCode);

	run(i);
}
//codeEditors[0]=ace.edit("editorCode");

function showEditor(){
	$(".showEditor").html("Hide editor");
	$(".editor__wrapper").show();
}
function toggleEditor(){
	if($(".editor__wrapper").is(":visible")){
		$(".showEditor").html("Show editor");
		$(".editor__wrapper").hide();
	}else{
		$(".showEditor").html("Hide editor");
		$(".editor__wrapper").show();
	}
	
}

var code=`var app={
	w:600,
	h:400,
	//setup is called when the game has finished loading
	setup:function(){
		//jt.fullscreen(false);
	},
	//update is called every frame
	update:function(){
		jt.bg("grey");
	}
}`

/*
//This is a simulation of the JT update function (60fps)
jt.camActive(false)

jt.debug(true)
jt.bg("black")
if(jt.kCheck("space")){
    jt.camActive(true)
}
jt.cam().x=100;
jt.cam().w=200;
jt.cam().pos.x=jt.w()/4
jt.cam().pos.w=jt.w()/2;
jt.rect(0,0,jt.w(),jt.h(),"white")

//jt.rect(x,y,w,h,color,rotation): Draw a rectangle (or it's outline with rectB)
//Draw both types of rectangle separately
jt.rect(-25,75,50,50,"red");
jt.rect(-25,125,50,50,"green");
jt.rect(50,125,50,50,"green");
jt.rect(100,125,50,50,"green");
jt.rect(75,125,10,50,"blue");
jt.rect(125,125,10,50,"blue");
jt.rect(25,125,10,50,"blue");
jt.rect(50,75,50,50,"red");
jt.rectB(175,75,50,50,"black",0,5);

//Draw both types of rectangle together
jt.rect(300,75,50,50,"red");
jt.rectB(300,75,50,50,"black",0,5);

var x=0
var w=50;
var h=50;
jt.anim("walk",x,50,w,h)
jt.image("triangle",x,100,w,h)

var inCam=jt.inCam(x,50,w,h)
jt.addDebug("In: "+inCam,10,10,"green","left",24)

//show controls
jt.fontSize(14);
jt.text("Blue rectangle will face towards the mouse",jt.w()/2+20,5,"black","center")
*/

/*
//This is a simulation of the JT update function (60fps)
//Since this is only the update function, to make attributes use the next line:
if(this.x===undefined){this.x=20;}

//To detect when a key is down, use jt.keyCheck("yourKey"):
if(jt.keyCheck("a")){
	this.x-=4;
}
if(jt.keyCheck("d")){
	this.x+=4;
}

//To detect when a key is pressed, use jt.keyPress("yourKey"):
if(jt.keyPress("space")){
	jt.shake(15);
}

//To color the background use jt.bg("yourColor"):
jt.bg("orange");

//Finally we draw everything with jt.rect(), jt.font() and jt.text()
jt.rect(this.x,90,20,20,"blue");
jt.font("Consolas",18);
jt.text("Move with A and D",jt.width()/2,20+jt.waveY()*10,"black","center");
jt.text("Shake with space",jt.width()/2,40+jt.waveY()*10,"black","center");
*/

pauseCodeBtn.addEventListener("click",function(){
	var paused=jt.pauseJt();
	
	if(paused){
		pauseCodeBtn.innerHTML="Pause";
	}else{
		pauseCodeBtn.innerHTML="Play";
	}
	
	jt.pauseJt(!jt.pauseJt());
});


var defaultCode=code;

let editorLib = {
    init() {
		for(var i=0;i<codeEditors.length;i++){
			// Configure Ace

			// Theme
			codeEditors[i].setTheme("ace/theme/dreamweaver");

			// Set language
			codeEditors[i].session.setMode("ace/mode/javascript");

			codeEditors[i].commands.commandKeyBinding["ctrl-d"].exec=function(e){e.duplicateSelection()}

			// Set Options
			codeEditors[i].setOptions({
				fontFamily: 'Consolas',
				fontSize: '12pt',
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
			});

			// Set Default Code
			codeEditors[i].setValue($(allEditors[i]).attr("code"));
		}
    }
}


$("#last").click(function(){
    $(".editor__add:last").get(0).scrollIntoView()
	var y = $(window).scrollTop();  //your current y position on the page
	$(window).scrollTop(y-100);
})

$(".editor__add").each(function(){
	$(this).on('click', function(){
		// Scroll back to editor
		var parent=$(this).parent();
		var name=$.trim(parent.contents().not(parent.children()).text());
		var desc=$(this).parent().next().html();
		var val=$(this).val().substring(1)

		if($(this).attr("desc")!=undefined){
			desc=$(this).attr("desc")
		}
		if($(this).attr("name")!=undefined){
			name=$(this).attr("name")
		}
		if($(this).attr("valueId")!=undefined){
			id=$(this).attr("valueId");
			val=$("#"+id).val().substring(1);
		}

		codeEditor.setValue('//This is a simulation of the JT update function (60fps)\njt.bg("white")\n')
		codeEditor.session.insert(9999,"//"+name+": "+desc)
		codeEditor.session.insert(9999,val+"\n")
		$("#main").get(0).scrollIntoView()
		codeEditor.resize(true)
		codeEditor.gotoLine(9999, 10, true);
		$(".editor__run").click()
	})
})

function resetApp(i){
	// Clear ace editor
	jt.setId("can"+i)
	jt.pauseJt(false);
	jt.resize(app.w,app.h,true);
	jt.addH(0);
	jt.cam().x=0;
	jt.cam().y=0;
	jt.cam().w=jt.w();
	jt.cam().h=jt.h();
	jt.cam().pos.x=0;
	jt.cam().pos.y=0;
	jt.cam().pos.w=jt.w();
	jt.cam().pos.h=jt.h();
	jt.alarms([]);

	jt.canvas.ratioFullscreen=false;
	jt.canvas.iosFullscreen=false;
	jt.keepRatio(true)
	jt.fullscreen(false)
	jt.smoothing(false)
	jt.border(false)
	jt.autoResize(false);
	jt.cursor(true)
	app.x=undefined;
	app.y=undefined;
	app.x2=undefined;
	app.rectX=undefined;
	app.resizeW=undefined;
	app.autoResize=undefined;
	app.additionalH=undefined;
	app.once=undefined;

	app.text=undefined;
	app.timer=undefined;
	app.playing=undefined;
	jt.delAlarm();
	jt.playAlarm();
	jt.comboLength(8);
	jt.comboTimer(30);
	jt.fps(60);
	app.addedDebug=undefined;
	jt.clearDebug();
	jt.debug(false);

	app.loadImage=undefined;
	app.loadSound=undefined;
	app.loadAnim=undefined;
	app.volume=undefined;
	jt.volume(0.5)
	jt.mute(false)
	jt.stopAll();

	app.otherCanvas=undefined;
	app.borderW=undefined;
	app.borderC=undefined;
	app.cursorVisible=undefined;
	app.smoothX=undefined;

	jt.clearPart();
	jt.camCurr(0);
	app.index=undefined;
	app.alpha=undefined;
	jt.alpha(1)
	jt.resetFilter();
	app.percent=undefined;
	app.percentX=undefined;
	app.percentY=undefined;
	app.colorIndex=0;
	app.longText=undefined;
	app.align=undefined;
	jt.align("center");
	jt.baseLine("top");
	app.baseLine=undefined;
	app.imageX=undefined;
	app.imageY=undefined;
	app.rgb=undefined;
	app.cursor=undefined;
	app.triangleX=undefined;
	app.triangleDir=undefined;
	app.triangleR=undefined;
	app.radial=undefined;

	app.randoms=undefined;
	app.betweenNum=undefined;
	app.stayNum=undefined;
	app.wrapNum=undefined;
	app.wrapIndexNum=undefined;
	app.chosen=undefined;
	app.circleXY=undefined;
	app.arrLen=undefined;
	app.arrNum=undefined;
	app.arrW=undefined;
	app.arrH=undefined;
	app.arrCopy=undefined;
	app.mathNum=undefined;

	app.shape=undefined;
	app.points=undefined;
	app.linePoint=undefined;
	app.rectWH=undefined;
	app.circleD=undefined;
	app.ellipseWH=undefined;
	app.odds=undefined;
	app.assetX=undefined;

	jt.padThreshold("all",0,0,0.5);
	app.padBar=undefined;
	app.padWin=undefined;
	app.padDown=undefined;
	app.padX=undefined;
	app.padY=undefined;
	app.padThreshold=undefined;
	app.keyPos=undefined;
	app.keyGrav=undefined;
	app.keyDir=undefined;
	app.keyDown=undefined;

	app.btnOutline=undefined;
	app.mouseScroll=undefined;
	
	app.note=undefined;
	app.timer=undefined;
	app.score=undefined;
	
	keyboard.finished=true;
	app.name=undefined;

	$("#can").focus()
}





var jt=undefined;

function run(index){
	code=codeEditors[index].getValue();

	eval.call(window,code);
	jt.pauseJt(true);
	jt=new JT("can"+index,app.w,app.h,60,'setup','update','app',0,false);
	jt.loadSound("assets/change.mp3","hitBar");
	jt.loadSound("assets/walk.mp3","hitWall");
	jt.loadSound("assets/hurt.mp3","goal");
	jt.pauseJt(false);
	pauseCodeBtn.innerHTML="Pause";

}

//you can also use $(document).ready(function(){}); with jQuery
window.onload = function(){
	editorLib.init();
	
	jt=new JT("can0",600,400,60,'setup','update','app',0,false);
	run(0);
	//$(".editor__run").click()
	//run();
	
}