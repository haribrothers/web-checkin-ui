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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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b2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IEFQUF9DT01QT05FTlRTLCBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwLnJvdXRlcyc7XG5cbi8vIGZlYXR1cmUgbW9kdWxlc1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IEFwcFJlZHVjZXIgfSBmcm9tICcuL2FwcC9zaGFyZWQvbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBBbmFseXRpY3NNb2R1bGUgfSBmcm9tICcuL2FwcC9zaGFyZWQvYW5hbHl0aWNzL2FuYWx5dGljcy5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlLCB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi9hcHAvc2hhcmVkL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxFZmZlY3RzIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2kxOG4vaW5kZXgnO1xuaW1wb3J0IHsgQ29wYVdjaU1vZHVsZSB9IGZyb20gJy4vYXBwL3NoYXJlZC9jb3BhLXdjaS9jb3BhLXdjaS5tb2R1bGUnO1xuaW1wb3J0IHsgTmFtZUxpc3RFZmZlY3RzIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2NvcGEtd2NpL2luZGV4JztcbmltcG9ydCAnaGFtbWVyanMvaGFtbWVyLmpzJztcblxuLy8gY29uZmlnXG5pbXBvcnQgeyBDb25maWcsIFdpbmRvd1NlcnZpY2UsIENvbnNvbGVTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2NvcmUvaW5kZXgnO1xuQ29uZmlnLlBMQVRGT1JNX1RBUkdFVCA9IENvbmZpZy5QTEFURk9STVMuV0VCO1xuaWYgKFN0cmluZygnPCU9IEJVSUxEX1RZUEUgJT4nKSA9PT0gJ2RldicpIHtcbiAgLy8gb25seSBvdXRwdXQgY29uc29sZSBsb2dnaW5nIGluIGRldiBtb2RlXG4gIENvbmZpZy5ERUJVRy5MRVZFTF80ID0gdHJ1ZTtcbn1cblxuLy8gc2FtcGxlIGNvbmZpZyAoZXh0cmEpXG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuL2FwcC9zaGFyZWQvY29wYS13Y2kvc2VydmljZXMvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9hcHAvc2hhcmVkL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UnO1xuLy8gY3VzdG9tIGkxOG4gbGFuZ3VhZ2Ugc3VwcG9ydFxuTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTID0gQXBwQ29uZmlnLlNVUFBPUlRFRF9MQU5HVUFHRVM7XG5cbmxldCByb3V0ZXJNb2R1bGUgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5pZiAoU3RyaW5nKCc8JT0gVEFSR0VUX0RFU0tUT1AgJT4nKSA9PT0gJ3RydWUnKSB7XG4gIENvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLkRFU0tUT1A7XG4gIC8vIGRlc2t0b3AgKGVsZWN0cm9uKSBtdXN0IHVzZSBoYXNoXG4gIHJvdXRlck1vZHVsZSA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywge3VzZUhhc2g6IHRydWV9KTtcbn1cblxuZGVjbGFyZSB2YXIgd2luZG93LCBjb25zb2xlO1xuXG4vLyBGb3IgQW9UIGNvbXBpbGF0aW9uIHRvIHdvcms6XG5leHBvcnQgZnVuY3Rpb24gd2luKCkge1xuICByZXR1cm4gd2luZG93O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnMoKSB7XG4gIHJldHVybiBjb25zb2xlO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VGYWN0b3J5OiAod2luKSB9LFxuICAgICAgeyBwcm92aWRlOiBDb25zb2xlU2VydmljZSwgdXNlRmFjdG9yeTogKGNvbnMpIH1cbiAgICBdKSxcbiAgICByb3V0ZXJNb2R1bGUsXG4gICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZS5mb3JSb290KFt7XG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICBkZXBzOiBbSHR0cF0sXG4gICAgICB1c2VGYWN0b3J5OiAodHJhbnNsYXRlTG9hZGVyRmFjdG9yeSlcbiAgICB9XSksXG4gICAgQ29wYVdjaU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXG4gICAgU3RvcmVEZXZ0b29sc01vZHVsZS5pbnN0cnVtZW50T25seVdpdGhFeHRlbnNpb24oKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihNdWx0aWxpbmd1YWxFZmZlY3RzKSxcbiAgICBFZmZlY3RzTW9kdWxlLnJ1bihOYW1lTGlzdEVmZmVjdHMpLFxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBUFBfQ09NUE9ORU5UU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICAgfVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV2ViTW9kdWxlIHsgfVxuIl19
