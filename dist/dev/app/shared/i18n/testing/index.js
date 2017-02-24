"use strict";
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("../index");
var ng2_translate_mock_1 = require("./mocks/ng2-translate.mock");
var ng2_translate_loader_mock_1 = require("./mocks/ng2-translate-loader.mock");
function TEST_MULTILINGUAL_PROVIDERS() {
    var providers = [
        { provide: ng2_translate_1.TranslateLoader, useClass: ng2_translate_loader_mock_1.TranslateLoaderMock },
        { provide: ng2_translate_1.TranslateService, useClass: ng2_translate_mock_1.TranslateMock },
        index_1.MultilingualService
    ];
    return providers;
}
exports.TEST_MULTILINGUAL_PROVIDERS = TEST_MULTILINGUAL_PROVIDERS;
function TEST_MULTILINGUAL_RESET() {
    index_1.MultilingualService.SUPPORTED_LANGUAGES = [
        { code: 'en', title: 'English' }
    ];
}
exports.TEST_MULTILINGUAL_RESET = TEST_MULTILINGUAL_RESET;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBa0U7QUFHbEUsa0NBQStDO0FBRy9DLGlFQUEyRDtBQUMzRCwrRUFBd0U7QUFFeEU7SUFFRSxJQUFJLFNBQVMsR0FBZTtRQUMxQixFQUFFLE9BQU8sRUFBRSwrQkFBZSxFQUFFLFFBQVEsRUFBRSwrQ0FBbUIsRUFBRTtRQUMzRCxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0IsRUFBRSxRQUFRLEVBQUUsa0NBQWEsRUFBRTtRQUN0RCwyQkFBbUI7S0FDcEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQVRELGtFQVNDO0FBRUQ7SUFFRSwyQkFBbUIsQ0FBQyxtQkFBbUIsR0FBRztRQUN4QyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtLQUNqQyxDQUFDO0FBQ0osQ0FBQztBQUxELDBEQUtDIiwiZmlsZSI6ImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICduZzItdHJhbnNsYXRlJztcclxuXHJcbi8vIG1vZHVsZVxyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuLy8gbW9ja3NcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS5tb2NrJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyTW9jayB9IGZyb20gJy4vbW9ja3MvbmcyLXRyYW5zbGF0ZS1sb2FkZXIubW9jayc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9NVUxUSUxJTkdVQUxfUFJPVklERVJTKCk6IEFycmF5PGFueT4ge1xyXG5cclxuICBsZXQgcHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVMb2FkZXJNb2NrIH0sXHJcbiAgICB7IHByb3ZpZGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHVzZUNsYXNzOiBUcmFuc2xhdGVNb2NrIH0sXHJcbiAgICBNdWx0aWxpbmd1YWxTZXJ2aWNlXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIHByb3ZpZGVycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfTVVMVElMSU5HVUFMX1JFU0VUKCk6IHZvaWQge1xyXG4gIC8vIGVuc3VyZSBzdGF0aWMgaXMgcmVzZXRcclxuICBNdWx0aWxpbmd1YWxTZXJ2aWNlLlNVUFBPUlRFRF9MQU5HVUFHRVMgPSBbXHJcbiAgICB7IGNvZGU6ICdlbicsIHRpdGxlOiAnRW5nbGlzaCcgfVxyXG4gIF07XHJcbn1cclxuIl19
