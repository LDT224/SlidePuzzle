// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import gameMng from "./GameMng";
import imagecontroller from "./ImageController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class lv2controller extends cc.Component {

    @property
    row = 0;
    @property
    col = 0;
    @property
    countStep = 0;
    
    @property
    rowBlank = 0;
    @property
    colBlank = 0;
    
    @property
    sizeRow = 0; 
    @property
    sizeCol = 0; 

    countPoint = 0;
    countImageKey = 0;
    
    startControl : boolean = false;

    @property ({type : [cc.Node]})
    imageKeyList : cc.Node[] = [];
    @property ({type :[cc.Node]})
    imageOfNumberList : cc.Node[] = [];
    @property ({type : [cc.Node]})
    checkPointList : cc.Node[] = [];

    imageKeyMatrix : cc.Node[][] = [];
    imageOfNumberMatrix : cc.Node[][] = [];
    checkPointMatrix : cc.Node[][] = [];

    temp : cc.Node = null;
    tempRow = 0;
    tempCol = 0;
    countRight = 0;
    tempShuff : cc.Node = null;

    // @property({type : imagecontroller})
    // game : imagecontroller = null;
    @property({type: cc.Prefab})
    endGame : cc.Prefab = null;
    @property({type: cc.Prefab})
    loseGame : cc.Prefab = null;

    @property({type : cc.AudioClip})
    shuffle : cc.AudioClip = null;
    @property({type : cc.AudioClip})
    soft : cc.AudioClip = null;
    @property({type : cc.AudioClip})
    winsound : cc.AudioClip = null;
    @property({type : cc.AudioClip})
    losesound : cc.AudioClip = null;

    @property({type : cc.Label})
    timeLabel : cc.Label = null;
    @property({type : cc.Label})
    lowTimeLabel : cc.Label = null;
    time = 0;

    @property({type: cc.Node})
    modeDisplay : cc.Node = null
    mode = true;
    @property({type : cc.Node})
    timeBar : cc.Node = null
    // @property({type : movecontroller})
    // game : movecontroller = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () { 
        //this.imageKeyMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.imageOfNumberMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.checkPointMatrix = cc.Node[this.sizeRow][this.sizeCol];

        this.CheckPointManager();
        this.ImageKeyManager();
        this.ImageOfNumber()

        cc.resources.loadDir('Image/normal', (err, textures)=>{
            console.log(textures);
            for(let r = 0; r<4; r++){
                for(let c = 0; c<4; c++){
                    for(let i = 1; i < 32; i++){
                        if(this.imageOfNumberMatrix[r][c].name == textures[i].name){
                            this.imageOfNumberMatrix[r][c].getComponent(cc.Sprite).spriteFrame = textures[i]
                        }
                    }
                }
            }
            
        })
        //cc.director.pause();
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2') 
    }

    CheckPointManager(){
        for(let r = 0; r < this.sizeRow; r++){
            const arr1 =[]
            for(let c = 0; c < this.sizeCol; c++){
                arr1.push(this.checkPointList[this.countPoint]);
                this.countPoint++;
            }
            this.checkPointMatrix.push(arr1)
        }
    }

    ImageKeyManager(){
        for(let r = 0; r < this.sizeRow; r++){ 
            const arr2=[]
            for(let c = 0; c < this.sizeCol; c++){ 
                arr2.push(this.imageKeyList[this.countImageKey]);
                this.countImageKey++;
            }
            this.imageKeyMatrix.push(arr2)
        }
    }

    ImageOfNumber(){

        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[0],
            this.imageOfNumberList[1],
            this.imageOfNumberList[2],
            this.imageOfNumberList[3],
        ])

        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[4],
            this.imageOfNumberList[5],
            this.imageOfNumberList[6],
            this.imageOfNumberList[7],
        ])

        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[8],
            this.imageOfNumberList[9],
            this.imageOfNumberList[10],
            this.imageOfNumberList[11],
        ])  

        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[12],
            this.imageOfNumberList[13],
            this.imageOfNumberList[14],
            this.imageOfNumberList[15],
        ])     
        
    }
    private isSorting: boolean=false;
    SortImage(){

        //console.log(this.rowBlank, this.colBlank);
        if (this.isSorting) return;

        this.isSorting=true;

        cc.tween(this.imageOfNumberMatrix[this.row][this.col]).to(0.1, {position: this.imageOfNumberMatrix[this.rowBlank][this.colBlank].position}).start()
        cc.tween(this.imageOfNumberMatrix[this.rowBlank][this.colBlank])
        .to(0.1, {position: this.imageOfNumberMatrix[this.row][this.col].position})
        .call(()=>{
            this.temp = this.imageOfNumberMatrix[this.rowBlank][this.colBlank];
            this.imageOfNumberMatrix[this.rowBlank][this.colBlank] = this.imageOfNumberMatrix[this.row][this.col];
            this.imageOfNumberMatrix[this.row][ this.col] = this.temp;
    

            //console.log(this.imageOfNumberMatrix);
            
            //console.log(this.row,this.col);
            
            this.tempRow = this.rowBlank;
            this.tempCol = this.colBlank;
            this.rowBlank = this.row;
            this.colBlank = this.col;
            this.row = this.tempRow;
            this.col = this.tempCol;
            
            for(let r = 0; r < 4; r++){
                for(let c = 0; c < 4; c++){
                    if(this.imageOfNumberMatrix[r][c].name == this.imageKeyMatrix[r][c].name){
                        this.countRight++;
                    }else{
                        this.countRight = 0;
                        break;
                    }
                }
            }

            if(this.countRight == 16){
                this.win();
            }
            
            this.isSorting=false
        })
        .start()
        cc.audioEngine.playEffect(this.soft, false);
    }

    win(){
        cc.director.pause();
        var scene = cc.director.getScene();
        let node =  cc.instantiate(this.endGame);
        node.parent = scene.getChildByName('Canvas');
        cc.audioEngine.playEffect(this.winsound, false);

        if(this.mode == false){
            if(cc.sys.localStorage.getItem('timeLV2') == null){
                cc.sys.localStorage.setItem('timeLV2', this.time)
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2')
            }

            if(this.time < cc.sys.localStorage.getItem('timeLV2')){
                cc.sys.localStorage.setItem('timeLV2', this.time)
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2')
            }
        }
    }

    shuffleNumber(){
        for(let r = 3; r >= 0; r--){
            for(let c = 3; c >= 0; c--){
                let randomrow = Math.floor(Math.random()*4);
                let randomcol = Math.floor(Math.random()*4);
                
                this.tempShuff = this.imageOfNumberMatrix[r][c];
                this.imageOfNumberMatrix[r][c] = this.imageOfNumberMatrix[randomrow][randomcol];
                this.imageOfNumberMatrix[randomrow][randomcol] = this.tempShuff;

                // console.log('1: ' + r + ' ' + c)
                // console.log('2: ' + randomrow + ' ' + randomcol)
            }
           
        }
        
        this.checkShuffle();
        for(let r = 0; r<4; r++){
            for(let c =0; c<4; c++){
                this.imageOfNumberMatrix[r][c].position = this.checkPointMatrix[r][c].position;
                if(this.imageOfNumberMatrix[r][c].name == 'Blank'){
                    this.rowBlank = r;
                    this.colBlank = c;
                }
            }
        }
        cc.audioEngine.playEffect(this.shuffle, false);
    }

    checkShuffle(){
        let numberInverions = 0;
        for(let r = 0; r < 4; r++){
            for(let c = 0; c < 4; c++){
                if(this.imageOfNumberMatrix[r][c].name == 'Blank'){
                    continue;
                }

                for (let d = c; d<4; d++){
                    if( this.imageOfNumberMatrix[r][d].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[r][d].name) ){
                        console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[r][d].name)
                        numberInverions++;
                    }
                }

                for(let a = r+1; a<4; a++){
                    for(let b = 0; b<4;b++){
                        if( this.imageOfNumberMatrix[a][b].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[a][b].name)){
                            console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[a][b].name)
                            numberInverions++;
                        }
                    }
                }
            }
        }
        console.log(numberInverions)
        if(numberInverions % 2 == 1){
            for(let x = 0; x<4; x++){
                for(let y =0; y<4; y++){
                    if(this.imageOfNumberMatrix[x][y].name == 'Blank'){
                        if((x) % 2 ==1){
                            if(this.imageOfNumberMatrix[0][0].name != 'Blank' && this.imageOfNumberMatrix[0][1].name != 'Blank' ){
                                //console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name)
                                this.temp = this.imageOfNumberMatrix[0][0];
                                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                                this.imageOfNumberMatrix[0][1] = this.temp;
                                //console.log(this.imageOfNumberMatrix)
                                
                            }else{   
                               // console.log(this.imageOfNumberMatrix[3][3].name + ' ' + this.imageOfNumberMatrix[3][2].name)
                                this.temp = this.imageOfNumberMatrix[3][3];
                                this.imageOfNumberMatrix[3][3] = this.imageOfNumberMatrix[3][2];
                                this.imageOfNumberMatrix[3][2] = this.temp; 
                               // console.log(this.imageOfNumberMatrix)              
                            }
                        }
                    }
                }
            }
        }else{
            for(let x = 0; x<4; x++){
                for(let y =0; y<4; y++){
                    if(this.imageOfNumberMatrix[x][y].name == 'Blank'){
                        if((x) % 2 == 0){
                            if(this.imageOfNumberMatrix[0][0].name != 'Blank' && this.imageOfNumberMatrix[0][1].name != 'Blank' ){
                                console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name)
                                this.temp = this.imageOfNumberMatrix[0][0];
                                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                                this.imageOfNumberMatrix[0][1] = this.temp;
                                console.log(this.imageOfNumberMatrix)
                                
                            }else{   
                                console.log(this.imageOfNumberMatrix[3][3].name + ' ' + this.imageOfNumberMatrix[3][2].name)
                                this.temp = this.imageOfNumberMatrix[3][3];
                                this.imageOfNumberMatrix[3][3] = this.imageOfNumberMatrix[3][2];
                                this.imageOfNumberMatrix[3][2] = this.temp; 
                                console.log(this.imageOfNumberMatrix)              
                            }
                        }
                    }
                }
            }
        }
    }

    countDown(target){
        cc.director.resume(); 
        this.timeBar.active = true;
        this.mode = true;
        this.time = 90;
        this.lowTimeLabel.string = '';
        this.modeDisplay.destroy();
    }

    lowestTime(){
        cc.director.resume();
        this.mode = false;
        this.lowTimeLabel.string = 'Lowest Time: '+ cc.sys.localStorage.getItem('timeLV2');
        this.modeDisplay.destroy();
    }

    counttime(){
        if(this.mode == true){
            this.time--;
            this.timeBar.getComponent(cc.ProgressBar).progress = this.timeBar.getComponent(cc.ProgressBar).progress - 1/90;
            if(this.time == 0){
                cc.director.pause();
                var scene = cc.director.getScene();
                let node =  cc.instantiate(this.loseGame);
                node.parent = scene.getChildByName('Canvas');
                cc.audioEngine.playEffect(this.losesound, false);
            }
        }else{
            this.time ++;
        }
        this.timeLabel.string = 'Time: ' + this.time;
    }
    start () {
        cc.director.pause();
        this.schedule(this.counttime,1)
        this.shuffleNumber();
    }

    update (dt) {
        if(this.startControl){
            this.startControl = false;
            if(this.countStep == 1){
                if(this.rowBlank != this.row && this.colBlank == this.col){
                    if(Math.abs( this.rowBlank - this.row) ==1){
                        this.SortImage();
                    }
                    this.countStep = 0;
                }else if(this.rowBlank == this.row && this.colBlank != this.col){
                    if(Math.abs( this.colBlank - this.col) ==1){
                        this.SortImage();
                    }
                    this.countStep = 0;
                }else if(this.rowBlank == this.row && this.colBlank == this.col || this.rowBlank != this.row && this.colBlank != this.col){   
                    this.countStep = 0;
                }
            }
        }
    }
}
