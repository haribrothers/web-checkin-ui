"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var store_1 = require("@ngrx/store");
var index_1 = require("../../core/index");
var index_2 = require("../../analytics/index");
var category_common_1 = require("../common/category.common");
var NameListService = (function (_super) {
    __extends(NameListService, _super);
    function NameListService(analytics, store, http) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.store = store;
        _this.http = http;
        _this.category = category_common_1.CATEGORY;
        return _this;
    }
    NameListService.prototype.getNames = function () {
        return this.http.get((index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/data.json")
            .map(function (res) { return res.json(); });
    };
    return NameListService;
}(index_2.Analytics));
NameListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        store_1.Store,
        http_1.Http])
], NameListService);
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQTJDO0FBQzNDLHNDQUFxQztBQUdyQyxxQ0FBb0M7QUFJcEMsMENBQTBDO0FBQzFDLCtDQUFvRTtBQUNwRSw2REFBcUQ7QUFPckQsSUFBYSxlQUFlO0lBQVMsbUNBQVM7SUFFNUMseUJBQ1MsU0FBMkIsRUFDMUIsS0FBMEIsRUFDMUIsSUFBVTtRQUhwQixZQUtFLGtCQUFNLFNBQVMsQ0FBQyxTQUVqQjtRQU5RLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzFCLFdBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLFVBQUksR0FBSixJQUFJLENBQU07UUFHbEIsS0FBSSxDQUFDLFFBQVEsR0FBRywwQkFBUSxDQUFDOztJQUMzQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLHNCQUFrQixDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmb0MsaUJBQVMsR0FlN0M7QUFmWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSVMsd0JBQWdCO1FBQ25CLGFBQUs7UUFDTixXQUFJO0dBTFQsZUFBZSxDQWUzQjtBQWZZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuaW1wb3J0IHsgQ0FURUdPUlkgfSBmcm9tICcuLi9jb21tb24vY2F0ZWdvcnkuY29tbW9uJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJU2FtcGxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElTYW1wbGVTdGF0ZT4sXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwXG4gICkge1xuICAgIHN1cGVyKGFuYWx5dGljcyk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IENBVEVHT1JZO1xuICB9XG5cbiAgZ2V0TmFtZXMoKTogT2JzZXJ2YWJsZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9kYXRhLmpzb25gKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cbn1cbiJdfQ==
