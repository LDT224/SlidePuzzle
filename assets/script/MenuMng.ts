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

    @property({type : cc.AudioClip})
    gamesound : cc.AudioClip = null;
    sound = true;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playMusic();
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

    playMusic(){
        cc.audioEngine.stopAll()
        if(this.sound == true){
            this.sound = false
            cc.audioEngine.playEffect(this.gamesound, false)
            console.log(this.sound)
        }else{
            cc.audioEngine.playEffect(this.gamesound,true)
        }
        
    }

    start () {
    }
    

    //update (dt) {}
}
