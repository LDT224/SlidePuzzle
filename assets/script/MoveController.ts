// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import lv1controller from "./Lv1Controller";
import gamecontroller from "./Lv1Controller";
import lv2controller from "./Lv2Controller";
import lv3controller from "./Lv3Controller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class movecontroller extends cc.Component {

    @property
    row = 0;

    @property
    col = 0;

    @property({type : lv1controller})
    lv1 : lv1controller = null;

    @property({type : lv2controller})
    lv2 : lv2controller = null;

    @property({type : lv3controller})
    lv3 : lv3controller = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
    // }

    start () {
        if(cc.director.getScene().name == 'lv1'){
            this.node.on('touchstart',(e) =>{
            //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
            this.lv1.countStep +=1;
            this.lv1.row = this.row;
            this.lv1.col = this.col;
            this.lv1.startControl = true;
            }, this);
        }else if(cc.director.getScene().name == 'lv2'){
            this.node.on('touchstart',(e) =>{
            //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
            this.lv2.countStep +=1;
            this.lv2.row = this.row;
            this.lv2.col = this.col;
            this.lv2.startControl = true;
            }, this);
        }else{
            this.node.on('touchstart',(e) =>{
            //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
            this.lv3.countStep +=1;
            this.lv3.row = this.row;
            this.lv3.col = this.col;
            this.lv3.startControl = true;
            }, this);
        }
        
    }

    onTouchBegan(){
        
    }

    //update (dt) {}
}
