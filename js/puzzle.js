var app2={
	w:400,
	h:200,
	start:false,
	win:false,
	message:"",
	messageTimer:0,
	messageTimerMax:240,
	//setup is called when the game has finished loading
	setup:function(){
		//jt.fullscreen(false);
	},
	addMessage:function(message){
		this.message=message;
		this.messageTimer=this.messageTimerMax;
	},
	//update is called every frame
	update:function(){
		//This is a simulation of the JT update function (60fps)
		jt2.bg("white")
		if(this.start){

			if(this.select===undefined){this.select=0;}
			if(this.quantities===undefined){this.quantities=[12,0,0];}
			var maxes=[12,8,5]
			var colors=["grey","grey","grey"]

			//pressing
			if(jt2.kPress("0")){
				this.select=0;
			}

			var press1=jt2.kPress("1")
			var press2=jt2.kPress("2")
			var press3=jt2.kPress("3")
			
			if(press1 || press2 || press3){
				if(this.select==0){
					var num=0;
					if(press1){this.select=1;num=1;}
					if(press2){this.select=2;num=2;}
					if(press3){this.select=3;num=3;}
				}else{
					var num=0;
					if(press1 && this.select!=1){
						var canReceive=maxes[0]-this.quantities[0];
						if(canReceive>0){
							var canGive=this.quantities[this.select-1];
							if(canGive>canReceive){
								canGive=canReceive
							}
							this.quantities[0]+=canGive;
							this.quantities[this.select-1]-=canGive;
							num=1;
						}
					}
					
					if(press2 && this.select!=2){
						var canReceive=maxes[1]-this.quantities[1];
						if(canReceive>0){
							var canGive=this.quantities[this.select-1];
							if(canGive>canReceive){
								canGive=canReceive
							}
							this.quantities[1]+=canGive;
							this.quantities[this.select-1]-=canGive;
							num=2;
						}
					}
					
					if(press3 && this.select!=3){
						var canReceive=maxes[2]-this.quantities[2];
						if(canReceive>0){
							var canGive=this.quantities[this.select-1];
							if(canGive>canReceive){
								canGive=canReceive
							}
							this.quantities[2]+=canGive;
							this.quantities[this.select-1]-=canGive;
							num=3;
						}
					}
					
					if(num!=0){
						this.addMessage(this.select+" poured into "+num);
					}
					
					this.select=0;
				}
			}

			if(this.select==1){
				colors[0]="black";
				jt2.rectB(jt2.w()/4-30,jt2.h()-20-120,60,120,"orange",0,10)
			}
			if(this.select==2){
				colors[1]="black";
				jt2.rectB(jt2.w()/2-30,jt2.h()-20-80,60,80,"orange",0,10);
			}
			if(this.select==3){
				colors[2]="black";
				jt2.rectB(jt2.w()/4*3-30,jt2.h()-20-50,60,50,"orange",0,10);
			}
			
			var num=0;
			if(this.quantities[0]==6){num++;}
			if(this.quantities[1]==6){num++;}
			if(this.quantities[2]==6){num++;}
			if(num>=2){this.win=true;}
			
			jt2.fontSize(18);
			var message="";
			if(!this.win){
				if(this.select==0){
					message="Press a jug's number to choose it";
				}else{
					message="Press a jug's number to pour into it";
				}
			}else{
				message="You won!"
			}
			jt2.text(message,jt2.w()/2,5,"black","center");


			//Draw selectable numbers
			jt2.fontSize(24)
			jt2.text("1",jt2.w()/4,35,colors[0],"center")
			jt2.text("2",jt2.w()/2,35,colors[1],"center")
			jt2.text("3",jt2.w()/4*3,35,colors[2],"center")

			//Draw barrels
			jt2.fontSize(18)
			
			jt2.rect(jt2.w()/4-30,jt2.h()/2-40,60,120,"black")
			var ratio=(this.quantities[0]/maxes[0]);
			jt2.rect(jt2.w()/4-30,jt2.h()-20-ratio*120,60,ratio*120,"blue")
			jt2.text(this.quantities[0]+"/"+maxes[0],jt2.w()/4,jt2.h()/2+60,"white","center")

			jt2.rect(jt2.w()/2-30,jt2.h()/2,60,80,"black")
			var ratio=(this.quantities[1]/maxes[1]);
			jt2.rect(jt2.w()/2-30,jt2.h()-20-ratio*80,60,ratio*80,"blue")
			jt2.text(this.quantities[1]+"/"+maxes[1],jt2.w()/2,jt2.h()/2+60,"white","center")

			jt2.rect(jt2.w()/4*3-30,jt2.h()/2+30,60,50,"black")
			var ratio=(this.quantities[2]/maxes[2]);
			jt2.rect(jt2.w()/4*3-30,jt2.h()-20-ratio*50,60,ratio*50,"blue")
			jt2.text(this.quantities[2]+"/"+maxes[2],jt2.w()/4*3,jt2.h()/2+60,"white","center")
			
			jt2.fontSize(14)
			this.messageTimer--;
			if(this.messageTimer>this.messageTimerMax/2){
				jt2.text(this.message,jt2.w()/2,185,"black","center")
			}else if(this.messageTimer>0){
				jt2.alpha(this.messageTimer/(this.messageTimerMax/2))
				jt2.text(this.message,jt2.w()/2,185,"black","center")
				jt2.alpha(1)
			}
			
			if(jt2.kPress("space")){
				this.start=false;
				this.win=false;
				jt2.kRelease();
				this.quantities=undefined;
				this.select=undefined;
			}
			
		}else{
			jt2.align("center")
			jt2.fontSize(48)
			jt2.text("3 Jugs Puzzle",jt2.w()/2,5,"black","center")
			
			jt2.fontSize(18);
			jt2.text("Can you get 2 jugs to exactly 6 liters?",jt2.w()/2,jt2.h()/2,"black","center")
			
			/*jt2.fontSize(18);
			jt2.text("Press a jug's number to choose it",jt2.w()/2,100,"black","center")
						
			jt2.fontSize(18);
			jt2.text("Press a jug's number to pour into it",jt2.w()/2,120,"black","center")*/
			
			jt2.fontSize(24);
			if(jt2.frame()<40){
				jt2.text("Press Space to start",jt2.w()/2,jt2.h()-30,"black","center")
			}
			
			if(jt2.kPress("space")){
				this.start=true;
				jt2.kRelease();
			}
		}
	}
}

//define the jt object on a global scale
var jt2=undefined;