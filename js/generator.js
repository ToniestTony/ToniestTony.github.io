/*
var locations={
    village:new Location("the village","A small village",0,undefined,[
        //name,event,cost,xp gained OR hp gained,item, active (0:limited,1:unactive,2:unlimited)
        //talk,event(talk),[answer]
        ["Talk to the village elder","talk",["Good luck on your adventure!","Be careful","The small house is said to contain a weapon, I wonder where is the key."]],
        ["Sleep at the tavern (3 gold)","heal",1,5,undefined,0],
        ["Buy a wooden sword (10 gold)","buy",10,0,items.woodenSword,0],
        ["Buy reinforced leather clothes (15 gold)","buy",15,0,items.reinforcedLeatherClothes,0],
        ["Buy a bronze sword (20 gold)","buy",20,0,items.bronzeSword,0],
        ["A small house (locked)","nothing",2],
        //["Buy a minor health (1 gold)","buy",1,0,items.minorPotion,2],
        
    ]),
    
    
    
    plains:new Location("the plains","A calm plain popular with slimes",0,[
        //enemy,instance,%
        //gold, desc, %, value
        //custom, desc, %, changingLocation, changingName, for
        //["gold","You found <b>10</b> gold on the ground!",60,10],
        ["custom","You have found a key, and you unlocked the small house in the village.",10,"village","A small house (locked)",["A small house","buy",0,0,items.villageSword,0]],
        //["unique",enemies.woodenChest,100],
        ["enemy",enemies.slime,60],
        ["enemy",enemies.redSlime,80],
        ["enemy",enemies.angrySlime,95],
        ["enemy",enemies.goldenSlime,100]
    ]),
    */


var genEnemies={
    //name,desc,hp,atk,def,xp,gold,loot
    //enemy:new Enemy("name","desc",hp,atk,def,xp,gold),
    //enemy:new Enemy("name","desc",hp,atk,def,xp,gold,[{item:itemObj,chance:num}]),
    
    //plain and slime kingdom
    //name,desc,atk,def,xp,gold,loot
    //0->4, 0 is min, 2 is middle, 4 is max
    slime:new Enemy("a slime","A slimey creature",1,1,0,1,1,[{item:items.slimeHat,chance:20},{item:items.slimeArmor,chance:10}]),
}

//gen short for generator
var gen={
    normal:{
        names:[
            //reference name, actual name, desc
            ["plains","the plains","A calm plain"],
            ["smallForest","a small forest","A small and young forest"],
            ["hill","a small hill","A small but vast hill"],
        ],
        shopNames:[
            //reference name, actual name, desc
            ["village","the village","A small village"],
            ["shop","a shop","A small shop"],
            ["tavern","a tavern","A small tavern"],
        ],
        //level:0
        //type (shop or explore)
        bosses:[
            //enemy, appearance %
            [enemies.bigSlime,20],
            [enemies.kingSlime,10],
        ],
        weapons:[
            
        ],
        
        enemies:[
            //enemy, appearance %, drop
            //ref,name,desc,hp,atk,def,xp,gold,%,loot
            //loot=type,name,val(0->4),chance(%)
            //stats are scalable from 0->4, 0 is min, 4 is max
            ["a slime","a slimey creature",1,1,0,1,1,60,[
                ["armor","Slime hat",2,50],
                ["armor","Slime armor",3,25],
            ]],
            ["a red slime","a red slimey creature",3,1,0,2,1,30],
            ["a angry slime","a angry slimey creature",1,2,0,2,1,30],
            ["a golden slime","a golden slimey creature",2,1,2,1,4,10],
            /*[enemies.slime,60],
            [enemies.redSlime,30],
            [enemies.angrySlime,30],
            [enemies.goldenSlime,10],*/
        ],
        events:[],
    },
    
    forest:{
        names:[
            //reference name, actual name, desc
            ["forest","the forest","A forest with different kind of trees."],
            ["denseForest","the dense forest","A forest so dense that light can barely pass through it."],
            ["forestHill","the forest on a hill","A forest on top of a large hill"],
        ],
        shopNames:[
            //reference name, actual name, desc
            ["forestShop","the forest shop","A shop at the entrance of a forest"],
            ["woodenCabin","a wooden cabin","A wooden cabin with both owners selling items"],
        ],
        //level:0
        //type (shop or explore)
        bosses:[
            //enemy, appearance %
            [enemies.bigSlime,20],
            [enemies.kingSlime,10],
        ],
        enemies:[
            //enemy, appearance %
            [enemies.treeant,30],
            [enemies.wolf,20],
            [enemies.bear,20],
            [enemies.manEatingPlant,30],
            [enemies.woodenChest,10],
            [enemies.goblin,20],
        ],
        events:[],
    },
}

