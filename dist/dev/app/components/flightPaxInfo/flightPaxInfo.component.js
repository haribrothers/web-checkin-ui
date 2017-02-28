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
var FlightPaxInfoComponent = (function () {
    function FlightPaxInfoComponent(routerext) {
        this.routerext = routerext;
        this.isOpen = false;
    }
    FlightPaxInfoComponent.prototype.ngOnInit = function () {
    };
    FlightPaxInfoComponent.prototype.onFirstOpen = function (b) {
    };
    FlightPaxInfoComponent.prototype.onFirstClose = function (a) {
    };
    return FlightPaxInfoComponent;
}());
FlightPaxInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'flightPaxInfo',
        templateUrl: 'flightPaxInfo.component.html',
        styleUrls: ['flightPaxInfo.component.css'],
    }),
    __metadata("design:paramtypes", [index_1.RouterExtensions])
], FlightPaxInfoComponent);
exports.FlightPaxInfoComponent = FlightPaxInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ZsaWdodFBheEluZm8vZmxpZ2h0UGF4SW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUF5RTtBQUt6RSxpREFBbUU7QUFZbkUsSUFBYSxzQkFBc0I7SUFFL0IsZ0NBQW1CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBR2pELFdBQU0sR0FBWSxLQUFLLENBQUM7SUFEckIsQ0FBQztJQUVKLHlDQUFRLEdBQVI7SUFFQyxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLENBQUs7SUFFakIsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxDQUFLO0lBRWxCLENBQUM7SUFDSCw2QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMxQyxDQUFDO3FDQUlnQyx3QkFBZ0I7R0FGckMsc0JBQXNCLENBaUJsQztBQWpCWSx3REFBc0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmxpZ2h0UGF4SW5mby9mbGlnaHRQYXhJbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlLCBnZXROYW1lcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9uZ3J4L2luZGV4JztcbmltcG9ydCAqIGFzIG5hbWVMaXN0IGZyb20gJy4uLy4uL3NoYXJlZC9jb3BhLXdjaS9pbmRleCc7XG5kZWNsYXJlIHZhciBOU0luZGV4UGF0aCwgVUlUYWJsZVZpZXdTY3JvbGxQb3NpdGlvbjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZmxpZ2h0UGF4SW5mbycsXG5cdHRlbXBsYXRlVXJsOiAnZmxpZ2h0UGF4SW5mby5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWydmbGlnaHRQYXhJbmZvLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBGbGlnaHRQYXhJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXJleHQ6IFJvdXRlckV4dGVuc2lvbnMpe1xuXG4gICAgfVxuXHRpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblx0bmdPbkluaXQoKSB7XG5cdFx0XG5cdCB9XG5cblx0IG9uRmlyc3RPcGVuKGI6YW55KXtcblx0XHQvLyAgYWxlcnQoXCJIaVwiKTtcblx0IH1cblxuXHQgb25GaXJzdENsb3NlKGE6YW55KXtcblx0XHQvLyAgYWxlcnQoXCJIZWxsb29cIik7XG5cdCB9XG59Il19
