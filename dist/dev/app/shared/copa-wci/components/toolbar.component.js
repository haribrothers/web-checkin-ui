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
var toolbar_service_1 = require("./toolbar.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(log, toolbarService) {
        var _this = this;
        this.log = log;
        this.toolbarService = toolbarService;
        this.showProgress = false;
        this.showOverlay = false;
        this.toolbarService.showProgress$.subscribe(function (show) {
            console.log('compoent:' + show);
            _this.showProgress = show.progress;
            _this.showOverlay = show.overlay;
        });
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
        ]
    }),
    __metadata("design:paramtypes", [index_1.LogService, toolbar_service_1.ProgressbarService])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBR2pELDBDQUE4QztBQUM5QyxxREFBdUQ7QUFVdkQsSUFBYSxnQkFBZ0I7SUFHM0IsMEJBQW9CLEdBQWUsRUFBUyxjQUFrQztRQUE5RSxpQkFRQztRQVJtQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBRnRFLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBRWxDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDekMsVUFBQSxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixDQUFNO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHSCx1QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksZ0JBQWdCO0lBUjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUU7WUFDVCx1QkFBdUI7U0FDeEI7S0FDRixDQUFDO3FDQUl5QixrQkFBVSxFQUF5QixvQ0FBa0I7R0FIbkUsZ0JBQWdCLENBa0I1QjtBQWxCWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3Rvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IFByb2dyZXNzYmFyU2VydmljZSB9IGZyb20gJy4vdG9vbGJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICd0b29sYmFyLmNvbXBvbmVudC5jc3MnLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xuICBwcml2YXRlIHNob3dQcm9ncmVzczpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd092ZXJsYXk6Ym9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSxwcml2YXRlIHRvb2xiYXJTZXJ2aWNlOiBQcm9ncmVzc2JhclNlcnZpY2UpIHtcbiAgICB0aGlzLnRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcyQuc3Vic2NyaWJlKFxuICAgICAgc2hvdyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb2VudDonKyBzaG93KTtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSBzaG93LnByb2dyZXNzO1xuICAgICAgICB0aGlzLnNob3dPdmVybGF5ID0gc2hvdy5vdmVybGF5O1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLnRvb2xiYXJTZXJ2aWNlLmhpZGVQcm9ncmVzcygpO1xuICB9XG5cbiAgcHVibGljIG9wZW5MYW5ndWFnZXMoZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sb2cuZGVidWcoJ29wZW5MYW5ndWFnZXMnKTtcbiAgfVxuXG4gIFxufVxuIl19
