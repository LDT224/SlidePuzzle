// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import movecontroller from "./MoveController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class gameMng extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }


    scene1(){
        cc.director.loadScene('lv1');
        cc.director.resume();
    }

    scene2(){
        cc.director.loadScene('lv2');
        cc.director.resume();
    }

    scene3(){
        cc.director.loadScene('lv3');
        cc.director.resume();
    }

    menuScene(){
        cc.director.loadScene('Menu');
        cc.director.resume();
    }
    start () {
    }
    

    //update (dt) {}
}
