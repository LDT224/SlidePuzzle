
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Lv3Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '342a54eQ2NH9JQszSoD07km', 'Lv3Controller');
// script/Lv3Controller.ts

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
        _this.rowBlank = 0;
        _this.colBlank = 0;
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
        cc.resources.loadDir('Image/hard', function (err, textures) {
            console.log(textures);
            for (var r = 0; r < 5; r++) {
                for (var c = 0; c < 5; c++) {
                    for (var i = 1; i < 50; i++) {
                        if (_this.imageOfNumberMatrix[r][c].name == textures[i].name) {
                            _this.imageOfNumberMatrix[r][c].getComponent(cc.Sprite).spriteFrame = textures[i];
                        }
                    }
                }
            }
        });
        //cc.director.pause();
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV3');
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
            this.imageOfNumberList[4],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[5],
            this.imageOfNumberList[6],
            this.imageOfNumberList[7],
            this.imageOfNumberList[8],
            this.imageOfNumberList[9],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[10],
            this.imageOfNumberList[11],
            this.imageOfNumberList[12],
            this.imageOfNumberList[13],
            this.imageOfNumberList[14],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[15],
            this.imageOfNumberList[16],
            this.imageOfNumberList[17],
            this.imageOfNumberList[18],
            this.imageOfNumberList[19],
        ]);
        this.imageOfNumberMatrix.push([
            this.imageOfNumberList[20],
            this.imageOfNumberList[21],
            this.imageOfNumberList[22],
            this.imageOfNumberList[23],
            this.imageOfNumberList[24],
        ]);
    };
    lv2controller.prototype.SortImage = function () {
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
            for (var r = 0; r < 5; r++) {
                for (var c = 0; c < 5; c++) {
                    if (_this.imageOfNumberMatrix[r][c].name == _this.imageKeyMatrix[r][c].name) {
                        _this.countRight++;
                    }
                    else {
                        _this.countRight = 0;
                        break;
                    }
                }
            }
            if (_this.countRight == 25) {
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
            if (cc.sys.localStorage.getItem('timeLV3') == null) {
                cc.sys.localStorage.setItem('timeLV3', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV3');
            }
            if (this.time < cc.sys.localStorage.getItem('timeLV3')) {
                cc.sys.localStorage.setItem('timeLV3', this.time);
                this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV3');
            }
        }
    };
    lv2controller.prototype.shuffleNumber = function () {
        for (var r = 4; r >= 0; r--) {
            for (var c = 4; c >= 0; c--) {
                var randomrow = Math.floor(Math.random() * 5);
                var randomcol = Math.floor(Math.random() * 5);
                this.tempShuff = this.imageOfNumberMatrix[r][c];
                this.imageOfNumberMatrix[r][c] = this.imageOfNumberMatrix[randomrow][randomcol];
                this.imageOfNumberMatrix[randomrow][randomcol] = this.tempShuff;
                // console.log('1: ' + r + ' ' + c)
                // console.log('2: ' + randomrow + ' ' + randomcol)
            }
        }
        this.checkShuffle();
        for (var r = 0; r < 5; r++) {
            for (var c = 0; c < 5; c++) {
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
        for (var r = 0; r < 5; r++) {
            for (var c = 0; c < 5; c++) {
                if (this.imageOfNumberMatrix[r][c].name == 'Blank') {
                    continue;
                }
                for (var d = c; d < 5; d++) {
                    if (this.imageOfNumberMatrix[r][d].name != 'Blank' && parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[r][d].name)) {
                        console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[r][d].name);
                        numberInverions++;
                    }
                }
                for (var a = r + 1; a < 5; a++) {
                    for (var b = 0; b < 5; b++) {
                        if (parseInt(this.imageOfNumberMatrix[r][c].name) > parseInt(this.imageOfNumberMatrix[a][b].name) && this.imageOfNumberMatrix[a][b].name != 'Blank') {
                            console.log(this.imageOfNumberMatrix[r][c].name + ' ' + this.imageOfNumberMatrix[a][b].name);
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
                //console.log(this.imageOfNumberMatrix[0][0].name + ' ' + this.imageOfNumberMatrix[0][1].name)
                this.temp = this.imageOfNumberMatrix[0][0];
                this.imageOfNumberMatrix[0][0] = this.imageOfNumberMatrix[0][1];
                this.imageOfNumberMatrix[0][1] = this.temp;
                //console.log(this.imageOfNumberMatrix)
            }
            else {
                //console.log(this.imageOfNumberMatrix[4][4].name + ' ' + this.imageOfNumberMatrix[4][3].name)
                this.temp = this.imageOfNumberMatrix[4][4];
                this.imageOfNumberMatrix[4][4] = this.imageOfNumberMatrix[4][3];
                this.imageOfNumberMatrix[4][3] = this.temp;
                //console.log(this.imageOfNumberMatrix)              
            }
        }
    };
    lv2controller.prototype.countDown = function () {
        this.timeBar.active = true;
        this.mode = true;
        this.time = 180;
        this.lowTimeLabel.string = '';
        cc.director.resume();
        this.modeDisplay.destroy();
    };
    lv2controller.prototype.lowestTime = function () {
        this.mode = false;
        this.lowTimeLabel.string = 'Lowest Time: ' + cc.sys.localStorage.getItem('timeLV3');
        cc.director.resume();
        this.modeDisplay.destroy();
    };
    lv2controller.prototype.counttime = function () {
        if (this.mode == true) {
            this.time--;
            this.timeBar.getComponent(cc.ProgressBar).progress = this.timeBar.getComponent(cc.ProgressBar).progress - 1 / 180;
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
        this.shuffleNumber();
        this.schedule(this.counttime, 1);
    };
    lv2controller.prototype.update = function (dt) {
        if (this.startControl) {
            this.startControl = false;
            if (this.countStep == 1) {
                console.log(this.rowBlank + ' - ' + this.row + ' = ' + (this.rowBlank - this.row));
                console.log(this.colBlank + ' - ' + this.col + ' = ' + (this.colBlank - this.col));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMdjNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBOFdDO1FBM1dHLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUdkLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixrQkFBWSxHQUFhLEtBQUssQ0FBQztRQUcvQixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUU5Qix1QkFBaUIsR0FBZSxFQUFFLENBQUM7UUFFbkMsb0JBQWMsR0FBZSxFQUFFLENBQUM7UUFFaEMsb0JBQWMsR0FBaUIsRUFBRSxDQUFDO1FBQ2xDLHlCQUFtQixHQUFpQixFQUFFLENBQUM7UUFDdkMsc0JBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUVwQyxVQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUVqQyxhQUFPLEdBQWUsSUFBSSxD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MUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1NBQzdCLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFHRCxpQ0FBUyxHQUFUO1FBQ0ksNENBQTRDO1FBRGhELGlCQThDQztRQTNDRyxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUUzQixJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQztRQUVwQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENB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QyxTQUFTLEVBQUMsQ0FBQztrREFDRjtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0w7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO21EQUNEO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztvREFDQTtJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7b0RBQ0E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO3VEQUNHO0lBSS9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztzREFDRTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7a0RBQ0g7SUFqRVAsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQThXakM7SUFBRCxvQkFBQztDQTlXRCxBQThXQyxDQTlXMEMsRUFBRSxDQUFDLFNBQVMsR0E4V3REO2tCQTlXb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnYW1lTW5nIGZyb20gXCIuL0dhbWVNbmdcIjtcclxuaW1wb3J0IGltYWdlY29udHJvbGxlciBmcm9tIFwiLi9JbWFnZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbHYyY29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3cgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb2wgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBjb3VudFN0ZXAgPSAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNpemVSb3cgPSAwOyBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc2l6ZUNvbCA9IDA7IFxyXG5cclxuICAgIGNvdW50UG9pbnQgPSAwO1xyXG4gICAgY291bnRJbWFnZUtleSA9IDA7XHJcbiAgICBcclxuICAgIHN0YXJ0Q29udHJvbCA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkgKHt0eXBlIDogW2NjLk5vZGVdfSlcclxuICAgIGltYWdlS2V5TGlzdCA6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5ICh7dHlwZSA6W2NjLk5vZGVdfSlcclxuICAgIGltYWdlT2ZOdW1iZXJMaXN0IDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkgKHt0eXBlIDogW2NjLk5vZGVdfSlcclxuICAgIGNoZWNrUG9pbnRMaXN0IDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgaW1hZ2VLZXlNYXRyaXggOiBjYy5Ob2RlW11bXSA9IFtdO1xyXG4gICAgaW1hZ2VPZk51bWJlck1hdHJpeCA6IGNjLk5vZGVbXVtdID0gW107XHJcbiAgICBjaGVja1BvaW50TWF0cml4IDogY2MuTm9kZVtdW10gPSBbXTtcclxuXHJcbiAgICB0ZW1wIDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB0ZW1wUm93ID0gMDtcclxuICAgIHRlbXBDb2wgPSAwO1xyXG4gICAgY291bnRSaWdodCA9IDA7XHJcbiAgICByb3dCbGFuayA9IDA7XHJcbiAgICBjb2xCbGFuayA9IDA7XHJcbiAgICB0ZW1wU2h1ZmYgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoe3R5cGUgOiBpbWFnZWNvbnRyb2xsZXJ9KVxyXG4gICAgLy8gZ2FtZSA6IGltYWdlY29udHJvbGxlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLlByZWZhYn0pXHJcbiAgICBlbmRHYW1lIDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuUHJlZmFifSlcclxuICAgIGxvc2VHYW1lIDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc2h1ZmZsZSA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgc29mdCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luc291bmQgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuQXVkaW9DbGlwfSlcclxuICAgIGxvc2Vzb3VuZCA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTGFiZWx9KVxyXG4gICAgdGltZUxhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTGFiZWx9KVxyXG4gICAgbG93VGltZUxhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgdGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcclxuICAgIG1vZGVEaXNwbGF5IDogY2MuTm9kZSA9IG51bGxcclxuICAgIG1vZGUgPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTm9kZX0pXHJcbiAgICB0aW1lQmFyIDogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZSA6IG1vdmVjb250cm9sbGVyfSlcclxuICAgIC8vIGdhbWUgOiBtb3ZlY29udHJvbGxlciA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkgeyBcclxuICAgICAgICAvL3RoaXMuaW1hZ2VLZXlNYXRyaXggPSBjYy5Ob2RlW3RoaXMuc2l6ZVJvd11bdGhpcy5zaXplQ29sXTtcclxuICAgICAgICAvL3RoaXMuaW1hZ2VPZk51bWJlck1hdHJpeCA9IGNjLk5vZGVbdGhpcy5zaXplUm93XVt0aGlzLnNpemVDb2xdO1xyXG4gICAgICAgIC8vdGhpcy5jaGVja1BvaW50TWF0cml4ID0gY2MuTm9kZVt0aGlzLnNpemVSb3ddW3RoaXMuc2l6ZUNvbF07XHJcblxyXG4gICAgICAgIHRoaXMuQ2hlY2tQb2ludE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLkltYWdlS2V5TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuSW1hZ2VPZk51bWJlcigpXHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKCdJbWFnZS9oYXJkJywgKGVyciwgdGV4dHVyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHR1cmVzKTtcclxuICAgICAgICAgICAgZm9yKGxldCByID0gMDsgcjw1OyByKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjID0gMDsgYzw1OyBjKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCA1MDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgPT0gdGV4dHVyZXNbaV0ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0ZXh0dXJlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMubG93VGltZUxhYmVsLnN0cmluZyA9ICdMb3dlc3QgVGltZTogJyArIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMycpIFxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrUG9pbnRNYW5hZ2VyKCl7XHJcbiAgICAgICAgZm9yKGxldCByID0gMDsgciA8IHRoaXMuc2l6ZVJvdzsgcisrKXtcclxuICAgICAgICAgICAgY29uc3QgYXJyMSA9W11cclxuICAgICAgICAgICAgZm9yKGxldCBjID0gMDsgYyA8IHRoaXMuc2l6ZUNvbDsgYysrKXtcclxuICAgICAgICAgICAgICAgIGFycjEucHVzaCh0aGlzLmNoZWNrUG9pbnRMaXN0W3RoaXMuY291bnRQb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFBvaW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGVja1BvaW50TWF0cml4LnB1c2goYXJyMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgSW1hZ2VLZXlNYW5hZ2VyKCl7XHJcbiAgICAgICAgZm9yKGxldCByID0gMDsgciA8IHRoaXMuc2l6ZVJvdzsgcisrKXsgXHJcbiAgICAgICAgICAgIGNvbnN0IGFycjI9W11cclxuICAgICAgICAgICAgZm9yKGxldCBjID0gMDsgYyA8IHRoaXMuc2l6ZUNvbDsgYysrKXsgXHJcbiAgICAgICAgICAgICAgICBhcnIyLnB1c2godGhpcy5pbWFnZUtleUxpc3RbdGhpcy5jb3VudEltYWdlS2V5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50SW1hZ2VLZXkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmltYWdlS2V5TWF0cml4LnB1c2goYXJyMilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgSW1hZ2VPZk51bWJlcigpe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgucHVzaChbXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMF0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMV0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMl0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbM10sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbNF0sXHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4LnB1c2goW1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzVdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzZdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzddLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzhdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzldLFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeC5wdXNoKFtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxMF0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMTFdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzEyXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxM10sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMTRdLFxyXG4gICAgICAgIF0pICBcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4LnB1c2goW1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzE1XSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxNl0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMTddLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzE4XSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsxOV0sXHJcbiAgICAgICAgXSkgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4LnB1c2goW1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzIwXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsyMV0sXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlckxpc3RbMjJdLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJMaXN0WzIzXSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTGlzdFsyNF0sXHJcbiAgICAgICAgXSkgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgaXNTb3J0aW5nOiBib29sZWFuPWZhbHNlO1xyXG4gICAgU29ydEltYWdlKCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJvd0JsYW5rLCB0aGlzLmNvbEJsYW5rKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1NvcnRpbmc9dHJ1ZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93XVt0aGlzLmNvbF0pLnRvKDAuMSwge3Bvc2l0aW9uOiB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbdGhpcy5yb3dCbGFua11bdGhpcy5jb2xCbGFua10ucG9zaXRpb259KS5zdGFydCgpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93QmxhbmtdW3RoaXMuY29sQmxhbmtdKVxyXG4gICAgICAgIC50bygwLjEsIHtwb3NpdGlvbjogdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93XVt0aGlzLmNvbF0ucG9zaXRpb259KVxyXG4gICAgICAgIC5jYWxsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMudGVtcCA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd0JsYW5rXVt0aGlzLmNvbEJsYW5rXTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93QmxhbmtdW3RoaXMuY29sQmxhbmtdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3RoaXMucm93XVt0aGlzLmNvbF07XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFt0aGlzLnJvd11bIHRoaXMuY29sXSA9IHRoaXMudGVtcDtcclxuICAgIFxyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnJvdyx0aGlzLmNvbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRlbXBSb3cgPSB0aGlzLnJvd0JsYW5rO1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBDb2wgPSB0aGlzLmNvbEJsYW5rO1xyXG4gICAgICAgICAgICB0aGlzLnJvd0JsYW5rID0gdGhpcy5yb3c7XHJcbiAgICAgICAgICAgIHRoaXMuY29sQmxhbmsgPSB0aGlzLmNvbDtcclxuICAgICAgICAgICAgdGhpcy5yb3cgPSB0aGlzLnRlbXBSb3c7XHJcbiAgICAgICAgICAgIHRoaXMuY29sID0gdGhpcy50ZW1wQ29sO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCByID0gMDsgciA8IDU7IHIrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGMgPSAwOyBjIDwgNTsgYysrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSA9PSB0aGlzLmltYWdlS2V5TWF0cml4W3JdW2NdLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50UmlnaHQrKztcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFJpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNvdW50UmlnaHQgPT0gMjUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5pc1NvcnRpbmc9ZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNvZnQsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW4oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSAgY2MuaW5zdGFudGlhdGUodGhpcy5lbmRHYW1lKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHNjZW5lLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud2luc291bmQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb2RlID09IGZhbHNlKXtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lTFYzJykgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWVMVjMnLCB0aGlzLnRpbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd1RpbWVMYWJlbC5zdHJpbmcgPSAnTG93ZXN0IFRpbWU6ICcgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVMVjMnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWUgPCBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVMVjMnKSl7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpbWVMVjMnLCB0aGlzLnRpbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvd1RpbWVMYWJlbC5zdHJpbmcgPSAnTG93ZXN0IFRpbWU6ICcgKyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVMVjMnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNodWZmbGVOdW1iZXIoKXtcclxuICAgICAgICBmb3IobGV0IHIgPSA0OyByID49IDA7IHItLSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyA9IDQ7IGMgPj0gMDsgYy0tKXtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21yb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBTaHVmZiA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXSA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyYW5kb21yb3ddW3JhbmRvbWNvbF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcmFuZG9tcm93XVtyYW5kb21jb2xdID0gdGhpcy50ZW1wU2h1ZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJzE6ICcgKyByICsgJyAnICsgYylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcyOiAnICsgcmFuZG9tcm93ICsgJyAnICsgcmFuZG9tY29sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2hlY2tTaHVmZmxlKCk7XHJcbiAgICAgICAgZm9yKGxldCByID0gMDsgcjw1OyByKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGMgPTA7IGM8NTsgYysrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5wb3NpdGlvbiA9IHRoaXMuY2hlY2tQb2ludE1hdHJpeFtyXVtjXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lID09ICdCbGFuaycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93QmxhbmsgPSByO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sQmxhbmsgPSBjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaHVmZmxlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tTaHVmZmxlKCl7XHJcbiAgICAgICAgbGV0IG51bWJlckludmVyaW9ucyA9IDA7XHJcbiAgICAgICAgZm9yKGxldCByID0gMDsgciA8IDU7IHIrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYyA9IDA7IGMgPCA1OyBjKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgPT0gJ0JsYW5rJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZCA9IGM7IGQ8NTsgZCsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiggdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2RdLm5hbWUgIT0gJ0JsYW5rJyAmJiBwYXJzZUludCh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bY10ubmFtZSkgPiBwYXJzZUludCh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bZF0ubmFtZSkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbcl1bZF0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVySW52ZXJpb25zKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgYSA9IHIrMTsgYTw1OyBhKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgYiA9IDA7IGI8NTtiKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W3JdW2NdLm5hbWUpID4gcGFyc2VJbnQodGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W2FdW2JdLm5hbWUpICYmIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFthXVtiXS5uYW1lICE9ICdCbGFuaycgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFtyXVtjXS5uYW1lICsgJyAnICsgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4W2FdW2JdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJJbnZlcmlvbnMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXJJbnZlcmlvbnMpXHJcbiAgICAgICAgaWYobnVtYmVySW52ZXJpb25zICUgMiA9PSAxKXtcclxuICAgICAgICAgICAgLy9sZXQgdGVtcCA6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZih0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMF0ubmFtZSAhPSAnQmxhbmsnICYmIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXS5uYW1lICE9ICdCbGFuaycgKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzBdWzBdLm5hbWUgKyAnICcgKyB0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbMF1bMV0ubmFtZSlcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcCA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVswXSA9IHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFswXVsxXSA9IHRoaXMudGVtcDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNleyAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmltYWdlT2ZOdW1iZXJNYXRyaXhbNF1bNF0ubmFtZSArICcgJyArIHRoaXMuaW1hZ2VPZk51bWJlck1hdHJpeFs0XVszXS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzRdWzRdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzRdWzRdID0gdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzRdWzNdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4WzRdWzNdID0gdGhpcy50ZW1wOyBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5pbWFnZU9mTnVtYmVyTWF0cml4KSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY291bnREb3duKCl7XHJcbiAgICAgICAgdGhpcy50aW1lQmFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpbWUgPSAxODA7XHJcbiAgICAgICAgdGhpcy5sb3dUaW1lTGFiZWwuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7IFxyXG4gICAgICAgIHRoaXMubW9kZURpc3BsYXkuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvd2VzdFRpbWUoKXtcclxuICAgICAgICB0aGlzLm1vZGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvd1RpbWVMYWJlbC5zdHJpbmcgPSAnTG93ZXN0IFRpbWU6ICcrIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGltZUxWMycpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMubW9kZURpc3BsYXkuZGVzdHJveSgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50dGltZSgpe1xyXG4gICAgICAgIGlmKHRoaXMubW9kZSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lLS07XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJhci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdGhpcy50aW1lQmFyLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgLSAxLzE4MDtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lID09IDApe1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9ICBjYy5pbnN0YW50aWF0ZSh0aGlzLmxvc2VHYW1lKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2Vzb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gJ1RpbWU6ICcgKyB0aGlzLnRpbWU7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnNodWZmbGVOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnR0aW1lLDEpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhcnRDb250cm9sKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb3VudFN0ZXAgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvd0JsYW5rICsgJyAtICcgKyB0aGlzLnJvdyArICcgPSAnICsgKHRoaXMucm93QmxhbmsgLSB0aGlzLnJvdykpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbEJsYW5rICsgJyAtICcgKyB0aGlzLmNvbCArICcgPSAnICsgKHRoaXMuY29sQmxhbmsgLSB0aGlzLmNvbCkpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJvd0JsYW5rICE9IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgPT0gdGhpcy5jb2wpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKCB0aGlzLnJvd0JsYW5rIC0gdGhpcy5yb3cpID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNvcnRJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnJvd0JsYW5rID09IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgIT0gdGhpcy5jb2wpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKCB0aGlzLmNvbEJsYW5rIC0gdGhpcy5jb2wpID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNvcnRJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnJvd0JsYW5rID09IHRoaXMucm93ICYmIHRoaXMuY29sQmxhbmsgPT0gdGhpcy5jb2wgfHwgdGhpcy5yb3dCbGFuayAhPSB0aGlzLnJvdyAmJiB0aGlzLmNvbEJsYW5rICE9IHRoaXMuY29sKXsgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19