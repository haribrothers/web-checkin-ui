"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var console_service_1 = require("./console.service");
var log_service_1 = require("./log.service");
var router_extensions_service_1 = require("./router-extensions.service");
var window_service_1 = require("./window.service");
var app_service_1 = require("./app.service");
exports.CORE_PROVIDERS = [
    app_service_1.AppService,
    console_service_1.ConsoleService,
    log_service_1.LogService,
    router_extensions_service_1.RouterExtensions,
    window_service_1.WindowService
];
__export(require("./app.service"));
__export(require("./console.service"));
__export(require("./log.service"));
__export(require("./router-extensions.service"));
__export(require("./window.service"));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9zZXJ2aWNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EscURBQW1EO0FBQ25ELDZDQUEyQztBQUMzQyx5RUFBK0Q7QUFDL0QsbURBQWlEO0FBQ2pELDZDQUEyQztBQUU5QixRQUFBLGNBQWMsR0FBVTtJQUNuQyx3QkFBVTtJQUNWLGdDQUFjO0lBQ2Qsd0JBQVU7SUFDViw0Q0FBZ0I7SUFDaEIsOEJBQWE7Q0FDZCxDQUFDO0FBRUYsbUNBQThCO0FBQzlCLHVDQUFrQztBQUNsQyxtQ0FBOEI7QUFDOUIsaURBQTRDO0FBQzVDLHNDQUFpQyIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvc2VydmljZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHBcbmltcG9ydCB7IENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4vbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4vcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBDT1JFX1BST1ZJREVSUzogYW55W10gPSBbXG4gIEFwcFNlcnZpY2UsXG4gIENvbnNvbGVTZXJ2aWNlLFxuICBMb2dTZXJ2aWNlLFxuICBSb3V0ZXJFeHRlbnNpb25zLFxuICBXaW5kb3dTZXJ2aWNlXG5dO1xuXG5leHBvcnQgKiBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXItZXh0ZW5zaW9ucy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xuIl19
