// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import gamecontroller from "./Lv1Controller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class imagecontroller extends cc.Component {

    @property({type : cc.Node})
    target : cc.Node = null;

    @property
    startMove = false;

    // @property({type: gamecontroller})
    // game: gamecontroller = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(this.startMove){
            this.startMove = false;
            cc.tween(this.node).to(0.2,{x: this.target.position.x, y: this.target.position.y});
        }
    }
}
