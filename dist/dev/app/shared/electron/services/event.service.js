"use strict";
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
var ElectronEventService = (function () {
    function ElectronEventService() {
    }
    ElectronEventService.on = function (name) {
        return Observable_1.Observable.fromEvent(window, name);
    };
    return ElectronEventService;
}());
exports.ElectronEventService = ElectronEventService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZWxlY3Ryb24vc2VydmljZXMvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsOENBQTZDO0FBQzdDLHlDQUF1QztBQUl2QztJQUFBO0lBT0EsQ0FBQztJQUxlLHVCQUFFLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0gsMkJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9EQUFvQiIsImZpbGUiOiJhcHAvc2hhcmVkL2VsZWN0cm9uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uRXZlbnRTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3RhdGljIG9uKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbUV2ZW50KHdpbmRvdywgbmFtZSk7XG4gIH1cblxuICAvLyBUT0RPOiBhZGQgbW9yZSBoZWxwZXJzIGZvciBtZW51IHNldHVwIGFuZCBtb3JlLi4uICBcbn1cbiJdfQ==
