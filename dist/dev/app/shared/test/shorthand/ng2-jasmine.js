"use strict";
var testing_1 = require("@angular/core/testing");
;
exports.Ng2Jasmine = {
    ae: afterEach,
    afterEach: afterEach,
    describe: describe,
    fdescribe: fdescribe,
    xdescribe: xdescribe,
    async: testing_1.async,
    fakeAsync: testing_1.fakeAsync,
    be: beforeEach,
    beforeEach: beforeEach,
    e: expect,
    expect: expect,
    fail: fail,
    inject: testing_1.inject,
    it: it,
    fit: fit,
    xit: xit,
    pending: pending,
    spyOn: spyOn,
    tick: testing_1.tick
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGVzdC9zaG9ydGhhbmQvbmcyLWphc21pbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlEQUsrQjtBQXVCOUIsQ0FBQztBQUdXLFFBQUEsVUFBVSxHQUFZO0lBQ2pDLEVBQUUsRUFBRSxTQUFTO0lBQ2IsU0FBUyxFQUFFLFNBQVM7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsS0FBSyxFQUFFLGVBQUs7SUFDWixTQUFTLEVBQUUsbUJBQVM7SUFDcEIsRUFBRSxFQUFFLFVBQVU7SUFDZCxVQUFVLEVBQUUsVUFBVTtJQUN0QixDQUFDLEVBQUUsTUFBTTtJQUNULE1BQU0sRUFBRSxNQUFNO0lBQ2QsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsZ0JBQU07SUFDZCxFQUFFLEVBQUUsRUFBRTtJQUNOLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUUsS0FBSztJQUNaLElBQUksRUFBRSxjQUFJO0NBQ1gsQ0FBQyIsImZpbGUiOiJhcHAvc2hhcmVkL3Rlc3Qvc2hvcnRoYW5kL25nMi1qYXNtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHtcbiAgYXN5bmMsXG4gIGZha2VBc3luYyxcbiAgaW5qZWN0LFxuICB0aWNrXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbi8vIGludGVsbGlzZW5zZSB2aWEgc2hvcnRoYW5kXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RBcGkge1xuICBhZTogRnVuY3Rpb247XG4gIGFmdGVyRWFjaDogRnVuY3Rpb247XG4gIGRlc2NyaWJlOiBGdW5jdGlvbjtcbiAgZmRlc2NyaWJlOiBGdW5jdGlvbjtcbiAgeGRlc2NyaWJlOiBGdW5jdGlvbjtcbiAgYXN5bmMoZm46IEZ1bmN0aW9uKTogRnVuY3Rpb247XG4gIGZha2VBc3luYyhmbjogRnVuY3Rpb24pOiBGdW5jdGlvbjtcbiAgYmUoZm46IEZ1bmN0aW9uKTogdm9pZDtcbiAgYmVmb3JlRWFjaChmbjogRnVuY3Rpb24pOiB2b2lkO1xuICBlKGFjdHVhbDogYW55KTogamFzbWluZS5NYXRjaGVycztcbiAgZXhwZWN0KGFjdHVhbDogYW55KTogamFzbWluZS5NYXRjaGVycztcbiAgZmFpbChlPzogYW55KTogdm9pZDtcbiAgaW5qZWN0KHRva2VuczogQXJyYXk8YW55PiwgZm46IEZ1bmN0aW9uKTogRnVuY3Rpb247XG4gIGl0KG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uLCB0aW1lT3V0PzogbnVtYmVyKTogdm9pZDtcbiAgZml0KG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uLCB0aW1lT3V0PzogbnVtYmVyKTogdm9pZDtcbiAgeGl0KG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uLCB0aW1lT3V0PzogbnVtYmVyKTogdm9pZDtcbiAgcGVuZGluZyhyZWFzb24/OiBzdHJpbmcpOiB2b2lkO1xuICBzcHlPbihvYmplY3Q6IGFueSwgbWV0aG9kOiBzdHJpbmcpOiBqYXNtaW5lLlNweTtcbiAgdGljayhkZWxheT86IG51bWJlcik6IHZvaWQ7XG59O1xuXG4vLyBzaG9ydGhhbmQgLSByZWR1Y2VzIGJvaWxlcnBsYXRlIGluIGV2ZXJ5IHRlc3RcbmV4cG9ydCBjb25zdCBOZzJKYXNtaW5lOiBUZXN0QXBpID0ge1xuICBhZTogYWZ0ZXJFYWNoLCAvLyBzaG9ydGhhbmRcbiAgYWZ0ZXJFYWNoOiBhZnRlckVhY2gsXG4gIGRlc2NyaWJlOiBkZXNjcmliZSxcbiAgZmRlc2NyaWJlOiBmZGVzY3JpYmUsXG4gIHhkZXNjcmliZTogeGRlc2NyaWJlLFxuICBhc3luYzogYXN5bmMsXG4gIGZha2VBc3luYzogZmFrZUFzeW5jLFxuICBiZTogYmVmb3JlRWFjaCwgIC8vIHNob3J0aGFuZCBiZWZvcmVFYWNoXG4gIGJlZm9yZUVhY2g6IGJlZm9yZUVhY2gsXG4gIGU6IGV4cGVjdCwgLy8gc2hvcnRoYW5kIGV4cGVjdFxuICBleHBlY3Q6IGV4cGVjdCxcbiAgZmFpbDogZmFpbCxcbiAgaW5qZWN0OiBpbmplY3QsXG4gIGl0OiBpdCxcbiAgZml0OiBmaXQsXG4gIHhpdDogeGl0LFxuICBwZW5kaW5nOiBwZW5kaW5nLFxuICBzcHlPbjogc3B5T24sXG4gIHRpY2s6IHRpY2tcbn07XG4iXX0=
