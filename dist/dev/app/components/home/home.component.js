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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUFpRTtBQUNqRSxxQ0FBb0M7QUFJcEMsaURBQW1FO0FBQ25FLGlEQUE4RDtBQUM5RCxzREFBd0Q7QUFVeEQsSUFBYSxhQUFhO0lBS3hCLHVCQUFvQixLQUF1QixFQUFTLFNBQTJCO1FBQTNELFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFIeEUsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsS0FBUztRQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxvQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FNMkIsYUFBSyxFQUErQix3QkFBZ0I7R0FMcEUsYUFBYSxDQW1DekI7QUFuQ1ksc0NBQWEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3JlL2luZGV4JztcbmltcG9ydCB7IElBcHBTdGF0ZSwgZ2V0TmFtZXMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmdyeC9pbmRleCc7XG5pbXBvcnQgKiBhcyBuYW1lTGlzdCBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvaW5kZXgnO1xuXG5kZWNsYXJlIHZhciBOU0luZGV4UGF0aCwgVUlUYWJsZVZpZXdTY3JvbGxQb3NpdGlvbjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIG5hbWVzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbmV3TmFtZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzYW1wbGU6IEFycmF5PHN0cmluZz49W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPiwgcHVibGljIHJvdXRlcmV4dDogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMubmFtZXMkID0gc3RvcmUubGV0KGdldE5hbWVzKTtcbiAgfVxuXG4gIC8qXG4gICAqIEBwYXJhbSBuZXduYW1lICBhbnkgdGV4dCBhcyBpbnB1dC5cbiAgICogQHJldHVybnMgcmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBuYW1lTGlzdC5BZGRBY3Rpb24odGhpcy5uZXdOYW1lKSk7XG4gICAgdGhpcy5zYW1wbGUucHVzaCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlYWRBYm91dCgpIHtcbiAgICAvLyBUcnkgdGhpcyBpbiB0aGUge059IGFwcFxuICAgIC8vIHtOfSBjYW4gdXNlIHRoZXNlIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgdGhpcy5yb3V0ZXJleHQubmF2aWdhdGUoWycvYWJvdXQnXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dBbGVydChldmVudDphbnkpe1xuICAgIGFsZXJ0KGV2ZW50LnZhbHVlKTtcbiAgfVxufVxuIl19
