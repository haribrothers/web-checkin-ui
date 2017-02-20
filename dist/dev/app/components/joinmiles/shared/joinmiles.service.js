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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var JoinmilesService = (function () {
    function JoinmilesService(http) {
        this.http = http;
    }
    JoinmilesService.prototype.getList = function () {
        return this.http.get('/api/list').map(function (res) { return res.json(); });
    };
    return JoinmilesService;
}());
JoinmilesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JoinmilesService);
exports.JoinmilesService = JoinmilesService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2pvaW5taWxlcy9zaGFyZWQvam9pbm1pbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFFckMsaUNBQStCO0FBSy9CLElBQWEsZ0JBQWdCO0lBRTVCLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbkMsa0NBQU8sR0FBUDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFpQixFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHYyxXQUFJO0dBRmxCLGdCQUFnQixDQU81QjtBQVBZLDRDQUFnQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9qb2lubWlsZXMvc2hhcmVkL2pvaW5taWxlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEpvaW5taWxlcyB9IGZyb20gJy4vam9pbm1pbGVzLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpvaW5taWxlc1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEpvaW5taWxlc1tdPiB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvbGlzdCcpLm1hcChyZXMgPT4gcmVzLmpzb24oKSBhcyBKb2lubWlsZXNbXSk7XG5cdH1cbn0iXX0=
