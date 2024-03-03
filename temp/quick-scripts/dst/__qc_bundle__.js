
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/AutoFixCanvas');
require('./assets/script/GameMng');
require('./assets/script/ImageController');
require('./assets/script/Lv1Controller');
require('./assets/script/Lv2Controller');
require('./assets/script/Lv3Controller');
require('./assets/script/MenuMng');
require('./assets/script/MoveController');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5d1b9tXXRHC6m+1uftge1B', 'GameMng');
// script/GameMng.ts

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
var gameMng = /** @class */ (function (_super) {
    __extends(gameMng, _super);
    function gameMng() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    gameMng.prototype.onLoad = function () {
    };
    gameMng.prototype.scene1 = function () {
        cc.director.loadScene('lv1');
        cc.director.resume();
    };
    gameMng.prototype.scene2 = function () {
        cc.director.loadScene('lv2');
        cc.director.resume();
    };
    gameMng.prototype.scene3 = function () {
        cc.director.loadScene('lv3');
        cc.director.resume();
    };
    gameMng.prototype.menuScene = function () {
        cc.director.loadScene('Menu');
        cc.director.resume();
    };
    gameMng.prototype.start = function () {
    };
    gameMng = __decorate([
        ccclass
    ], gameMng);
    return gameMng;
}(cc.Component));
exports.default = gameMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lTW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQStCQSxDQUFDO0lBOUJHLHdCQUF3QjtJQUV4Qix3QkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUdELHdCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCx1QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQTNCZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQStCM0I7SUFBRCxjQUFDO0NBL0JELEFBK0JDLENBL0JvQyxFQUFFLENBQUMsU0FBUyxHQStCaEQ7a0JBL0JvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IG1vdmVjb250cm9sbGVyIGZyb20gXCIuL01vdmVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVNbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2NlbmUxKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsdjEnKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzY2VuZTIoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2x2MicpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjZW5lMygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbHYzJyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudVNjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNZW51Jyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MenuMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bf8e+skH9EhYGpla6WqI8X', 'MenuMng');
// script/MenuMng.ts

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
var gameMng = /** @class */ (function (_super) {
    __extends(gameMng, _super);
    function gameMng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gamesound = null;
        _this.sound = true;
        return _this;
        //update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    gameMng.prototype.onLoad = function () {
        this.playMusic();
    };
    gameMng.prototype.scene1 = function () {
        cc.director.loadScene('lv1');
        cc.director.resume();
    };
    gameMng.prototype.scene2 = function () {
        cc.director.loadScene('lv2');
        cc.director.resume();
    };
    gameMng.prototype.scene3 = function () {
        cc.director.loadScene('lv3');
        cc.director.resume();
    };
    gameMng.prototype.playMusic = function () {
        cc.audioEngine.stopAll();
        if (this.sound == true) {
            this.sound = false;
            cc.audioEngine.playEffect(this.gamesound, false);
            console.log(this.sound);
        }
        else {
            cc.audioEngine.playEffect(this.gamesound, true);
        }
    };
    gameMng.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], gameMng.prototype, "gamesound", void 0);
    gameMng = __decorate([
        ccclass
    ], gameMng);
    return gameMng;
}(cc.Component));
exports.default = gameMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNZW51TW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMkNDO1FBeENHLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBQ2hDLFdBQUssR0FBRyxJQUFJLENBQUM7O1FBc0NiLGdCQUFnQjtJQUNwQixDQUFDO0lBdENHLHdCQUF3QjtJQUV4Qix3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QixJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1lBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDMUI7YUFBSTtZQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUE7U0FDakQ7SUFFTCxDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUNBLENBQUM7SUFwQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzhDQUNBO0lBSGYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTJDM0I7SUFBRCxjQUFDO0NBM0NELEFBMkNDLENBM0NvQyxFQUFFLENBQUMsU0FBUyxHQTJDaEQ7a0JBM0NvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IG1vdmVjb250cm9sbGVyIGZyb20gXCIuL01vdmVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVNbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZSA6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBnYW1lc291bmQgOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgc291bmQgPSB0cnVlO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBsYXlNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjZW5lMSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbHYxJyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NlbmUyKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsdjInKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzY2VuZTMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2x2MycpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlNdXNpYygpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKVxyXG4gICAgICAgIGlmKHRoaXMuc291bmQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ2FtZXNvdW5kLCBmYWxzZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zb3VuZClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdhbWVzb3VuZCx0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ImageController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45587Vo4eRP1aXdwJ7Dbp8k', 'ImageController');
// script/ImageController.ts

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
var imagecontroller = /** @class */ (function (_super) {
    __extends(imagecontroller, _super);
    function imagecontroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.startMove = false;
        return _this;
    }
    // @property({type: gamecontroller})
    // game: gamecontroller = null;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    imagecontroller.prototype.start = function () {
    };
    imagecontroller.prototype.update = function (dt) {
        if (this.startMove) {
            this.startMove = false;
            cc.tween(this.node).to(0.2, { x: this.target.position.x, y: this.target.position.y });
        }
    };
    __decorate([
        property({ type: cc.Node })
    ], imagecontroller.prototype, "target", void 0);
    __decorate([
        property
    ], imagecontroller.prototype, "startMove", void 0);
    imagecontroller = __decorate([
        ccclass
    ], imagecontroller);
    return imagecontroller;
}(cc.Component));
exports.default = imagecontroller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxJbWFnZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUF5QkM7UUF0QkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQUcsS0FBSyxDQUFDOztJQW1CdEIsQ0FBQztJQWpCRyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBRS9CLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsK0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3RGO0lBQ0wsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7bURBQ0g7SUFHeEI7UUFEQyxRQUFRO3NEQUNTO0lBTkQsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXlCbkM7SUFBRCxzQkFBQztDQXpCRCxBQXlCQyxDQXpCNEMsRUFBRSxDQUFDLFNBQVMsR0F5QnhEO2tCQXpCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBnYW1lY29udHJvbGxlciBmcm9tIFwiLi9MdjFDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGltYWdlY29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogY2MuTm9kZX0pXHJcbiAgICB0YXJnZXQgOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHN0YXJ0TW92ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogZ2FtZWNvbnRyb2xsZXJ9KVxyXG4gICAgLy8gZ2FtZTogZ2FtZWNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhcnRNb3ZlKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIse3g6IHRoaXMudGFyZ2V0LnBvc2l0aW9uLngsIHk6IHRoaXMudGFyZ2V0LnBvc2l0aW9uLnl9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MoveController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNb3ZlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpREFBNEM7QUFFNUMsaURBQTRDO0FBQzVDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXdEQztRQXJERyxTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBR1IsU0FBRyxHQUFHLENBQUMsQ0FBQztRQUdSLFNBQUcsR0FBbUIsSUFBSSxDQUFDO1FBRzNCLFNBQUcsR0FBbUIsSUFBSSxDQUFDO1FBRzNCLFNBQUcsR0FBbUIsSUFBSSxDQUFDOztRQXdDM0IsZ0JBQWdCO0lBQ3BCLENBQUM7SUF2Q0csd0JBQXdCO0lBRXhCLGNBQWM7SUFDZCxJQUFJO0lBRUosOEJBQUssR0FBTDtRQUFBLGlCQTJCQztRQTFCRyxJQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUMsVUFBQyxDQUFDO2dCQUM1Qiw0REFBNEQ7Z0JBQzVELEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFHLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO2FBQUssSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDLFVBQUMsQ0FBQztnQkFDNUIsNERBQTREO2dCQUM1RCxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBRyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjthQUFJO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDLFVBQUMsQ0FBQztnQkFDNUIsNERBQTREO2dCQUM1RCxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBRyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUVMLENBQUM7SUFFRCxxQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQWxERDtRQURDLFFBQVE7K0NBQ0Q7SUFHUjtRQURDLFFBQVE7K0NBQ0Q7SUFHUjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRyx1QkFBYSxFQUFDLENBQUM7K0NBQ047SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUcsdUJBQWEsRUFBQyxDQUFDOytDQUNOO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFHLHVCQUFhLEVBQUMsQ0FBQzsrQ0FDTjtJQWZWLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F3RGxDO0lBQUQscUJBQUM7Q0F4REQsQUF3REMsQ0F4RDJDLEVBQUUsQ0FBQyxTQUFTLEdBd0R2RDtrQkF4RG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgbHYxY29udHJvbGxlciBmcm9tIFwiLi9MdjFDb250cm9sbGVyXCI7XHJcbmltcG9ydCBnYW1lY29udHJvbGxlciBmcm9tIFwiLi9MdjFDb250cm9sbGVyXCI7XHJcbmltcG9ydCBsdjJjb250cm9sbGVyIGZyb20gXCIuL0x2MkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IGx2M2NvbnRyb2xsZXIgZnJvbSBcIi4vTHYzQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtb3ZlY29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3cgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgY29sID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGUgOiBsdjFjb250cm9sbGVyfSlcclxuICAgIGx2MSA6IGx2MWNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZSA6IGx2MmNvbnRyb2xsZXJ9KVxyXG4gICAgbHYyIDogbHYyY29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlIDogbHYzY29udHJvbGxlcn0pXHJcbiAgICBsdjMgOiBsdjNjb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgPT0gJ2x2MScpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLChlKSA9PntcclxuICAgICAgICAgICAgLy9jYy5sb2coJ1JvdyA6ICcgKyB0aGlzLnJvdyArICcgLyAnICsgJ0NvbDogJyArIHRoaXMuY29sICk7XHJcbiAgICAgICAgICAgIHRoaXMubHYxLmNvdW50U3RlcCArPTE7XHJcbiAgICAgICAgICAgIHRoaXMubHYxLnJvdyA9IHRoaXMucm93O1xyXG4gICAgICAgICAgICB0aGlzLmx2MS5jb2wgPSB0aGlzLmNvbDtcclxuICAgICAgICAgICAgdGhpcy5sdjEuc3RhcnRDb250cm9sID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdsdjInKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywoZSkgPT57XHJcbiAgICAgICAgICAgIC8vY2MubG9nKCdSb3cgOiAnICsgdGhpcy5yb3cgKyAnIC8gJyArICdDb2w6ICcgKyB0aGlzLmNvbCApO1xyXG4gICAgICAgICAgICB0aGlzLmx2Mi5jb3VudFN0ZXAgKz0xO1xyXG4gICAgICAgICAgICB0aGlzLmx2Mi5yb3cgPSB0aGlzLnJvdztcclxuICAgICAgICAgICAgdGhpcy5sdjIuY29sID0gdGhpcy5jb2w7XHJcbiAgICAgICAgICAgIHRoaXMubHYyLnN0YXJ0Q29udHJvbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLChlKSA9PntcclxuICAgICAgICAgICAgLy9jYy5sb2coJ1JvdyA6ICcgKyB0aGlzLnJvdyArICcgLyAnICsgJ0NvbDogJyArIHRoaXMuY29sICk7XHJcbiAgICAgICAgICAgIHRoaXMubHYzLmNvdW50U3RlcCArPTE7XHJcbiAgICAgICAgICAgIHRoaXMubHYzLnJvdyA9IHRoaXMucm93O1xyXG4gICAgICAgICAgICB0aGlzLmx2My5jb2wgPSB0aGlzLmNvbDtcclxuICAgICAgICAgICAgdGhpcy5sdjMuc3RhcnRDb250cm9sID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hCZWdhbigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
