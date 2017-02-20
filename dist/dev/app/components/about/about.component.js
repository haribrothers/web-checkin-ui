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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBQ3BELGlEQUFpRDtBQVVqRCxJQUFhLGNBQWM7SUFlekIsd0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFLdEMsQ0FBQztJQWZELHNCQUFZLGdDQUFJO2FBQWhCO1lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQVFILHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUU7WUFDVCxxQkFBcUI7U0FDdEI7S0FDRixDQUFDO3FDQWdCOEIsZUFBUTtHQWYzQixjQUFjLENBcUIxQjtBQXJCWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29yZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFib3V0JyxcbiAgdGVtcGxhdGVVcmw6ICdhYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICdhYm91dC5jb21wb25lbnQuY3NzJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuXG4gIC8vIEp1c3Qgb25lIHdheSB5b3UgY291bGQgaGFuZGxlIHRoZSB7Tn0gYHVpL3BhZ2VgIFBhZ2UgY2xhc3NcbiAgLy8gaW4gYSBzaGFyZWQgY29tcG9uZW50Li4uXG4gIHByaXZhdGUgX3BhZ2U6IGFueTtcbiAgcHJpdmF0ZSBnZXQgcGFnZSgpIHtcbiAgICBpZiAoQ29uZmlnLlBhZ2VDbGFzcykge1xuICAgICAgaWYgKCF0aGlzLl9wYWdlKSB7XG4gICAgICAgIHRoaXMuX3BhZ2UgPSB0aGlzLmluamVjdG9yLmdldChDb25maWcuUGFnZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAvLyBUaGlzIGlzIGhlcmUgYXMgYW4gZXhhbXBsZVxuICAgIC8vIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAvLyAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxufVxuIl19
