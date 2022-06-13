var app3={
	w:800,
	h:400,
	state:"menu",
	mode:0,
	race:0,
	lines:[],
	checkpoints:[],
	races:[
	{
		lines:[
		[
		[0,0],
		[200,0],
		[200,200],
		[0,200],
		[0,0]],
		[
		[50,50],
		[150,50],
		[150,150],
		[50,150],
		[50,50]]
		],
		name:"Square",
		w:200,
		h:200,
		checkpoints:[
			{x:50,y:0,w:20,h:50},
			{x:150,y:0,w:50,h:60},
			{x:150,y:150,w:50,h:50},
			{x:10,y:150,w:50,h:50},
		],
		stars:[950,800,650],
		bg:"white",
		c:"black"
	},
	
/*
Stars guideline
best(boost all long) rounded up
middle(good normal ride) rounded
worst(2 bumps) rounded
*/
	
{
"w":400,
"h":300,
"lines":[[[-250,-100],[-200,-150],[100,-150],[150,-100],[150,100],[100,150],[-200,150],[-250,100],[-250,-100]],[[-150,-50],[50,-50],[50,50],[-150,50],[-150,-50]],[[-60,-20],[-60,20],[-80,20],[-80,-20],[-60,-20]],[[-100,-20],[-110,-20],[-110,20],[-110,-20],[-120,-20]],[[-40,20],[-40,-20],[-20,20],[-20,-20]],[[0,-20],[10,0],[20,-20],[10,0],[10,20]],[],[],[],[],[]],
"checkpoints":[{"x":-70,"y":-150,"w":40,"h":100},{"x":50,"y":-20,"w":100,"h":40},{"x":-70,"y":50,"w":40,"h":100},{"x":-250,"y":-20,"w":100,"h":40}],
"name":"Stadium Tony",
stars:[1250,1100,800],
bg:"black",
c:"white"
},

{
"w":350,
"h":250,
"lines":[[[-50,0],[200,0],[200,250],[-50,250],[-150,150],[-150,100],[-50,0]],[[50,50],[150,50],[150,200],[50,200],[0,150],[0,100],[50,50]],[[-50,100],[-50,150],[0,200],[10,200],[-40,150],[-40,100],[10,50],[0,50],[-50,100]],[],[],[],[],[],[],[],[]],
"checkpoints":[{"x":50,"y":0,"w":20,"h":50},{"x":150,"y":170,"w":50,"h":30},{"x":50,"y":200,"w":20,"h":50},{"x":-160,"y":60,"w":210,"h":30}],
"name":"Cutting edge",
stars:[1400,1200,850],
c:"blue"
},

{
"w":800,
"h":450,
"lines":[[[600,200],[800,200],[800,250],[750,350],[700,400],[600,450],[500,450],[400,400],[350,350],[300,250],[300,200],[600,200]],[[550,250],[750,250],[700,350],[600,400],[500,400],[400,350],[350,250],[550,250]],[],[],[],[],[],[],[],[],[]],
"checkpoints":[{"x":540,"y":200,"w":20,"h":50},{"x":700,"y":300,"w":100,"h":100},{"x":500,"y":400,"w":100,"h":50},{"x":350,"y":300,"w":100,"h":100}],
"name":"Half Circle",
"bg":"white",
"c":"black",
stars:[1850,1650,1250],
},

{
"w":650,
"h":250,
"lines":[[[-100,0],[550,0],[550,250],[-100,250],[-100,0]],[[150,50],[450,50],[510,150],[450,220],[370,100],[260,100],[200,200],[130,100],[60,200],[-10,100],[0,50],[150,50]],[[400,250],[350,150],[290,150],[230,250],[160,250],[130,190],[80,250]],[[-70,150],[-20,150],[-20,220],[-70,220],[-70,150]],[[260,10],[270,10],[270,20],[260,20],[260,10]],[[290,30],[300,30],[300,20],[290,20],[290,30]],[[330,40],[340,40],[340,30],[330,30],[330,40]],[[360,10],[360,20],[370,20],[370,10],[360,10]],[],[],[]],
"checkpoints":[{"x":150,"y":0,"w":50,"h":50},{"x":450,"y":-10,"w":110,"h":70},{"x":280,"y":90,"w":80,"h":70},{"x":-30,"y":140,"w":100,"h":110}],
"name":"JAY's Race",
stars:[2650,2400,2050],
c:"green",
},

{
"w":790,
"h":740,
"lines":[[[-50,-200],[200,-200],[250,-150],[300,-150],[350,-200],[400,-200],[450,-150],[450,0],[400,50],[450,100],[450,200],[400,250],[350,250],[300,300],[250,300],[150,200],[50,200],[0,250],[-150,100],[-150,-150],[-100,-200],[-50,-200]],[[-50,-150],[150,-150],[200,-100],[300,-100],[350,-150],[400,-150],[400,-100],[350,-50],[350,100],[400,150],[350,200],[300,200],[250,250],[150,150],[0,150],[-50,100],[-100,50],[-100,-100],[-50,-150]],[[-80,-250],[-30,-230],[10,-230],[40,-250],[50,-290],[20,-330],[-60,-340],[-80,-300],[-80,-250]],[[-230,-90],[-190,-60],[-160,-60],[-130,-90],[-160,-120],[-190,-130],[-220,-120],[-230,-90]],[[300,-280],[320,-240],[390,-230],[410,-280],[330,-330],[300,-280]],[[470,-10],[540,0],[560,-40],[540,-70],[500,-90],[460,-70],[430,-20],[470,-10]],[[250,130],[270,100],[310,110],[320,140],[310,170],[260,170],[230,160],[250,130]],[[100,310],[80,350],[100,380],[180,400],[220,360],[150,320],[140,280],[120,300],[100,310]],[[-80,150],[-80,190],[-110,230],[-210,230],[-230,200],[-220,140],[-160,110],[-120,110],[-90,120],[-80,150]],[[390,280],[410,310],[430,310],[470,290],[450,250],[430,240],[390,230],[380,270],[390,280]],[[130,-100],[150,-80],[180,-80],[210,-110],[190,-140],[150,-140],[140,-130],[130,-100]],[]],
"checkpoints":[{"x":-50,"y":-200,"w":20,"h":50},{"x":350,"y":-200,"w":50,"h":50},{"x":300,"y":200,"w":50,"h":100},{"x":-150,"y":-50,"w":50,"h":50}],
"name":"Cavern",
"bg":"lightgrey",
"c":"brown",
stars:[3000,2700,2100]
},
{
"w":1200,
"h":600,
"lines":[[[400,600],[800,200],[1200,600],[400,600]],[[1000,400],[750,400],[800,350],[850,400]],[[1050,550],[950,450],[750,450],[750,550],[550,550],[600,500]],[[850,600],[850,500]],[[550,450],[650,450],[700,500]],[[750,450],[700,400],[700,350],[800,250],[900,350]],[],[],[],[],[]],
"checkpoints":[{"x":790,"y":400,"w":20,"h":50},{"x":1050,"y":550,"w":150,"h":50},{"x":400,"y":550,"w":150,"h":50},{"x":600,"y":350,"w":100,"h":50},{"x":900,"y":300,"w":50,"h":50}],
"name":"Golden Pyramid",
"unlocked":false,
"bg":"black",
"c":"gold",
stars:[3550,3350,2850],
},
/*
{
"w":800,
"h":400,
"lines":[[[400,200],[800,200],[800,400],[400,400],[400,200]],[],[],[],[],[],[],[],[],[],[]],
"checkpoints":[{"x":420,"y":240,"w":60,"h":90},{"x":680,"y":240,"w":60,"h":130}],
"name":"asdf",
"unlocked":false,
"bg":"white",
"c":"black",
},*/



	{},{},{},{},{},
	],
	
	customIndex:6,
	lastState:"",
	maker:0,
	makingX1:0,
	makingY1:0,
	makingX2:0,
	makingY2:0,
	camSpeed:4,
	tool:"",
	layer:0,
	magnet:true,
	allLayers:false,
	deleteTimer:-1,
	deleteTimerMax:120,
	btns:[
		{
			x:150,
			y:2,
			w:99,
			h:20,
			text:"Set name",
			action:"name",
		},
		{
			x:150,
			y:26,
			w:99,
			h:20,
			text:"Set color",
			action:"color",
		},
		{
			x:350,
			y:2,
			w:99,
			h:20,
			active:false,
			text:"Line",
			action:"line",
		},
		{
			x:450,
			y:2,
			w:99,
			h:20,
			active:false,
			text:"Checkpoint",
			action:"checkpoint",
		},
		{
			x:550,
			y:2,
			w:99,
			h:20,
			active:false,
			text:"Eraser",
			action:"erase",
		},
		{
			x:725,
			y:15,
			w:24,
			h:20,
			text:"-",
			action:"minus",
		},
		{
			x:775,
			y:15,
			w:24,
			h:20,
			text:"+",
			action:"plus",
		},
		{
			x:350,
			y:26,
			w:99,
			h:20,
			text:"Magnet",
			action:"magnet",
			option:true,
		},
		{
			x:450,
			y:26,
			w:99,
			h:20,
			text:"All layers",
			action:"all",
			option:false,
		},
		{
			x:550,
			y:26,
			w:99,
			h:20,
			text:"Erase all",
			action:"eraseAll",
		},
		{
			x:402,
			y:355,
			w:97,
			h:40,
			text:"Exit",
			action:"exit",
		},
		{
			x:500,
			y:355,
			w:99,
			h:19,
			text:"Get code",
			action:"code",
		},
		{
			x:500,
			y:375,
			w:99,
			h:19,
			text:"Set code",
			action:"set",
		},
		{
			x:600,
			y:355,
			w:199,
			h:40,
			text:"Test/Complete race",
			action:"test",
		},
	],
	racing:"",
	timer:0,
	times:[],
	timerMax:240,
	checkpoint:0,
	checkpointMax:0,
	laps:1,
	lapsMax:3,
	time:0,
	r:0,
	player:undefined,
	stick:"",
	stickThreshold:0.5,
	exitBtn:"start",
	camLerp:0.25,
	lineW:2,
	setting:0,
	settings:[
	0.5,//volume
	false,//fullscreen
	2,//car
	2,//lineW
	false,//Use default colors for all races
	0.25,//cam speed
	false,//cam rot
	0.25,//cam rot speed
	false,//rev
	"test",//test
	"reset",//reset settings
	"clear"],//clear times
	settingsIni:[
	0.5,//volume
	false,
	6,
	4,
	false,
	0.25,
	false,
	0.25,
	false,
	"test",
	"reset",
	"clear"],
	cars:["carRed","carGreen","carBlue","carGrey","carPink","carRainbow","carTony"],
	car:0,
	defaultColors:false,
	camRot:false,
	camRotSpd:0.25,
	backwardsRev:false,
	//setup is called when the game has finished loading
	setup:function(){
		//jt.fullscreen(false);
		jt3.debug(true);
		
		//sounds change
		jt3.volume(0.5,"choose");
		jt3.volume(0.5,"change");
		jt3.volume(0.5,"cancel");
		
		for(var i=0;i<this.settings.length;i++){
			if(typeof this.settings[i]=="number"){
				if(this.settingsIni[i]>=1){
					this.settings[i]=0;
				}else{
					this.settings[i]=this.settingsIni[i];
				}
			}else{
				this.settings[i]=this.settingsIni[i];
			}
		}
		
		this.times=jt3.arr(this.races.length);
		this.loadLocal();
	},
	saveLocal:function(){
		localStorage.setItem("times", JSON.stringify(this.times));
	},
	loadLocal:function(){
		if (localStorage.getItem("times") !== null) {
			this.times=JSON.parse(localStorage.getItem("times"));
			for(var i=0;i<this.races.length;i++){
				if(this.times[i]!=undefined){
					this.races[i].time=this.times[i];
				}
			}
		}
	},
	toTime:function(frames){
		var f=frames%60
		var s=jt3.floor(frames/60);
		var m=jt3.floor(s/60);
		s=s%60;
		if(f.toString().length==1){f="0"+f};
		if(s.toString().length==1){s="0"+s};
		if(m.toString().length==1){m="0"+m};
		return m+":"+s+":"+f;
	},
	startRace:function(){
		this.state="racing";
		this.racing="start";
		this.timer=this.timerMax;
		
		this.time=0;
		
		var race=this.races[this.race];
		var firstCheckpoint=this.races[this.race].checkpoints[0];
		jt3.cam().x=(firstCheckpoint.x+firstCheckpoint.w/2)-400;
		jt3.cam().y=(firstCheckpoint.y+firstCheckpoint.h/2)-200;
		jt3.cam().w=800;
		jt3.cam().h=400;
		
		this.player=new Racer();
		this.player.x=race.checkpoints[0].x+race.checkpoints[0].w/2-this.player.w/2;
		this.player.y=race.checkpoints[0].y+race.checkpoints[0].h/2-this.player.h/2;
		
		this.checkpoint=0;
		this.checkpointMax=race.checkpoints.length-1;
		this.laps=1;
	},
	addLines:function(arr,x,y,w,h,c){
		if(x==undefined){x=0;}
		if(y==undefined){y=0;}
		if(w==undefined){w=1;}
		if(h==undefined){h=1;}
		if(c==undefined){c="black";}
		
		var lastX=undefined;
		var lastY=undefined;
		for(var i=0;i<arr.length;i++){
			var x1=0;
			var y1=0;
			var x2=0;
			var y2=0;
			if(lastX==undefined){
				x1=arr[i][0];
				y1=arr[i][1];
			}else{
				x1=lastX;
				y1=lastY;
			}
			if(i+1<arr.length){
				x2=arr[i+1][0];
				y2=arr[i+1][1];
				
				this.lines.push({
					x1:(x1+x)*w,
					y1:(y1+y)*h,
					x2:(x2+x)*w,
					y2:(y2+y)*h,
					c:c,
				});
				
				lastX=x2;
				lastY=y2;
			}
		}
	},
	addCheckpoints:function(arr){
		this.checkpoints=[];
		for(var i=0;i<arr.length;i++){
			var curr=arr[i];
			var col=[30,200,30,0.4];
			if(i!=0){col=[30,30,200,0.4]}
			this.checkpoints.push({
				x:curr.x,
				y:curr.y,
				w:curr.w,
				h:curr.h,
				c:col
			})
		}
	},
	//update is called every frame
	update:function(){
		if(this.state=="menu"){
			jt3.camActive(false);
			jt3.bg([255,255,255,0.25])
		
			jt3.fontSize(72);
			jt3.text("SPEEDY CARS",jt3.w()/2,5+jt3.waveYPos()*30,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Press Up and Down to drive forward and backwards",jt3.w()/2,jt3.h()/2-50,"black","center")
			jt3.text("Press Left and Right to turn",jt3.w()/2,jt3.h()/2-20,"black","center")
			jt3.text("Hold Space to charge and release to boost",jt3.w()/2,jt3.h()/2+10,"black","center")
			jt3.text("(You can also use a gamepad)",jt3.w()/2,jt3.h()/2+40,"black","center")
			
			jt3.fontSize(24);
			if(jt3.frame()<=40){
				jt3.text("Press Space/Enter to select mode",jt3.w()/2,jt3.h()-60,"black","center");
			}
			
			if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
				jt3.stopPlay("choose");
				this.state="mode"
				;
			}
			
		}else if(this.state=="mode"){
			jt3.camActive(false);
			if(jt3.kPress("left") || jt3.pDirPress("left")){this.mode--;jt3.waveX(0);jt3.stopPlay("change");}
			if(jt3.kPress("right") || jt3.pDirPress("right")){this.mode++;jt3.waveX(0);jt3.stopPlay("change");}
			this.mode=jt3.wrapIndex(this.mode,0,2);
			
			if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
				jt3.stopPlay("choose");
				if(this.mode==0){
					this.state="race"
				}else if(this.mode==1){
					this.state="maker"
					this.maker=this.customIndex;
				}else if(this.mode==2){
					this.state="settings"
				}
				;
			}
			
			if(jt3.kPress("backspace") || jt3.pPress(this.exitBtn)){
				jt3.stopPlay("cancel");
				this.state="menu";
				;
			}
			
			//draw
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a game mode",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Choose with Space/Enter",jt3.w()/2,jt3.h()-30,"black","center");
			
			var ys=[0,0,0,0]
			var images=["watch","hammer","settings"];
			var texts=["Time trials","Race maker","Settings"];
			for(var i=0;i<3;i++){
				if(this.mode==i){ys[i]=jt3.waveYPos()*20;}
				
				var x=75+(150+100)*i;
				var y=125;
				var w=150;
				jt3.rectB(x,125+ys[i],w,w,"black",0,3);
				jt3.image(images[i],x+25,w-10+ys[i],w-50,w-50);
				jt3.text(texts[i],x+w/2,y*2+ys[i],"black","center")
				
				if(this.mode==i){
					jt3.image("triangle",x+w/2-10,85,20,40,90);
				}
			}
			
			
		}else if(this.state=="race"){
			jt3.camActive(false);
			if(jt3.kPress("left") || jt3.pDirPress("left")){this.race--;jt3.waveX(0);jt3.stopPlay("change");}
			if(jt3.kPress("right") || jt3.pDirPress("right")){this.race++;jt3.waveX(0);jt3.stopPlay("change");}
			var len=0;
			for(var i=0;i<this.races.length-1;i++){
				if(this.races[i].name!==undefined){
					len++;
				}
			}
			this.race=jt3.wrapIndex(this.race,0,len-1);
			
			var completed=true;
			var unlocked=true;
			if(this.race>=this.customIndex){
				if(this.races[this.race].completed!=undefined){
					if(!this.races[this.race].completed){
						completed=false;
					}
				}
			}
			if(this.races[this.race].unlocked!=undefined){
				if(!this.races[this.race].unlocked){
					var beatenAll=true;
					for(var i=0;i<this.race;i++){
						if(this.races[i].time==undefined){
							beatenAll=false;
						}
					}
					if(!beatenAll){
						completed=false;
						unlocked=false;
					}
				}
			}
			
			if((jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")) && completed){
				jt3.stopPlay("choose");
				this.lastState=this.state;
				this.state="racing";
				this.startRace();
			}
			if(jt3.kPress("backspace") || jt3.pPress(this.exitBtn)){
				jt3.stopPlay("cancel");
				this.state="mode";
			}
			
			//draw
			var race=this.races[this.race];
			var bg="white";
			var lineC="black";
			if(race.bg!=undefined){bg=race.bg;}
			if(race.c!=undefined){lineC=race.c;}
			if(this.defaultColors){bg="white";lineC="black";}
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a race",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Choose with Space/Enter",jt3.w()/2,jt3.h()-30,"black","center");
			
			//race
			var squareX=100;
			var squareY=100;
			var squareW=400;
			var squareH=200;
			jt3.rect(squareX,squareY,squareW,squareH,bg);
			jt3.rectB(squareX,squareY,squareW,squareH,"black",0,3);
			
			this.lines=[];
			var minX=10000;
			var minY=10000;
			var maxX=0;
			var maxY=0;
			
			var w=race.w;
			var h=race.h;
			
			for(var i=0;i<race.lines.length;i++){
				var curr=race.lines[i];
				for(var j=0;j<curr.length;j++){
					if(curr[j][0]<minX){minX=curr[j][0];}
					if(curr[j][0]>maxX){maxX=curr[j][0];}
					if(curr[j][1]<minY){minY=curr[j][1];}
					if(curr[j][1]>maxY){maxY=curr[j][1];}
				}
			}
			
			maxX=maxX-minX;
			maxY=maxY-minY;
			
			for(var i=0;i<race.lines.length;i++){
				var curr=race.lines[i];
				
				this.addLines(curr,0,0,1,1,lineC);
			}
			
			for(var i=0;i<this.lines.length;i++){

				var line=this.lines[i];
				
				var lineX1=(((line.x1-minX)/maxX)*(squareW*(3/4)))+squareX+squareW/8;
				var lineY1=(((line.y1-minY)/maxY)*(squareH*(3/4)))+squareY+squareH/8;
				var lineX2=(((line.x2-minX)/maxX)*(squareW*(3/4)))+squareX+squareW/8;
				var lineY2=(((line.y2-minY)/maxY)*(squareH*(3/4)))+squareY+squareH/8;
				
				jt3.line(lineX1,lineY1,lineX2,lineY2,1,lineC);
			}
			
			jt3.fontSize(24);
			var str="Race: ";
			if(this.race>=this.customIndex){
				str="Custom race: ";
			}
			jt3.text(str+this.races[this.race].name,jt3.w()/2,70,"black","center");
			
			//show best time and highscores
			jt3.fontSize(14);
			//var x=((jt3.w()-(squareX+squareW))/2)+squareX+squareW
			var x=squareX+squareW+20;
			if(this.races[this.race].time!=undefined){
				var text="Your time: "+this.toTime(this.races[this.race].time)
				var y=squareY+5;
				if(this.races[this.race].stars!=undefined){
					y=squareY+5+20;
					var text2="Stars"
					jt3.text(text2,x,squareY+5,"black","left")
					var w=jt3.textW(text2);
					for(var i=0;i<3;i++){
						if(this.races[this.race].time<=this.races[this.race].stars[i]){
							jt3.image("star",x+w+10+(i*20),squareY+2,16,16);
						}else{
							jt3.image("starEmpty",x+w+10+(i*20),squareY+2,16,16);
						}
					}
				}
				jt3.text(text,x,y,"black","left")
			}else{
				jt3.text("Play this race to get your time!",x,squareY+5,"black","left")
			}
			
			if(!completed){
				jt3.rect(squareX,squareY+squareH/4,squareW,squareH/2,[0,0,0,0.5]);
				jt3.fontSize(14);
				var text="Not completed";
				if(!unlocked){text="Beat the previous races to unlock"}
				jt3.text(text,squareX+squareW/2,squareY+squareH/2-jt3.fontSize()/2,"white","center")
			}
			
			if(this.races[this.race].times!=undefined){
				jt3.text("Leaderboard:",x,squareY+30,"black","left")
				var times=this.races[this.race].times;
				for(var i=0;i<times.length;i++){
					var time=times[i][0];
					var name=times[i][1];
					var index=i+1;
					if(i+1<10){index=" "+index}
					jt3.text((index)+": "+this.toTime(time)+" ("+name+")",x,squareY+50+(i*15),"black","left")
				}
			}else if(this.races[this.race].stars!=undefined){
				jt3.text("Beat these times to gain stars:",x,squareY+60,"black","left")
				var times=this.races[this.race].stars;
				for(var i=0;i<times.length;i++){
					var time=times[(times.length-1)-i];
					var index=i+1;
					for(var j=0;j<3;j++){
						if(j<=(times.length-1)-i){
							jt3.image("star",x+(j*20),squareY+80+(i*20),16,16);
						}else{
							jt3.image("starEmpty",x+(j*20),squareY+80+(i*20),16,16);
						}
					}
					jt3.text(": "+this.toTime(time),x+(60),squareY+80+(i*20)+4,"black","left")
				}
			}
		}else if(this.state=="maker"){
			
			if(jt3.kPress("left") || jt3.pDirPress("left")){this.maker--;jt3.waveX(0);jt3.stopPlay("change");}
			if(jt3.kPress("right") || jt3.pDirPress("right")){this.maker++;jt3.waveX(0);jt3.stopPlay("change");}
			this.maker=jt3.wrapIndex(this.maker,this.customIndex,this.races.length-1);
			
			if(jt3.kCheck("backspace")){
				if(jt3.kPress("backspace")){
					this.deleteTimer=this.deleteTimerMax;
				}
				this.deleteTimer--;
				if(this.deleteTimer==0){
					//delete
					this.deleteTimer=-1;
					this.races[this.maker]={
						w:200,
						h:200,
						lines:[],
						checkpoints:[],
					};
					
					for(var i=0;i<=10;i++){
						this.races[this.maker].lines.push([])
					}
				}
			}else{
				this.deleteTimer=-1;
			}
			
			if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
				jt3.stopPlay("choose");
				if(this.races[this.maker].name!==undefined){
					this.lastState=this.state;
					this.state="making";
					jt3.cam().x=200;
					jt3.cam().y=100;
					this.races[this.maker].completed=false;
				}else{
					this.races[this.maker]={
						w:200,
						h:200,
						lines:[],
						checkpoints:[],
						time:35999,
						completed:false,
					};
					
					for(var i=0;i<=10;i++){
						this.races[this.maker].lines.push([])
					}
					
					jt3.stopPlay("choose");
					var name=window.prompt("What is the race's name?")
					var alphanum=/^[A-Za-z0-9\s']+$/i;
					if(name && name.trim() && alphanum.test(name) && name.length<=18){
						this.lastState=this.state;
						this.state="making";
						jt3.cam().x=200;
						jt3.cam().y=100;
						this.races[this.maker].name=name;
					}else{
						window.alert("Invalid name, too long (18 chars) or has special characters")
					}
				}
				;
			}
			if(jt3.kPress("backspace") || jt3.pPress(this.exitBtn)){
				jt3.stopPlay("cancel");
				this.state="mode";
				;
			}
			
			//draw
			jt3.camActive(false);
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a slot for a race",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-90,"black","center");
			jt3.text("Choose with Space/Enter",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Delete by holding Backspace",jt3.w()/2,jt3.h()-30,"black","center");
			
			var ys=[0,0,0,0,0]
			for(var i=0;i<ys.length;i++){
				if(this.maker-this.customIndex==i){
					if(this.deleteTimer>=0){
						ys[i]=0;
					}else{
						ys[i]=jt3.waveYPos()*20;
					}
				}
			}
			
			
			
			
			//drawing races
			var squareX=37.5;
			var squareW=125;
			var spacing=25;
			for(var raceIndex=0;raceIndex<this.races.length-this.customIndex;raceIndex++){
				var race=this.races[raceIndex+this.customIndex];
				var bg="white";
				var lineC="black";
				if(race.bg!=undefined){bg=race.bg;}
				if(race.c!=undefined){lineC=race.c;}
				if(this.defaultColors){bg="white";lineC="black";}
				jt3.fontSize(18);
				var startX=squareX+(raceIndex*(spacing+squareW));
				var startY=(jt3.h()/2-squareW/2)+ys[raceIndex]-20;
				if(raceIndex==this.maker-this.customIndex){
					jt3.image("triangle",startX+squareW/2-10,startY-40-5,20,40,90);
				}
				
				if(this.deleteTimer>=0 && this.maker-this.customIndex==raceIndex){
					var ratio=this.deleteTimer/this.deleteTimerMax;
					jt3.text("Deleting: "+(100-jt.round(ratio*100,0))+"%",startX+squareW/2,startY+squareW+5,"red","center")
					jt3.alpha(ratio);
				}
				
				jt3.rect(startX,startY,squareW,squareW,bg);
				jt3.rectB(startX,startY,squareW,squareW,"black",0,3);
				if(race.name===undefined){
					jt3.text("Slot "+(raceIndex+1),startX+squareW/2,startY+squareW/2-10,"black","center")
				}else{
					var textW=jt3.textW();
					var str1=race.name;
					var str2="";
					var chars=jt3.floor((squareW-10)/textW);
					var len=race.name.length;
					if(len>chars){
						str1=race.name.substring(0,len/2);
						str2=race.name.substring(len/2,len);
					}
					
					jt3.text(str1,startX+squareW/2,startY+squareW-jt3.fontSize()*2,lineC,"center")
					jt3.text(str2,startX+squareW/2,startY+squareW-jt3.fontSize(),lineC,"center")
					
					//draw race
					//jt3.camActive(true)
					this.lines=[];
					var minX=100000;
					var minY=100000;
					var maxX=0;
					var maxY=0;
					
					var w=race.w;
					var h=race.h;
					
					for(var i=0;i<race.lines.length;i++){
						var curr=race.lines[i];
						for(var j=0;j<curr.length;j++){
							if(curr[j][0]<minX){minX=curr[j][0];}
							if(curr[j][0]>maxX){maxX=curr[j][0];}
							if(curr[j][1]<minY){minY=curr[j][1];}
							if(curr[j][1]>maxY){maxY=curr[j][1];}
						}
					}
					
					maxX=maxX-minX;
					maxY=maxY-minY;
					
					for(var i=0;i<race.lines.length;i++){
						var curr=race.lines[i];
						
						this.addLines(curr,0,0,1,1,lineC);
					}
					
					var squareH=(squareW-jt.fontSize()*2);
					var squareY=startY+(squareH-(squareH*(2/3)))/2;
					
					for(var i=0;i<this.lines.length;i++){

						var line=this.lines[i];
						
						var lineX1=(((line.x1+-minX)/maxX)*(squareW*(2/3)))+startX+squareW/6;
						var lineY1=(((line.y1+-minY)/maxY)*(squareH*(2/3)))+squareY;
						var lineX2=(((line.x2+-minX)/maxX)*(squareW*(2/3)))+startX+squareW/6;
						var lineY2=(((line.y2+-minY)/maxY)*(squareH*(2/3)))+squareY;
						
						jt3.line(lineX1,lineY1,lineX2,lineY2,1,lineC);
					}
					jt3.camActive(false);
				}
				jt3.alpha(1);
				if(race.name!=undefined && !race.completed){
					jt3.rect(startX,startY+squareH/4,squareW,squareH/2,[0,0,0,0.5])
					jt3.fontSize(14);
					jt3.text("Not completed",startX+squareW/2,startY+squareH/2-jt3.fontSize()/2,"white","center")
				}
			}
		}else if(this.state=="making"){
			if(jt3.cam().w!=800 || jt3.cam().h!=400){
				jt3.cam().x=200;
				jt3.cam().y=100;
				jt3.cam().w=800;
				jt3.cam().h=400;
			}
			jt3.camActive(false);
			if(jt3.kPress("backspace") || jt3.pPress(this.exitBtn)){
				jt3.stopPlay("cancel");
				this.state="maker";
				jt3.cam().x=200;
				jt3.cam().y=100;
				jt3.camActive(false);
				;
			}
			
			var camSpeed=this.camSpeed;
			if(jt3.kCheck("shift")){
				camSpeed=this.camSpeed*2;
			}
			if(jt3.kCheck("w")){jt3.cam().y-=camSpeed}
			if(jt3.kCheck("s")){jt3.cam().y+=camSpeed}
			if(jt3.kCheck("a")){jt3.cam().x-=camSpeed}
			if(jt3.kCheck("d")){jt3.cam().x+=camSpeed}
			
			jt3.cam().x=jt3.stay(jt3.cam().x,0,1600-jt3.w())
			jt3.cam().y=jt3.stay(jt3.cam().y,-50,800-jt3.h())
			
			var race=this.races[this.maker];
			
			if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
				jt3.cam().x=200;
				jt3.cam().y=100;
			}
			
			
			
			//tools
			if(jt3.mY()>50 && jt3.mY()<jt3.h()-50){
				if(this.tool=="erase"){
					if(jt3.mDown()){
						if(jt3.mPress()){
							this.makingX1=jt3.mX();
							this.makingY1=jt3.mY();
						}
						this.makingX2=jt3.mX();
						this.makingY2=jt3.mY();
					}else{
						if(this.makingX1!=0 && this.makingY1!=0 && this.makingX2!=0 && this.makingY2!=0){
							var x1=this.makingX1;
							var y1=this.makingY1;
							var x2=this.makingX2;
							var y2=this.makingY2;
							
							if(x1>x2){
								x1=this.makingX2;
								x2=this.makingX1;
							}
							if(y1>y2){
								y1=this.makingY2;
								y2=this.makingY1;
							}
							x1=jt3.xCam(x1);
							y1=jt3.yCam(y1);
							x2=jt3.xCam(x2);
							y2=jt3.yCam(y2);
							
							var rectCol={x:x1,y:y1,w:x2-x1,h:y2-y1};
							
							//remove checkpoints
							for(var j=0;j<race.checkpoints.length;j++){
								if(jt3.cRect(rectCol,race.checkpoints[j])){
									this.races[this.maker].checkpoints.splice(j,1);
									j--;
									continue;
								}
							}
							
							//remove points
							for(var j=0;j<race.lines.length;j++){
								if(j==this.layer || this.allLayers){
									for(var k=0;k<race.lines[j].length;k++){
										var point={x:race.lines[j][k][0],y:race.lines[j][k][1]}
										if(jt3.cRectPoint(rectCol,point)){
											this.races[this.maker].lines[j].splice(k,1);
											k--;
											continue;
										}
									}
								}
							}
							
							//remove duplicates
							for(var j=0;j<race.lines.length;j++){
								var beforeX=undefined;
								var beforeY=undefined;
								for(var k=0;k<race.lines[j].length;k++){
									var del=false;
									if(beforeX!=undefined){
										if(beforeX==race.lines[j][k][0] && beforeY==race.lines[j][k][1]){
											del=true;
										}
									}
									
									beforeX=race.lines[j][k][0];
									beforeY=race.lines[j][k][1];
									
									if(del){
										this.races[this.maker].lines[j].splice(k-1,1);
										k--;
									}
								}
							}
							
							//remove singles
							for(var j=0;j<race.lines.length;j++){
								if(race.lines[j].length==1){
									this.races[this.maker].lines[j]=[]
									continue;
								}
							}
						
						this.makingX1=0;
						this.makingX2=0;
						this.makingY1=0;
						this.makingY2=0;
						}
					}
				}else if(this.tool=="line"){
						
					var circleCol={x:jt3.mCX()-5,y:jt3.mCY()-5,d:10};
					var magnet={x:undefined,y:undefined}
					
					if(this.magnet){
						for(var j=0;j<race.lines.length;j++){
							if(j==this.layer || this.allLayers){
								for(var k=0;k<race.lines[j].length;k++){
									var coords=race.lines[j][k];
									var pointCircle={x:coords[0]-5,y:coords[1]-5,d:10}
									
									if(jt3.cCircle(circleCol,pointCircle)){
										magnet.x=pointCircle.x+5;
										magnet.y=pointCircle.y+5;
										
									}
								}
							}
						}
						if(magnet.x==undefined){
							magnet.x=jt3.round(jt3.mCX()/10,0)*10;
							magnet.y=jt3.round(jt3.mCY()/10,0)*10;
						}
					}
					if(jt3.mPress()){
						jt3.camActive(true);
						var point=[jt3.mCX(),jt3.mCY()]
						if(magnet.x!=undefined){
							point=[magnet.x,magnet.y];
						}
						race.lines[this.layer].push(point)
					}
					jt3.camActive(false);
				}else if(this.tool=="checkpoint"){
					if(jt3.mDown()){
						if(jt3.mPress()){
							this.makingX1=jt3.mX();
							this.makingY1=jt3.mY();
						}
						this.makingX2=jt3.mX();
						this.makingY2=jt3.mY();
					}else{
						if(this.makingX1!=0 && this.makingY1!=0 && this.makingX2!=0 && this.makingY2!=0){
							var x1=this.makingX1;
							var y1=this.makingY1;
							var x2=this.makingX2;
							var y2=this.makingY2;
							
							if(x1>x2){
								x1=this.makingX2;
								x2=this.makingX1;
							}
							if(y1>y2){
								y1=this.makingY2;
								y2=this.makingY1;
							}
							x1=jt3.round(jt3.xCam(x1)/10,0)*10;
							y1=jt3.round(jt3.yCam(y1)/10,0)*10;
							x2=jt3.round(jt3.xCam(x2)/10,0)*10;
							y2=jt3.round(jt3.yCam(y2)/10,0)*10;
							
							var rectCol={x:x1,y:y1,w:x2-x1,h:y2-y1};
							
							if(rectCol.w>5 && rectCol.h>5){
								this.races[this.maker].checkpoints.push(rectCol)
							}
							
							
						
						this.makingX1=0;
						this.makingX2=0;
						this.makingY1=0;
						this.makingY2=0;
						}
					}
				}
			}
			
			//btns
			for(var i=0;i<this.btns.length;i++){
				var btn=this.btns[i];
				if(jt3.mPress(btn)){
					switch(btn.action){
						case "name":
							var name=window.prompt("What is the race's name?")
							var alphanum=/^[A-Za-z0-9\s']+$/i;
							if(name && name.trim() && alphanum.test(name) && name.length<=18){
								race.name=name;
							}else{
								window.alert("Invalid name, too long (18 chars) or has special characters")
							}
							break;
						case "color":
							var bg=window.prompt("Set the background color (default is white) as a color name or an hexadecimal like #fff")
							var alphanum=/^[A-Za-z0-9\s'#]+$/i;
							if(bg && bg.trim() && alphanum.test(bg) && bg.length<=18){
								race.bg=bg;
							}else{
								window.alert("Invalid color, too long (18 chars) or has special characters")
							}
							lineC=window.prompt("Set the line color (default is white) as a color name or an hexadecimal like #fff")
							if(lineC && lineC.trim() && alphanum.test(lineC) && lineC.length<=18){
								race.c=lineC;
							}else{
								window.alert("Invalid color, too long (18 chars) or has special characters")
							}
							break;
						case "minus":
							this.layer--;
							break;
						case "plus":
							this.layer++;
							if(race.lines.length<=this.layer){
								race.lines.push([])
							}
							break;
						case "eraseAll":
							if(window.prompt("Are you sure you want to erase all? (Press ok to continue)")!=null){
								if(this.allLayers){
									for(var j=0;j<race.lines.length;j++){
										this.races[this.maker].lines[j]=[];
									}
								}else{
									this.races[this.maker].lines[this.layer]=[];
								}
								this.races[this.maker].checkpoints=[];
							}
							break;
						case "exit":
							this.state="maker";
							jt3.cam().x=0;
							jt3.cam().y=0;
							jt3.camActive(false);
							break;
						case "code":
							var raceCode=JSON.stringify(this.races[this.maker],null)
							var bg="white";
							var lineC="black";
							if(race.bg!=undefined){bg=race.bg;}
							if(race.c!=undefined){lineC=race.c;}
							raceCode='{\n';
							raceCode+='"w":'+this.races[this.maker].w+',\n';
							raceCode+='"h":'+this.races[this.maker].h+',\n';							
							raceCode+='"lines":'+JSON.stringify(this.races[this.maker].lines)+',\n';
							raceCode+='"checkpoints":'+JSON.stringify(this.races[this.maker].checkpoints)+',\n';
							raceCode+='"name":"'+this.races[this.maker].name+'",\n';
							raceCode+='"completed":false,\n';
							raceCode+='"bg":"'+bg+'",\n';
							raceCode+='"c":"'+lineC+'",\n';
							raceCode+='},\n';
							console.log(raceCode);
							window.prompt("Race code",JSON.stringify(this.races[this.maker],null))
							break;
						case "set":
							var code=window.prompt("Enter the race code");
							if(code!=null){
								this.races[this.maker]=JSON.parse(code);
							}else{
								window.alert("Invalid code")
							}
							break;
						case "test":
							this.lastState=this.state;
							var error="";
							if(this.races[this.maker].checkpoints.length>=2){
								//other checks
								if(JSON.stringify(this.races[this.maker],null).length<4000){
									//other checks
								}else{
									error="Too many lines or checkpoints";
								}
							}else{
								error="Not enought checkpoints (2 minimum)";
							}
							
							if(error==""){
								//Test
								this.race=this.maker;
								this.startRace();
							}else{
								window.alert(error);
							}
							break;
						case "save":
							var error="";
							if(this.races[this.maker].checkpoints.length>=2){
								//other checks
								if(JSON.stringify(this.races[this.maker],null).length<4000){
									//other checks
								}else{
									error="Too many lines or checkpoints";
								}
							}else{
								error="Not enought checkpoints (2 minimum)";
							}
							if(error==""){
								//Clear and then save
							}else{
								window.alert(error);
							}
							break;
					}
					this.layer=jt3.stay(this.layer,0,10)
					if(btn.active!=undefined){
						btn.active=!btn.active;
						if(btn.active){
							this.tool=btn.action;
						}else{
							this.tool=""
						}
						for(var j=0;j<this.btns.length;j++){
							if(this.btns[j].active!=undefined){
								if(this.btns[j].action!=btn.action){
									this.btns[j].active=false;
								}
							}
						}
					}
					if(btn.option!=undefined){
						btn.option=!btn.option;
						switch(btn.action){
							case "magnet":
								this.magnet=btn.option;
								break;
							case "all":
								this.allLayers=btn.option;
								break;
						}
					}
				}
			}
			//draw
			jt3.bg("white")
			
			//draw grid
			if(this.magnet){
				var initialY=jt3.round(jt3.yCam(50)/10,0)*10;
				for(var y=initialY;y<=initialY+300;y+=10){
					var yy=jt3.camY(y);
					var c=[0,0,0,0.25]
					var w=1;
					if(y%50==0){
						c=[255,0,0,0.5]
					}
					if(y%200==0){
						w=4;
					}
					jt3.line(0,yy,jt3.w(),yy,w,c);
				}
				var initialX=jt3.round(jt3.xCam(0)/10,0)*10;
				for(var x=initialX;x<=initialX+800;x+=10){
					var xx=jt3.camX(x);
					var c=[0,0,0,0.25]
					var w=1;
					if(x%50==0){
						c=[255,0,0,0.5]
					}
					if(x%400==0){
						w=4;
					}
					jt3.line(xx,50,xx,jt3.h()-50,w,c);
				}
			}
			
			//draw race
			jt3.camActive(true);
			
			this.lines=[];
			var minW=0;
			var minH=0;
			var maxW=1;
			var maxH=1;
			for(var i=0;i<this.races[this.maker].lines.length;i++){
				var curr=this.races[this.maker].lines[i];
				var c="black";
				if(i==this.layer || this.allLayers){
					c="blue";
				}
				this.addLines(curr,0,0,1,1,c);
				
				if(curr.length>0){
					var p={x:curr[0][0],y:curr[0][1]}
					jt3.circle(p.x-5,p.y-5,10,[255,0,0,0.5]);
				}
				
				//get w and h
				
				for(var j=0;j<curr.length;j++){
					if(curr[j][0]>maxW){maxW=curr[j][0]}
					if(curr[j][0]<minW){minW=curr[j][0]}
					if(curr[j][1]>maxH){maxH=curr[j][1]}
					if(curr[j][1]<minH){minH=curr[j][1]}
				}
			}
			this.races[this.maker].w=maxW-minW;
			this.races[this.maker].h=maxH-minH;
			
			this.addCheckpoints(this.races[this.maker].checkpoints);
			
			for(var i=0;i<this.lines.length;i++){
				this.lines[i].w=this.lineW;
				jt3.line(this.lines[i]);
			}
			
			for(var i=0;i<this.checkpoints.length;i++){
				var check=this.checkpoints[i];
				var rect={x:check.x,y:check.y,w:check.w,h:check.h,c:[0,0,255,0.25]};
				if(i==0){
					rect.c=[0,255,0,0.25];
				}
				
				jt3.shape(rect);
				rect.c=[rect.c[0],rect.c[1],rect.c[2],0.5]
				jt3.rectB(rect.x,rect.y,rect.w,rect.h,rect.c);
				
				jt3.alpha(0.5)
				if(i==0){
					jt3.image("triangle",rect.x+rect.w/2-10,rect.y+rect.h/2-10,20,20);
				}else{
					jt3.fontSize(24);
					jt3.text(i,rect.x+rect.w/2,rect.y+rect.h/2-jt3.fontSize()/2,"black","center")
				}
				jt3.alpha(1)
			}
			
			
			//tools
			jt3.camActive(false);
			if(jt3.mY()>50 && jt3.mY()<jt3.h()-50){
				if(this.tool=="erase"){
					if(jt3.mDown() && this.makingX1!=0 && this.makingY1!=0 && this.makingX2!=0 && this.makingY2!=0){
						var x1=this.makingX1;
						var y1=this.makingY1;
						var x2=this.makingX2;
						var y2=this.makingY2;
						
						if(x1>x2){
							x1=this.makingX2;
							x2=this.makingX1;
						}
						if(y1>y2){
							y1=this.makingY2;
							y2=this.makingY1;
						}
						
						jt3.rectB(x1,y1,x2-x1,y2-y1,[0,0,255,0.5])
						jt3.rect(x1,y1,x2-x1,y2-y1,[0,0,255,0.25])
					}
				}else if(this.tool=="checkpoint"){
					if(jt3.mDown() && this.makingX1!=0 && this.makingY1!=0 && this.makingX2!=0 && this.makingY2!=0){
						var x1=this.makingX1;
						var y1=this.makingY1;
						var x2=this.makingX2;
						var y2=this.makingY2;
						
						if(x1>x2){
							x1=this.makingX2;
							x2=this.makingX1;
						}
						if(y1>y2){
							y1=this.makingY2;
							y2=this.makingY1;
						}
						
						jt3.rectB(x1,y1,x2-x1,y2-y1,[0,255,0,0.5])
						jt3.rect(x1,y1,x2-x1,y2-y1,[0,255,0,0.25])
					}
				}else if(this.tool=="line"){
					
					jt3.camActive(true);
					var circleCol={x:jt3.mCX()-5,y:jt3.mCY()-5,d:10};
					var magnet={x:undefined,y:undefined}
					if(this.magnet){
						for(var j=0;j<race.lines.length;j++){
							if(j==this.layer || this.allLayers){
								for(var k=0;k<race.lines[j].length;k++){
									var coords=race.lines[j][k];
									var pointCircle={x:coords[0]-5,y:coords[1]-5,d:10,c:[0,255,0,0.5]}
									jt3.shape(pointCircle)
									if(jt3.cCircle(circleCol,pointCircle)){
										magnet.x=pointCircle.x+5;
										magnet.y=pointCircle.y+5;
									}
								}
							}
						}
						if(magnet.x==undefined){
							magnet.x=jt3.round(jt3.mCX()/10,0)*10;
							magnet.y=jt3.round(jt3.mCY()/10,0)*10;
						}
					}
					
					if(race.lines[this.layer].length>0){
						var last=race.lines[this.layer][race.lines[this.layer].length-1];
						var point={x:last[0],y:last[1]}
						var mouse={x:jt3.mCX(),y:jt3.mCY()};
						if(magnet.x!=undefined){
							mouse={x:magnet.x,y:magnet.y};
						}
						jt3.line(point.x,point.y,mouse.x,mouse.y,1,"red")
					}
				}
			}
			jt3.camActive(false);
			//Top menu
			jt3.fontSize(14);
			jt3.rect(0,0,jt3.w(),49,"white");
			jt3.rect(0,jt3.h()-49,jt3.w(),49,"white");
			//jt3.text("Creating race: ",5,1,"black","left");
			jt3.text(race.name,5,5,"black","left");
			var bg="white";
			var lineC="black";
			if(race.bg!=undefined){bg=race.bg;}
			if(race.c!=undefined){lineC=race.c;}
			jt3.text("Bg: "+bg,5,23,"black","left");
			jt3.text("Line: "+lineC,5,37,"black","left");
			jt3.fontSize(18);
			jt3.line(260,0,260,50,2,"black")
			jt3.line(650,0,650,50,2,"black")
			jt3.text("Tools: ",265,5,"black","left");
			jt3.text("Options: ",265,28,"black","left");
			var text=jt3.mCX()+" "+jt3.mCY();
			if(this.magnet){
				var x=jt3.round(jt3.mCX()/10,0)*10;
				var y=jt3.round(jt3.mCY()/10,0)*10;
				text=x+" "+y
			}
			jt3.text(text,jt3.w()-5,jt3.h()-70,"black","right");
			
			//jt3.text("Width: "+race.w+" | Height: "+race.h,5,28,"black","left");
			jt3.line(0,49,jt3.w(),49,2,"black")
			jt3.line(0,jt3.h()-49,jt3.w(),jt3.h()-49,2,"black")
			
			//Bottom menu
			jt3.fontSize(18);
			jt3.text("Controls: ",5,jt3.h()-35,"black","left")
			jt3.text("WASD to move the camera",105,jt3.h()-48,"black","left")
			jt3.text("Shift for faster camera speed",105,jt3.h()-33,"black","left")
			jt3.text("Space/Enter to reset camera",105,jt3.h()-18,"black","left")
			jt3.line(400,jt3.h()-50,400,jt3.h(),2,"black")
			
			//btns
			for(var i=0;i<this.btns.length;i++){
				var btn=this.btns[i];
				btn.c="grey";
				if(jt3.mIn(btn)){
					btn.c="lightgrey";
				}
				jt3.shape(btn);
				if(btn.active || btn.option){
					jt3.rectB(btn.x,btn.y,btn.w,btn.h,"black",0,2)
				}
				jt3.fontSize(18);
				jt3.text(btn.text,btn.x+btn.w/2,btn.y+btn.h/2-9,"black","center")
			}
			jt3.fontSize(18);
			jt3.text("Line layer: ",655,5,"black","left",jt3.fontSize(),0,7,20)
			jt3.text(this.layer,762,18,"black","center")
		}else if(this.state=="racing"){
			if(this.racing!="finish" && (jt3.kPress("backspace") || jt3.pPress(this.exitBtn))){
				jt3.stopPlay("cancel");
				this.state=this.lastState;
			}
			
			//Update
			var currRace=this.races[this.race];
			var bg="white";
			var lineC="black";
			if(currRace.bg!=undefined){bg=currRace.bg;}
			if(currRace.c!=undefined){lineC=currRace.c;}
			if(this.defaultColors){bg="white";lineC="black";}
			var race=this.races[this.race];
			this.lines=[];
			for(var i=0;i<this.races[this.race].lines.length;i++){
				var curr=this.races[this.race].lines[i];
				var c="black";
				this.addLines(curr,0,0,1,1,lineC);
			}
			this.addCheckpoints(this.races[this.race].checkpoints);
			
			if(this.racing=="racing"){
				this.player.update();
				
				//Collisions
				var circleX=this.player.x;
				var circleY=(this.player.y+this.player.h/2)-this.player.w/2;
				var circle={x:circleX,y:circleY,d:this.player.w};
				var cX=circle.x+circle.d/2;
				var cY=circle.y+circle.d/2;
				var cD=circle.d/2;
				
				var checkpoint=this.checkpoint;
				if(this.checkpoint>race.checkpoints.length-1){
					checkpoint=0;
				}
				
				if(jt3.cCircleRect(circle,race.checkpoints[checkpoint])){
					if(checkpoint==0 && this.checkpoint>0){
						this.checkpoint=0;
						this.laps++;
						
						if(this.laps>this.lapsMax){
							this.laps--;
							this.racing="finish";
							jt3.stopPlay("win");
						}else{
							jt3.stopPlay("powerup",0.67);
						}
					}
					this.checkpoint++;
				}
				
				for(var i=0;i<this.lines.length;i++){
					var line=this.lines[i];
					if(cX+cD<this.lines[i].x1 && cX+cD<this.lines[i].x2 ||
					   cX-cD>this.lines[i].x1 && cX-cD>this.lines[i].x2 ||
					   cY+cD<this.lines[i].y1 && cY+cD<this.lines[i].y2 ||
					   cY-cD>this.lines[i].y1 && cY-cD>this.lines[i].y2){
						continue;
				    }
					
					if(jt3.cCircleLine(circle,line)){
						if(!jt3.shaking()){
							jt3.shake(3);
							jt3.stopPlay("hurt",0.8);
						}
						
						//reverse speed
						this.player.speed=-this.player.speed;
						
						var modX=0;
						var modY=0;
						var mult=this.player.speed;
						if(this.player.drift>0){
							modX=(this.player.driftX*mult)/2+(jt3.angleX(this.player.r)*mult)/2;
							modY=(this.player.driftY*mult)/2+(jt3.angleY(this.player.r)*mult)/2;
						}else{
							modX=jt3.angleX(this.player.r)*mult;
							modY=jt3.angleY(this.player.r)*mult;
						}
						
						this.player.x+=modX;
						this.player.y+=modY;
						
						if(this.player.speed!=0){
							this.player.control=this.player.controlMax;
						}
						break;
					}
				}
			}
			
			//Draw
						//camera follow
			var camLerp=this.camLerp;
			if(this.racing=="start"){
				if(this.timer>0){
					camLerp=(this.timer/this.timerMax)*0.05;
				}
			}
			var camW=400;
			var camH=200;
			var camX=(this.player.x+this.player.w/2)-camW/2;
			var camY=(this.player.y+this.player.h/2)-camH/2;
			jt3.cam().x=jt3.lerp(camLerp,jt3.cam().x,camX);
			jt3.cam().y=jt3.lerp(camLerp,jt3.cam().y,camY);
			jt3.cam().w=jt3.lerp(camLerp,jt3.cam().w,camW);
			jt3.cam().h=jt3.lerp(camLerp,jt3.cam().h,camH);
			
			var closest1=this.r;
			var closest2=this.r-359;
			var closest3=this.r+359;
			
			var offset1=jt3.abs(this.player.r-closest1);
			var offset2=jt3.abs(this.player.r-closest2);
			var offset3=jt3.abs(this.player.r-closest3);
			
			var offset=offset1;
			var closest=closest1;
			if(offset2<offset){
				offset=offset2;
				closest=closest2;
			}
			if(offset3<offset){
				offset=offset3;
				closest=closest3;
			}
			
			this.r=closest;
			
			this.r=jt3.lerp(this.camRotSpd,this.r,this.player.r);
			
			jt3.camActive(true);
			jt3.bg(bg)
			var r=-this.r;
			if(!this.camRot){r=0;}
			jt3.rotate(r,jt3.cam().x,jt3.cam().y,jt3.cam().w,jt3.cam().h);
			jt3.rect(-1000,-1000,3000,3000,bg)
			
			for(var i=0;i<this.lines.length;i++){
				this.lines[i].w=this.lineW;
				jt3.line(this.lines[i]);
			}
			
			
			//draw start/finish line
			var checkpoint=race.checkpoints[0];
			var size=5;
			for(var y=checkpoint.y;y<checkpoint.y+checkpoint.h;y+=size){
				for(var x=checkpoint.x;x<checkpoint.x+checkpoint.w;x+=size){
					var c="black";
					if((((x-checkpoint.x)+(y-checkpoint.y))/size)%2!=0){
						c="white";
					}
					jt3.rect(x,y,size,size,c)
				}
			}
			jt3.rectB(checkpoint.x,checkpoint.y,checkpoint.w,checkpoint.h,"black",0,2)
			jt3.drawParts();
			this.player.draw();
			var circleX=this.player.x;
			var circleY=(this.player.y+this.player.h/2)-this.player.w/2;
			var circle={x:circleX,y:circleY,d:this.player.w,c:[0,255,0,0.5]};
			//jt3.shape(circle)
			jt3.rotate(-r,jt3.cam().x,jt3.cam().y,jt3.cam().w,jt3.cam().h);
			
			//HUD
			jt3.camActive(false);
			jt3.fontSize(24);
			jt3.rect(0,0,jt3.w(),50,[255,255,255,0.5])
			jt3.text(this.toTime(this.time),jt3.w()/2,10,"black","center");
			jt3.text(this.time,jt3.w()/2,30,"black","center");
			jt3.text("Laps: "+this.laps+"/3",jt3.w()*(3/4),10,"black","center");
			jt3.text("Speed: "+jt3.round(this.player.speed,1),jt3.w()/4,10,"black","center");
			if(this.racing=="start"){
				if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
					this.racing="racing";
					jt3.kRelease("space");
				}
				this.timer--;
				var ratio=0;
				var text="GO!";
				var min=0;
				var max=0;
				if(this.timer>=(this.timerMax/4)*3){
					min=(this.timerMax/4)*3;
					max=this.timerMax;
					text="3";
				}else if(this.timer>=this.timerMax/2){
					min=this.timerMax/2
					max=(this.timerMax/4)*3;
					text="2";
				}else if(this.timer>=this.timerMax/4){
					min=this.timerMax/4
					max=this.timerMax/2;
					text="1";
				}else if(this.timer>=0){
					min=0;
					max=this.timerMax/4;
					text="GO!";
				}else{
					jt3.delAlarm("finish");
					this.racing="racing";
				}
				if(this.racing=="start"){
					ratio=(this.timer-min)/(this.timerMax/4);
					if(text=="GO!"){
						ratio=1;
					}
					jt3.fontSize(1+(ratio*128));
					var offset=5;
					var w=jt3.textW(text);
					jt3.rect(0,0,jt3.w(),jt3.h(),[255,255,255,0.25])
					jt3.alpha(ratio)
					jt3.text(text,jt3.w()/2,jt3.h()/2-jt3.fontSize()/2,"black","center");
					jt3.alpha(1);
					jt3.fontSize(14);
					jt3.text("Space to skip",jt3.w()/2,jt3.h()-25,"black","center")
				}
			}else if(this.racing=="finish"){
				jt3.rect(0,0,jt3.w(),jt3.h(),[255,255,255,0.25])
				jt3.fontSize(64);
				jt3.text("Finish!",jt3.w()/2,jt3.h()/2-jt3.fontSize()/2,"black","center");
				if(!jt3.isAlarm("finish")){
					jt3.alarm("finish",90);
					if(this.races[this.race].time!=undefined){
						if(this.time<this.races[this.race].time){this.races[this.race].time=this.time;}
					}else{
						this.races[this.race].time=this.time;
					}
					this.times[this.race]=this.time;
					this.saveLocal();
				}
				if(jt3.checkAlarm("finish")){
					jt3.delAlarm("finish");
					this.racing="start";
					if(this.lastState=="making"){
						this.races[this.race].completed=true;
						this.state="maker";
					}else{
						this.state=this.lastState;
					}
				}
			}else{
				this.time++;
			}
		}else if(this.state=="settings"){
			jt3.camActive(false);
			if(jt3.kPress("up") || jt3.pDirPress("up")){
				this.setting--;
				jt3.stopPlay("change");
			}
			if(jt3.kPress("down") || jt3.pDirPress("down")){
				this.setting++;
				jt3.stopPlay("change");
			}
			
			this.setting=jt3.wrapIndex(this.setting,0,this.settings.length-1);
			
			var slider=false;
			var type="check"
			if(typeof this.settingsIni[this.setting] =="number"){
				if(this.settingsIni[this.setting]<1 && this.settingsIni[this.setting]>0){
					type="slider"
				}else{
					type="index"
				}
				
			}
			
			if(typeof this.settingsIni[this.setting] =="string"){
					type="action";
			}
			
			var canSlide=true;
			var locked=false;
			if(this.setting==7 && this.settings[6]==false){
				canSlide=false;
				locked=true;
			}
			
			if(type=="check" && (jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a"))){
				jt3.stopPlay("choose");
				this.settings[this.setting]=!this.settings[this.setting];
				if(this.setting==1){
					jt3.fullscreen(this.settings[this.setting]);
				}
			}
			
			if(type=="action" && (jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a"))){
				jt3.stopPlay("choose");
				if(this.settings[this.setting]=="reset"){
					for(var i=0;i<this.settings.length;i++){
						if(this.settingsIni[i]>=1){
							this.settings[i]=0;
						}else{
							this.settings[i]=this.settingsIni[i];
						}
					}
				}else if(this.settings[this.setting]=="clear"){
					if(window.prompt("Are you sure you want to delete all your times?")!=null){
						localStorage.clear();
						for(var i=0;i<this.races.length;i++){
							this.races[i].time=undefined;
						}
					}
				}else if(this.settings[this.setting]=="test"){
					this.lastState=this.state;
					this.state="racing";
					this.race=1;
					this.startRace();
				}
			}
			
			var changed=false;
			
			if(type=="index" && canSlide && (jt3.kPress("left") || jt3.pDirPress("left"))){
				jt3.stopPlay("choose");
				this.settings[this.setting]--;
				changed=true;
			}
						
			if(type=="index" && canSlide && (jt3.kPress("right") || jt3.pDirPress("right"))){
				jt3.stopPlay("choose");
				this.settings[this.setting]++;
				changed=true;
			}
			
			if(type=="slider" && canSlide && (jt3.kCheck("left") || jt3.pDirCheck("left"))){
				this.settings[this.setting]-=0.02;
			}
						
			if(type=="slider" && canSlide && (jt3.kCheck("right") || jt3.pDirCheck("right"))){
				this.settings[this.setting]+=0.02;
			}
			if(type=="index" && changed){
				if(this.setting==2){
					this.settings[this.setting]=jt3.wrapIndex(this.settings[this.setting],0,this.settingsIni[this.setting]-1);
				}else{
					this.settings[this.setting]=jt3.wrapIndex(this.settings[this.setting],0,this.settingsIni[this.setting]);
				}
			}
			if(type=="slider"){
				if(this.setting==0){
					this.settings[this.setting]=jt3.stay(this.settings[this.setting],0,1);
				}else{
					this.settings[this.setting]=jt3.stay(this.settings[this.setting],0.05,1);
				}
				
			}
			
			if(jt3.kPress("backspace") || jt3.pPress(this.exitBtn)){
				jt3.stopPlay("cancel");
				this.state="mode";
			}
			
			//draw
			jt3.bg("white")
			
			var settings=["Volume","Fullscreen","Choose your car","Lines width","Use default colors for every race","Camera speed","Rotating camera","Camera rotating speed","Driving backwards reverses left and right","Test settings in a race","Reset settings","Clear times"]
			
			//Put settings
			jt3.volume(this.settings[0]);
			if(jt3.kPress("space") || jt3.kPress("enter") || jt3.pPress("a")){
				jt3.stopPlay("choose");
			}
			this.lineW=this.settings[3]+1;
			this.defaultColors=this.settings[4];
			this.camLerp=this.settings[5];
			this.camRot=this.settings[6];
			this.camRotSpd=this.settings[7];
			this.backwardsRev=this.settings[8];
			
			var firstElementVisible=0;
			var lastElementVisible=0;
			
			var startY=90;
			for(var i=0;i<this.settings.length;i++){
				var x=100;
				var c="black";
				var spacing=50;
				var modY=-jt3.stay((this.setting-2),0,this.settings.length-5)*spacing;
				var y=(startY+i*(spacing))+modY;
				if(y<=330){
					lastElementVisible++;
				}
				if(y<=60){
					firstElementVisible++;
				}
				if(i==7 && this.settings[6]==false){
					c="grey";
				}
				jt3.fontSize(24);
				var action=false;
				if(typeof this.settings[i]=="string"){
					action=true;
				}
				if(action){
					if(this.settings[i]=="test"){
						jt3.text(settings[i],jt3.w()/2,y,"black","center");
					}else{
						jt3.text(settings[i],jt3.w()/2,y,"red","center");
					}
				}else{
					jt3.text(settings[i]+": ",x,y,c,"left");
				}
				if(typeof this.settings[i]=="boolean"){
					//checkbox
					jt3.rectB(jt3.w()-x-30,y,25,25,c,0,2);
					if(this.settings[i]){
						jt3.image("check",jt3.w()-x-30,y-8,32,32);
						//jt3.text("x",jt3.w()-x-17.5,y,"black","center")
					}
				}else if(typeof this.settings[i]=="number"){
					if(this.settingsIni[i]>=1){
						//index
						var w=40;
						var xx=jt3.w()-x-w;
						if(i==2){
							if(this.cars[this.settings[i]]=="carRainbow"){
								jt3.anim(this.cars[this.settings[i]],xx,y-5,20,40,90);
							}else{
								jt3.image(this.cars[this.settings[i]],xx,y-5,20,40,90);
							}
							
						}else if(i==3){
							jt3.fontSize(24);
							jt3.text((this.settings[i]+1),jt3.w()-x-10,y-5,"black","right")
						}
					}else{
						//slider
						var w=150;
						var xx=jt3.w()-x-w;
						var ratio=this.settings[i]*w
						if(i==5 || i==7){
							ratio=(this.settings[i]-0.05)*w*1.05;
						}
						jt3.line(xx,y+12,jt3.w()-x,y+12,2,c)
						jt3.rect(xx-5+(ratio),y+2.5,10,20,c);
						jt3.fontSize(12);
						jt3.text(jt3.round(this.settings[i],2),xx+(ratio),y-10,c,"center")
					}
				}
				if(this.setting==i){
					jt3.line(x-5,y+30,jt3.w()-x,y+30,this.lineW,"black")
					jt3.image("triangle",x-20,y,10,20);
				}
			}
			
			jt3.rect(0,0,jt3.w(),60,"white");
			jt3.rect(0,330,jt3.w(),70,"white");
			jt3.fontSize(48);
			jt3.text("Settings",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Up and Down",jt3.w()/2,jt3.h()-60,"black","center");
			var text="Change with Space/Enter";
			if(type=="slider" || type=="index"){text="Change with Left and Right";}
			if(this.setting==0){
				text="Change with Left and Right | Test volume with Space";
			}
			jt3.text(text,jt3.w()/2,jt3.h()-30,"black","center");
			jt3.line(0,60,jt3.w(),60,1,"black")
			jt3.line(0,330,jt3.w(),330,1,"black")
			
			//scroll
			jt3.rect(jt3.w()-20,60,20,jt3.h()-130,"grey");
			var elementVisible=lastElementVisible-firstElementVisible;
			var ratio=elementVisible/this.settings.length;
			var height=(jt3.h()-130);
			var offset=2;
			jt3.rect(jt3.w()-20+offset,60+firstElementVisible*(height/this.settings.length)+offset,20-offset*2,ratio*height-offset*2,"white");
		}
		if(this.state!="menu" && this.state!="making"){
			jt3.fontSize(16);
			jt3.camActive(false);
			jt3.text("Backspace to return",5,5,"black","left",jt3.fontSize(),0,10,20)
		}
	}
}

function Racer(){
	this.x=0;
	this.y=0;
	this.w=6;
	this.h=10;
	this.c="red";
	this.r=90;
	
	this.speed=0;
	this.speedMax=2;
	this.speedTrueMax=3;
	this.accel=0.05;
	this.deccel=0.1;
	this.friction=0.98;
	this.speedRevMax=-1;
	this.turn=3;
	
	this.control=0;
	this.controlMax=2;
	
	this.drift=0;
	this.driftBoostMin=30;
	this.driftMax=40;
	this.driftDead=50;
	this.driftCooldown=30;
	this.driftX=0;
	this.driftY=0;
	
	this.keyDown=0;
	this.keyInterval=8;
}

Racer.prototype.update=function(){
	var up=false;
	var down=false;
	var drift=false;
	var key=false;
	
	var left=false;
	var right=false;
	
	var rightTrigger=false;
	var leftTrigger=false;
	
	var aPress=false;
	var aCheck=false;
	
	if(jt3.pConnected()){
		if(jt3.pPress("a")){
			aPress=true;
		}
		if(jt3.pCheck("a")){
			aCheck=true;
		}
		if(jt3.pValue("rightTrigger")>0.5){rightTrigger=true;}
		if(jt3.pValue("leftTrigger")>0.5){leftTrigger=true;}
		if(jt3.pStick()[0]<-0.5){left=true;}
		if(jt3.pStick()[0]>0.5){right=true;}
	}
	
	var turnSpeed=this.turn;
	if((jt3.kCheck("up") || rightTrigger) && this.control<1){up=true;}
	if((jt3.kCheck("down") || leftTrigger)&& this.control<1){down=true;}
	if(jt3.kCheck("space") || aCheck){
		if(jt3.kPress("space") || aPress){
			this.drift=10;
			this.driftX=jt3.angleX(this.r);
			this.driftY=jt3.angleY(this.r);
		}
		
		this.drift++;
		if(this.drift>=0){
			drift=true;
		}else{
			this.driftX=jt3.angleX(this.r);
			this.driftY=jt3.angleY(this.r);
		}
		if(this.drift>this.driftDead){
			this.speed=jt3.abs(this.speed)/2;
			this.drift=-this.driftCooldown;
			jt3.stopPlay("hit",0.67);
		}else{
			up=false;
			down=false;
		}
	}else{
		if(this.drift<=0){
			this.drift=0;
			this.driftX=0;
			this.driftY=0;
		}else if(this.drift<this.driftBoostMin){
			this.drift=0;
			this.driftX=0;
			this.driftY=0;
		}else{
			jt3.shake(3);
			this.drift=0;
			this.driftX=0;
			this.driftY=0;
			var speed=jt3.abs(this.speed)*2;
			if(speed<this.speedMax){
				speed=this.speedMax;
			}
			this.speed=speed;
			jt3.stopPlay("jump",1);
		}
	}
	
	if(drift){turnSpeed=this.turn*1.5;}
	
	if(up || down || drift){key=true;}
	
	if(!up && this.speed>0 && this.speed<this.accel){this.speed=0;}
	if(!down && this.speed<0 && this.speed>-this.deccel){this.speed=0;}
	if(!key){this.speed*=this.friction;}
	
	if(up || down){
		//parts
		var part={
			x:this.x+this.w/2+jt3.random(-2,2,0.5),
			y:this.y+this.h/2+jt3.random(-2,2,0.5),
			w:2,
			wRate:0.4,
			h:0,
			hRate:0,
			c:"grey",
			alpha:1,
			alphaRate:-0.05,
			frames:20,
			o:undefined,
		}
		jt3.addPart(part);
		
		if(this.keyDown%this.keyInterval==0){
			jt3.stopPlay("fire",0.2)
		}
		this.keyDown++;
	}else{
		this.keyDown=0;
	}
	
	
	if(up){
		this.speed+=this.accel;
	}
	if(this.speed>this.speedMax && !drift){this.speed-=this.accel;}
	if(this.speed>this.speedTrueMax){this.speed=this.speedTrueMax;}
	
	if(down){
		this.speed-=this.deccel;
	}
	if(this.speed<this.speedRevMax && !drift){this.speed+=this.deccel;}
	
	if(jt3.kCheck("left") || left){
		if(app3.backwardsRev){
			if(this.speed>=0){
				this.r-=turnSpeed;
			}else if(this.speed<0){this.r+=turnSpeed;}
		}else{
			this.r-=turnSpeed;
		}
	}
	if(jt3.kCheck("right") || right){
		if(app3.backwardsRev){
			if(this.speed>=0){
				this.r+=turnSpeed;
			}else if(this.speed<0){this.r-=turnSpeed;}
		}else{
			this.r+=turnSpeed;
		}
	}
	
	this.r=jt3.wrap(this.r,0,359)
	
	if(drift){
		this.x+=(this.driftX*this.speed)/2+(jt3.angleX(this.r)*this.speed)/2;
		this.y+=(this.driftY*this.speed)/2+(jt3.angleY(this.r)*this.speed)/2;
	}else{
		this.x+=jt3.angleX(this.r)*this.speed;
		this.y+=jt3.angleY(this.r)*this.speed;
	}
	
	this.x=jt3.round(this.x,1);
	this.y=jt3.round(this.y,1);
	
	if(this.control>0){this.control--;}
	
}

Racer.prototype.draw=function(){
	//drift circle
	if(this.drift>0){
		var c=[0,0,0,0.75];
		if(this.drift>=this.driftBoostMin){
			c=[0,200,0,0.75];
		}
		var offset=this.w*1.5;
		jt3.circle(this.x+this.w/2-offset,this.y+this.h/2-offset,offset*2,[255,255,255,0.5])
		jt3.circleB(this.x+this.w/2-offset,this.y+this.h/2-offset,offset*2,c,1)
		var ratio=this.drift/this.driftMax;
		offset*=ratio;
		jt3.circle(this.x+this.w/2-offset,this.y+this.h/2-offset,offset*2,c)
	}
	//car
	jt3.rotate(this.r,this.x,this.y,this.w,this.h)
	if(app3.cars[app3.settings[2]]=="carRainbow"){
		jt3.anim(app3.cars[app3.settings[2]],this.x,this.y,this.w,this.h)
	}else{
		jt3.image(app3.cars[app3.settings[2]],this.x,this.y,this.w,this.h)
	}
	
	//jt3.rect(this.x,this.y,this.w,this.h,this.c)
	//jt3.rect(this.x+1,this.y,this.w-2,this.h-6,"black")
	jt3.rotate(-this.r,this.x,this.y,this.w,this.h)
}

//define the jt object on a global scale
var jt3=undefined;

var races=[
	{
		lines:[
		[
		[0,0],
		[200,10],
		[200,200],
		[10,200],
		[0,0]],
		[
		[60,60],
		[150,60],
		[150,150],
		[60,150],
		[60,60]]
		],
		name:"Beginner",
		w:200,
		h:200,
		checkpoints:[
			{x:0,y:0,w:50,h:50},
			{x:150,y:0,w:50,h:50},
			{x:150,y:150,w:50,h:50},
			{x:10,y:150,w:50,h:50},
		]
	},
	{
		lines:[[
		[0,0],
		[200,10],
		[200,200],
		[10,200],
		[10,115],
		[50,115],
		[50,105],
		[10,105],
		[0,0]],
		[
		[60,60],
		[150,60],
		[160,160],
		[60,160],
		[60,150],
		[100,150],
		[100,70],
		[60,70],
		[60,60]]],
		name:"Beginner 2",
		w:200,
		h:200,
		checkpoints:[
			{x:0,y:0,w:50,h:50},
			{x:150,y:0,w:50,h:50},
			{x:150,y:150,w:50,h:50},
			{x:10,y:150,w:50,h:50},
		]
	}
]