"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var store_devtools_1 = require("@ngrx/store-devtools");
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("./app/components/index");
var app_routes_1 = require("./app/components/app.routes");
var core_module_1 = require("./app/shared/core/core.module");
var index_2 = require("./app/shared/ngrx/index");
var analytics_module_1 = require("./app/shared/analytics/analytics.module");
var multilingual_module_1 = require("./app/shared/i18n/multilingual.module");
var index_3 = require("./app/shared/i18n/index");
var copa_wci_module_1 = require("./app/shared/copa-wci/copa-wci.module");
var index_4 = require("./app/shared/copa-wci/index");
require("hammerjs/hammer.js");
var index_5 = require("./app/shared/core/index");
index_5.Config.PLATFORM_TARGET = index_5.Config.PLATFORMS.WEB;
if (String('dev') === 'dev') {
    index_5.Config.DEBUG.LEVEL_4 = true;
}
var app_config_1 = require("./app/shared/copa-wci/services/app-config");
var multilingual_service_1 = require("./app/shared/i18n/services/multilingual.service");
multilingual_service_1.MultilingualService.SUPPORTED_LANGUAGES = app_config_1.AppConfig.SUPPORTED_LANGUAGES;
var routerModule = router_1.RouterModule.forRoot(app_routes_1.routes);
if (String('false') === 'true') {
    index_5.Config.PLATFORM_TARGET = index_5.Config.PLATFORMS.DESKTOP;
    routerModule = router_1.RouterModule.forRoot(app_routes_1.routes, { useHash: true });
}
function win() {
    return window;
}
exports.win = win;
function cons() {
    return console;
}
exports.cons = cons;
var WebModule = (function () {
    function WebModule() {
    }
    return WebModule;
}());
WebModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_module_1.CoreModule.forRoot([
                { provide: index_5.WindowService, useFactory: (win) },
                { provide: index_5.ConsoleService, useFactory: (cons) }
            ]),
            routerModule,
            analytics_module_1.AnalyticsModule,
            multilingual_module_1.MultilingualModule.forRoot([{
                    provide: ng2_translate_1.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (multilingual_module_1.translateLoaderFactory)
                }]),
            copa_wci_module_1.CopaWciModule,
            store_1.StoreModule.provideStore(index_2.AppReducer),
            store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
            effects_1.EffectsModule.run(index_3.MultilingualEffects),
            effects_1.EffectsModule.run(index_4.NameListEffects),
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            index_1.APP_COMPONENTS
        ],
        providers: [
            {
                provide: common_1.APP_BASE_HREF,
                useValue: ''
            }
        ],
        bootstrap: [index_1.AppComponent]
    })
], WebModule);
exports.WebModule = WebModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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b2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZS1kZXZ0b29scyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IEFQUF9DT01QT05FTlRTLCBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAucm91dGVzJztcclxuXHJcbi8vIGZlYXR1cmUgbW9kdWxlc1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi9hcHAvc2hhcmVkL25ncngvaW5kZXgnO1xyXG5pbXBvcnQgeyBBbmFseXRpY3NNb2R1bGUgfSBmcm9tICcuL2FwcC9zaGFyZWQvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUsIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkgfSBmcm9tICcuL2FwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsRWZmZWN0cyB9IGZyb20gJy4vYXBwL3NoYXJlZC9pMThuL2luZGV4JztcclxuaW1wb3J0IHsgQ29wYVdjaU1vZHVsZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3BhLXdjaS9jb3BhLXdjaS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdEVmZmVjdHMgfSBmcm9tICcuL2FwcC9zaGFyZWQvY29wYS13Y2kvaW5kZXgnO1xyXG5pbXBvcnQgJ2hhbW1lcmpzL2hhbW1lci5qcyc7XHJcblxyXG4vLyBjb25maWdcclxuaW1wb3J0IHsgQ29uZmlnLCBXaW5kb3dTZXJ2aWNlLCBDb25zb2xlU2VydmljZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3JlL2luZGV4JztcclxuQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9IENvbmZpZy5QTEFURk9STVMuV0VCO1xyXG5pZiAoU3RyaW5nKCc8JT0gQlVJTERfVFlQRSAlPicpID09PSAnZGV2Jykge1xyXG4gIC8vIG9ubHkgb3V0cHV0IGNvbnNvbGUgbG9nZ2luZyBpbiBkZXYgbW9kZVxyXG4gIENvbmZpZy5ERUJVRy5MRVZFTF80ID0gdHJ1ZTtcclxufVxyXG5cclxuLy8gc2FtcGxlIGNvbmZpZyAoZXh0cmEpXHJcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3BhLXdjaS9zZXJ2aWNlcy9hcHAtY29uZmlnJztcclxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9pMThuL3NlcnZpY2VzL211bHRpbGluZ3VhbC5zZXJ2aWNlJztcclxuLy8gY3VzdG9tIGkxOG4gbGFuZ3VhZ2Ugc3VwcG9ydFxyXG5NdWx0aWxpbmd1YWxTZXJ2aWNlLlNVUFBPUlRFRF9MQU5HVUFHRVMgPSBBcHBDb25maWcuU1VQUE9SVEVEX0xBTkdVQUdFUztcclxuXHJcbmxldCByb3V0ZXJNb2R1bGUgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xyXG5cclxuaWYgKFN0cmluZygnPCU9IFRBUkdFVF9ERVNLVE9QICU+JykgPT09ICd0cnVlJykge1xyXG4gIENvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLkRFU0tUT1A7XHJcbiAgLy8gZGVza3RvcCAoZWxlY3Ryb24pIG11c3QgdXNlIGhhc2hcclxuICByb3V0ZXJNb2R1bGUgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHt1c2VIYXNoOiB0cnVlfSk7XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdywgY29uc29sZTtcclxuXHJcbi8vIEZvciBBb1QgY29tcGlsYXRpb24gdG8gd29yazpcclxuZXhwb3J0IGZ1bmN0aW9uIHdpbigpIHtcclxuICByZXR1cm4gd2luZG93O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjb25zKCkge1xyXG4gIHJldHVybiBjb25zb2xlO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUZhY3Rvcnk6ICh3aW4pIH0sXHJcbiAgICAgIHsgcHJvdmlkZTogQ29uc29sZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IChjb25zKSB9XHJcbiAgICBdKSxcclxuICAgIHJvdXRlck1vZHVsZSxcclxuICAgIEFuYWx5dGljc01vZHVsZSxcclxuICAgIE11bHRpbGluZ3VhbE1vZHVsZS5mb3JSb290KFt7XHJcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgZGVwczogW0h0dHBdLFxyXG4gICAgICB1c2VGYWN0b3J5OiAodHJhbnNsYXRlTG9hZGVyRmFjdG9yeSlcclxuICAgIH1dKSxcclxuICAgIENvcGFXY2lNb2R1bGUsXHJcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXHJcbiAgICBTdG9yZURldnRvb2xzTW9kdWxlLmluc3RydW1lbnRPbmx5V2l0aEV4dGVuc2lvbigpLFxyXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oTXVsdGlsaW5ndWFsRWZmZWN0cyksXHJcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihOYW1lTGlzdEVmZmVjdHMpLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFQUF9DT01QT05FTlRTXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcclxuICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXHJcbiAgICB9XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2ViTW9kdWxlIHsgfVxyXG4iXX0=
