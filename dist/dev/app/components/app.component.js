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
require("./operators");
var index_1 = require("../shared/analytics/index");
var index_2 = require("../shared/core/index");
var AppComponent = (function () {
    function AppComponent(analytics, log, appService) {
        this.analytics = analytics;
        this.log = log;
        this.appService = appService;
        log.debug("Config env: " + index_2.Config.ENVIRONMENT().ENV);
        this.height = (window.innerHeight);
    }
    AppComponent.prototype.onResize = function (event) {
        this.height = (window.innerHeight);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-app',
        templateUrl: 'app.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        index_2.LogService,
        index_2.AppService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyRTtBQUUzRSx1QkFBcUI7QUFHckIsbURBQTZEO0FBQzdELDhDQUFzRTtBQVd0RSxJQUFhLFlBQVk7SUFFdkIsc0JBQ1MsU0FBMkIsRUFDM0IsR0FBZSxFQUNkLFVBQXNCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWUsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxPQUFPO0tBQ2pELENBQUM7cUNBSW9CLHdCQUFnQjtRQUN0QixrQkFBVTtRQUNGLGtCQUFVO0dBTHJCLFlBQVksQ0FnQnhCO0FBaEJZLG9DQUFZIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBhbnkgb3BlcmF0b3JzIG5lZWRlZCB0aHJvdWdob3V0IHlvdXIgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL29wZXJhdG9ycyc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3MvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWcsIExvZ1NlcnZpY2UsIEFwcFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29yZS9pbmRleCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQgLy8gRXZlcnl0aGluZyBlbHNlIHVzZXMgT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHByaXZhdGUgaGVpZ2h0Om51bWJlcjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgbG9nOiBMb2dTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBsb2cuZGVidWcoYENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoZXZlbnQpe1xyXG4gICAgdGhpcy5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAvLyB0aGlzLmlubmVyV2lkdGggPSAod2luZG93LnNjcmVlbi53aWR0aCkgKyBcInB4XCI7XHJcbiAgfVxyXG59XHJcbiJdfQ==
