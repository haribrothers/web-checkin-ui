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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEg7QUFDNUgsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFDL0Msc0NBQWlEO0FBQ2pELDhDQUFtRDtBQUduRCwrQ0FBd0Y7QUFHeEYsdUNBQXVDO0FBR3ZDLDRDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFHdkQsZ0NBQXVDLElBQVU7SUFDL0MsTUFBTSxDQUFDLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLENBQUcsY0FBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsaUJBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4RyxDQUFDO0FBRkQsd0RBRUM7QUFBQSxDQUFDO0FBa0NGLElBQWEsa0JBQWtCO0lBVzdCLDRCQUFvQyxZQUFnQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQVhNLDBCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDNUMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBT0gseUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGtCQUFrQjtJQTVCOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixxQkFBWTtZQUNaLG1CQUFXO1lBQ1gsaUJBQVU7WUFDViwrQkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QixPQUFPLEVBQUUsK0JBQWU7b0JBQ3hCLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO1lBQ0gseUJBQWMsQ0FBQyxPQUFPLEVBQUU7U0FDekI7UUFDRCxZQUFZLEVBQUU7WUFDWiw2QkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCw2QkFBcUI7WUFDckIsK0JBQWU7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCwyQkFBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO0tBQ0YsQ0FBQztJQVlhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQVh6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlciB9IGZyb20gJ25nMi10cmFuc2xhdGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvcmUvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IExhbmdTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8vIGZvciBBb1QgY29tcGlsYXRpb25cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHApIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVTdGF0aWNMb2FkZXIoaHR0cCwgYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9pMThuYCwgJy5qc29uJyk7XG59O1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoW3tcbiAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgIGRlcHM6IFtIdHRwXSxcbiAgICAgIHVzZUZhY3Rvcnk6ICh0cmFuc2xhdGVMb2FkZXJGYWN0b3J5KVxuICAgIH1dKSxcbiAgICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGFuZ1N3aXRjaGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMYW5nU3dpdGNoZXJDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE11bHRpbGluZ3VhbFNlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbE1vZHVsZSB7XG5cbiAgLy8gb3B0aW9uYWwgdXNhZ2VcbiAgLy8gaWRlYWxseSB3ZSBjb3VsZCB1c2UgdGhpcyB0byBvdmVycmlkZSBUcmFuc2xhdGVNb2R1bGUsIGJ1dCBpdCByZXF1aXJlcyB0aGUgc3RhdGljIGFib3ZlIGF0IG1vbWVudFxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmVkUHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBNdWx0aWxpbmd1YWxNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011bHRpbGluZ3VhbE1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
