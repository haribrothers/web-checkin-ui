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
var Observable_1 = require("rxjs/Observable");
var name_list_service_1 = require("../services/name-list.service");
var nameList = require("../actions/name-list.action");
var NameListEffects = (function () {
    function NameListEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        this.init$ = this.actions$
            .ofType(nameList.ActionTypes.INIT)
            .startWith(new nameList.InitAction)
            .switchMap(function () { return _this.nameListService.getNames(); })
            .map(function (payload) {
            var names = payload;
            return new nameList.InitializedAction(names);
        })
            .catch(function () { return Observable_1.Observable.of(new nameList.InitFailedAction()); });
        this.add$ = this.actions$
            .ofType(nameList.ActionTypes.ADD)
            .map(function (action) {
            var name = action.payload;
            _this.nameListService.track(nameList.ActionTypes.NAME_ADDED, { label: name });
            return new nameList.NameAddedAction(name);
        });
    }
    return NameListEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], NameListEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], NameListEffects.prototype, "add$", void 0);
NameListEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        name_list_service_1.NameListService])
], NameListEffects);
exports.NameListEffects = NameListEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvZWZmZWN0cy9uYW1lLWxpc3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQTRDO0FBQzVDLHlDQUFnRDtBQUNoRCw4Q0FBNkM7QUFHN0MsbUVBQWdFO0FBQ2hFLHNEQUF3RDtBQUd4RCxJQUFhLGVBQWU7SUEwQjFCLHlCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGVBQWdDO1FBSDFDLGlCQUlLO1FBSEssVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXZCaEMsVUFBSyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUNsQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQS9CLENBQStCLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNWLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO2FBRUQsS0FBSyxDQUFDLGNBQU0sT0FBQSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUVyRCxTQUFJLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUUxQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFNRCxDQUFDO0lBQ1Asc0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBekJXO0lBQVQsZ0JBQU0sRUFBRTs4QkFBUSx1QkFBVTs4Q0FTb0M7QUFFckQ7SUFBVCxnQkFBTSxFQUFFOzhCQUFPLHVCQUFVOzZDQU9yQjtBQXhCTSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBNEJNLGFBQUs7UUFDRixpQkFBTztRQUNBLG1DQUFlO0dBN0IvQixlQUFlLENBK0IzQjtBQS9CWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2VmZmVjdHMvbmFtZS1saXN0LmVmZmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBuYW1lTGlzdCBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RFZmZlY3RzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBlZmZlY3QgbWFrZXMgdXNlIG9mIHRoZSBgc3RhcnRXaXRoYCBvcGVyYXRvciB0byB0cmlnZ2VyXHJcbiAgICogdGhlIGVmZmVjdCBpbW1lZGlhdGVseSBvbiBzdGFydHVwLlxyXG4gICAqL1xyXG4gIEBFZmZlY3QoKSBpbml0JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxyXG4gICAgLm9mVHlwZShuYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUKVxyXG4gICAgLnN0YXJ0V2l0aChuZXcgbmFtZUxpc3QuSW5pdEFjdGlvbilcclxuICAgIC5zd2l0Y2hNYXAoKCkgPT4gdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0TmFtZXMoKSlcclxuICAgIC5tYXAocGF5bG9hZCA9PiB7XHJcbiAgICAgIGxldCBuYW1lcyA9IHBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBuZXcgbmFtZUxpc3QuSW5pdGlhbGl6ZWRBY3Rpb24obmFtZXMpO1xyXG4gICAgfSlcclxuICAgIC8vIG5vdGhpbmcgcmVhY3RpbmcgdG8gZmFpbHVyZSBhdCBtb21lbnQgYnV0IHlvdSBjb3VsZCBpZiB5b3Ugd2FudCAoaGVyZSBmb3IgZXhhbXBsZSlcclxuICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBuYW1lTGlzdC5Jbml0RmFpbGVkQWN0aW9uKCkpKTtcclxuXHJcbiAgQEVmZmVjdCgpIGFkZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcclxuICAgIC5vZlR5cGUobmFtZUxpc3QuQWN0aW9uVHlwZXMuQUREKVxyXG4gICAgLm1hcChhY3Rpb24gPT4ge1xyXG4gICAgICBsZXQgbmFtZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAvLyBhbmFseXRpY3NcclxuICAgICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UudHJhY2sobmFtZUxpc3QuQWN0aW9uVHlwZXMuTkFNRV9BRERFRCwgeyBsYWJlbDogbmFtZSB9KTtcclxuICAgICAgcmV0dXJuIG5ldyBuYW1lTGlzdC5OYW1lQWRkZWRBY3Rpb24obmFtZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2VcclxuICApIHsgfVxyXG59XHJcbiJdfQ==
