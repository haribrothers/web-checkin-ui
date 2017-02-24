"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var TranslateMock = (function () {
    function TranslateMock() {
        this.onLangChange = new core_1.EventEmitter();
        this.onTranslationChange = new core_1.EventEmitter();
    }
    TranslateMock.prototype.getTranslation = function (lang) {
        return {
            'TEST': 'test'
        };
    };
    TranslateMock.prototype.use = function (lang) {
    };
    TranslateMock.prototype.get = function (key, interpolateParams) {
        return Observable_1.Observable.of(key);
    };
    TranslateMock.prototype.setDefaultLang = function (lang) {
        return;
    };
    TranslateMock.prototype.getLangs = function () {
        return ['en'];
    };
    TranslateMock.prototype.reloadLang = function (lang) {
        return Observable_1.Observable.of('en');
    };
    return TranslateMock;
}());
exports.TranslateMock = TranslateMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL21vY2tzL25nMi10cmFuc2xhdGUubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQTZDO0FBRzdDLDhDQUE2QztBQUM3QyxrQ0FBZ0M7QUFFaEM7SUFBQTtRQUNTLGlCQUFZLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3JELHdCQUFtQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQXFCckUsQ0FBQztJQXBCUSxzQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDTSwyQkFBRyxHQUFWLFVBQVcsSUFBWTtJQUV2QixDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUFXLEdBQTJCLEVBQUUsaUJBQTBCO1FBQ2hFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sc0NBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUNoQyxNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ00sZ0NBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTSxrQ0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL21vY2tzL25nMi10cmFuc2xhdGUubW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhclxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9jayB7XHJcbiAgcHVibGljIG9uTGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJ1RFU1QnOiAndGVzdCdcclxuICAgIH07XHJcbiAgfVxyXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhsYW5nKTtcclxuICB9XHJcbiAgcHVibGljIGdldChrZXk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGtleSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgcHVibGljIGdldExhbmdzKCkge1xyXG4gICAgcmV0dXJuIFsnZW4nXTtcclxuICB9XHJcbiAgcHVibGljIHJlbG9hZExhbmcobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCdlbicpO1xyXG4gIH1cclxufVxyXG4iXX0=
