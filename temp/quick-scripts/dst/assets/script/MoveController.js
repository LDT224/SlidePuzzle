
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