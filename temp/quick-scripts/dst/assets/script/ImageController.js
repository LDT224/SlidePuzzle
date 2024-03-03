
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