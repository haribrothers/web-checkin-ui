"use strict";
var type_1 = require("../../core/utils/type");
var category_common_1 = require("../common/category.common");
exports.ActionTypes = {
    INIT: type_1.type(category_common_1.CATEGORY + " Init"),
    INITIALIZED: type_1.type(category_common_1.CATEGORY + " Initialized"),
    INIT_FAILED: type_1.type(category_common_1.CATEGORY + " Init Failed"),
    ADD: type_1.type(category_common_1.CATEGORY + " Add"),
    NAME_ADDED: type_1.type(category_common_1.CATEGORY + " Name Added")
};
var InitAction = (function () {
    function InitAction() {
        this.type = exports.ActionTypes.INIT;
        this.payload = null;
    }
    return InitAction;
}());
exports.InitAction = InitAction;
var InitializedAction = (function () {
    function InitializedAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.INITIALIZED;
    }
    return InitializedAction;
}());
exports.InitializedAction = InitializedAction;
var InitFailedAction = (function () {
    function InitFailedAction() {
        this.type = exports.ActionTypes.INIT_FAILED;
        this.payload = null;
    }
    return InitFailedAction;
}());
exports.InitFailedAction = InitFailedAction;
var AddAction = (function () {
    function AddAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.ADD;
    }
    return AddAction;
}());
exports.AddAction = AddAction;
var NameAddedAction = (function () {
    function NameAddedAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.NAME_ADDED;
    }
    return NameAddedAction;
}());
exports.NameAddedAction = NameAddedAction;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvYWN0aW9ucy9uYW1lLWxpc3QuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw4Q0FBNkM7QUFDN0MsNkRBQXFEO0FBa0J4QyxRQUFBLFdBQVcsR0FBcUI7SUFDM0MsSUFBSSxFQUFTLFdBQUksQ0FBSSwwQkFBUSxVQUFPLENBQUM7SUFDckMsV0FBVyxFQUFFLFdBQUksQ0FBSSwwQkFBUSxpQkFBYyxDQUFDO0lBQzVDLFdBQVcsRUFBRSxXQUFJLENBQUksMEJBQVEsaUJBQWMsQ0FBQztJQUM1QyxHQUFHLEVBQVUsV0FBSSxDQUFJLDBCQUFRLFNBQU0sQ0FBQztJQUNwQyxVQUFVLEVBQUcsV0FBSSxDQUFJLDBCQUFRLGdCQUFhLENBQUM7Q0FDNUMsQ0FBQztBQVNGO0lBQUE7UUFDRSxTQUFJLEdBQUcsbUJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEIsWUFBTyxHQUFXLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLGdDQUFVO0FBS3ZCO0lBR0UsMkJBQW1CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFGekMsU0FBSSxHQUFHLG1CQUFXLENBQUMsV0FBVyxDQUFDO0lBRWMsQ0FBQztJQUNoRCx3QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksOENBQWlCO0FBTTlCO0lBQUE7UUFDRSxTQUFJLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFDL0IsWUFBTyxHQUFXLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDRDQUFnQjtBQUs3QjtJQUdFLG1CQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZsQyxTQUFJLEdBQUcsbUJBQVcsQ0FBQyxHQUFHLENBQUM7SUFFZSxDQUFDO0lBQ3pDLGdCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw4QkFBUztBQU10QjtJQUdFLHlCQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZsQyxTQUFJLEdBQUcsbUJBQVcsQ0FBQyxVQUFVLENBQUM7SUFFUSxDQUFDO0lBQ3pDLHNCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2FjdGlvbnMvbmFtZS1saXN0LmFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMvdHlwZSc7XHJcbmltcG9ydCB7IENBVEVHT1JZIH0gZnJvbSAnLi4vY29tbW9uL2NhdGVnb3J5LmNvbW1vbic7XHJcblxyXG4vKipcclxuICogRm9yIGVhY2ggYWN0aW9uIHR5cGUgaW4gYW4gYWN0aW9uIGdyb3VwLCBtYWtlIGEgc2ltcGxlXHJcbiAqIGVudW0gb2JqZWN0IGZvciBhbGwgb2YgdGhpcyBncm91cCdzIGFjdGlvbiB0eXBlcy5cclxuICpcclxuICogVGhlICd0eXBlJyB1dGlsaXR5IGZ1bmN0aW9uIGNvZXJjZXMgc3RyaW5ncyBpbnRvIHN0cmluZ1xyXG4gKiBsaXRlcmFsIHR5cGVzIGFuZCBydW5zIGEgc2ltcGxlIGNoZWNrIHRvIGd1YXJhbnRlZSBhbGxcclxuICogYWN0aW9uIHR5cGVzIGluIHRoZSBhcHBsaWNhdGlvbiBhcmUgdW5pcXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZUxpc3RBY3Rpb25zIHtcclxuICBJTklUOiBzdHJpbmc7XHJcbiAgSU5JVElBTElaRUQ6IHN0cmluZztcclxuICBJTklUX0ZBSUxFRDogc3RyaW5nO1xyXG4gIEFERDogc3RyaW5nO1xyXG4gIE5BTUVfQURERUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzOiBJTmFtZUxpc3RBY3Rpb25zID0ge1xyXG4gIElOSVQ6ICAgICAgICB0eXBlKGAke0NBVEVHT1JZfSBJbml0YCksXHJcbiAgSU5JVElBTElaRUQ6IHR5cGUoYCR7Q0FURUdPUll9IEluaXRpYWxpemVkYCksXHJcbiAgSU5JVF9GQUlMRUQ6IHR5cGUoYCR7Q0FURUdPUll9IEluaXQgRmFpbGVkYCksXHJcbiAgQUREOiAgICAgICAgIHR5cGUoYCR7Q0FURUdPUll9IEFkZGApLFxyXG4gIE5BTUVfQURERUQ6ICB0eXBlKGAke0NBVEVHT1JZfSBOYW1lIEFkZGVkYClcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFdmVyeSBhY3Rpb24gaXMgY29tcHJpc2VkIG9mIGF0IGxlYXN0IGEgdHlwZSBhbmQgYW4gb3B0aW9uYWxcclxuICogcGF5bG9hZC4gRXhwcmVzc2luZyBhY3Rpb25zIGFzIGNsYXNzZXMgZW5hYmxlcyBwb3dlcmZ1bFxyXG4gKiB0eXBlIGNoZWNraW5nIGluIHJlZHVjZXIgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBTZWUgRGlzY3JpbWluYXRlZCBVbmlvbnM6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2FkdmFuY2VkLXR5cGVzLmh0bWwjZGlzY3JpbWluYXRlZC11bmlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbml0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICB0eXBlID0gQWN0aW9uVHlwZXMuSU5JVDtcclxuICBwYXlsb2FkOiBzdHJpbmcgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHR5cGUgPSBBY3Rpb25UeXBlcy5JTklUSUFMSVpFRDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFycmF5PHN0cmluZz4pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgdHlwZSA9IEFjdGlvblR5cGVzLklOSVRfRkFJTEVEO1xyXG4gIHBheWxvYWQ6IHN0cmluZyA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHR5cGUgPSBBY3Rpb25UeXBlcy5BREQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmFtZUFkZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICB0eXBlID0gQWN0aW9uVHlwZXMuTkFNRV9BRERFRDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgYSB0eXBlIGFsaWFzIG9mIGFsbCBhY3Rpb25zIGluIHRoaXMgYWN0aW9uIGdyb3VwXHJcbiAqIHNvIHRoYXQgcmVkdWNlcnMgY2FuIGVhc2lseSBjb21wb3NlIGFjdGlvbiB0eXBlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uc1xyXG4gID0gSW5pdEFjdGlvblxyXG4gIHwgSW5pdGlhbGl6ZWRBY3Rpb25cclxuICB8IEluaXRGYWlsZWRBY3Rpb25cclxuICB8IEFkZEFjdGlvblxyXG4gIHwgTmFtZUFkZGVkQWN0aW9uO1xyXG4iXX0=
