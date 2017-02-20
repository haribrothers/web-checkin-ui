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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyRTtBQUUzRSx1QkFBcUI7QUFHckIsbURBQTZEO0FBQzdELDhDQUFzRTtBQVd0RSxJQUFhLFlBQVk7SUFFdkIsc0JBQ1MsU0FBMkIsRUFDM0IsR0FBZSxFQUNkLFVBQXNCO1FBRnZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQWUsY0FBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxPQUFPO0tBQ2pELENBQUM7cUNBSW9CLHdCQUFnQjtRQUN0QixrQkFBVTtRQUNGLGtCQUFVO0dBTHJCLFlBQVksQ0FnQnhCO0FBaEJZLG9DQUFZIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGFueSBvcGVyYXRvcnMgbmVlZGVkIHRocm91Z2hvdXQgeW91ciBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL29wZXJhdG9ycyc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQ29uZmlnLCBMb2dTZXJ2aWNlLCBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvcmUvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0IC8vIEV2ZXJ5dGhpbmcgZWxzZSB1c2VzIE9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcml2YXRlIGhlaWdodDpudW1iZXI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhbmFseXRpY3M6IEFuYWx5dGljc1NlcnZpY2UsXG4gICAgcHVibGljIGxvZzogTG9nU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2VcbiAgKSB7XG4gICAgbG9nLmRlYnVnKGBDb25maWcgZW52OiAke0NvbmZpZy5FTlZJUk9OTUVOVCgpLkVOVn1gKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0KTtcblxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpe1xuICAgIHRoaXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIC8vIHRoaXMuaW5uZXJXaWR0aCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoKSArIFwicHhcIjtcbiAgfVxufVxuIl19
