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
var flex_layout_1 = require("@angular/flex-layout");
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
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot()
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFDL0Msc0NBQWlEO0FBQ2pELDhDQUFtRDtBQUNuRCxvREFBd0Q7QUFJeEQsK0NBQXdGO0FBR3hGLHVDQUF1QztBQUd2Qyw0Q0FBMkQ7QUFDM0QsMENBQXVEO0FBR3ZELGdDQUF1QyxJQUFVO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGlCQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEcsQ0FBQztBQUZELHdEQUVDO0FBQUEsQ0FBQztBQW1DRixJQUFhLGtCQUFrQjtJQVc3Qiw0QkFBb0MsWUFBZ0M7UUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNILENBQUM7SUFYTSwwQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxvQkFBa0I7WUFDNUIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQU9ILHlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQkFBa0I7SUE3QjlCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1oscUJBQVk7WUFDWixtQkFBVztZQUNYLGlCQUFVO1lBQ1YsK0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxFQUFFLCtCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNILHlCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDhCQUFnQixDQUFDLE9BQU8sRUFBRTtTQUMzQjtRQUNELFlBQVksRUFBRTtZQUNaLDZCQUFxQjtTQUN0QjtRQUNELE9BQU8sRUFBRTtZQUNQLDZCQUFxQjtZQUNyQiwrQkFBZTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULDJCQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtZQUNoQiw2QkFBc0I7U0FDdkI7S0FDRixDQUFDO0lBWWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsa0JBQWtCO0dBWHpELGtCQUFrQixDQWdCOUI7QUFoQlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiOyBcblxuXG4vLyBsaWJzXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlU3RhdGljTG9hZGVyIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9pbmRleCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTGFuZ1N3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuLy8gZm9yIEFvVCBjb21waWxhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoaHR0cDogSHR0cCkge1xuICByZXR1cm4gbmV3IFRyYW5zbGF0ZVN0YXRpY0xvYWRlcihodHRwLCBgJHtDb25maWcuSVNfTU9CSUxFX05BVElWRSgpID8gJy8nIDogJyd9YXNzZXRzL2kxOG5gLCAnLmpzb24nKTtcbn07XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXG4gICAgfV0pLFxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMYW5nU3dpdGNoZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExhbmdTd2l0Y2hlckNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTXVsdGlsaW5ndWFsU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlsaW5ndWFsTW9kdWxlIHtcblxuICAvLyBvcHRpb25hbCB1c2FnZVxuICAvLyBpZGVhbGx5IHdlIGNvdWxkIHVzZSB0aGlzIHRvIG92ZXJyaWRlIFRyYW5zbGF0ZU1vZHVsZSwgYnV0IGl0IHJlcXVpcmVzIHRoZSBzdGF0aWMgYWJvdmUgYXQgbW9tZW50XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE11bHRpbGluZ3VhbE1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVsdGlsaW5ndWFsTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
