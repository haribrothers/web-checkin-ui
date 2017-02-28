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
var window_service_1 = require("../services/window.service");
var PlatformDirective = (function () {
    function PlatformDirective(el, renderer, win) {
        this.el = el;
        this.renderer = renderer;
        this.win = win;
        var platformClass = 'web';
        var agent = win.navigator.userAgent.toLowerCase();
        if (agent.indexOf('electron') > -1) {
            platformClass = 'desktop';
        }
        else if (agent.indexOf('nativescript') > -1) {
            platformClass = 'nativescript';
        }
        renderer.setElementClass(el.nativeElement, platformClass, true);
    }
    return PlatformDirective;
}());
PlatformDirective = __decorate([
    core_1.Directive({
        selector: '[platform]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, window_service_1.WindowService])
], PlatformDirective);
exports.PlatformDirective = PlatformDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9kaXJlY3RpdmVzL3BsYXRmb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0NBQWdFO0FBR2hFLDZEQUEyRDtBQUszRCxJQUFhLGlCQUFpQjtJQUU1QiwyQkFBb0IsRUFBYyxFQUFVLFFBQWtCLEVBQVUsR0FBa0I7UUFBdEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQ3hGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsYUFBYSxHQUFHLGNBQWMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLGlCQUFpQjtJQUg3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7S0FDdkIsQ0FBQztxQ0FHd0IsaUJBQVUsRUFBb0IsZUFBUSxFQUFlLDhCQUFhO0dBRi9FLGlCQUFpQixDQVk3QjtBQVpZLDhDQUFpQiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvZGlyZWN0aXZlcy9wbGF0Zm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3dpbmRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BsYXRmb3JtXSdcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSkge1xuICAgIGxldCBwbGF0Zm9ybUNsYXNzID0gJ3dlYic7XG4gICAgbGV0IGFnZW50ID0gd2luLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoYWdlbnQuaW5kZXhPZignZWxlY3Ryb24nKSA+IC0xKSB7XG4gICAgICBwbGF0Zm9ybUNsYXNzID0gJ2Rlc2t0b3AnO1xuICAgIH0gZWxzZSBpZiAoYWdlbnQuaW5kZXhPZignbmF0aXZlc2NyaXB0JykgPiAtMSkge1xuICAgICAgcGxhdGZvcm1DbGFzcyA9ICduYXRpdmVzY3JpcHQnO1xuICAgIH0gXG4gICAgcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHBsYXRmb3JtQ2xhc3MsIHRydWUpO1xuICB9XG59XG4iXX0=
