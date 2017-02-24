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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUEyQztBQU8zQyxJQUFhLG9CQUFvQjtJQUFqQztJQVlBLENBQUM7SUFYQyx1Q0FBUSxHQUFSLFVBQVMsUUFBb0IsRUFBRSxNQUFpQztRQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEdBQXFCLEVBQUUsT0FBa0M7UUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDRSxNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLG9CQUFvQjtJQURoQyxpQkFBVSxFQUFFO0dBQ0Esb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgSVJvdXRlckV4dGVuc2lvbnMsIEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvdXRlckV4dGVuc2lvbnNNb2NrIGltcGxlbWVudHMgSVJvdXRlckV4dGVuc2lvbnMge1xyXG4gIG5hdmlnYXRlKGNvbW1hbmRzOiBBcnJheTxhbnk+LCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUJ5VXJsKHVybDogc3RyaW5nIHwgVXJsVHJlZSwgb3B0aW9ucz86IEV4dGVuZGVkTmF2aWdhdGlvbkV4dHJhcyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGJhY2soKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==
