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
var index_1 = require("../../shared/core/index");
var AboutComponent = (function () {
    function AboutComponent(injector) {
        this.injector = injector;
    }
    Object.defineProperty(AboutComponent.prototype, "page", {
        get: function () {
            if (index_1.Config.PageClass) {
                if (!this._page) {
                    this._page = this.injector.get(index_1.Config.PageClass);
                }
                return this._page;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-about',
        templateUrl: 'about.component.html',
        styleUrls: [
            'about.component.css',
        ],
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AboutComponent);
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBQ3BELGlEQUFpRDtBQVVqRCxJQUFhLGNBQWM7SUFlekIsd0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFLdEMsQ0FBQztJQWZELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQVFILHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUU7WUFDVCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO3FDQWdCOEIsZUFBUTtHQWYzQixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3JlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hYm91dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXHJcbiAgICAnYWJvdXQuY29tcG9uZW50LmNzcycsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHtcclxuXHJcbiAgLy8gSnVzdCBvbmUgd2F5IHlvdSBjb3VsZCBoYW5kbGUgdGhlIHtOfSBgdWkvcGFnZWAgUGFnZSBjbGFzc1xyXG4gIC8vIGluIGEgc2hhcmVkIGNvbXBvbmVudC4uLlxyXG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcclxuICBwcml2YXRlIGdldCBwYWdlKCkge1xyXG4gICAgaWYgKENvbmZpZy5QYWdlQ2xhc3MpIHtcclxuICAgICAgaWYgKCF0aGlzLl9wYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvbmZpZy5QYWdlQ2xhc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAvLyBUaGlzIGlzIGhlcmUgYXMgYW4gZXhhbXBsZVxyXG4gICAgLy8gaWYgKHRoaXMucGFnZSkge1xyXG4gICAgLy8gICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuIl19
