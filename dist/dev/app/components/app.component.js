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
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        providers: [toolbar_service_1.ProgressbarService]
    }),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        index_2.LogService,
        index_2.AppService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyRTtBQUUzRSx1QkFBcUI7QUFHckIsbURBQTZEO0FBQzdELDhDQUFzRTtBQUN0RSxpRkFBbUY7QUFZbkYsSUFBYSxZQUFZO0lBRXZCLHNCQUNTLFNBQTJCLEVBQzNCLEdBQWUsRUFDZCxVQUFzQjtRQUZ2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUU5QixHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFlLGNBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxZQUFZO0lBUHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztRQUNoRCxTQUFTLEVBQUMsQ0FBQyxvQ0FBa0IsQ0FBQztLQUMvQixDQUFDO3FDQUlvQix3QkFBZ0I7UUFDdEIsa0JBQVU7UUFDRixrQkFBVTtHQUxyQixZQUFZLENBZ0J4QjtBQWhCWSxvQ0FBWSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBhbnkgb3BlcmF0b3JzIG5lZWRlZCB0aHJvdWdob3V0IHlvdXIgYXBwbGljYXRpb25cbmltcG9ydCAnLi9vcGVyYXRvcnMnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYW5hbHl0aWNzL2luZGV4JztcbmltcG9ydCB7IENvbmZpZywgTG9nU2VydmljZSwgQXBwU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb3JlL2luZGV4JztcbmltcG9ydCB7IFByb2dyZXNzYmFyU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3Rvb2xiYXIuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsIC8vIEV2ZXJ5dGhpbmcgZWxzZSB1c2VzIE9uUHVzaFxuICBwcm92aWRlcnM6W1Byb2dyZXNzYmFyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBoZWlnaHQ6bnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHB1YmxpYyBsb2c6IExvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlXG4gICkge1xuICAgIGxvZy5kZWJ1ZyhgQ29uZmlnIGVudjogJHtDb25maWcuRU5WSVJPTk1FTlQoKS5FTlZ9YCk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KXtcbiAgICB0aGlzLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmlubmVyV2lkdGggPSAod2luZG93LnNjcmVlbi53aWR0aCkgKyBcInB4XCI7XG4gIH1cbn1cbiJdfQ==
