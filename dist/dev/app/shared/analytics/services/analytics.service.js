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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5hbHl0aWNzL3NlcnZpY2VzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBbUQ7QUFHbkQsMEJBQTRCO0FBQzVCLDZDQUFpRTtBQWdCakUsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLFlBQTBCLEVBQVUsT0FBNEI7UUFBaEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQVFsRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFLTSxnQ0FBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLFVBQWdDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFNTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBYTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBS00sbUNBQVEsR0FBZixVQUFnQixVQUFlO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDO0lBT00sa0NBQU8sR0FBZCxVQUFlLE1BQWdCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHdUIsMkJBQVksRUFBbUIsa0NBQW1CO0dBRnpFLGdCQUFnQixDQW9ENUI7QUFwRFksNENBQWdCO0FBMEQ3QixJQUFhLFNBQVM7SUFJcEIsbUJBQTZDLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXhFLENBQUM7SUFLRCx5QkFBSyxHQUFMLFVBQU0sTUFBYyxFQUFFLFVBQWdDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDSCxnQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksU0FBUztJQUlQLFdBQUEsYUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7cUNBQW1CLGdCQUFnQjtHQUo3RCxTQUFTLENBY3JCO0FBZFksOEJBQVMiLCJmaWxlIjoiYXBwL3NoYXJlZC9hbmFseXRpY3Mvc2VydmljZXMvYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiwgQW5ndWxhcnRpY3MyU2VnbWVudCB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBbmFseXRpY3NQcm9wZXJ0aWVzIHtcclxuICBjYXRlZ29yeT86IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxuICB2YWx1ZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQW5hbHl0aWNzIHtcclxuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogV3JhcHBlciBmb3IgQW5ndWxhcnRpY3MyXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIGltcGxlbWVudHMgSUFuYWx5dGljcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgc2VnbWVudDogQW5ndWxhcnRpY3MyU2VnbWVudCkge1xyXG4gICAgLy8gb3B0aW9uc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXJ0aWNzL2FuZ3VsYXJ0aWNzMi9ibG9iL21hc3Rlci9zcmMvY29yZS9hbmd1bGFydGljczIudHMjTDkwLUwxMDRcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi52aXJ0dWFsUGFnZXZpZXdzKHZhbHVlOiBib29sZWFuKTtcclxuICAgIC8vIGFuZ3VsYXJ0aWNzMi5leGNsdWRlUm91dGVzKHJvdXRlczogQXJyYXk8c3RyaW5nPik7XHJcbiAgICAvLyBhbmd1bGFydGljczIuZmlyc3RQYWdldmlldyh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICAvLyBhbmd1bGFydGljczIud2l0aEJhc2UodmFsdWU6IHN0cmluZyk7XHJcblxyXG4gICAgdGhpcy5kZXZNb2RlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxyXG4gICAqKi9cclxuICBwdWJsaWMgdHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IElBbmFseXRpY3NQcm9wZXJ0aWVzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGV2TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuc2VnbWVudC5ldmVudFRyYWNrKGFjdGlvbiwgcHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IHdpdGggQW5ndWxhciAyIFJvdXRpbmdcclxuICAgKiBIb3dldmVyLCB0aGF0IGNhbiBiZSB0dXJuZWQgb2ZmIGFuZCB0aGlzIGNvdWxkIGJlIHVzZWQgbWFudWFsbHlcclxuICAgKiovXHJcbiAgcHVibGljIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcclxuICAgICAgdGhpcy5zZWdtZW50LnBhZ2VUcmFjayhwYXRoLCBsb2NhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZGVudGlmeSBhdXRoZW50aWNhdGVkIHVzZXJzXHJcbiAgICoqL1xyXG4gIHB1YmxpYyBpZGVudGlmeShwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5kZXZNb2RlKCkpIHtcclxuICAgICAgdGhpcy5zZWdtZW50LnNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbCB3aGV0aGVyIGFuYWx5dGljcyBhcmUgdHJhY2tlZFxyXG4gICAqIHRydWU6IGRldiBtb2RlIG9uLCB0aGVyZWZvcmUgZG8gbm90IHRyYWNrIGFueXRoaW5nXHJcbiAgICogZmFsc2U6IGRldiBtb2RlIG9mZiwgdHJhY2sgZXZlcnl0aGluZ1xyXG4gICAqKi9cclxuICBwdWJsaWMgZGV2TW9kZShlbmFibGU/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIGVuYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5hbmd1bGFydGljczIuZGV2ZWxvcGVyTW9kZShlbmFibGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmRldmVsb3Blck1vZGU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBjbGFzc1xyXG4gKiBTdGFuZGFyZGl6ZXMgdHJhY2tpbmcgYWN0aW9ucyBhbmQgY2F0ZWdvcml6YXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3MgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcclxuICAvLyBzdWItY2xhc3NlcyBzaG91bGQgZGVmaW5lIHRoZWlyIGNhdGVnb3J5XHJcbiAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQW5hbHl0aWNzU2VydmljZSkgcHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrIGFjdGlvbnMsIGV2ZW50cywgZXRjLlxyXG4gICAqKi9cclxuICB0cmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogSUFuYWx5dGljc1Byb3BlcnRpZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5hbHl0aWNzLnRyYWNrKGFjdGlvbiwgXy5leHRlbmQocHJvcGVydGllcywgeyBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
