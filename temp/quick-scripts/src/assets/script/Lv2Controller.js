"use strict";
cc._RF.push(module, '7cbc2h/rHxF3pYwrr7jHWO5', 'Lv2Controller');
// script/Lv2Controller.ts

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
var lv2controller = /** @class */ (function (_super) {
    __extends(lv2controller, _super);
    function lv2controller() {
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
        _this.mode = true;
        _this.timeBar = null;
        _this.isSorting = false;
        return _this;
    }
    // @property({type : movecontroller})
    // game : movecontroller = null;
    // LIFE-CYCLE CALLBACKS:
    lv2controller.prototype.onLoad = function () {
        //this.imageKeyMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.imageOfNumberMatrix = cc.Node[this.sizeRow][this.sizeCol];
        //this.checkPointMatrix = cc.Node[this.sizeRow][this.sizeCol];
        var _this = this;
        this.CheckPointManager();
        this.ImageKeyManager();
        this.ImageOfNumber();
        cc.resources.loadDir('Image/normal', function (err, textures) {
            console.log(textures);
            for (var r = 0; r < 4; r++) {
                for (var c = 0; c < 4; c++) {
                    for (var i = 1; i < 32; i++) {
                        if (_this.imageOfNumberMatrix[r][c].name == textures[i].name) {
                            _this.imageOfNumberMatrix[r][c].getComponent(cc.Sprite).spriteFrame = textures[i];
                        }
                    }
                }
            }
        });
        //cc.director.pause();
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2');
    };
    lv2controller.prototype.CheckPointManager = function () {
        for (var r = 0; r < this.sizeRow; r++) {
            var arr1 = [];
            for (var c = 0; c < this.sizeCol; c++) {
                arr1.push(this.checkPointList[this.countPoint]);
                this.countPoint++;
            }
            this.checkPointMatrix.push(arr1);
        }
    };
    lv2controller.prototype.ImageKeyManager = function () {
        for (var r = 0; r < this.sizeRow; r++) {
            var arr2 = [];
            for (var c = 0; c < this.sizeCol; c++) {
                arr2.push(this.imageKeyList[this.countImageKey]);
                this.countImageKey++;
            }
            this.imageKeyMatrix.push(arr2);
        }
    };
    lv2controller.prototype.ImageOfNumber = function () {
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[0],
            this.imageOfNumberList[1],
            this.imageOfNumberList[2],
            this.imageOfNumberList[3],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[4],
            this.imageOfNumberList[5],
            this.imageOfNumberList[6],
            this.imageOfNumberList[7],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[8],
            this.imageOfNumberList[9],
            this.imageOfNumberList[10],
            this.imageOfNumberList[11],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[12],
            this.imageOfNumberList[13],
            this.imageOfNumberList[14],
            this.imageOfNumberList[15],
        ]);
    };
    lv2controller.prototype.SortImage = function () {
        var _this = this;
        //console.log(this.rowBlank, this.colBlank);
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
            for (var r = 0; r < 4; r++) {
                for (var c = 0; c < 4; c++) {
                    if (_this.imageOfNumberMatrix[r][c].name == _this.imageKeyMatrix[r][c].name) {
                        _this.countRight++;
                    }
                    else {
                        _this.countRight = 0;
                        break;
                    }
                }
            }
            if (_this.countRight == 16) {
                _this.win();
            }
            _this.isSorting = false;
        })
            .start();
        cc.audioEngine.playEffect(this.soft, false);
    };
    lv2controller.prototype.win = function () {
        cc.director.pause();
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.endGame);
        node.parent = scene.getChildByName('Canvas');
        cc.audioEngine.playEffect(this.winsound, false);
        if (this.mode == false) {
            if (cc.sys.localStorage.getItem('timeLV2') == null) {
                cc.sys.localStorage.setItem('timeLV2', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2');
            }
            if (this.time < cc.sys.localStorage.getItem('timeLV2')) {
                cc.sys.localStorage.setItem('timeLV2', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2');
            }
        }
    };
    lv2controller.prototype.shuffleNumber = function () {
        for (var r = 3; r >= 0; r--) {
            for (var c = 3; c >= 0; c--) {
                var randomrow = Math.floor(Math.random() * 4);
                var randomcol = Math.floor(Math.random() * 4);
                this.tempShuff = this.imageOfNumberMatrix[r][c];
                this.imageOfNumberMatrix[r][c] = this.imageOfNumberMatrix[randomrow][randomcol];
                this.imageOfNumberMatrix[randomrow][randomcol] = this.tempShuff;
                // console.log('1: ' + r + ' ' + c)
                // console.log('2: ' + randomrow + ' ' + randomcol)
            }
        }
        this.checkShuffle();
        for (var r = 0; r < 4; r++) {
            for (var c = 0; c < 4; c++) {
                this.imageOfNumberMatrix[r][c].position = this.checkPointMatrix[r][c].position;
                if (this.imageOfNumberMatrix[r][c].name == 'Blank') {
                    this.rowBlank = r;
                    this.colBlank = c;
                }
            }
        }
        cc.audioEngine.playEffect(this.shuffle, false);
    };
    lv2controller.prototype.checkShuffle = function () {
        var numberInverions = 0;
        for (var r = 0; r < 4; r++) {
            for (var c = 0; c < 4; c++) {
                if (this.imageOfNumberMatrix[r][c].name == 'Blank') {
                    continue;
                }
                for (var d = c; d < 4; d++) {
                    if (this.imageOfNumberMatrix[r][d].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[r][d].name)) {
                        console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[r][d].name);
                        numberInverions++;
                    }
                }
                for (var a = r + 1; a < 4; a++) {
                    for (var b = 0; b < 4; b++) {
                        if (this.imageOfNumberMatrix[a][b].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[a][b].name)) {
                            console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[a][b].name);
                            numberInverions++;
                        }
                    }
                }
            }
        }
        console.log(numberInverions);
        if (numberInverions % 2 == 1) {
            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    if (this.imageOfNumberMatrix[x][y].name == 'Blank') {
                        if ((x) % 2 == 1) {
                            if (this.imageOfNumberMatrix[0][0].name != 'Blank' && this.imageOfNumberMatrix[0][1].name != 'Blank') {
                                //console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name)
                                this.temp = this.imageOfNumberMatrix[0][0];
                                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                                this.imageOfNumberMatrix[0][1] = this.temp;
                                //console.log(this.imageOfNumberMatrix)
                            }
                            else {
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
        }
        else {
            for (var x = 0; x < 4; x++) {
                for (var y = 0; y < 4; y++) {
                    if (this.imageOfNumberMatrix[x][y].name == 'Blank') {
                        if ((x) % 2 == 0) {
                            if (this.imageOfNumberMatrix[0][0].name != 'Blank' && this.imageOfNumberMatrix[0][1].name != 'Blank') {
                                console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name);
                                this.temp = this.imageOfNumberMatrix[0][0];
                                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                                this.imageOfNumberMatrix[0][1] = this.temp;
                                console.log(this.imageOfNumberMatrix);
                            }
                            else {
                                console.log(this.imageOfNumberMatrix[3][3].name + ' ' + this.imageOfNumberMatrix[3][2].name);
                                this.temp = this.imageOfNumberMatrix[3][3];
                                this.imageOfNumberMatrix[3][3] = this.imageOfNumberMatrix[3][2];
                                this.imageOfNumberMatrix[3][2] = this.temp;
                                console.log(this.imageOfNumberMatrix);
                            }
                        }
                    }
                }
            }
        }
    };
    lv2controller.prototype.countDown = function (target) {
        cc.director.resume();
        this.timeBar.active = true;
        this.mode = true;
        this.time = 90;
        this.lowTimeLabel.string = '';
        this.modeDisplay.destroy();
    };
    lv2controller.prototype.lowestTime = function () {
        cc.director.resume();
        this.mode = false;
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV2');
        this.modeDisplay.destroy();
    };
    lv2controller.prototype.counttime = function () {
        if (this.mode == true) {
            this.time--;
            this.timeBar.getComponent(cc.ProgressBar).progress = this.timeBar.getComponent(cc.ProgressBar).progress - 1 / 90;
            if (this.time == 0) {
                cc.director.pause();
                var scene = cc.director.getScene();
                var node = cc.instantiate(this.loseGame);
                node.parent = scene.getChildByName('Canvas');
                cc.audioEngine.playEffect(this.losesound, false);
            }
        }
        else {
            this.time++;
        }
        this.timeLabel.string = 'Time: ' + this.time;
    };
    lv2controller.prototype.start = function () {
        cc.director.pause();
        this.schedule(this.counttime, 1);
        this.shuffleNumber();
    };
    lv2controller.prototype.update = function (dt) {
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
    ], lv2controller.prototype, "row", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "col", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "countStep", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "rowBlank", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "colBlank", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "sizeRow", void 0);
    __decorate([
        property
    ], lv2controller.prototype, "sizeCol", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv2controller.prototype, "imageKeyList", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv2controller.prototype, "imageOfNumberList", void 0);
    __decorate([
        property({ type: [cc.Node] })
    ], lv2controller.prototype, "checkPointList", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], lv2controller.prototype, "endGame", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], lv2controller.prototype, "loseGame", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv2controller.prototype, "shuffle", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv2controller.prototype, "soft", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv2controller.prototype, "winsound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], lv2controller.prototype, "losesound", void 0);
    __decorate([
        property({ type: cc.Label })
    ], lv2controller.prototype, "timeLabel", void 0);
    __decorate([
        property({ type: cc.Label })
    ], lv2controller.prototype, "lowTimeLabel", void 0);
    __decorate([
        property({ type: cc.Node })
    ], lv2controller.prototype, "modeDisplay", void 0);
    __decorate([
        property({ type: cc.Node })
    ], lv2controller.prototype, "timeBar", void 0);
    lv2controller = __decorate([
        ccclass
    ], lv2controller);
    return lv2controller;
}(cc.Component));
exports.default = lv2controller;

cc._RF.pop();