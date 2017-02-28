"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var index_1 = require("./index");
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            http_1.HttpModule
        ],
        providers: index_1.ANALYTICS_PROVIDERS
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMENBQStDO0FBQy9DLHNDQUEyQztBQUczQyxpQ0FBOEM7QUFjOUMsSUFBYSxlQUFlO0lBQTVCO0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxlQUFlO0lBUjNCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1oscUJBQVk7WUFDWixpQkFBVTtTQUNYO1FBQ0QsU0FBUyxFQUFFLDJCQUFtQjtLQUMvQixDQUFDO0dBQ1csZUFBZSxDQUUzQjtBQUZZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQU5BTFlUSUNTX1BST1ZJREVSUyB9IGZyb20gJy4vaW5kZXgnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEh0dHBNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBBTkFMWVRJQ1NfUFJPVklERVJTXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc01vZHVsZSB7XG5cbn1cbiJdfQ==
