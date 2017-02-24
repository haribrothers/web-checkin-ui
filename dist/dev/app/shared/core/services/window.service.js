"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var WindowService = (function () {
    function WindowService() {
        this.navigator = {};
        this.location = {};
    }
    WindowService.prototype.alert = function (msg) { return; };
    WindowService.prototype.confirm = function (msg) { return; };
    return WindowService;
}());
WindowService = __decorate([
    core_1.Injectable()
], WindowService);
exports.WindowService = WindowService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0Esc0NBQTJDO0FBTTNDLElBQWEsYUFBYTtJQUQxQjtRQUdTLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBSFEsNkJBQUssR0FBWixVQUFhLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLCtCQUFPLEdBQWQsVUFBZSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUvQyxvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksYUFBYTtJQUR6QixpQkFBVSxFQUFFO0dBQ0EsYUFBYSxDQU96QjtBQVBZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IElXaW5kb3cgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2l3aW5kb3cnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSBpbXBsZW1lbnRzIElXaW5kb3cge1xyXG4gIFxyXG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHt9O1xyXG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XHJcbiAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxyXG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxyXG5cclxufVxyXG4iXX0=
