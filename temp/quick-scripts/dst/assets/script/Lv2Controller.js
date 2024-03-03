
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Lv2Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMdjJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBOFhDO1FBM1hHLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUdkLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFZLEdBQWEsS0FBSyxDQUFDO1FBRy9CLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRTlCLHVCQUFpQixHQUFlLEVBQUUsQ0FBQztRQUVuQyxvQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixFQUFFLENBQUM7UUFDbEMseUJBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxzQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBRXBDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUVqQyxhQUFPLEdBQWUsSUFBSSxD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LEVBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQzt5REFDRTtJQWVoQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7a0RBQ0Q7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDO21EQUNBO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztrREFDRjtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0w7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO21EQUNEO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztvREFDQTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7b0RBQ0E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO3VEQUNHO0lBSS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztzREFDRTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7a0RBQ0g7SUFuRVAsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQThYakM7SUFBRCxvQkFBQztDQTlYRCxBQThYQyxDQTlYMEMsRUFBRSxDQUFDLFNBQVMsR0E4WHREO2tCQTlYb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnYW1lTW5nIGZyb20gXCIuL0dhbWVNbmdcIjtcclxuaW1wb3J0IGltYWdlY29udHJvbGxlciBmcm9tIFwiLi9JbWFnZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbHYyY29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3cgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb2wgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb3VudFN0ZXAgPSAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvd0JsYW5rID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY29sQmxhbmsgPSAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNpemVSb3cgPSAwOyBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2l6ZUNvbCA9IDA7IFxyXG5cclxuICAgIGNvdW50UG9pbnQgPSAwO1xyXG4gICAgY291bnRJbWFnZUtleSA9IDA7XHJcbiAgICBcclxuICAgIHN0YXJ0Q29udHJvbCA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkgKHt0eXBlIDogW2NjLk5vZGVdfSlcclxuICAgIGltYWdlS2V5TGlzdCA6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5ICh7dHlwZSA6W2NjLk5vZGVdfSlcclxuICAgIGltYWdlT2ZOdW1iZXJMaXN0IDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkgKHt0eXBlIDogW2NjLk5vZGVdfSlcclxuICAgIGNoZWNrUG9pbnRMaXN0IDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgaW1hZ2VLZXlNYXRyaXggOiBjYy5Ob2RlW11bXSA9IFtdO1xyXG4gICAgaW1hZ2VPZk51bWJlck1hdHJpeCA6IGNjLk5vZGVbXVtdID0gW107XHJcbiAgICBjaGVja1BvaW50TWF0cml4IDogY2MuTm9kZVtdW10gPSBbXTtcclxuXHJcbiAgICB0ZW1wIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB0ZW1wUm93ID0gMDtcclxuICAgIHRlbXBDb2wgPSAwO1xyXG4gICAgY291bnRSaWdodCA9IDA7XHJcbiAgICB0ZW1wU2h1ZmYgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoe3R5cGUgOiBpbWFnZWNvbnRyb2xsZXJ9KVxyXG4gICAgLy8gZ2FtZSA6IGltYWdlY29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLlByZWZhYn0pXHJcbiAgICBlbmRHYW1lIDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuUHJlZmFifSlcclxuICAgIGxvc2VHYW1lIDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc2h1ZmZsZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc29mdCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luc291bmQgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuQXVkaW9DbGlwfSlcclxuICAgIGxvc2Vzb3VuZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTGFiZWx9KVxyXG4gICAgdGltZUxhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTGFiZWx9KVxyXG4gICAgbG93VGltZUxhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgdGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcclxuICAgIG1vZGVEaXNwbGF5IDogY2MuTm9kZSA9IG51bGxcclxuICAgIG1vZGUgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTm9kZX0pXHJcbiAgICB0aW1lQmFyIDogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZSA6IG1vdmVjb250cm9sbGVyfSlcclxuICAgIC8vIGdhbWUgOiBtb3ZlY29udHJvbGxlciA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgeyBcclxuICAgICAgICAvL3RoaXMuaW1hZ2VLZXlNYXRyaXggPSBjYy5Ob2RlW3RoaXMuc2l6ZVJvd11bdGhpcy5zaXplQ29sXTtcclxuICAgICAgICAvL3RoaXMuaW1hZ2VPZk51bWJlck1hdHJpeCA9IGNjLk5vZGVbdGhpcy5zaXplUm93XVt0aGlzLnNpemVDb2xdO1xyXG4gICAgICAgIC8vdGhpcy5jaGVja1BvaW50TWF0cml4ID0gY2MuTm9kZVt0aGlzLnNpemVSb3ddW3RoaXMuc2l6ZUNvbF07XHJcblxyXG4gICAgICAgIHRoaXMuQ2hlY2tQb2ludE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLkltYWdlS2V5TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuSW1hZ2VPZk51bWJlcigpXHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKCdJbWFnZS9ub3JtYWwnLCAoZXJyLCB0ZXh0dXJlcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dHVyZXMpO1xyXG4gICAgICAgICAgICBmb3IobGV0IHIgPSAwOyByPDQ7IHIrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSAwOyBjPDQ7IGMrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IDMyOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSA9PSB0ZXh0dXJlc1tpXS5uYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRleHR1cmVzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJ0xvd2VzdCBUaW1lOiAnICsgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYyJykgXHJcbiAgICB9XHJcblxyXG4gICAgQ2hlY2tQb2ludE1hbmFnZXIoKXtcclxuICAgICAgICBmb3IobGV0IHIgPSAwOyByIDwgdGhpcy5zaXplUm93OyByKyspe1xyXG4gICAgICAgICAgICBjb25zdCBhcnIxID1bXVxyXG4gICAgICAgICAgICBmb3IobGV0IGMgPSAwOyBjIDwgdGhpcy5zaXplQ29sOyBjKyspe1xyXG4gICAgICAgICAgICAgICAgYXJyMS5wdXNoKHRoaXMuY2hlY2tQb2ludExpc3RbdGhpcy5jb3VudFBvaW50XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50UG9pbnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrUG9pbnRNYXRyaXgucHVzaChhcnIxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBJbWFnZUtleU1hbmFnZXIoKXtcclxuICAgICAgICBmb3IobGV0IHIgPSAwOyByIDwgdGhpcy5zaXplUm93OyByKyspeyBcclxuICAgICAgICAgICAgY29uc3QgYXJyMj1bXVxyXG4gICAgICAgICAgICBmb3IobGV0IGMgPSAwOyBjIDwgdGhpcy5zaXplQ29sOyBjKyspeyBcclxuICAgICAgICAgICAgICAgIGFycjIucHVzaCh0aGlzLmltYWdlS2V5TGlzdFt0aGlzLmNvdW50SW1hZ2VLZXldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRJbWFnZUtleSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VLZXlNYXRyaXgucHVzaChhcnIyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBJbWFnZU9mTnVtYmVyKCl7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeC5wdXNoKFtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFswXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsyXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFszXSxcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgucHVzaChbXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbNF0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbNV0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbNl0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbN10sXHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4LnB1c2goW1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzhdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzldLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzEwXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxMV0sXHJcbiAgICAgICAgXSkgIFxyXG5cclxuICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgucHVzaChbXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMTJdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzEzXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxNF0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMTVdLFxyXG4gICAgICAgIF0pICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTb3J0aW5nOiBib29sZWFuPWZhbHNlO1xyXG4gICAgU29ydEltYWdlKCl7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5yb3dCbGFuaywgdGhpcy5jb2xCbGFuayk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTb3J0aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaXNTb3J0aW5nPXRydWU7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd11bdGhpcy5jb2xdKS50bygwLjEsIHtwb3NpdGlvbjogdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93QmxhbmtdW3RoaXMuY29sQmxhbmtdLnBvc2l0aW9ufSkuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd0JsYW5rXVt0aGlzLmNvbEJsYW5rXSlcclxuICAgICAgICAudG8oMC4xLCB7cG9zaXRpb246IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd11bdGhpcy5jb2xdLnBvc2l0aW9ufSlcclxuICAgICAgICAuY2FsbCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3dCbGFua11bdGhpcy5jb2xCbGFua107XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd0JsYW5rXVt0aGlzLmNvbEJsYW5rXSA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd11bdGhpcy5jb2xdO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3ddWyB0aGlzLmNvbF0gPSB0aGlzLnRlbXA7XHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5yb3csdGhpcy5jb2wpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50ZW1wUm93ID0gdGhpcy5yb3dCbGFuaztcclxuICAgICAgICAgICAgdGhpcy50ZW1wQ29sID0gdGhpcy5jb2xCbGFuaztcclxuICAgICAgICAgICAgdGhpcy5yb3dCbGFuayA9IHRoaXMucm93O1xyXG4gICAgICAgICAgICB0aGlzLmNvbEJsYW5rID0gdGhpcy5jb2w7XHJcbiAgICAgICAgICAgIHRoaXMucm93ID0gdGhpcy50ZW1wUm93O1xyXG4gICAgICAgICAgICB0aGlzLmNvbCA9IHRoaXMudGVtcENvbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgciA9IDA7IHIgPCA0OyByKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjID0gMDsgYyA8IDQ7IGMrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgPT0gdGhpcy5pbWFnZUtleU1hdHJpeFtyXVtjXS5uYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFJpZ2h0Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRSaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jb3VudFJpZ2h0ID09IDE2KXtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuaXNTb3J0aW5nPWZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb2Z0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGxldCBub2RlID0gIGNjLmluc3RhbnRpYXRlKHRoaXMuZW5kR2FtZSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndpbnNvdW5kLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubW9kZSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMicpID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lTFYyJywgdGhpcy50aW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJ0xvd2VzdCBUaW1lOiAnICsgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYyJylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50aW1lIDwgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYyJykpe1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lTFYyJywgdGhpcy50aW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJ0xvd2VzdCBUaW1lOiAnICsgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaHVmZmxlTnVtYmVyKCl7XHJcbiAgICAgICAgZm9yKGxldCByID0gMzsgciA+PSAwOyByLS0pe1xyXG4gICAgICAgICAgICBmb3IobGV0IGMgPSAzOyBjID49IDA7IGMtLSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbWNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wU2h1ZmYgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10gPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcmFuZG9tcm93XVtyYW5kb21jb2xdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JhbmRvbXJvd11bcmFuZG9tY29sXSA9IHRoaXMudGVtcFNodWZmO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcxOiAnICsgciArICcgJyArIGMpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnMjogJyArIHJhbmRvbXJvdyArICcgJyArIHJhbmRvbWNvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNoZWNrU2h1ZmZsZSgpO1xyXG4gICAgICAgIGZvcihsZXQgciA9IDA7IHI8NDsgcisrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBjID0wOyBjPDQ7IGMrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ucG9zaXRpb24gPSB0aGlzLmNoZWNrUG9pbnRNYXRyaXhbcl1bY10ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSA9PSAnQmxhbmsnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd0JsYW5rID0gcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbEJsYW5rID0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2h1ZmZsZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrU2h1ZmZsZSgpe1xyXG4gICAgICAgIGxldCBudW1iZXJJbnZlcmlvbnMgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgciA9IDA7IHIgPCA0OyByKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGMgPSAwOyBjIDwgNDsgYysrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lID09ICdCbGFuaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGQgPSBjOyBkPDQ7IGQrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtkXS5uYW1lICE9ICdCbGFuaycgJiYgcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUpID4gcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2RdLm5hbWUpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2RdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckludmVyaW9ucysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGEgPSByKzE7IGE8NDsgYSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGIgPSAwOyBiPDQ7YisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFthXVtiXS5uYW1lICE9ICdCbGFuaycgJiYgcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUpID4gcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W2FdW2JdLm5hbWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W2FdW2JdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJJbnZlcmlvbnMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXJJbnZlcmlvbnMpXHJcbiAgICAgICAgaWYobnVtYmVySW52ZXJpb25zICUgMiA9PSAxKXtcclxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeDw0OyB4Kyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB5ID0wOyB5PDQ7IHkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3hdW3ldLm5hbWUgPT0gJ0JsYW5rJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCh4KSAlIDIgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXS5uYW1lICE9ICdCbGFuaycgJiYgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdLm5hbWUgIT0gJ0JsYW5rJyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMV0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXSA9IHRoaXMudGVtcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzNdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbM11bMl0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbM11bM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzNdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFszXVsyXSA9IHRoaXMudGVtcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgpICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4PDQ7IHgrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHkgPTA7IHk8NDsgeSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbeF1beV0ubmFtZSA9PSAnQmxhbmsnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKHgpICUgMiA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXS5uYW1lICE9ICdCbGFuaycgJiYgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdLm5hbWUgIT0gJ0JsYW5rJyApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXSA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMV0gPSB0aGlzLnRlbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzNdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbM11bMl0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbM11bM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzNdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzNdWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFszXVsyXSA9IHRoaXMudGVtcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4KSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY291bnREb3duKHRhcmdldCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7IFxyXG4gICAgICAgIHRoaXMudGltZUJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aW1lID0gOTA7XHJcbiAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdGhpcy5tb2RlRGlzcGxheS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG93ZXN0VGltZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG93VGltZUxhYmVsLnN0cmluZyA9ICdMb3dlc3QgVGltZTogJysgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYyJyk7XHJcbiAgICAgICAgdGhpcy5tb2RlRGlzcGxheS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnR0aW1lKCl7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQmFyLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSB0aGlzLnRpbWVCYXIuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyAtIDEvOTA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSAgY2MuaW5zdGFudGlhdGUodGhpcy5sb3NlR2FtZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHNjZW5lLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sb3Nlc291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9ICdUaW1lOiAnICsgdGhpcy50aW1lO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50dGltZSwxKVxyXG4gICAgICAgIHRoaXMuc2h1ZmZsZU51bWJlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXJ0Q29udHJvbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb250cm9sID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY291bnRTdGVwID09IDEpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yb3dCbGFuayAhPSB0aGlzLnJvdyAmJiB0aGlzLmNvbEJsYW5rID09IHRoaXMuY29sKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihNYXRoLmFicyggdGhpcy5yb3dCbGFuayAtIHRoaXMucm93KSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNvcnRJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnJvd0JsYW5rID09IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgIT0gdGhpcy5jb2wpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKCB0aGlzLmNvbEJsYW5rIC0gdGhpcy5jb2wpID09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU29ydEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTdGVwID0gMDtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMucm93QmxhbmsgPT0gdGhpcy5yb3cgJiYgdGhpcy5jb2xCbGFuayA9PSB0aGlzLmNvbCB8fCB0aGlzLnJvd0JsYW5rICE9IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgIT0gdGhpcy5jb2wpeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTdGVwID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=