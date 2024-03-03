const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoFixCanvas extends cc.Component {

    private mainCanvas: cc.Canvas;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private currentScreenW = 0;
    private currentScreenH = 0;

    start() {
        this.mainCanvas = this.node.getComponent(cc.Canvas);
        this.currentScreenW = cc.winSize.width;
        this.currentScreenH = cc.winSize.height;
        this.updateCanvasSize();
    }

    update(dt) {
        if (this.currentScreenW != cc.winSize.width || this.currentScreenH != cc.winSize.height) {
            this.currentScreenW = cc.winSize.width;
            this.currentScreenH = cc.winSize.height;

            this.updateCanvasSize();
        }
    }

    updateCanvasSize() {
        var original = 1280 / 720;

        var newScreen = cc.winSize.width / cc.winSize.height;

        if (newScreen >= original) {
            this.mainCanvas.fitHeight = true;
            this.mainCanvas.fitWidth = false;
        }
        else {
            this.mainCanvas.fitHeight = false;
            this.mainCanvas.fitWidth = true;
        }

        var h = cc.winSize.height;
        var w = cc.winSize.width;
        if (w < h) {
            this.mainCanvas.fitHeight = true;
            this.mainCanvas.fitWidth = true;
        }
    }
}
