"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RouterExtensionsMock = (function () {
    function RouterExtensionsMock() {
    }
    RouterExtensionsMock.prototype.navigate = function (commands, extras) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.navigateByUrl = function (url, options) {
        return Promise.resolve(true);
    };
    RouterExtensionsMock.prototype.back = function () {
        return;
    };
    return RouterExtensionsMock;
}());
RouterExtensionsMock = __decorate([
    core_1.Injectable()
], RouterExtensionsMock);
exports.RouterExtensionsMock = RouterExtensionsMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUEyQztBQU8zQyxJQUFhLG9CQUFvQjtJQUFqQztJQVlBLENBQUM7SUFYQyx1Q0FBUSxHQUFSLFVBQVMsUUFBb0IsRUFBRSxNQUFpQztRQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEdBQXFCLEVBQUUsT0FBa0M7UUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLG9CQUFvQjtJQURoQyxpQkFBVSxFQUFFO0dBQ0Esb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBJUm91dGVyRXh0ZW5zaW9ucywgRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyRXh0ZW5zaW9uc01vY2sgaW1wbGVtZW50cyBJUm91dGVyRXh0ZW5zaW9ucyB7XG4gIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG5cbiAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyB8IFVybFRyZWUsIG9wdGlvbnM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==
