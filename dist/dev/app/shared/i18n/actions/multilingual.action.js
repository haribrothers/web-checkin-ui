"use strict";
var type_1 = require("../../core/utils/type");
var category_common_1 = require("../common/category.common");
exports.ActionTypes = {
    CHANGE: type_1.type("[" + category_common_1.CATEGORY + "] Change"),
    LANG_CHANGED: type_1.type("[" + category_common_1.CATEGORY + "] Lang Changed"),
    LANG_UNSUPPORTED: type_1.type("[" + category_common_1.CATEGORY + "] Lang Unsupported")
};
var ChangeAction = (function () {
    function ChangeAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.CHANGE;
    }
    return ChangeAction;
}());
exports.ChangeAction = ChangeAction;
var LangChangedAction = (function () {
    function LangChangedAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.LANG_CHANGED;
    }
    return LangChangedAction;
}());
exports.LangChangedAction = LangChangedAction;
var LangUnsupportedAction = (function () {
    function LangUnsupportedAction(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.LANG_UNSUPPORTED;
    }
    return LangUnsupportedAction;
}());
exports.LangUnsupportedAction = LangUnsupportedAction;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLDhDQUE2QztBQUc3Qyw2REFBcUQ7QUFnQnhDLFFBQUEsV0FBVyxHQUF5QjtJQUMvQyxNQUFNLEVBQVksV0FBSSxDQUFDLE1BQUksMEJBQVEsYUFBVSxDQUFDO0lBQzlDLFlBQVksRUFBTSxXQUFJLENBQUMsTUFBSSwwQkFBUSxtQkFBZ0IsQ0FBQztJQUNwRCxnQkFBZ0IsRUFBRSxXQUFJLENBQUMsTUFBSSwwQkFBUSx1QkFBb0IsQ0FBQztDQUN6RCxDQUFDO0FBU0Y7SUFHRSxzQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGbEMsU0FBSSxHQUFHLG1CQUFXLENBQUMsTUFBTSxDQUFDO0lBRVksQ0FBQztJQUN6QyxtQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksb0NBQVk7QUFNekI7SUFHRSwyQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGbEMsU0FBSSxHQUFHLG1CQUFXLENBQUMsWUFBWSxDQUFDO0lBRU0sQ0FBQztJQUN6Qyx3QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksOENBQWlCO0FBTTlCO0lBR0UsK0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmxDLFNBQUksR0FBRyxtQkFBVyxDQUFDLGdCQUFnQixDQUFDO0lBRUUsQ0FBQztJQUN6Qyw0QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksc0RBQXFCIiwiZmlsZSI6ImFwcC9zaGFyZWQvaTE4bi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJzXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy90eXBlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBDQVRFR09SWSB9IGZyb20gJy4uL2NvbW1vbi9jYXRlZ29yeS5jb21tb24nO1xyXG5cclxuLyoqXHJcbiAqIEZvciBlYWNoIGFjdGlvbiB0eXBlIGluIGFuIGFjdGlvbiBncm91cCwgbWFrZSBhIHNpbXBsZVxyXG4gKiBlbnVtIG9iamVjdCBmb3IgYWxsIG9mIHRoaXMgZ3JvdXAncyBhY3Rpb24gdHlwZXMuXHJcbiAqXHJcbiAqIFRoZSAndHlwZScgdXRpbGl0eSBmdW5jdGlvbiBjb2VyY2VzIHN0cmluZ3MgaW50byBzdHJpbmdcclxuICogbGl0ZXJhbCB0eXBlcyBhbmQgcnVucyBhIHNpbXBsZSBjaGVjayB0byBndWFyYW50ZWUgYWxsXHJcbiAqIGFjdGlvbiB0eXBlcyBpbiB0aGUgYXBwbGljYXRpb24gYXJlIHVuaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRpbGluZ3VhbEFjdGlvbnMge1xyXG4gIENIQU5HRTogc3RyaW5nO1xyXG4gIExBTkdfQ0hBTkdFRDogc3RyaW5nO1xyXG4gIExBTkdfVU5TVVBQT1JURUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGVzOiBJTXVsdGlsaW5ndWFsQWN0aW9ucyA9IHtcclxuICBDSEFOR0U6ICAgICAgICAgICB0eXBlKGBbJHtDQVRFR09SWX1dIENoYW5nZWApLFxyXG4gIExBTkdfQ0hBTkdFRDogICAgIHR5cGUoYFske0NBVEVHT1JZfV0gTGFuZyBDaGFuZ2VkYCksXHJcbiAgTEFOR19VTlNVUFBPUlRFRDogdHlwZShgWyR7Q0FURUdPUll9XSBMYW5nIFVuc3VwcG9ydGVkYClcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFdmVyeSBhY3Rpb24gaXMgY29tcHJpc2VkIG9mIGF0IGxlYXN0IGEgdHlwZSBhbmQgYW4gb3B0aW9uYWxcclxuICogcGF5bG9hZC4gRXhwcmVzc2luZyBhY3Rpb25zIGFzIGNsYXNzZXMgZW5hYmxlcyBwb3dlcmZ1bFxyXG4gKiB0eXBlIGNoZWNraW5nIGluIHJlZHVjZXIgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBTZWUgRGlzY3JpbWluYXRlZCBVbmlvbnM6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2FkdmFuY2VkLXR5cGVzLmh0bWwjZGlzY3JpbWluYXRlZC11bmlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHR5cGUgPSBBY3Rpb25UeXBlcy5DSEFOR0U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHR5cGUgPSBBY3Rpb25UeXBlcy5MQU5HX0NIQU5HRUQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ1Vuc3VwcG9ydGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICB0eXBlID0gQWN0aW9uVHlwZXMuTEFOR19VTlNVUFBPUlRFRDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgYSB0eXBlIGFsaWFzIG9mIGFsbCBhY3Rpb25zIGluIHRoaXMgYWN0aW9uIGdyb3VwXHJcbiAqIHNvIHRoYXQgcmVkdWNlcnMgY2FuIGVhc2lseSBjb21wb3NlIGFjdGlvbiB0eXBlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uc1xyXG4gID0gQ2hhbmdlQWN0aW9uXHJcbiAgfCBMYW5nQ2hhbmdlZEFjdGlvblxyXG4gIHwgTGFuZ1Vuc3VwcG9ydGVkQWN0aW9uO1xyXG4iXX0=
