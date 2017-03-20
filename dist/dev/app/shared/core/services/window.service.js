"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WindowService);
exports.WindowService = WindowService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0NBQTJDO0FBTTNDLElBQWEsYUFBYTtJQUQxQjtRQUdTLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBSFEsNkJBQUssR0FBWixVQUFhLEdBQVcsSUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLCtCQUFPLEdBQWQsVUFBZSxHQUFXLElBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUvQyxvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksYUFBYTtJQUR6QixpQkFBVSxFQUFFOztHQUNBLGFBQWEsQ0FPekI7QUFQWSxzQ0FBYSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvc2VydmljZXMvd2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgSVdpbmRvdyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaXdpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIGltcGxlbWVudHMgSVdpbmRvdyB7XG4gIFxuICBwdWJsaWMgbmF2aWdhdG9yOiBhbnkgPSB7fTtcbiAgcHVibGljIGxvY2F0aW9uOiBhbnkgPSB7fTtcbiAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogdm9pZCB7IHJldHVybjsgfVxuICBwdWJsaWMgY29uZmlybShtc2c6IHN0cmluZyk6IHZvaWQgeyByZXR1cm47IH1cblxufVxuIl19
