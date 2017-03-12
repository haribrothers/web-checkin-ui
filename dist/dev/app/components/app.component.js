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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUFrRztBQUdsRyx1QkFBcUI7QUFHckIsbURBQTZEO0FBQzdELDhDQUFzRTtBQUN0RSxpRkFBbUY7QUFZbkYsSUFBYSxZQUFZO0lBR3ZCLHNCQUNTLFNBQTJCLEVBQzNCLEdBQWUsRUFDZCxVQUFzQixFQUN0QixjQUFrQztRQUo1QyxpQkFhQztRQVpRLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUUxQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFlLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNwQyxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztRQUNoRCxTQUFTLEVBQUMsQ0FBQyxvQ0FBa0IsQ0FBQztLQUMvQixDQUFDO3FDQUtvQix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDRixrQkFBVTtRQUNOLG9DQUFrQjtHQVBqQyxZQUFZLENBc0J4QjtBQXRCWSxvQ0FBWSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYW55IG9wZXJhdG9ycyBuZWVkZWQgdGhyb3VnaG91dCB5b3VyIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWcsIExvZ1NlcnZpY2UsIEFwcFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBQcm9ncmVzc2JhclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LCAvLyBFdmVyeXRoaW5nIGVsc2UgdXNlcyBPblB1c2hcbiAgcHJvdmlkZXJzOltQcm9ncmVzc2JhclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHByaXZhdGUgaGVpZ2h0Om51bWJlcjtcbiAgcHJpdmF0ZSBpc1Byb2dyZXNzQmx1cmVkOmJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXG4gICAgcHVibGljIGxvZzogTG9nU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sYmFyU2VydmljZTogUHJvZ3Jlc3NiYXJTZXJ2aWNlXG4gICkge1xuICAgIGxvZy5kZWJ1ZyhgQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdG9vbGJhclNlcnZpY2Uuc2hvd1Byb2dyZXNzJC5zdWJzY3JpYmUoXG4gICAgICBzaG93ID0+IHtcbiAgICAgICAgdGhpcy5pc1Byb2dyZXNzQmx1cmVkID0gc2hvdy5wcm9ncmVzcztcbiAgICAgIH0pO1xuXG4gIH1cblxuICBvblJlc2l6ZShldmVudCl7XG4gICAgdGhpcy5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5pbm5lcldpZHRoID0gKHdpbmRvdy5zY3JlZW4ud2lkdGgpICsgXCJweFwiO1xuICB9XG59XG4iXX0=
