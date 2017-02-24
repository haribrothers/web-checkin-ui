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
var store_1 = require("@ngrx/store");
var index_1 = require("../../shared/core/index");
var index_2 = require("../../shared/ngrx/index");
var nameList = require("../../shared/copa-wci/index");
var HomeComponent = (function () {
    function HomeComponent(store, routerext) {
        this.store = store;
        this.routerext = routerext;
        this.newName = '';
        this.sample = [];
        this.names$ = store.let(index_2.getNames);
    }
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new nameList.AddAction(this.newName));
        this.sample.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    HomeComponent.prototype.showAlert = function (event) {
        alert(event.value);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [store_1.Store, index_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUFpRTtBQUNqRSxxQ0FBb0M7QUFJcEMsaURBQW1FO0FBQ25FLGlEQUE4RDtBQUM5RCxzREFBd0Q7QUFVeEQsSUFBYSxhQUFhO0lBS3hCLHVCQUFvQixLQUF1QixFQUFTLFNBQTJCO1FBQTNELFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFIeEUsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsS0FBUztRQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxvQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FNMkIsYUFBSyxFQUErQix3QkFBZ0I7R0FMcEUsYUFBYSxDQW1DekI7QUFuQ1ksc0NBQWEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgSUFwcFN0YXRlLCBnZXROYW1lcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9uZ3J4L2luZGV4JztcclxuaW1wb3J0ICogYXMgbmFtZUxpc3QgZnJvbSAnLi4vLi4vc2hhcmVkL2NvcGEtd2NpL2luZGV4JztcclxuXHJcbmRlY2xhcmUgdmFyIE5TSW5kZXhQYXRoLCBVSVRhYmxlVmlld1Njcm9sbFBvc2l0aW9uO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICBwdWJsaWMgbmFtZXMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgcHVibGljIG5ld05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBzYW1wbGU6IEFycmF5PHN0cmluZz49W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sIHB1YmxpYyByb3V0ZXJleHQ6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIHRoaXMubmFtZXMkID0gc3RvcmUubGV0KGdldE5hbWVzKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxyXG4gICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbmFtZUxpc3QuQWRkQWN0aW9uKHRoaXMubmV3TmFtZSkpO1xyXG4gICAgdGhpcy5zYW1wbGUucHVzaCh0aGlzLm5ld05hbWUpO1xyXG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XHJcbiAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlYWRBYm91dCgpIHtcclxuICAgIC8vIFRyeSB0aGlzIGluIHRoZSB7Tn0gYXBwXHJcbiAgICAvLyB7Tn0gY2FuIHVzZSB0aGVzZSBhbmltYXRpb24gb3B0aW9uc1xyXG4gICAgdGhpcy5yb3V0ZXJleHQubmF2aWdhdGUoWycvYWJvdXQnXSwge1xyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93QWxlcnQoZXZlbnQ6YW55KXtcclxuICAgIGFsZXJ0KGV2ZW50LnZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19
