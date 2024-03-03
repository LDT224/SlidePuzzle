"use strict";
cc._RF.push(module, '2e03dM2jplH+Kxt8H9H7QtO', 'AutoFixCanvas');
// script/AutoFixCanvas.ts

"use strict";
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
var AutoFixCanvas = /** @class */ (function (_super) {
    __extends(AutoFixCanvas, _super);
    function AutoFixCanvas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        _this.currentScreenW = 0;
        _this.currentScreenH = 0;
        return _this;
    }
    AutoFixCanvas.prototype.start = function () {
        this.mainCanvas = this.node.getComponent(cc.Canvas);
        this.currentScreenW = cc.winSize.width;
        this.currentScreenH = cc.winSize.height;
        this.updateCanvasSize();
    };
    AutoFixCanvas.prototype.update = function (dt) {
        if (this.currentScreenW != cc.winSize.width || this.currentScreenH != cc.winSize.height) {
            this.currentScreenW = cc.winSize.width;
            this.currentScreenH = cc.winSize.height;
            this.updateCanvasSize();
        }
    };
    AutoFixCanvas.prototype.updateCanvasSize = function () {
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
    };
    AutoFixCanvas = __decorate([
        ccclass
    ], AutoFixCanvas);
    return AutoFixCanvas;
}(cc.Component));
exports.default = AutoFixCanvas;

cc._RF.pop();