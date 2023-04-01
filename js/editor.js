// Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
const testCodeBtn = document.querySelector('.editor__test');
const test2CodeBtn = document.querySelector('.editor__test2');
const test3CodeBtn = document.querySelector('.editor__test3');
const addCodeBtn = document.querySelector('.editor__add');

// Setup Ace
let codeEditor = ace.edit("editorCode");

var code=`//This is a simulation of the JT update function (60fps)
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

//Activate camera so the shaking works
jt.camActive(true)

//To color the background use jt.bg("yourColor"):
jt.bg("orange");

//Finally we draw everything with jt.rect(), jt.font() and jt.text()
jt.rect(this.x,90,20,20,"blue");
jt.font("Consolas",18);
jt.text("Move with A and D",jt.width()/2,20+jt.waveY()*10,"black","center");
jt.text("Shake with space",jt.width()/2,40+jt.waveY()*10,"black","center");

`

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

var code2=`//This is a simulation of the JT update function (60fps)
jt.bg("white")

var btn={};
btn.x=jt.w()/4;
btn.y=jt.h()/4;
btn.w=jt.w()/2;
btn.h=jt.h()/2;
btn.c="grey"

if(jt.mIn(btn)){
    btn.c="lightgrey"
}

if(jt.mPress(btn)){
    jt.shake(20)
	jt.stopPlay("jump")
}

//Activate camera so the shaking works
jt.camActive(true)

jt.rect(btn.x,btn.y,btn.w,btn.h,btn.c);
jt.fontSize(16);
jt.text("Click to shake!",btn.x+btn.w/2,btn.y+btn.h/2-8,"black","center")`

var code3=`//This is a simulation of the JT update function (60fps)
if(this.rectX===undefined){this.rectX=20;}
jt.bg("white")

var rect={
    x:this.rectX,
    y:20,
    w:80,
    h:80,
    c:[127,127,255]
}

var circle={
    x:250,
    y:75+jt.waveY()*25,
    d:100,
    c:"red"
}

if(jt.kCheck("right")){this.rectX+=2}
if(jt.kCheck("left")){this.rectX-=2}

if(jt.cRectCircle(rect,circle)){rect.c="purple"}

jt.shape(rect)
jt.shape(circle)

jt.fontSize(16)
jt.text("Left and right to move",jt.w()/2,5,"black","center")`

var defaultCode=code;

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dreamweaver");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

		codeEditor.commands.commandKeyBinding["ctrl-d"].exec=function(e){e.duplicateSelection()}

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Consolas',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
	// Reset
	resetApp();
	//new Function(userCode)();
	code=codeEditor.getValue();
	/*
	try {
        new Function(codeEditor.getValue())();
		resetApp();
    } catch (err) {
        console.error(err);
    }
	*/
});

testCodeBtn.addEventListener('click', () => {
    // Clear ace editor
	codeEditor.setValue(defaultCode);
	$(".editor__run").click()

})

test2CodeBtn.addEventListener('click', () => {
    // Clear ace editor
	codeEditor.setValue(code2);
	$(".editor__run").click()

})

test3CodeBtn.addEventListener('click', () => {
    // Clear ace editor
	codeEditor.setValue(code3);
	$(".editor__run").click()

})

resetCodeBtn.addEventListener('click', () => {
    resetApp();

	codeEditor.setValue('//This is a simulation of the JT update function (60fps)\njt.bg("white")\n');
    $(".editor__run").click()
})

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

function resetApp(){
	// Clear ace editor
	jt.setId("can")
	jt.pauseJt(false)
	jt.addH(0);
	jt.resize(400,200,true)
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
	jt.stop("jump");
	jt.animSpeed("walk",15);

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


editorLib.init();



var app={
		w:400,
		h:200,
		//setup is called when the game has finished loading
		setup:function(){
			//jt.fullscreen(false);
			code=codeEditor.getValue();
		},
		//update is called every frame
		update:function(){
			eval(code)
		}
	}

var jt=undefined;

//you can also use $(document).ready(function(){}); with jQuery
window.onload = function(){
	//parameters of the JT object:
	//id of the canvas
	//width
	//height
	//frames per second
	//setup function name
	//update function name
	//object which has the function name
	//mobile audio button size (0 for none)
	//fullScreen button on mobile
	jt=new JT("can",app.w,app.h,60,'setup','update','app',0,false);

	jt.loadImage("assets/idle.png","idle")
	jt.loadImage("assets/jump.png","jump")
	jt.loadImage("assets/triangle.png","triangle")
	jt.loadSound("assets/jump.mp3","jump")
	jt.loadAnim("assets/walk.png","walk",2,15);
}
