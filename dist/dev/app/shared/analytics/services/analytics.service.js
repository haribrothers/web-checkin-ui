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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var _ = require("lodash");
var angulartics2_1 = require("angulartics2");
var AnalyticsService = (function () {
    function AnalyticsService(angulartics2, segment) {
        this.angulartics2 = angulartics2;
        this.segment = segment;
        this.devMode(false);
    }
    AnalyticsService.prototype.track = function (action, properties) {
        if (!this.devMode()) {
            this.segment.eventTrack(action, properties);
        }
    };
    AnalyticsService.prototype.pageTrack = function (path, location) {
        if (!this.devMode()) {
            this.segment.pageTrack(path, location);
        }
    };
    AnalyticsService.prototype.identify = function (properties) {
        if (!this.devMode()) {
            this.segment.setUserProperties(properties);
        }
    };
    AnalyticsService.prototype.devMode = function (enable) {
        if (typeof enable !== 'undefined') {
            this.angulartics2.developerMode(enable);
        }
        return this.angulartics2.settings.developerMode;
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angulartics2_1.Angulartics2, angulartics2_1.Angulartics2Segment])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
var Analytics = (function () {
    function Analytics(analytics) {
        this.analytics = analytics;
    }
    Analytics.prototype.track = function (action, properties) {
        this.analytics.track(action, _.extend(properties, { category: this.category }));
    };
    return Analytics;
}());
Analytics = __decorate([
    __param(0, core_1.Inject(AnalyticsService)),
    __metadata("design:paramtypes", [AnalyticsService])
], Analytics);
exports.Analytics = Analytics;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5hbHl0aWNzL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBbUQ7QUFHbkQsMEJBQTRCO0FBQzVCLDZDQUFpRTtBQWdCakUsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLFlBQTBCLEVBQVUsT0FBNEI7UUFBaEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQVFsRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFLTSxnQ0FBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLFVBQWdDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFNTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBYTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBS00sbUNBQVEsR0FBZixVQUFnQixVQUFlO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBT00sa0NBQU8sR0FBZCxVQUFlLE1BQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHdUIsMkJBQVksRUFBbUIsa0NBQW1CO0dBRnpFLGdCQUFnQixDQW9ENUI7QUFwRFksNENBQWdCO0FBMEQ3QixJQUFhLFNBQVM7SUFJcEIsbUJBQTZDLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXhFLENBQUM7SUFLRCx5QkFBSyxHQUFMLFVBQU0sTUFBYyxFQUFFLFVBQWdDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDSCxnQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksU0FBUztJQUlQLFdBQUEsYUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7cUNBQW1CLGdCQUFnQjtHQUo3RCxTQUFTLENBY3JCO0FBZFksOEJBQVMiLCJmaWxlIjoiYXBwL3NoYXJlZC9hbmFseXRpY3Mvc2VydmljZXMvYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQW5hbHl0aWNzUHJvcGVydGllcyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFuYWx5dGljcyB7XG4gIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQ7XG59XG5cbi8qKlxuICogV3JhcHBlciBmb3IgQW5ndWxhcnRpY3MyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIGltcGxlbWVudHMgSUFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBzZWdtZW50OiBBbmd1bGFydGljczJTZWdtZW50KSB7XG4gICAgLy8gb3B0aW9uc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFydGljcy9hbmd1bGFydGljczIvYmxvYi9tYXN0ZXIvc3JjL2NvcmUvYW5ndWxhcnRpY3MyLnRzI0w5MC1MMTA0XG4gICAgLy8gYW5ndWxhcnRpY3MyLnZpcnR1YWxQYWdldmlld3ModmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi5leGNsdWRlUm91dGVzKHJvdXRlczogQXJyYXk8c3RyaW5nPik7XG4gICAgLy8gYW5ndWxhcnRpY3MyLmZpcnN0UGFnZXZpZXcodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8vIGFuZ3VsYXJ0aWNzMi53aXRoQmFzZSh2YWx1ZTogc3RyaW5nKTtcblxuICAgIHRoaXMuZGV2TW9kZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYWN0aW9ucywgZXZlbnRzLCBldGMuXG4gICAqKi9cbiAgcHVibGljIHRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJQW5hbHl0aWNzUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5ldmVudFRyYWNrKGFjdGlvbiwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IGJ5IGRlZmF1bHQgd2l0aCBBbmd1bGFyIDIgUm91dGluZ1xuICAgKiBIb3dldmVyLCB0aGF0IGNhbiBiZSB0dXJuZWQgb2ZmIGFuZCB0aGlzIGNvdWxkIGJlIHVzZWQgbWFudWFsbHlcbiAgICoqL1xuICBwdWJsaWMgcGFnZVRyYWNrKHBhdGg6IHN0cmluZywgbG9jYXRpb246IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5wYWdlVHJhY2socGF0aCwgbG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJZGVudGlmeSBhdXRoZW50aWNhdGVkIHVzZXJzXG4gICAqKi9cbiAgcHVibGljIGlkZW50aWZ5KHByb3BlcnRpZXM6IGFueSkge1xuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcbiAgICAgIHRoaXMuc2VnbWVudC5zZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbCB3aGV0aGVyIGFuYWx5dGljcyBhcmUgdHJhY2tlZFxuICAgKiB0cnVlOiBkZXYgbW9kZSBvbiwgdGhlcmVmb3JlIGRvIG5vdCB0cmFjayBhbnl0aGluZ1xuICAgKiBmYWxzZTogZGV2IG1vZGUgb2ZmLCB0cmFjayBldmVyeXRoaW5nXG4gICAqKi9cbiAgcHVibGljIGRldk1vZGUoZW5hYmxlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgZW5hYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5hbmd1bGFydGljczIuZGV2ZWxvcGVyTW9kZShlbmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZTtcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3NcbiAqIFN0YW5kYXJkaXplcyB0cmFja2luZyBhY3Rpb25zIGFuZCBjYXRlZ29yaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzIGltcGxlbWVudHMgSUFuYWx5dGljcyB7XG4gIC8vIHN1Yi1jbGFzc2VzIHNob3VsZCBkZWZpbmUgdGhlaXIgY2F0ZWdvcnlcbiAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBbmFseXRpY3NTZXJ2aWNlKSBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhY3Rpb25zLCBldmVudHMsIGV0Yy5cbiAgICoqL1xuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcbiAgICB0aGlzLmFuYWx5dGljcy50cmFjayhhY3Rpb24sIF8uZXh0ZW5kKHByb3BlcnRpZXMsIHsgY2F0ZWdvcnk6IHRoaXMuY2F0ZWdvcnkgfSkpO1xuICB9XG59XG4iXX0=
