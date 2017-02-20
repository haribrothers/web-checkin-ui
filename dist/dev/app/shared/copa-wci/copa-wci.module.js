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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var index_1 = require("./components/index");
var index_2 = require("./services/index");
var multilingual_module_1 = require("../i18n/multilingual.module");
var CopaWciModule = (function () {
    function CopaWciModule(parentModule) {
        if (parentModule) {
            throw new Error('SampleModule already loaded; Import in root module only.');
        }
    }
    return CopaWciModule;
}());
CopaWciModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            multilingual_module_1.MultilingualModule,
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            index_1.COPA_WCI_COMPONENTS
        ],
        providers: [
            index_2.SAMPLE_PROVIDERS
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ],
        exports: [
            index_1.COPA_WCI_COMPONENTS,
            multilingual_module_1.MultilingualModule
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CopaWciModule])
], CopaWciModule);
exports.CopaWciModule = CopaWciModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29wYS13Y2kubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBdUc7QUFDdkcsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0MsMENBQStDO0FBQy9DLDhDQUFtRDtBQUduRCw0Q0FBeUQ7QUFDekQsMENBQW9EO0FBQ3BELG1FQUFpRTtBQThCakUsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQyxZQUEyQjtRQUM3RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM5RSxDQUFDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxhQUFhO0lBeEJ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLG1CQUFXO1lBQ1gsaUJBQVU7WUFDVixxQkFBWTtZQUNaLHdDQUFrQjtZQUNsQix5QkFBYyxDQUFDLE9BQU8sRUFBRTtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNaLDJCQUFtQjtTQUNwQjtRQUNELFNBQVMsRUFBRTtZQUNULHdCQUFnQjtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtZQUNoQiw2QkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQkFBbUI7WUFDbkIsd0NBQWtCO1NBQ25CO0tBQ0YsQ0FBQztJQUdhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGFBQWE7R0FGcEQsYUFBYSxDQU96QjtBQVBZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29wYS13Y2kubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENPUEFfV0NJX0NPTVBPTkVOVFMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgU0FNUExFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ09QQV9XQ0lfQ09NUE9ORU5UU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTQU1QTEVfUFJPVklERVJTXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENPUEFfV0NJX0NPTVBPTkVOVFMsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29wYVdjaU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3BhV2NpTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTYW1wbGVNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxufVxuIl19
