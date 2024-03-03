
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/AutoFixCanvas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxBdXRvRml4Q2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBK0NDO1FBM0NHLHdCQUF3QjtRQUV4QixlQUFlO1FBQ1Asb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsb0JBQWMsR0FBRyxDQUFDLENBQUM7O0lBdUMvQixDQUFDO0lBckNHLDZCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDckYsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBRXhDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7UUFFMUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFckQsSUFBSSxTQUFTLElBQUksUUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDcEM7YUFDSTtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQTlDZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQStDakM7SUFBRCxvQkFBQztDQS9DRCxBQStDQyxDQS9DMEMsRUFBRSxDQUFDLFNBQVMsR0ErQ3REO2tCQS9Db0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvRml4Q2FudmFzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIG1haW5DYW52YXM6IGNjLkNhbnZhcztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHByaXZhdGUgY3VycmVudFNjcmVlblcgPSAwO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2NyZWVuSCA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjcmVlblcgPSBjYy53aW5TaXplLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjcmVlbkggPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2NyZWVuVyAhPSBjYy53aW5TaXplLndpZHRoIHx8IHRoaXMuY3VycmVudFNjcmVlbkggIT0gY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuVyA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjcmVlbkggPSBjYy53aW5TaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW52YXNTaXplKCkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IDEyODAgLyA3MjA7XHJcblxyXG4gICAgICAgIHZhciBuZXdTY3JlZW4gPSBjYy53aW5TaXplLndpZHRoIC8gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChuZXdTY3JlZW4gPj0gb3JpZ2luYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGggPSBjYy53aW5TaXplLmhlaWdodDtcclxuICAgICAgICB2YXIgdyA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgaWYgKHcgPCBoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5DYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=