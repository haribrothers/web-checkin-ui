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
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProgressbarService);
exports.ProgressbarService = ProgressbarService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFFdkM7SUFBQTtRQUNXLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQUQsV0FBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksb0JBQUk7QUFNakIsSUFBYSxrQkFBa0I7SUFEL0I7UUFFWSx1QkFBa0IsR0FBRyxJQUFJLGlCQUFPLEVBQVEsQ0FBQztRQUVqRCxrQkFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQVkzRCxDQUFDO0lBTkcseUNBQVksR0FBWixVQUFhLFdBQTRCO1FBQTVCLDRCQUFBLEVBQUEsbUJBQTRCO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTs7R0FDQSxrQkFBa0IsQ0FlOUI7QUFmWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3Rvb2xiYXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5leHBvcnQgY2xhc3Mgc2hvd3tcbiAgICBwdWJsaWMgcHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgb3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNob3dQcm9ncmVzc1NvdXJjZSA9IG5ldyBTdWJqZWN0PHNob3c+KCk7XG5cbiAgICBzaG93UHJvZ3Jlc3MkID0gdGhpcy5zaG93UHJvZ3Jlc3NTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvLyBzaG93UHJvZ3Jlc3Moc2hvdzogYm9vbGVhbikge1xuICAgIC8vICAgICB0aGlzLnNob3dQcm9ncmVzc1NvdXJjZS5uZXh0KHNob3cpO1xuICAgIC8vIH1cblxuICAgIHNob3dQcm9ncmVzcyhzaG93T3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NTb3VyY2UubmV4dCh7cHJvZ3Jlc3M6IHRydWUsIG92ZXJsYXk6IHNob3dPdmVybGF5fSk7XG4gICAgfVxuICAgIGhpZGVQcm9ncmVzcygpe1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1NvdXJjZS5uZXh0KHtwcm9ncmVzczogZmFsc2UsIG92ZXJsYXk6IGZhbHNlfSk7XG4gICAgfVxufSJdfQ==
