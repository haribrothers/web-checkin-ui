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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQTJDO0FBQzNDLHNDQUFxQztBQUdyQyxxQ0FBb0M7QUFJcEMsMENBQTBDO0FBQzFDLCtDQUFvRTtBQUNwRSw2REFBcUQ7QUFPckQsSUFBYSxlQUFlO0lBQVMsbUNBQVM7SUFFNUMseUJBQ1MsU0FBMkIsRUFDMUIsS0FBMEIsRUFDMUIsSUFBVTtRQUhwQixZQUtFLGtCQUFNLFNBQVMsQ0FBQyxTQUVqQjtRQU5RLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzFCLFdBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLFVBQUksR0FBSixJQUFJLENBQU07UUFHbEIsS0FBSSxDQUFDLFFBQVEsR0FBRywwQkFBUSxDQUFDOztJQUMzQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLHNCQUFrQixDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmb0MsaUJBQVMsR0FlN0M7QUFmWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSVMsd0JBQWdCO1FBQ25CLGFBQUs7UUFDTixXQUFJO0dBTFQsZUFBZSxDQWUzQjtBQWZZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEFuYWx5dGljcywgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL2FuYWx5dGljcy9pbmRleCc7XHJcbmltcG9ydCB7IENBVEVHT1JZIH0gZnJvbSAnLi4vY29tbW9uL2NhdGVnb3J5LmNvbW1vbic7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgSVNhbXBsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SVNhbXBsZVN0YXRlPixcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxyXG4gICkge1xyXG4gICAgc3VwZXIoYW5hbHl0aWNzKTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBDQVRFR09SWTtcclxuICB9XHJcblxyXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8QXJyYXk8c3RyaW5nPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9kYXRhLmpzb25gKVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICB9XHJcbn1cclxuIl19
