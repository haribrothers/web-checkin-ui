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
var config_1 = require("../utils/config");
var console_service_1 = require("./console.service");
var LogService = (function () {
    function LogService(logger) {
        this.logger = logger;
    }
    LogService.prototype.debug = function (msg) {
        if (config_1.Config.DEBUG.LEVEL_4) {
            this.logger.log(msg);
        }
    };
    LogService.prototype.error = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_3) {
            this.logger.error(err);
        }
    };
    LogService.prototype.warn = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_2) {
            this.logger.warn(err);
        }
    };
    LogService.prototype.info = function (err) {
        if (config_1.Config.DEBUG.LEVEL_4 || config_1.Config.DEBUG.LEVEL_1) {
            this.logger.info(err);
        }
    };
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return console_service_1.ConsoleService; }))),
    __metadata("design:paramtypes", [console_service_1.ConsoleService])
], LogService);
exports.LogService = LogService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy9sb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQStEO0FBRy9ELDBDQUF5QztBQUN6QyxxREFBbUQ7QUFHbkQsSUFBYSxVQUFVO0lBRXJCLG9CQUE2RCxNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUFHLENBQUM7SUFHaEYsMEJBQUssR0FBWixVQUFhLEdBQVE7UUFDbkIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBR00sMEJBQUssR0FBWixVQUFhLEdBQVE7UUFDbkIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBR00seUJBQUksR0FBWCxVQUFZLEdBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBR00seUJBQUksR0FBWCxVQUFZLEdBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTtJQUdFLFdBQUEsYUFBTSxDQUFDLGlCQUFVLENBQUMsY0FBTSxPQUFBLGdDQUFjLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQTtxQ0FBZ0IsZ0NBQWM7R0FGeEUsVUFBVSxDQWlDdEI7QUFqQ1ksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL3NlcnZpY2VzL2xvZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi91dGlscy9jb25maWcnO1xyXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQ29uc29sZVNlcnZpY2UpKSBwdWJsaWMgbG9nZ2VyOiBDb25zb2xlU2VydmljZSkge31cclxuXHJcbiAgLy8gZGVidWcgKHN0YW5kYXJkIG91dHB1dClcclxuICBwdWJsaWMgZGVidWcobXNnOiBhbnkpIHtcclxuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCkge1xyXG4gICAgICAvLyBjb25zb2xlLmRlYnVnIGRvZXMgbm90IHdvcmsgb24ge059IGFwcHMuLi4gdXNlIGBsb2dgXHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyhtc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZXJyb3JcclxuICBwdWJsaWMgZXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIGlmIChDb25maWcuREVCVUcuTEVWRUxfNCB8fCBDb25maWcuREVCVUcuTEVWRUxfMykge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gd2FyblxyXG4gIHB1YmxpYyB3YXJuKGVycjogYW55KSB7XHJcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzIpIHtcclxuICAgICAgdGhpcy5sb2dnZXIud2FybihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaW5mb1xyXG4gIHB1YmxpYyBpbmZvKGVycjogYW55KSB7XHJcbiAgICBpZiAoQ29uZmlnLkRFQlVHLkxFVkVMXzQgfHwgQ29uZmlnLkRFQlVHLkxFVkVMXzEpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
