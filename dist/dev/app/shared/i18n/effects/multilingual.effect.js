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
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var multilingual_service_1 = require("../services/multilingual.service");
var multilingual = require("../actions/multilingual.action");
var MultilingualEffects = (function () {
    function MultilingualEffects(store, actions$, multilangService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.multilangService = multilangService;
        this.change$ = this.actions$
            .ofType(multilingual.ActionTypes.CHANGE)
            .map(function (action) {
            var lang = action.payload;
            if (lodash_1.includes(lodash_1.map(multilingual_service_1.MultilingualService.SUPPORTED_LANGUAGES, 'code'), lang)) {
                var langChangedAction = new multilingual.LangChangedAction(lang);
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                return new multilingual.LangChangedAction(lang);
            }
            else {
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
    return MultilingualEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], MultilingualEffects.prototype, "change$", void 0);
MultilingualEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        multilingual_service_1.MultilingualService])
], MultilingualEffects);
exports.MultilingualEffects = MultilingualEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9lZmZlY3RzL211bHRpbGluZ3VhbC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHNDQUEyQztBQUczQyxxQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELGlDQUF1QztBQUN2Qyw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBRy9CLHlFQUF1RTtBQUN2RSw2REFBK0Q7QUFHL0QsSUFBYSxtQkFBbUI7SUFrQjlCLDZCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGdCQUFxQztRQUgvQyxpQkFJSztRQUhLLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBbkJyQyxZQUFPLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUN2QyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLFlBQUcsQ0FBQywwQ0FBbUIsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksaUJBQWlCLEdBQUcsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBRTFGLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRU4sTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQU1ELENBQUM7SUFDUCwwQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUFyQlc7SUFBVCxnQkFBTSxFQUFFOzhCQUFVLHVCQUFVO29EQWN4QjtBQWhCTSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FvQk0sYUFBSztRQUNGLGlCQUFPO1FBQ0MsMENBQW1CO0dBckJwQyxtQkFBbUIsQ0F1Qi9CO0FBdkJZLGtEQUFtQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBpbmNsdWRlcywgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtdWx0aWxpbmd1YWwgZnJvbSAnLi4vYWN0aW9ucy9tdWx0aWxpbmd1YWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbEVmZmVjdHMge1xuXG4gIEBFZmZlY3QoKSBjaGFuZ2UkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShtdWx0aWxpbmd1YWwuQWN0aW9uVHlwZXMuQ0hBTkdFKVxuICAgIC5tYXAoYWN0aW9uID0+IHtcbiAgICAgIGxldCBsYW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoaW5jbHVkZXMobWFwKE11bHRpbGluZ3VhbFNlcnZpY2UuU1VQUE9SVEVEX0xBTkdVQUdFUywgJ2NvZGUnKSwgbGFuZykpIHtcbiAgICAgICAgbGV0IGxhbmdDaGFuZ2VkQWN0aW9uID0gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcbiAgICAgICAgLy8gdHJhY2sgYW5hbHl0aWNzXG4gICAgICAgIHRoaXMubXVsdGlsYW5nU2VydmljZS50cmFjayhsYW5nQ2hhbmdlZEFjdGlvbi50eXBlLCB7IGxhYmVsOiBsYW5nQ2hhbmdlZEFjdGlvbi5wYXlsb2FkIH0pO1xuICAgICAgICAvLyBjaGFuZ2Ugc3RhdGVcbiAgICAgICAgcmV0dXJuIG5ldyBtdWx0aWxpbmd1YWwuTGFuZ0NoYW5nZWRBY3Rpb24obGFuZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIChoZXJlIGZvciBleGFtcGxlKVxuICAgICAgICByZXR1cm4gbmV3IG11bHRpbGluZ3VhbC5MYW5nVW5zdXBwb3J0ZWRBY3Rpb24obGFuZyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgbXVsdGlsYW5nU2VydmljZTogTXVsdGlsaW5ndWFsU2VydmljZVxuICApIHsgfVxufVxuIl19
