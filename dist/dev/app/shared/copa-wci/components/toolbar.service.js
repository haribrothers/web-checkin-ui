"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var show = (function () {
    function show() {
        this.progress = false;
        this.overlay = false;
    }
    return show;
}());
exports.show = show;
var ProgressbarService = (function () {
    function ProgressbarService() {
        this.showProgressSource = new Subject_1.Subject();
        this.showProgress$ = this.showProgressSource.asObservable();
    }
    ProgressbarService.prototype.showProgress = function (showOverlay) {
        if (showOverlay === void 0) { showOverlay = false; }
        this.showProgressSource.next({ progress: true, overlay: showOverlay });
    };
    ProgressbarService.prototype.hideProgress = function () {
        this.showProgressSource.next({ progress: false, overlay: false });
    };
    return ProgressbarService;
}());
ProgressbarService = __decorate([
    core_1.Injectable()
], ProgressbarService);
exports.ProgressbarService = ProgressbarService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFFdkM7SUFBQTtRQUNXLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQUQsV0FBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksb0JBQUk7QUFNakIsSUFBYSxrQkFBa0I7SUFEL0I7UUFFWSx1QkFBa0IsR0FBRyxJQUFJLGlCQUFPLEVBQVEsQ0FBQztRQUVqRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQVkzRCxDQUFDO0lBTkcseUNBQVksR0FBWixVQUFhLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtHQUNBLGtCQUFrQixDQWU5QjtBQWZZLGdEQUFrQiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvdG9vbGJhci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmV4cG9ydCBjbGFzcyBzaG93e1xuICAgIHB1YmxpYyBwcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBvdmVybGF5OiBib29sZWFuID0gZmFsc2U7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhclNlcnZpY2Uge1xuICAgIHByaXZhdGUgc2hvd1Byb2dyZXNzU291cmNlID0gbmV3IFN1YmplY3Q8c2hvdz4oKTtcblxuICAgIHNob3dQcm9ncmVzcyQgPSB0aGlzLnNob3dQcm9ncmVzc1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8vIHNob3dQcm9ncmVzcyhzaG93OiBib29sZWFuKSB7XG4gICAgLy8gICAgIHRoaXMuc2hvd1Byb2dyZXNzU291cmNlLm5leHQoc2hvdyk7XG4gICAgLy8gfVxuXG4gICAgc2hvd1Byb2dyZXNzKHNob3dPdmVybGF5OiBib29sZWFuID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1NvdXJjZS5uZXh0KHtwcm9ncmVzczogdHJ1ZSwgb3ZlcmxheTogc2hvd092ZXJsYXl9KTtcbiAgICB9XG4gICAgaGlkZVByb2dyZXNzKCl7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzU291cmNlLm5leHQoe3Byb2dyZXNzOiBmYWxzZSwgb3ZlcmxheTogZmFsc2V9KTtcbiAgICB9XG59Il19
