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
	
	var path="./assets/";
	
	jt.loadSound(path+"walk.mp3","walk")
	jt.loadSound(path+"jump.mp3","jump")
	jt.loadSound(path+"hurt.mp3","hurt")
	
	jt.loadImage(path+"crouch.png","crouch")
	jt.loadImage(path+"idle.png","idle")
	jt.loadImage(path+"jump.png","jump")
	jt.loadAnim(path+"walk.png","walk",2,10)
	
	jt2=new JT("can2",app2.w,app2.h,60,'setup','update','app2',0,true);
	
	jt3=new JT("can3",app3.w,app3.h,60,'setup','update','app3',0,true);
	
	jt3.loadImage(path+"biceps.png","biceps");
	jt3.loadImage(path+"vs.png","vs");
	jt3.loadImage(path+"hammer.png","hammer");
	jt3.loadImage(path+"triangle.png","triangle");
	jt3.loadImage(path+"watch.png","watch");
	jt3.loadImage(path+"settings.png","settings");
	jt3.loadImage(path+"check.png","check");
	jt3.loadImage(path+"carRed.png","carRed");
	jt3.loadImage(path+"carGreen.png","carGreen");
	jt3.loadImage(path+"carBlue.png","carBlue");
	jt3.loadImage(path+"carGrey.png","carGrey");
	jt3.loadImage(path+"carPink.png","carPink");
	jt3.loadImage(path+"carRainbow.png","carRainbow");
	jt3.loadSound(path+"change.mp3","change");
	jt3.loadSound(path+"choose.mp3","choose");
	jt3.loadSound(path+"cancel.mp3","cancel");
	
	
	//jt.loadSound("sound.mp3","name")
	//jt.loadAnim("src.png","name",number of frames,fps);
}
