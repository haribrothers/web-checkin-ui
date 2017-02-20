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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvZWZmZWN0cy9uYW1lLWxpc3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQTRDO0FBQzVDLHlDQUFnRDtBQUNoRCw4Q0FBNkM7QUFHN0MsbUVBQWdFO0FBQ2hFLHNEQUF3RDtBQUd4RCxJQUFhLGVBQWU7SUEwQjFCLHlCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGVBQWdDO1FBSDFDLGlCQUlLO1FBSEssVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXZCaEMsVUFBSyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQzthQUNsQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEVBQS9CLENBQStCLENBQUM7YUFDaEQsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNWLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO2FBRUQsS0FBSyxDQUFDLGNBQU0sT0FBQSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUVyRCxTQUFJLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUUxQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFNRCxDQUFDO0lBQ1Asc0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBekJXO0lBQVQsZ0JBQU0sRUFBRTs4QkFBUSx1QkFBVTs4Q0FTb0M7QUFFckQ7SUFBVCxnQkFBTSxFQUFFOzhCQUFPLHVCQUFVOzZDQU9yQjtBQXhCTSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBNEJNLGFBQUs7UUFDRixpQkFBTztRQUNBLG1DQUFlO0dBN0IvQixlQUFlLENBK0IzQjtBQS9CWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2VmZmVjdHMvbmFtZS1saXN0LmVmZmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbmFtZUxpc3QgZnJvbSAnLi4vYWN0aW9ucy9uYW1lLWxpc3QuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0RWZmZWN0cyB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZWZmZWN0IG1ha2VzIHVzZSBvZiB0aGUgYHN0YXJ0V2l0aGAgb3BlcmF0b3IgdG8gdHJpZ2dlclxuICAgKiB0aGUgZWZmZWN0IGltbWVkaWF0ZWx5IG9uIHN0YXJ0dXAuXG4gICAqL1xuICBARWZmZWN0KCkgaW5pdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKG5hbWVMaXN0LkFjdGlvblR5cGVzLklOSVQpXG4gICAgLnN0YXJ0V2l0aChuZXcgbmFtZUxpc3QuSW5pdEFjdGlvbilcbiAgICAuc3dpdGNoTWFwKCgpID0+IHRoaXMubmFtZUxpc3RTZXJ2aWNlLmdldE5hbWVzKCkpXG4gICAgLm1hcChwYXlsb2FkID0+IHtcbiAgICAgIGxldCBuYW1lcyA9IHBheWxvYWQ7XG4gICAgICByZXR1cm4gbmV3IG5hbWVMaXN0LkluaXRpYWxpemVkQWN0aW9uKG5hbWVzKTtcbiAgICB9KVxuICAgIC8vIG5vdGhpbmcgcmVhY3RpbmcgdG8gZmFpbHVyZSBhdCBtb21lbnQgYnV0IHlvdSBjb3VsZCBpZiB5b3Ugd2FudCAoaGVyZSBmb3IgZXhhbXBsZSlcbiAgICAuY2F0Y2goKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgbmFtZUxpc3QuSW5pdEZhaWxlZEFjdGlvbigpKSk7XG5cbiAgQEVmZmVjdCgpIGFkZCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyRcbiAgICAub2ZUeXBlKG5hbWVMaXN0LkFjdGlvblR5cGVzLkFERClcbiAgICAubWFwKGFjdGlvbiA9PiB7XG4gICAgICBsZXQgbmFtZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgLy8gYW5hbHl0aWNzXG4gICAgICB0aGlzLm5hbWVMaXN0U2VydmljZS50cmFjayhuYW1lTGlzdC5BY3Rpb25UeXBlcy5OQU1FX0FEREVELCB7IGxhYmVsOiBuYW1lIH0pO1xuICAgICAgcmV0dXJuIG5ldyBuYW1lTGlzdC5OYW1lQWRkZWRBY3Rpb24obmFtZSk7XG4gICAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2VcbiAgKSB7IH1cbn1cbiJdfQ==
