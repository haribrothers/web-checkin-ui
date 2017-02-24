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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ZsaWdodFBheEluZm8vZmxpZ2h0UGF4SW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUF5RTtBQUt6RSxpREFBbUU7QUFZbkUsSUFBYSxzQkFBc0I7SUFFL0IsZ0NBQW1CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBR2pELFdBQU0sR0FBWSxLQUFLLENBQUM7SUFEckIsQ0FBQztJQUVKLHlDQUFRLEdBQVI7SUFFQyxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLENBQUs7SUFFakIsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxDQUFLO0lBRWxCLENBQUM7SUFDSCw2QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMxQyxDQUFDO3FDQUlnQyx3QkFBZ0I7R0FGckMsc0JBQXNCLENBaUJsQztBQWpCWSx3REFBc0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmxpZ2h0UGF4SW5mby9mbGlnaHRQYXhJbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUsIGdldE5hbWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25ncngvaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBuYW1lTGlzdCBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvaW5kZXgnO1xyXG5kZWNsYXJlIHZhciBOU0luZGV4UGF0aCwgVUlUYWJsZVZpZXdTY3JvbGxQb3NpdGlvbjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdmbGlnaHRQYXhJbmZvJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2ZsaWdodFBheEluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydmbGlnaHRQYXhJbmZvLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGbGlnaHRQYXhJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyZXh0OiBSb3V0ZXJFeHRlbnNpb25zKXtcclxuXHJcbiAgICB9XHJcblx0aXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRcclxuXHQgfVxyXG5cclxuXHQgb25GaXJzdE9wZW4oYjphbnkpe1xyXG5cdFx0Ly8gIGFsZXJ0KFwiSGlcIik7XHJcblx0IH1cclxuXHJcblx0IG9uRmlyc3RDbG9zZShhOmFueSl7XHJcblx0XHQvLyAgYWxlcnQoXCJIZWxsb29cIik7XHJcblx0IH1cclxufSJdfQ==
