"use strict";
cc._RF.push(module, '8dea9M4L1JNbJ5gW1vKlAVC', 'Lv1Controller');
// script/Lv1Controller.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var lv1controller = /** @class */ (function (_super) {
    __extends(lv1controller, _super);
    function lv1controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.row = 0;
        _this.col = 0;
        _this.countStep = 0;
        _this.rowBlank = 0;
        _this.colBlank = 0;
        _this.sizeRow = 0;
        _this.sizeCol = 0;
        _this.countPoint = 0;
        _this.countImageKey = 0;
        _this.startControl = false;
        _this.imageKeyList = [];
        _this.imageOfNumberList = [];
        _this.checkPointList = [];
        _this.imageKeyMatrix = [];
        _this.imageOfNumberMatrix = [];
        _this.checkPointMatrix = [];
        _this.temp = null;
        _this.tempRow = 0;
        _this.tempCol = 0;
        _this.countRight = 0;
        _this.tempShuff = null;
        // @property({type : imagecontroller})
        // game : imagecontroller = null;
        _this.endGame = null;
        _this.loseGame = null;
        _this.shuffle = null;
        _this.soft = null;
        _this.winsound = null;
        _this.losesound = null;
        _this.timeLabel = null;
        _this.lowTimeLabel = null;
        _this.time = 0;
        _this.modeDisplay = null;
        _this.mode = 0;
        _this.timeBar = null;
        _this.isSorting = false;
        return _this;
    }
    // @property({type : movecontroller})
    // game : movecontroller = null;
    // LIFE-CYCLE CALLBACKS:
    lv1controller.prototype.onLoad = function () {
        //this.imageKeyMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.imageOfNumberMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.checkPointMatrix = cc.Node[this.sizeRow][this.sizeCol];
        var _this = this;
        this.CheckPointManager();
        this.ImageKeyManager();
        this.ImageOfNumber();
        cc.resources.loadDir('Image/easy', function (err, textures) {
            console.log(textures);
            for (var r = 0; r < 3; r++) {
                for (var c = 0; c < 3; c++) {
                    for (var i = 1; i < 20; i++) {
                        if (_this.imageOfNumberMatrix[r][c].name == textures[i].name) {
                            _this.imageOfNumberMatrix[r][c].getComponent(cc.Sprite).spriteFrame = textures[i];
                        }
                    }
                }
            }
        });
        //cc.director.pause();
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV1');
    };
    lv1controller.prototype.CheckPointManager = function () {
        for (var r = 0; r < this.sizeRow; r++) {
            var arr1 = [];
            for (var c = 0; c < this.sizeCol; c++) {
                arr1.push(this.checkPointList[this.countPoint]);
                this.countPoint++;
            }
            this.checkPointMatrix.push(arr1);
        }
    };
    lv1controller.prototype.ImageKeyManager = function () {
        for (var r = 0; r < this.sizeRow; r++) {
            var arr2 = [];
            for (var c = 0; c < this.sizeCol; c++) {
                arr2.push(this.imageKeyList[this.countImageKey]);
                this.countImageKey++;
            }
            this.imageKeyMatrix.push(arr2);
        }
    };
    lv1controller.prototype.ImageOfNumber = function () {
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[0],
            this.imageOfNumberList[2],
            this.imageOfNumberList[5],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[4],
            this.imageOfNumberList[1],
            this.imageOfNumberList[7],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[3],
            this.imageOfNumberList[6],
            this.imageOfNumberList[8],
        ]);
    };
    lv1controller.prototype.SortImage = function () {
        //console.log(this.rowBlank, this.colBlank);
        var _this = this;
        if (this.isSorting)
            return;
        this.isSorting = true;
        cc.tween(this.imageOfNumberMatrix[this.row][this.col]).to(0.1, { position: this.imageOfNumberMatrix[this.rowBlank][this.colBlank].position }).start();
        cc.tween(this.imageOfNumberMatrix[this.rowBlank][this.colBlank])
            .to(0.1, { position: this.imageOfNumberMatrix[this.row][this.col].position })
            .call(function () {
            _this.temp = _this.imageOfNumberMatrix[_this.rowBlank][_this.colBlank];
            _this.imageOfNumberMatrix[_this.rowBlank][_this.colBlank] = _this.imageOfNumberMatrix[_this.row][_this.col];
            _this.imageOfNumberMatrix[_this.row][_this.col] = _this.temp;
            //console.log(this.imageOfNumberMatrix);
            //console.log(this.row,this.col);
            _this.tempRow = _this.rowBlank;
            _this.tempCol = _this.colBlank;
            _this.rowBlank = _this.row;
            _this.colBlank = _this.col;
            _this.row = _this.tempRow;
            _this.col = _this.tempCol;
            for (var r = 0; r < 3; r++) {
                for (var c = 0; c < 3; c++) {
                    if (_this.imageOfNumberMatrix[r][c].name == _this.imageKeyMatrix[r][c].name) {
                        _this.countRight++;
                    }
                    else {
                        _this.countRight = 0;
                        break;
                    }
                }
            }
            if (_this.countRight == 9) {
                _this.win();
            }
            _this.isSorting = false;
        })
            .start();
        cc.audioEngine.playEffect(this.soft, false);
    };
    lv1controller.prototype.win = function () {
        cc.director.pause();
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.endGame);
        node.parent = scene.getChildByName('Canvas');
        cc.audioEngine.playEffect(this.winsound, false);
        if (this.mode == 2) {
            if (cc.sys.localStorage.getItem('timeLV1') == null) {
                cc.sys.localStorage.setItem('timeLV1', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV1');
            }
            if (this.time < cc.sys.localStorage.getItem('timeLV1')) {
                cc.sys.localStorage.setItem('timeLV1', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV1');
            }
        }
    };
    lv1controller.prototype.shuffleNumber = function () {
        for (var r = 2; r >= 0; r--) {
            for (var c = 2; c >= 0; c--) {
                var randomrow = Math.floor(Math.random() * 3);
                var randomcol = Math.floor(Math.random() * 3);
                this.tempShuff = this.imageOfNumberMatrix[r][c];
                this.imageOfNumberMatrix[r][c] = this.imageOfNumberMatrix[randomrow][randomcol];
                this.imageOfNumberMatrix[randomrow][randomcol] = this.tempShuff;
                // console.log('1: ' + r + ' ' + c)
                // console.log('2: ' + randomrow + ' ' + randomcol)
            }
        }
        this.checkShuffle();
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                this.imageOfNumberMatrix[r][c].position = this.checkPointMatrix[r][c].position;
                if (this.imageOfNumberMatrix[r][c].name == 'Blank') {
                    this.rowBlank = r;
                    this.colBlank = c;
                }
            }
        }
        cc.audioEngine.playEffect(this.shuffle, false);
    };
    lv1controller.prototype.checkShuffle = function () {
        var numberInverions = 0;
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (this.imageOfNumberMatrix[r][c].name == 'Blank') {
                    continue;
                }
                for (var d = c; d < 3; d++) {
                    if (this.imageOfNumberMatrix[r][d].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[r][d].name)) {
                        //console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[r][d].name)
                        numberInverions++;
                    }
                }
                for (var a = r + 1; a < 3; a++) {
                    for (var b = 0; b < 3; b++) {
                        if (this.imageOfNumberMatrix[a][b].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[a][b].name)) {
                            //console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[a][b].name)
                            numberInverions++;
                        }
                    }
                }
            }
        }
        console.log(numberInverions);
        if (numberInverions % 2 == 1) {
            //let temp : cc.Node = null;
            if (this.imageOfNumberMatrix[0][0].name != 'Blank' && this.imageOfNumberMatrix[0][1].name != 'Blank') {
                // console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name)
                this.temp = this.imageOfNumberMatrix[0][0];
                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                this.imageOfNumberMatrix[0][1] = this.temp;
                //console.log(this.imageOfNumberMatrix)
            }
            else {
                //console.log(this.imageOfNumberMatrix[2][2].name + ' ' + this.imageOfNumberMatrix[2][1].name)
                this.temp = this.imageOfNumberMatrix[2][2];
                this.imageOfNumberMatrix[2][2] = this.imageOfNumberMatrix[2][1];
                this.imageOfNumberMatrix[2][1] = this.temp;
                //console.log(this.imageOfNumberMatrix)              
            }
        }
    };
    lv1controller.prototype.countDown = function () {
        cc.director.resume();
        //this.modeChoise = true;
        this.timeBar.active = true;
        this.mode = 1;
        this.time = 60;
        this.lowTimeLabel.string = '';
        this.modeDisplay.destroy();
    };
    lv1controller.prototype.lowestTime = function () {
        cc.director.resume();
        //this.modeChoise = true;
        this.mode = 2;
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV1');
        this.modeDisplay.destroy();
    };
    lv1controller.prototype.counttime = function () {
        if (this.mode == 1) {
            this.time--;
            this.timeBar.getComponent(cc.ProgressBar).progress = this.timeBar.getComponent(cc.ProgressBar).progress - 1 / 60;
            if (this.time == 0) {
                cc.director.pause();
                var scene = cc.director.getScene();
                var node = cc.instantiate(this.loseGame);
                node.parent = scene.getChildByName('Canvas');
                cc.audioEngine.playEffect(this.losesound, false);
            }
        }
        else if (this.mode == 2) {
            this.time++;
        }
        this.timeLabel.string = 'Time: ' + this.time;
    };
    lv1controller.prototype.start = function () {
        cc.director.pause();
        this.shuffleNumber();
        this.schedule(this.counttime, 1);
    };
    lv1controller.prototype.update = function (dt) {
        if (this.startControl) {
            this.startControl = false;
            if (this.countStep == 1) {
                if (this.rowBlank != this.row && this.colBlank == this.col) {
                    if (Math.abs(this.rowBlank - this.row) == 1) {
                        this.SortImage();
                    }
                    this.countStep = 0;
                }
                else if (this.rowBlank == this.row && this.colBlank != this.col) {
                    if (Math.abs(this.colBlank - this.col) == 1) {
                        this.SortImage();
                    }
                    this.countStep = 0;
                }
                else if (this.rowBlank == this.row && this.colBlank == this.col || this.rowBlank != this.row && this.colBlank != this.col) {
                    this.countStep = 0;
                }
            }
        }
    };
    __decorate([
        property
    ], lv1controller.prototype, "row", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "col", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "countStep", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "rowBlank", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "colBlank", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "sizeRow", void 0);
    __decorate([
        property
    ], lv1controller.prototype, "sizeCol", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv1controller.prototype, "imageKeyList", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv1controller.prototype, "imageOfNumberList", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv1controller.prototype, "checkPointList", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], lv1controller.prototype, "endGame", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], lv1controller.prototype, "loseGame", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv1controller.prototype, "shuffle", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv1controller.prototype, "soft", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv1controller.prototype, "winsound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv1controller.prototype, "losesound", void 0);
    __decorate([
        property({ type: cc.Label })
    ], lv1controller.prototype, "timeLabel", void 0);
    __decorate([
        property({ type: cc.Label })
    ], lv1controller.prototype, "lowTimeLabel", void 0);
    __decorate([
        property({ type: cc.Node })
    ], lv1controller.prototype, "modeDisplay", void 0);
    __decorate([
        property({ type: cc.Node })
    ], lv1controller.prototype, "timeBar", void 0);
    lv1controller = __decorate([
        ccclass
    ], lv1controller);
    return lv1controller;
}(cc.Component));
exports.default = lv1controller;

cc._RF.pop();