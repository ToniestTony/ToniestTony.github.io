var app3={
	w:800,
	h:400,
	state:"making",
	mode:0,
	race:0,
	lines:[],
	checkpoints:[],
	races:[
		{
			name:"Template",
			w:200,
			h:200,
			lines:[
				[
					[0,0],
					[200,10],
					[200,200],
					[10,200],
					[0,0]
				],
				[
					[60,60],
					[150,60],
					[150,150],
					[60,150],
					[60,60]
				]
			],
			checkpoints:[],
		}
	],
	maker:0,
	makingX1:0,
	makingY1:0,
	makingX2:0,
	makingY2:0,
	camSpeed:4,
	tool:"",
	layer:0,
	magnet:false,
	btns:[
		{
			x:250,
			y:2,
			w:99,
			h:20,
			text:"Set name",
			action:"name",
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
			text:"Erase",
			action:"erase",
		},
		{
			x:725,
			y:2,
			w:24,
			h:20,
			text:"-",
			action:"minus",
		},
		{
			x:775,
			y:2,
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
			option:false,
		},
	],
	//setup is called when the game has finished loading
	setup:function(){
		//jt.fullscreen(false);
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
			}else{
				this.lines.push({
					x:((x1+x)*w)-5,
					y:((y1+y)*h)-5,
					d:10,
					c:[255,0,0,0.5],
				});
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
		//This is a simulation of the JT update function (60fps)
		if(this.state=="menu"){
			jt3.bg([255,255,255,0.25])
		
			jt3.fontSize(72);
			jt3.text("SPEEDY CARS",jt3.w()/2,5+jt3.waveYPos()*30,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Press Up and Down to drive forward and backwards",jt3.w()/2,jt3.h()/2-40,"black","center")
			jt3.text("Press Left and Right to turn",jt3.w()/2,jt3.h()/2-10,"black","center")
			jt3.text("(You can also use a gamepad)",jt3.w()/2,jt3.h()/2+20,"black","center")
			
			jt3.fontSize(48);
			if(jt3.frame()<=40){
				jt3.text("Press Space to select race",jt3.w()/2,jt3.h()-60,"black","center");
			}
			
			if(jt3.kPress("space")){
				this.state="mode"
				jt3.kRelease();
			}
			
		}else if(this.state=="mode"){
			
			if(jt3.kPress("left")){this.mode--;jt3.waveX(0);}
			if(jt3.kPress("right")){this.mode++;jt3.waveX(0);}
			this.mode=jt3.wrapIndex(this.mode,0,2);
			
			if(jt3.kPress("space")){
				if(this.mode==0){
					this.state="race"
				}else if(this.mode==1){
					this.state="vs"
				}else if(this.mode==2){
					this.state="maker"
				}
				jt3.kRelease();
			}
			
			if(jt3.kPress("escape")){
				this.state="menu";
				jt3.kRelease();
			}
			
			//draw
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a game mode",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Choose with Space",jt3.w()/2,jt3.h()-30,"black","center");
			
			var y1=0;
			var y2=0;
			var y3=0;
			if(this.mode==0){y1=jt3.waveYPos()*20;}
			if(this.mode==1){y2=jt3.waveYPos()*20;}
			if(this.mode==2){y3=jt3.waveYPos()*20;}
			
			
			jt3.rectB(75,125+y1,150,150,"black",0,3);
			jt3.image("biceps",100,140+y1,100,100);
			jt3.text("Practice",150,250+y1,"black","center")
			
			jt3.rectB(325,125+y2,150,150,"black",0,3);
			jt3.image("vs",350,140+y2,100,100);
			jt3.text("VS Tony",400,250+y2,"black","center")
			
			jt3.rectB(575,125+y3,150,150,"black",0,3);
			jt3.image("hammer",600,140+y3,100,100);
			jt3.text("Race Maker",650,250+y3,"black","center")
			
			jt3.image("triangle",this.mode*250+140,85,20,40,90);
		}else if(this.state=="race"){
			
			if(jt3.kPress("left")){this.race--;jt3.waveX(0);}
			if(jt3.kPress("right")){this.race++;jt3.waveX(0);}
			this.race=jt3.wrapIndex(this.race,0,1);
			
			if(jt3.kPress("space")){
				this.state="game";
				jt3.kRelease();
			}
			if(jt3.kPress("escape")){
				this.state="mode";
				jt3.kRelease();
			}
			
			//draw
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a race",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Choose with Space",jt3.w()/2,jt3.h()-30,"black","center");
			
			//race
			this.lines=[];
			for(var i=0;i<races[this.race].lines.length;i++){
				var curr=races[this.race].lines[i];
				
				this.addLines(curr,300,100,races[this.race].w/200,races[this.race].h/200);
				
			}
			this.addCheckpoints(races[this.race].checkpoints);
			
			for(var i=0;i<this.lines.length;i++){
				jt3.shape(this.lines[i]);
				
			}
			
			jt3.fontSize(24);
			jt3.text(races[this.race].name,jt3.w()/2,75,"blue","center");
		}else if(this.state=="maker"){
			
			if(jt3.kPress("left")){this.maker--;jt3.waveX(0);}
			if(jt3.kPress("right")){this.maker++;jt3.waveX(0);}
			this.maker=jt3.wrapIndex(this.maker,0,2);
			
			if(jt3.kPress("space")){
				var name=window.prompt("What is the race's name?")
				var alphanum=/^[A-Za-z0-9\s]+$/i;
				if(name && name.trim() && alphanum.test(name) && name.length<=20){
					this.state="making";
					jt3.cam().x=-300;
					jt3.cam().y=-100;
					this.races[this.maker].name=name;
				}else{
					window.alert("Invalid name, too long (20 chars) or has special characters")
				}
				jt3.kRelease();
			}
			if(jt3.kPress("escape")){
				this.state="mode";
				jt3.kRelease();
			}
			
			//draw
			jt3.bg("white")
			
			jt3.fontSize(48);
			jt3.text("Select a slot for a race",jt3.w()/2,5,"black","center");
			
			jt3.fontSize(24);
			jt3.text("Select with Left and Right",jt3.w()/2,jt3.h()-60,"black","center");
			jt3.text("Choose with Space",jt3.w()/2,jt3.h()-30,"black","center");
			
			var y1=0;
			var y2=0;
			var y3=0;
			if(this.maker==0){y1=jt3.waveYPos()*20;}
			if(this.maker==1){y2=jt3.waveYPos()*20;}
			if(this.maker==2){y3=jt3.waveYPos()*20;}
			
			
			jt3.rectB(75,125+y1,150,150,"black",0,3);
			jt3.text("Slot 1",150,190+y1,"black","center")
			
			jt3.rectB(325,125+y2,150,150,"black",0,3);
			jt3.text("Slot 2",400,190+y2,"black","center")
			
			jt3.rectB(575,125+y3,150,150,"black",0,3);
			jt3.text("Slot 3",650,190+y3,"black","center")
			
			jt3.image("triangle",this.maker*250+140,85,20,40,90);
		}else if(this.state=="making"){
			jt3.camActive(false);
			if(jt3.kPress("escape")){
				this.state="mode";
				jt3.kRelease();
			}
			
			var camSpeed=this.camSpeed;
			if(jt3.kCheck("shift")){
				camSpeed=this.camSpeed*2;
			}
			if(jt3.kCheck("w")){jt3.cam().y-=camSpeed}
			if(jt3.kCheck("s")){jt3.cam().y+=camSpeed}
			if(jt3.kCheck("a")){jt3.cam().x-=camSpeed}
			if(jt3.kCheck("d")){jt3.cam().x+=camSpeed}
			
			jt3.cam().x=jt3.stay(jt3.cam().x,-jt3.w(),jt3.w())
			jt3.cam().y=jt3.stay(jt3.cam().y,-jt3.h(),jt3.h())
			
			var race=this.races[this.maker];
			
			if(jt3.kPress("space")){
				jt3.cam().x=-jt3.w()/2+race.w/2;
				jt3.cam().y=-jt3.h()/2+race.h/2;
			}
			
			
			
			//tools
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
						
						for(var j=0;j<race.lines.length;j++){
							if(j==this.layer){
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
				if(jt3.mY()>50 && jt3.mY()<jt3.h()-50){
					
					var circleCol={x:jt3.mCX()-5,y:jt3.mCY()-5,d:10};
					var magnet={x:undefined,y:undefined}
					
					if(this.magnet){
						for(var j=0;j<race.lines.length;j++){
							if(j==this.layer){
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
				}
			}
			
			//btns
			for(var i=0;i<this.btns.length;i++){
				var btn=this.btns[i];
				if(jt3.mPress(btn)){
					switch(btn.action){
						case "name":
							var name=window.prompt("What is the race's name?")
							var alphanum=/^[A-Za-z0-9\s]+$/i;
							if(name && name.trim() && alphanum.test(name) && name.length<=20){
								race.name=name;
							}else{
								window.alert("Invalid name, too long (20 chars) or has special characters")
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
						}
					}
				}
			}
			//draw
			jt3.bg("white")
			
			//draw race
			jt3.camActive(true);
			
			this.lines=[];
			for(var i=0;i<this.races[this.maker].lines.length;i++){
				var curr=this.races[this.maker].lines[i];
				var c="black";
				if(i==this.layer){
					c="blue";
				}
				this.addLines(curr,0,0,this.races[this.maker].w/200,this.races[this.maker].h/200,c);
				
			}
			this.addCheckpoints(this.races[this.maker].checkpoints);
			
			for(var i=0;i<this.lines.length;i++){
				jt3.shape(this.lines[i]);
			}
			
			
			//tools
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
			}else if(this.tool=="line"){
				if(jt3.mY()>50 && jt3.mY()<jt3.h()-50){
					jt3.camActive(true);
					var circleCol={x:jt3.mCX()-5,y:jt3.mCY()-5,d:10};
					var magnet={x:undefined,y:undefined}
					if(this.magnet){
						for(var j=0;j<race.lines.length;j++){
							if(j==this.layer){
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
			jt3.fontSize(18);
			jt3.rect(0,0,jt3.w(),50,"white");
			jt3.rect(0,jt3.h()-50,jt3.w(),50,"white");
			jt3.text("Creating race: "+race.name,5,5,"black","left");
			jt3.text(jt3.mCX()+" "+jt3.mCY(),jt3.w()-5,jt3.h()-70,"black","right");
			
			//get w and h
			/*var maxW=1;
			var maxH=1;
			for(var i=0;i<race.lines.length;i++){
				for(var j=0;j<race.lines[i].length;j++){
					if(race.lines[i][j][0]>maxW){maxW=race.lines[i][j][0]}
					if(race.lines[i][j][1]>maxH){maxH=race.lines[i][j][1]}
				}
			}
			race.w=maxW;
			race.h=maxH;*/
			
			jt3.text("Width: "+race.w+" | Height: "+race.h,5,28,"black","left");
			jt3.line(0,50,jt3.w(),50,2,"black")
			jt3.line(0,jt3.h()-50,jt3.w(),jt3.h()-50,2,"black")
			
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
			jt3.text("Layer: ",725,5,"black","right")
			jt3.text(this.layer,762,5,"black","center")
		}
	}
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