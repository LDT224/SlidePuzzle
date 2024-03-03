"use strict";
cc._RF.push(module, '38246mXfaNGroCsay9Z4avq', 'MoveController');
// script/MoveController.ts

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
var Lv1Controller_1 = require("./Lv1Controller");
var Lv2Controller_1 = require("./Lv2Controller");
var Lv3Controller_1 = require("./Lv3Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var movecontroller = /** @class */ (function (_super) {
    __extends(movecontroller, _super);
    function movecontroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.row = 0;
        _this.col = 0;
        _this.lv1 = null;
        _this.lv2 = null;
        _this.lv3 = null;
        return _this;
        //update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {
    // }
    movecontroller.prototype.start = function () {
        var _this = this;
        if (cc.director.getScene().name == 'lv1') {
            this.node.on('touchstart', function (e) {
                //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
                _this.lv1.countStep += 1;
                _this.lv1.row = _this.row;
                _this.lv1.col = _this.col;
                _this.lv1.startControl = true;
            }, this);
        }
        else if (cc.director.getScene().name == 'lv2') {
            this.node.on('touchstart', function (e) {
                //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
                _this.lv2.countStep += 1;
                _this.lv2.row = _this.row;
                _this.lv2.col = _this.col;
                _this.lv2.startControl = true;
            }, this);
        }
        else {
            this.node.on('touchstart', function (e) {
                //cc.log('Row : ' + this.row + ' / ' + 'Col: ' + this.col );
                _this.lv3.countStep += 1;
                _this.lv3.row = _this.row;
                _this.lv3.col = _this.col;
                _this.lv3.startControl = true;
            }, this);
        }
    };
    movecontroller.prototype.onTouchBegan = function () {
    };
    __decorate([
        property
    ], movecontroller.prototype, "row", void 0);
    __decorate([
        property
    ], movecontroller.prototype, "col", void 0);
    __decorate([
        property({ type: Lv1Controller_1.default })
    ], movecontroller.prototype, "lv1", void 0);
    __decorate([
        property({ type: Lv2Controller_1.default })
    ], movecontroller.prototype, "lv2", void 0);
    __decorate([
        property({ type: Lv3Controller_1.default })
    ], movecontroller.prototype, "lv3", void 0);
    movecontroller = __decorate([
        ccclass
    ], movecontroller);
    return movecontroller;
}(cc.Component));
exports.default = movecontroller;

cc._RF.pop();