"use strict";
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