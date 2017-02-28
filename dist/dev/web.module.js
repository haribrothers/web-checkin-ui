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
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
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
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
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
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot()
        ],
        declarations: [
            index_1.APP_COMPONENTS
        ],
        providers: [
            {
                provide: common_1.APP_BASE_HREF,
                useValue: '',
            }
        ],
        bootstrap: [index_1.AppComponent]
    })
], WebModule);
exports.WebModule = WebModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFNBQVMsRUFBRSxDQUFDLG9CQUFZLENBQUM7S0FDMUIsQ0FBQztHQUVXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6IndlYi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7IFxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCJcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUtZGV2dG9vbHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnbmcyLXRyYW5zbGF0ZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQVBQX0NPTVBPTkVOVFMsIEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAucm91dGVzJztcblxuLy8gZmVhdHVyZSBtb2R1bGVzXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2NvcmUvY29yZS5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwUmVkdWNlciB9IGZyb20gJy4vYXBwL3NoYXJlZC9uZ3J4L2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUsIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkgfSBmcm9tICcuL2FwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbEVmZmVjdHMgfSBmcm9tICcuL2FwcC9zaGFyZWQvaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBDb3BhV2NpTW9kdWxlIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2NvcGEtd2NpL2NvcGEtd2NpLm1vZHVsZSc7XG5pbXBvcnQgeyBOYW1lTGlzdEVmZmVjdHMgfSBmcm9tICcuL2FwcC9zaGFyZWQvY29wYS13Y2kvaW5kZXgnO1xuaW1wb3J0ICdoYW1tZXJqcy9oYW1tZXIuanMnO1xuXG4vLyBjb25maWdcbmltcG9ydCB7IENvbmZpZywgV2luZG93U2VydmljZSwgQ29uc29sZVNlcnZpY2UgfSBmcm9tICcuL2FwcC9zaGFyZWQvY29yZS9pbmRleCc7XG5Db25maWcuUExBVEZPUk1fVEFSR0VUID0gQ29uZmlnLlBMQVRGT1JNUy5XRUI7XG5pZiAoU3RyaW5nKCc8JT0gQlVJTERfVFlQRSAlPicpID09PSAnZGV2Jykge1xuICAvLyBvbmx5IG91dHB1dCBjb25zb2xlIGxvZ2dpbmcgaW4gZGV2IG1vZGVcbiAgQ29uZmlnLkRFQlVHLkxFVkVMXzQgPSB0cnVlO1xufVxuXG4vLyBzYW1wbGUgY29uZmlnIChleHRyYSlcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3BhLXdjaS9zZXJ2aWNlcy9hcHAtY29uZmlnJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuL2FwcC9zaGFyZWQvaTE4bi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG4vLyBjdXN0b20gaTE4biBsYW5ndWFnZSBzdXBwb3J0XG5NdWx0aWxpbmd1YWxTZXJ2aWNlLlNVUFBPUlRFRF9MQU5HVUFHRVMgPSBBcHBDb25maWcuU1VQUE9SVEVEX0xBTkdVQUdFUztcblxubGV0IHJvdXRlck1vZHVsZSA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cbmlmIChTdHJpbmcoJzwlPSBUQVJHRVRfREVTS1RPUCAlPicpID09PSAndHJ1ZScpIHtcbiAgQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9IENvbmZpZy5QTEFURk9STVMuREVTS1RPUDtcbiAgLy8gZGVza3RvcCAoZWxlY3Ryb24pIG11c3QgdXNlIGhhc2hcbiAgcm91dGVyTW9kdWxlID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7dXNlSGFzaDogdHJ1ZX0pO1xufVxuXG5kZWNsYXJlIHZhciB3aW5kb3csIGNvbnNvbGU7XG5cbi8vIEZvciBBb1QgY29tcGlsYXRpb24gdG8gd29yazpcbmV4cG9ydCBmdW5jdGlvbiB3aW4oKSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gY29ucygpIHtcbiAgcmV0dXJuIGNvbnNvbGU7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvcmVNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUZhY3Rvcnk6ICh3aW4pIH0sXG4gICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoY29ucykgfVxuICAgIF0pLFxuICAgIHJvdXRlck1vZHVsZSxcbiAgICBBbmFseXRpY3NNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXG4gICAgfV0pLFxuICAgIENvcGFXY2lNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUucHJvdmlkZVN0b3JlKEFwcFJlZHVjZXIpLFxuICAgIFN0b3JlRGV2dG9vbHNNb2R1bGUuaW5zdHJ1bWVudE9ubHlXaXRoRXh0ZW5zaW9uKCksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oTXVsdGlsaW5ndWFsRWZmZWN0cyksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oTmFtZUxpc3RFZmZlY3RzKSxcbiAgICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksXG4gICAgRmxleExheW91dE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQVBQX0NPTVBPTkVOVFNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+JyxcbiAgICAgIFxuICAgIH1cbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdlYk1vZHVsZSB7IH1cbiJdfQ==
