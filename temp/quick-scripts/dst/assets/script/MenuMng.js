
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