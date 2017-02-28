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
var index_1 = require("../../../shared/analytics/index");
var log_service_1 = require("./log.service");
var config_1 = require("../utils/config");
var AppService = (function () {
    function AppService(analytics, log) {
        this.analytics = analytics;
        this.log = log;
        this.log.debug("AppService -> Config env: " + config_1.Config.ENVIRONMENT().ENV);
    }
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService, log_service_1.LogService])
], AppService);
exports.AppService = AppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRzNDLHlEQUFtRTtBQUNuRSw2Q0FBMkM7QUFDM0MsMENBQXlDO0FBR3pDLElBQWEsVUFBVTtJQUNyQixvQkFBbUIsU0FBMkIsRUFBUyxHQUFlO1FBQW5ELGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBNkIsZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDSCxpQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksVUFBVTtJQUR0QixpQkFBVSxFQUFFO3FDQUVtQix3QkFBZ0IsRUFBYyx3QkFBVTtHQUQzRCxVQUFVLENBSXRCO0FBSlksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL3NlcnZpY2VzL2FwcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvYW5hbHl0aWNzL2luZGV4JztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFuYWx5dGljczogQW5hbHl0aWNzU2VydmljZSwgcHVibGljIGxvZzogTG9nU2VydmljZSkge1xuICAgIHRoaXMubG9nLmRlYnVnKGBBcHBTZXJ2aWNlIC0+IENvbmZpZyBlbnY6ICR7Q29uZmlnLkVOVklST05NRU5UKCkuRU5WfWApO1xuICB9XG59XG4iXX0=
