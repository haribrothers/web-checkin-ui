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
var index_1 = require("../../core/index");
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-toolbar',
        templateUrl: 'toolbar.component.html',
        styleUrls: [
            'toolbar.component.css',
        ],
    }),
    __metadata("design:paramtypes", [index_1.LogService])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBRzFDLDBDQUE4QztBQVU5QyxJQUFhLGdCQUFnQjtJQUUzQiwwQkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBRyxDQUFDO0lBRWhDLHdDQUFhLEdBQXBCLFVBQXFCLENBQU07UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxnQkFBZ0I7SUFSNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRTtZQUNULHVCQUF1QjtTQUN4QjtLQUNGLENBQUM7cUNBR3lCLGtCQUFVO0dBRnhCLGdCQUFnQixDQU81QjtBQVBZLDRDQUFnQiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAndG9vbGJhci5jb21wb25lbnQuY3NzJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2c6IExvZ1NlcnZpY2UpIHt9XG5cbiAgcHVibGljIG9wZW5MYW5ndWFnZXMoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2cuZGVidWcoJ29wZW5MYW5ndWFnZXMnKTtcbiAgfVxufVxuIl19