function generate(){
    var maxLocations=99;
    //generate locations
    var generatedLocations={};
    
    //get themes
    var themes=[];
    for (var property in gen) {
        if (gen.hasOwnProperty(property)){
            themes.push(property.toString());
        }
    }
    
    
    //main loop
    var levelRequired=0;
    var difficulty=1;
    var theme=themes[0];
    
    
    for(var i=0;i<maxLocations;i++){
        if(i<2){
            //first 2
        }else{
            levelRequired+=ran(1,2);
            if(i>=10){
                difficulty+=ran(1,2);
            }else{
                difficulty++;
            }
            
        }
        //check if shop and change theme each 3 locations
        var isShop=false;
        if(i%3==0){
            isShop=true;
            if(i>0){
                themes.splice(themes.indexOf(theme),1);
                if(themes.length>0){
                    theme=themes[ran(0,themes.length-1)];
                }else{
                    console.log("loop finished: no more themes");
                    break;
                }
                
            }
        }
        if(i==1){
            isShop=false;
        }
        
        //check name/desc and if available use it
        var triesCpt=0;
        var maxTries=99;
        
        var randName=gen[theme].names[ran(0,gen[theme].names.length-1)];
        if(isShop){
            randName=gen[theme].shopNames[ran(0,gen[theme].shopNames.length-1)];
        }
        
        while(generatedLocations[randName[0]]!=undefined && triesCpt<=maxTries){
            var randName=gen[theme].names[ran(0,gen[theme].names.length-1)];
        
            if(isShop){
                randName=gen[theme].shopNames[ran(0,gen[theme].shopNames.length-1)];
            }
            triesCpt++;
        }
        
        if(triesCpt>=maxTries){
            //stop the loop
            console.log("loop finished: max tries acheived")
            break;
        }
        
        //if it's not a shop add enemies and create the location
        if(!isShop){
            //add boss
            //enemies
            var generatedEnemies=[];
            
            var listEnemies=[];
            for(var cpt=0;cpt<gen[theme].enemies.length;cpt++){
                listEnemies.push(gen[theme].enemies[cpt])
            }
            
            var percent=0;
            
            for(var cpt=0;cpt<gen[theme].enemies.length;cpt++){
                if(listEnemies.length>0){
                    //ce for currEnemy
                    var ce=listEnemies[ran(0,listEnemies.length-1)]
                    listEnemies.splice(listEnemies.indexOf(ce),1);
                    
                    //name,desc,hp,atk,def,xp,gold
                    var cName=ce[0];
                    var cDesc=ce[1];
                    
                    var cHp=Math.ceil((5+(difficulty*4.6))*((ce[2]+1)/5));
                    
                    var cAtk=Math.ceil((4+(difficulty*0.7))*((ce[3]+1)/5));
                    
                    var cDef=Math.floor((4+((difficulty-1)*0.25))*((ce[4]+1)/5));
                    
                    var cXp=Math.ceil((4+((difficulty-1)*3.6))*((ce[5]+1)/5));
                    
                    if(ce[5]==0){cXp=0;}
                    
                    var cGold=Math.ceil((4+((difficulty-1)*2.6))*((ce[6]+1)/5));
                    
                    if(ce[6]==0){cGold=0;}
                    
                    var cPercent=ce[7];
                    
                    var cLoot=undefined;
                    if(ce[8]!=undefined){
                        cLoot=[];
                        for(var lootCpt=0;lootCpt<ce[8].length;lootCpt++){
                            cLoot.push({item:new Item(ce[8][lootCpt][0],ce[8][lootCpt][1],ce[8][lootCpt][2]),chance:ce[8][lootCpt][3]});
                        }
                    }
                    var objEnemy=new Enemy(cName,cDesc,cHp,cAtk,cDef,cXp,cGold,cLoot)
                    
                    percent+=cPercent;
                    if(percent>100){percent=100}
                    
                    

                    generatedEnemies.push([
                        "enemy",
                        objEnemy,
                        percent
                    ]);

                    if(percent>=100){
                        break;
                    }
                }else{
                    break;
                }
                
            }
            
            
            generatedLocations[randName[0]]=new Location(randName[1],randName[2],levelRequired,generatedEnemies)
        }else{
            //events
            generatedLocations[randName[0]]=new Location(randName[1],randName[2],levelRequired)
        }
        
    }
    
    console.log(generatedLocations)
}

function calcVal(value,level){
    var finalValue=value*level;
}