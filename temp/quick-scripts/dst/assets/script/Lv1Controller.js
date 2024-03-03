
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Lv1Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMdjFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNlZDO1FBMVZHLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUdkLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFZLEdBQWEsS0FBSyxDQUFDO1FBRy9CLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRTlCLHVCQUFpQixHQUFlLEVBQUUsQ0FBQztRQUVuQyxvQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUVoQyxvQkFBYyxHQUFpQixFQUFFLENBQUM7UUFDbEMseUJBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxzQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBRXBDLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUVqQyxhQUFPLEdBQWUsSUFBSSxD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QVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7dURBQ0c7SUFJL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDO3NEQUNFO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztrREFDSDtJQW5FUCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNlZqQztJQUFELG9CQUFDO0NBN1ZELEFBNlZDLENBN1YwQyxFQUFFLENBQUMsU0FBUyxHQTZWdEQ7a0JBN1ZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IGdhbWVNbmcgZnJvbSBcIi4vR2FtZU1uZ1wiO1xyXG5pbXBvcnQgaW1hZ2Vjb250cm9sbGVyIGZyb20gXCIuL0ltYWdlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsdjFjb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJvdyA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNvbCA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGNvdW50U3RlcCA9IDA7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcm93QmxhbmsgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb2xCbGFuayA9IDA7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2l6ZVJvdyA9IDA7IFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzaXplQ29sID0gMDsgXHJcblxyXG4gICAgY291bnRQb2ludCA9IDA7XHJcbiAgICBjb3VudEltYWdlS2V5ID0gMDtcclxuICAgIFxyXG4gICAgc3RhcnRDb250cm9sIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoe3R5cGUgOiBbY2MuTm9kZV19KVxyXG4gICAgaW1hZ2VLZXlMaXN0IDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkgKHt0eXBlIDpbY2MuTm9kZV19KVxyXG4gICAgaW1hZ2VPZk51bWJlckxpc3QgOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSAoe3R5cGUgOiBbY2MuTm9kZV19KVxyXG4gICAgY2hlY2tQb2ludExpc3QgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBpbWFnZUtleU1hdHJpeCA6IGNjLk5vZGVbXVtdID0gW107XHJcbiAgICBpbWFnZU9mTnVtYmVyTWF0cml4IDogY2MuTm9kZVtdW10gPSBbXTtcclxuICAgIGNoZWNrUG9pbnRNYXRyaXggOiBjYy5Ob2RlW11bXSA9IFtdO1xyXG5cclxuICAgIHRlbXAgOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHRlbXBSb3cgPSAwO1xyXG4gICAgdGVtcENvbCA9IDA7XHJcbiAgICBjb3VudFJpZ2h0ID0gMDtcclxuICAgIHRlbXBTaHVmZiA6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZSA6IGltYWdlY29udHJvbGxlcn0pXHJcbiAgICAvLyBnYW1lIDogaW1hZ2Vjb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuUHJlZmFifSlcclxuICAgIGVuZEdhbWUgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5QcmVmYWJ9KVxyXG4gICAgbG9zZUdhbWUgOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZSA6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBzaHVmZmxlIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZSA6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBzb2Z0IDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZSA6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICB3aW5zb3VuZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgbG9zZXNvdW5kIDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5MYWJlbH0pXHJcbiAgICB0aW1lTGFiZWwgOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5MYWJlbH0pXHJcbiAgICBsb3dUaW1lTGFiZWwgOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICB0aW1lID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGV9KVxyXG4gICAgbW9kZURpc3BsYXkgOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgbW9kZSA9IDA7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5Ob2RlfSlcclxuICAgIHRpbWVCYXIgOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuXHJcbiAgICAvLyBAcHJvcGVydHkoe3R5cGUgOiBtb3ZlY29udHJvbGxlcn0pXHJcbiAgICAvLyBnYW1lIDogbW92ZWNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgLy90aGlzLmltYWdlS2V5TWF0cml4ID0gY2MuTm9kZVt0aGlzLnNpemVSb3ddW3RoaXMuc2l6ZUNvbF07XHJcbiAgICAgICAgLy90aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXggPSBjYy5Ob2RlW3RoaXMuc2l6ZVJvd11bdGhpcy5zaXplQ29sXTtcclxuICAgICAgICAvL3RoaXMuY2hlY2tQb2ludE1hdHJpeCA9IGNjLk5vZGVbdGhpcy5zaXplUm93XVt0aGlzLnNpemVDb2xdO1xyXG5cclxuICAgICAgICB0aGlzLkNoZWNrUG9pbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5JbWFnZUtleU1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLkltYWdlT2ZOdW1iZXIoKVxyXG5cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcignSW1hZ2UvZWFzeScsIChlcnIsIHRleHR1cmVzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0dXJlcyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgciA9IDA7IHI8MzsgcisrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYyA9IDA7IGM8MzsgYysrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgMjA7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lID09IHRleHR1cmVzW2ldLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGV4dHVyZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmxvd1RpbWVMYWJlbC5zdHJpbmcgPSAnTG93ZXN0IFRpbWU6ICcgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVMVjEnKSBcclxuICAgIH1cclxuXHJcbiAgICBDaGVja1BvaW50TWFuYWdlcigpe1xyXG4gICAgICAgIGZvcihsZXQgciA9IDA7IHIgPCB0aGlzLnNpemVSb3c7IHIrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycjEgPVtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgYyA9IDA7IGMgPCB0aGlzLnNpemVDb2w7IGMrKyl7XHJcbiAgICAgICAgICAgICAgICBhcnIxLnB1c2godGhpcy5jaGVja1BvaW50TGlzdFt0aGlzLmNvdW50UG9pbnRdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRQb2ludCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQb2ludE1hdHJpeC5wdXNoKGFycjEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEltYWdlS2V5TWFuYWdlcigpe1xyXG4gICAgICAgIGZvcihsZXQgciA9IDA7IHIgPCB0aGlzLnNpemVSb3c7IHIrKyl7IFxyXG4gICAgICAgICAgICBjb25zdCBhcnIyPVtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgYyA9IDA7IGMgPCB0aGlzLnNpemVDb2w7IGMrKyl7IFxyXG4gICAgICAgICAgICAgICAgYXJyMi5wdXNoKHRoaXMuaW1hZ2VLZXlMaXN0W3RoaXMuY291bnRJbWFnZUtleV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudEltYWdlS2V5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbWFnZUtleU1hdHJpeC5wdXNoKGFycjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEltYWdlT2ZOdW1iZXIoKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4LnB1c2goW1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzBdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzJdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzVdLFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeC5wdXNoKFtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFs0XSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFs3XSxcclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgucHVzaChbXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbM10sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbNl0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbOF0sXHJcbiAgICAgICAgXSkgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNTb3J0aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBTb3J0SW1hZ2UoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucm93QmxhbmssIHRoaXMuY29sQmxhbmspO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzU29ydGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmlzU29ydGluZz10cnVlO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3ddW3RoaXMuY29sXSkudG8oMC4xLCB7cG9zaXRpb246IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd0JsYW5rXVt0aGlzLmNvbEJsYW5rXS5wb3NpdGlvbn0pLnN0YXJ0KClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3dCbGFua11bdGhpcy5jb2xCbGFua10pXHJcbiAgICAgICAgLnRvKDAuMSwge3Bvc2l0aW9uOiB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3ddW3RoaXMuY29sXS5wb3NpdGlvbn0pXHJcbiAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93QmxhbmtdW3RoaXMuY29sQmxhbmtdO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3dCbGFua11bdGhpcy5jb2xCbGFua10gPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3ddW3RoaXMuY29sXTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93XVsgdGhpcy5jb2xdID0gdGhpcy50ZW1wO1xyXG4gICAgXHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucm93LHRoaXMuY29sKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudGVtcFJvdyA9IHRoaXMucm93Qmxhbms7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcENvbCA9IHRoaXMuY29sQmxhbms7XHJcbiAgICAgICAgICAgIHRoaXMucm93QmxhbmsgPSB0aGlzLnJvdztcclxuICAgICAgICAgICAgdGhpcy5jb2xCbGFuayA9IHRoaXMuY29sO1xyXG4gICAgICAgICAgICB0aGlzLnJvdyA9IHRoaXMudGVtcFJvdztcclxuICAgICAgICAgICAgdGhpcy5jb2wgPSB0aGlzLnRlbXBDb2w7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IHIgPSAwOyByIDwgMzsgcisrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYyA9IDA7IGMgPCAzOyBjKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lID09IHRoaXMuaW1hZ2VLZXlNYXRyaXhbcl1bY10ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRSaWdodCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50UmlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY291bnRSaWdodCA9PSA5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNTb3J0aW5nPWZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc29mdCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBsZXQgbm9kZSA9ICBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZEdhbWUpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53aW5zb3VuZCwgZmFsc2UpO1xyXG5cclxuICAgICAgICBpZih0aGlzLm1vZGUgPT0gMil7XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMScpID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aW1lTFYxJywgdGhpcy50aW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJ0xvd2VzdCBUaW1lOiAnICsgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYxJylcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZSA8IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMScpKXtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGltZUxWMScsIHRoaXMudGltZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubG93VGltZUxhYmVsLnN0cmluZyA9ICdMb3dlc3QgVGltZTogJyArIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2h1ZmZsZU51bWJlcigpe1xyXG4gICAgICAgIGZvcihsZXQgciA9IDI7IHIgPj0gMDsgci0tKXtcclxuICAgICAgICAgICAgZm9yKGxldCBjID0gMjsgYyA+PSAwOyBjLS0pe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbXJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21jb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcFNodWZmID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JhbmRvbXJvd11bcmFuZG9tY29sXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyYW5kb21yb3ddW3JhbmRvbWNvbF0gPSB0aGlzLnRlbXBTaHVmZjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnMTogJyArIHIgKyAnICcgKyBjKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJzI6ICcgKyByYW5kb21yb3cgKyAnICcgKyByYW5kb21jb2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGVja1NodWZmbGUoKTtcclxuICAgICAgICBmb3IobGV0IHIgPSAwOyByPDM7IHIrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyA9MDsgYzwzOyBjKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLnBvc2l0aW9uID0gdGhpcy5jaGVja1BvaW50TWF0cml4W3JdW2NdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgPT0gJ0JsYW5rJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dCbGFuayA9IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xCbGFuayA9IGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNodWZmbGUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1NodWZmbGUoKXtcclxuICAgICAgICBsZXQgbnVtYmVySW52ZXJpb25zID0gMDtcclxuICAgICAgICBmb3IobGV0IHIgPSAwOyByIDwgMzsgcisrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBjID0gMDsgYyA8IDM7IGMrKyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSA9PSAnQmxhbmsnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkID0gYzsgZDwzOyBkKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bZF0ubmFtZSAhPSAnQmxhbmsnICYmIHBhcnNlSW50KHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lKSA+IHBhcnNlSW50KHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtkXS5uYW1lKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2RdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckludmVyaW9ucysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYSA9IHIgKzEgOyBhPDM7IGErKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBiID0gMDsgYjwzO2IrKyl7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W2FdW2JdLm5hbWUgIT0gJ0JsYW5rJyAmJiBwYXJzZUludCh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSkgPiBwYXJzZUludCh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbYV1bYl0ubmFtZSkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbYV1bYl0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckludmVyaW9ucysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG51bWJlckludmVyaW9ucylcclxuICAgICAgICBpZihudW1iZXJJbnZlcmlvbnMgJSAyID09IDEpe1xyXG4gICAgICAgICAgICAvL2xldCB0ZW1wIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXS5uYW1lICE9ICdCbGFuaycgJiYgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdLm5hbWUgIT0gJ0JsYW5rJyApe1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMF0ubmFtZSArICcgJyArIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzFdID0gdGhpcy50ZW1wO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7ICAgXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFsyXVsyXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzJdWzFdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXAgPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMl1bMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMl1bMl0gPSB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMl1bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMl1bMV0gPSB0aGlzLnRlbXA7IFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgpICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb3VudERvd24oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTsgXHJcbiAgICAgICAgLy90aGlzLm1vZGVDaG9pc2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZUJhci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IDE7XHJcbiAgICAgICAgdGhpcy50aW1lID0gNjA7XHJcbiAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdGhpcy5tb2RlRGlzcGxheS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG93ZXN0VGltZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIC8vdGhpcy5tb2RlQ2hvaXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vZGUgPSAyO1xyXG4gICAgICAgIHRoaXMubG93VGltZUxhYmVsLnN0cmluZyA9ICdMb3dlc3QgVGltZTogJysgY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYxJyk7XHJcbiAgICAgICAgdGhpcy5tb2RlRGlzcGxheS5kZXN0cm95KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY291bnR0aW1lKCl7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUtLTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQmFyLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgPSB0aGlzLnRpbWVCYXIuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyAtIDEvNjA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSAgY2MuaW5zdGFudGlhdGUodGhpcy5sb3NlR2FtZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHNjZW5lLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sb3Nlc291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubW9kZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gJ1RpbWU6ICcgKyB0aGlzLnRpbWU7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnNodWZmbGVOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnR0aW1lLDEpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhcnRDb250cm9sKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb3VudFN0ZXAgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJvd0JsYW5rICE9IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgPT0gdGhpcy5jb2wpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKCB0aGlzLnJvd0JsYW5rIC0gdGhpcy5yb3cpID09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU29ydEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRTdGVwID0gMDtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMucm93QmxhbmsgPT0gdGhpcy5yb3cgJiYgdGhpcy5jb2xCbGFuayAhPSB0aGlzLmNvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMoIHRoaXMuY29sQmxhbmsgLSB0aGlzLmNvbCkgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Tb3J0SW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFN0ZXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5yb3dCbGFuayA9PSB0aGlzLnJvdyAmJiB0aGlzLmNvbEJsYW5rID09IHRoaXMuY29sIHx8IHRoaXMucm93QmxhbmsgIT0gdGhpcy5yb3cgJiYgdGhpcy5jb2xCbGFuayAhPSB0aGlzLmNvbCl7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFN0ZXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==