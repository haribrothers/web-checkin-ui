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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL21vY2stbG9jYXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsMENBQW1EO0FBQ25ELHNDQUF5RDtBQVN6RCxJQUFhLG9CQUFvQjtJQUFTLHdDQUFnQjtJQU94RDtRQUFBLFlBQWdCLGlCQUFPLFNBQUc7UUFOMUIsc0JBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGNBQVEsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFMUIsK0NBQWdCLEdBQWhCLFVBQWlCLEdBQVc7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxtQ0FBSSxHQUFKLFVBQUssV0FBNEI7UUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7UUFBWSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUFDLENBQUM7SUFFeEUsaURBQWtCLEdBQWxCLFVBQW1CLFFBQWdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFPLFFBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQVUsSUFBSSxDQUFDLGdCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLEdBQVEsRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFFeEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsR0FBUSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV4QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsRUFBd0IsSUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuRiwwQ0FBVyxHQUFYLGNBQXdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXZELG1DQUFJLEdBQUo7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFPLEdBQVAsY0FBa0IsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUMsMkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxDQXhEeUMseUJBQWdCLEdBd0R6RDtBQXhEWSxvQkFBb0I7SUFEaEMsaUJBQVUsRUFBRTs7R0FDQSxvQkFBb0IsQ0F3RGhDO0FBeERZLG9EQUFvQjtBQTBEakM7SUFHRSwyQkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGakMsUUFBRyxHQUFZLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQVcsVUFBVSxDQUFDO0lBQ1UsQ0FBQztJQUN2Qyx3QkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL21vY2stbG9jYXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTW9jayBsb2NhdGlvbiBzdHJhdGVneSAodW50aWwgcHJvdmlkZWQgYnkgQGFuZ3VsYXIpXHJcbiAqIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi9tYXN0ZXIvbW9kdWxlcy8lNDBhbmd1bGFyL2NvbW1vbi90ZXN0aW5nL21vY2tfbG9jYXRpb25fc3RyYXRlZ3kudHNcclxuICovXHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBBIG1vY2sgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IHRoYXQgYWxsb3dzIHRlc3RzIHRvIGZpcmUgc2ltdWxhdGVkXHJcbiAqIGxvY2F0aW9uIGV2ZW50cy5cclxuICpcclxuICogQHN0YWJsZVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9ja0xvY2F0aW9uU3RyYXRlZ3kgZXh0ZW5kcyBMb2NhdGlvblN0cmF0ZWd5IHtcclxuICBpbnRlcm5hbEJhc2VIcmVmOiBzdHJpbmcgPSAnLyc7XHJcbiAgaW50ZXJuYWxQYXRoOiBzdHJpbmcgPSAnLyc7XHJcbiAgaW50ZXJuYWxUaXRsZTogc3RyaW5nID0gJyc7XHJcbiAgdXJsQ2hhbmdlczogc3RyaW5nW10gPSBbXTtcclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3N1YmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XHJcblxyXG4gIHNpbXVsYXRlUG9wU3RhdGUodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xyXG4gICAgdGhpcy5fc3ViamVjdC5lbWl0KG5ldyBNb2NrUG9wU3RhdGVFdmVudCh0aGlzLnBhdGgoKSkpO1xyXG4gIH1cclxuXHJcbiAgcGF0aChpbmNsdWRlSGFzaDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaW50ZXJuYWxQYXRoOyB9XHJcblxyXG4gIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICgoPGFueT5pbnRlcm5hbCkuc3RhcnRzV2l0aCgnLycpICYmICg8YW55PnRoaXMuaW50ZXJuYWxCYXNlSHJlZikuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJhc2VIcmVmICsgaW50ZXJuYWwuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxCYXNlSHJlZiArIGludGVybmFsO1xyXG4gIH1cclxuXHJcbiAgcHVzaFN0YXRlKGN0eDogYW55LCB0aXRsZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW50ZXJuYWxUaXRsZSA9IHRpdGxlO1xyXG5cclxuICAgIHZhciB1cmwgPSBwYXRoICsgKHF1ZXJ5Lmxlbmd0aCA+IDAgPyAoJz8nICsgcXVlcnkpIDogJycpO1xyXG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSB1cmw7XHJcblxyXG4gICAgdmFyIGV4dGVybmFsVXJsID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwodXJsKTtcclxuICAgIHRoaXMudXJsQ2hhbmdlcy5wdXNoKGV4dGVybmFsVXJsKTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VTdGF0ZShjdHg6IGFueSwgdGl0bGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludGVybmFsVGl0bGUgPSB0aXRsZTtcclxuXHJcbiAgICB2YXIgdXJsID0gcGF0aCArIChxdWVyeS5sZW5ndGggPiAwID8gKCc/JyArIHF1ZXJ5KSA6ICcnKTtcclxuICAgIHRoaXMuaW50ZXJuYWxQYXRoID0gdXJsO1xyXG5cclxuICAgIHZhciBleHRlcm5hbFVybCA9IHRoaXMucHJlcGFyZUV4dGVybmFsVXJsKHVybCk7XHJcbiAgICB0aGlzLnVybENoYW5nZXMucHVzaCgncmVwbGFjZTogJyArIGV4dGVybmFsVXJsKTtcclxuICB9XHJcblxyXG4gIG9uUG9wU3RhdGUoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKHtuZXh0OiBmbn0pOyB9XHJcblxyXG4gIGdldEJhc2VIcmVmKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmludGVybmFsQmFzZUhyZWY7IH1cclxuXHJcbiAgYmFjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnVybENoYW5nZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnVybENoYW5nZXMucG9wKCk7XHJcbiAgICAgIHZhciBuZXh0VXJsID0gdGhpcy51cmxDaGFuZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLnVybENoYW5nZXNbdGhpcy51cmxDaGFuZ2VzLmxlbmd0aCAtIDFdIDogJyc7XHJcbiAgICAgIHRoaXMuc2ltdWxhdGVQb3BTdGF0ZShuZXh0VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcndhcmQoKTogdm9pZCB7IHRocm93ICdub3QgaW1wbGVtZW50ZWQnOyB9XHJcbn1cclxuXHJcbmNsYXNzIE1vY2tQb3BTdGF0ZUV2ZW50IHtcclxuICBwb3A6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHR5cGU6IHN0cmluZyA9ICdwb3BzdGF0ZSc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5ld1VybDogc3RyaW5nKSB7fVxyXG59XHJcbiJdfQ==
