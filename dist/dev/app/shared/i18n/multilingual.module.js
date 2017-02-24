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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
function translateLoaderFactory(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n", '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
;
var MultilingualModule = MultilingualModule_1 = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    return MultilingualModule;
}());
MultilingualModule = MultilingualModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_translate_1.TranslateModule.forRoot([{
                    provide: ng2_translate_1.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (translateLoaderFactory)
                }]),
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            index_2.LangSwitcherComponent
        ],
        exports: [
            index_2.LangSwitcherComponent,
            ng2_translate_1.TranslateModule
        ],
        providers: [
            index_3.MultilingualService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [MultilingualModule])
], MultilingualModule);
exports.MultilingualModule = MultilingualModule;
var MultilingualModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFDL0Msc0NBQWlEO0FBQ2pELDhDQUFtRDtBQUduRCwrQ0FBd0Y7QUFHeEYsdUNBQXVDO0FBR3ZDLDRDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFHdkQsZ0NBQXVDLElBQVU7SUFDL0MsTUFBTSxDQUFDLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLENBQUcsY0FBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsaUJBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RyxDQUFDO0FBRkQsd0RBRUM7QUFBQSxDQUFDO0FBa0NGLElBQWEsa0JBQWtCO0lBVzdCLDRCQUFvQyxZQUFnQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQVhNLDBCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDNUMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBT0gseUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGtCQUFrQjtJQTVCOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixxQkFBWTtZQUNaLG1CQUFXO1lBQ1gsaUJBQVU7WUFDViwrQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QixPQUFPLEVBQUUsK0JBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1lBQ0gseUJBQWMsQ0FBQyxPQUFPLEVBQUU7U0FDekI7UUFDRCxZQUFZLEVBQUU7WUFDWiw2QkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCw2QkFBcUI7WUFDckIsK0JBQWU7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCwyQkFBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztJQVlhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQVh6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IExhbmdTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8vIGZvciBBb1QgY29tcGlsYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoaHR0cDogSHR0cCkge1xyXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHAsIGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvaTE4bmAsICcuanNvbicpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxyXG4gKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoW3tcclxuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICBkZXBzOiBbSHR0cF0sXHJcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxyXG4gICAgfV0pLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIExhbmdTd2l0Y2hlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTGFuZ1N3aXRjaGVyQ29tcG9uZW50LFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE11bHRpbGluZ3VhbFNlcnZpY2VcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUEsXHJcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsTW9kdWxlIHtcclxuXHJcbiAgLy8gb3B0aW9uYWwgdXNhZ2VcclxuICAvLyBpZGVhbGx5IHdlIGNvdWxkIHVzZSB0aGlzIHRvIG92ZXJyaWRlIFRyYW5zbGF0ZU1vZHVsZSwgYnV0IGl0IHJlcXVpcmVzIHRoZSBzdGF0aWMgYWJvdmUgYXQgbW9tZW50XHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aWxpbmd1YWxNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
