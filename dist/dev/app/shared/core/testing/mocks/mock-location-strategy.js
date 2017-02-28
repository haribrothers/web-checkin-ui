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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var MockLocationStrategy = (function (_super) {
    __extends(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        var _this = _super.call(this) || this;
        _this.internalBaseHref = '/';
        _this.internalPath = '/';
        _this.internalTitle = '';
        _this.urlChanges = [];
        _this._subject = new core_1.EventEmitter();
        return _this;
    }
    MockLocationStrategy.prototype.simulatePopState = function (url) {
        this.internalPath = url;
        this._subject.emit(new MockPopStateEvent(this.path()));
    };
    MockLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.internalPath;
    };
    MockLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
            return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
    };
    MockLocationStrategy.prototype.pushState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
    };
    MockLocationStrategy.prototype.replaceState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push('replace: ' + externalUrl);
    };
    MockLocationStrategy.prototype.onPopState = function (fn) { this._subject.subscribe({ next: fn }); };
    MockLocationStrategy.prototype.getBaseHref = function () { return this.internalBaseHref; };
    MockLocationStrategy.prototype.back = function () {
        if (this.urlChanges.length > 0) {
            this.urlChanges.pop();
            var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
            this.simulatePopState(nextUrl);
        }
    };
    MockLocationStrategy.prototype.forward = function () { throw 'not implemented'; };
    return MockLocationStrategy;
}(common_1.LocationStrategy));
MockLocationStrategy = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MockLocationStrategy);
exports.MockLocationStrategy = MockLocationStrategy;
var MockPopStateEvent = (function () {
    function MockPopStateEvent(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    }
    return MockPopStateEvent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL21vY2stbG9jYXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsMENBQW1EO0FBQ25ELHNDQUF5RDtBQVN6RCxJQUFhLG9CQUFvQjtJQUFTLHdDQUFnQjtJQU94RDtRQUFBLFlBQWdCLGlCQUFPLFNBQUc7UUFOMUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGNBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFMUIsK0NBQWdCLEdBQWhCLFVBQWlCLEdBQVc7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssV0FBNEI7UUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7UUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUFDLENBQUM7SUFFeEUsaURBQWtCLEdBQWxCLFVBQW1CLFFBQWdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFPLFFBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQVUsSUFBSSxDQUFDLGdCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLEdBQVEsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFeEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsR0FBUSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV4QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBd0IsSUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuRiwwQ0FBVyxHQUFYLGNBQXdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXZELG1DQUFJLEdBQUo7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFPLEdBQVAsY0FBa0IsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsMkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxDQXhEeUMseUJBQWdCLEdBd0R6RDtBQXhEWSxvQkFBb0I7SUFEaEMsaUJBQVUsRUFBRTs7R0FDQSxvQkFBb0IsQ0F3RGhDO0FBeERZLG9EQUFvQjtBQTBEakM7SUFHRSwyQkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGakMsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQVcsVUFBVSxDQUFDO0lBQ1UsQ0FBQztJQUN2Qyx3QkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL21vY2stbG9jYXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vY2sgbG9jYXRpb24gc3RyYXRlZ3kgKHVudGlsIHByb3ZpZGVkIGJ5IEBhbmd1bGFyKVxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9tb2R1bGVzLyU0MGFuZ3VsYXIvY29tbW9uL3Rlc3RpbmcvbW9ja19sb2NhdGlvbl9zdHJhdGVneS50c1xuICovXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgbW9jayBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gdGhhdCBhbGxvd3MgdGVzdHMgdG8gZmlyZSBzaW11bGF0ZWRcbiAqIGxvY2F0aW9uIGV2ZW50cy5cbiAqXG4gKiBAc3RhYmxlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrTG9jYXRpb25TdHJhdGVneSBleHRlbmRzIExvY2F0aW9uU3RyYXRlZ3kge1xuICBpbnRlcm5hbEJhc2VIcmVmOiBzdHJpbmcgPSAnLyc7XG4gIGludGVybmFsUGF0aDogc3RyaW5nID0gJy8nO1xuICBpbnRlcm5hbFRpdGxlOiBzdHJpbmcgPSAnJztcbiAgdXJsQ2hhbmdlczogc3RyaW5nW10gPSBbXTtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc3ViamVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XG5cbiAgc2ltdWxhdGVQb3BTdGF0ZSh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xuICAgIHRoaXMuX3N1YmplY3QuZW1pdChuZXcgTW9ja1BvcFN0YXRlRXZlbnQodGhpcy5wYXRoKCkpKTtcbiAgfVxuXG4gIHBhdGgoaW5jbHVkZUhhc2g6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmludGVybmFsUGF0aDsgfVxuXG4gIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoKDxhbnk+aW50ZXJuYWwpLnN0YXJ0c1dpdGgoJy8nKSAmJiAoPGFueT50aGlzLmludGVybmFsQmFzZUhyZWYpLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWYgKyBpbnRlcm5hbC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWYgKyBpbnRlcm5hbDtcbiAgfVxuXG4gIHB1c2hTdGF0ZShjdHg6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcm5hbFRpdGxlID0gdGl0bGU7XG5cbiAgICB2YXIgdXJsID0gcGF0aCArIChxdWVyeS5sZW5ndGggPiAwID8gKCc/JyArIHF1ZXJ5KSA6ICcnKTtcbiAgICB0aGlzLmludGVybmFsUGF0aCA9IHVybDtcblxuICAgIHZhciBleHRlcm5hbFVybCA9IHRoaXMucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XG4gICAgdGhpcy51cmxDaGFuZ2VzLnB1c2goZXh0ZXJuYWxVcmwpO1xuICB9XG5cbiAgcmVwbGFjZVN0YXRlKGN0eDogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmludGVybmFsVGl0bGUgPSB0aXRsZTtcblxuICAgIHZhciB1cmwgPSBwYXRoICsgKHF1ZXJ5Lmxlbmd0aCA+IDAgPyAoJz8nICsgcXVlcnkpIDogJycpO1xuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xuXG4gICAgdmFyIGV4dGVybmFsVXJsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcbiAgICB0aGlzLnVybENoYW5nZXMucHVzaCgncmVwbGFjZTogJyArIGV4dGVybmFsVXJsKTtcbiAgfVxuXG4gIG9uUG9wU3RhdGUoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKHtuZXh0OiBmbn0pOyB9XG5cbiAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaW50ZXJuYWxCYXNlSHJlZjsgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudXJsQ2hhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnVybENoYW5nZXMucG9wKCk7XG4gICAgICB2YXIgbmV4dFVybCA9IHRoaXMudXJsQ2hhbmdlcy5sZW5ndGggPiAwID8gdGhpcy51cmxDaGFuZ2VzW3RoaXMudXJsQ2hhbmdlcy5sZW5ndGggLSAxXSA6ICcnO1xuICAgICAgdGhpcy5zaW11bGF0ZVBvcFN0YXRlKG5leHRVcmwpO1xuICAgIH1cbiAgfVxuXG4gIGZvcndhcmQoKTogdm9pZCB7IHRocm93ICdub3QgaW1wbGVtZW50ZWQnOyB9XG59XG5cbmNsYXNzIE1vY2tQb3BTdGF0ZUV2ZW50IHtcbiAgcG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgdHlwZTogc3RyaW5nID0gJ3BvcHN0YXRlJztcbiAgY29uc3RydWN0b3IocHVibGljIG5ld1VybDogc3RyaW5nKSB7fVxufVxuIl19
