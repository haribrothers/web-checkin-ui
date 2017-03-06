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
var toolbar_service_1 = require("../shared/copa-wci/components/toolbar.service");
var AppComponent = (function () {
    function AppComponent(analytics, log, appService, toolbarService) {
        var _this = this;
        this.analytics = analytics;
        this.log = log;
        this.appService = appService;
        this.toolbarService = toolbarService;
        log.debug("Config env: " + index_2.Config.ENVIRONMENT().ENV);
        this.height = (window.innerHeight);
        toolbarService.showProgress$.subscribe(function (show) {
            _this.isProgressBlured = show.progress;
        });
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
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        providers: [toolbar_service_1.ProgressbarService]
    }),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        index_2.LogService,
        index_2.AppService,
        toolbar_service_1.ProgressbarService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyRTtBQUczRSx1QkFBcUI7QUFHckIsbURBQTZEO0FBQzdELDhDQUFzRTtBQUN0RSxpRkFBbUY7QUFZbkYsSUFBYSxZQUFZO0lBR3ZCLHNCQUNTLFNBQTJCLEVBQzNCLEdBQWUsRUFDZCxVQUFzQixFQUN0QixjQUFrQztRQUo1QyxpQkFhQztRQVpRLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUUxQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFlLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNwQyxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztRQUNoRCxTQUFTLEVBQUMsQ0FBQyxvQ0FBa0IsQ0FBQztLQUMvQixDQUFDO3FDQUtvQix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDRixrQkFBVTtRQUNOLG9DQUFrQjtHQVBqQyxZQUFZLENBc0J4QjtBQXRCWSxvQ0FBWSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGFueSBvcGVyYXRvcnMgbmVlZGVkIHRocm91Z2hvdXQgeW91ciBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL29wZXJhdG9ycyc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQ29uZmlnLCBMb2dTZXJ2aWNlLCBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvdG9vbGJhci5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCwgLy8gRXZlcnl0aGluZyBlbHNlIHVzZXMgT25QdXNoXG4gIHByb3ZpZGVyczpbUHJvZ3Jlc3NiYXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcml2YXRlIGhlaWdodDpudW1iZXI7XG4gIHByaXZhdGUgaXNQcm9ncmVzc0JsdXJlZDpib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbGJhclNlcnZpY2U6IFByb2dyZXNzYmFyU2VydmljZVxuICApIHtcbiAgICBsb2cuZGVidWcoYENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcyQuc3Vic2NyaWJlKFxuICAgICAgc2hvdyA9PiB7XG4gICAgICAgIHRoaXMuaXNQcm9ncmVzc0JsdXJlZCA9IHNob3cucHJvZ3Jlc3M7XG4gICAgICB9KTtcblxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpe1xuICAgIHRoaXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuaW5uZXJXaWR0aCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoKSArIFwicHhcIjtcbiAgfVxufVxuIl19
