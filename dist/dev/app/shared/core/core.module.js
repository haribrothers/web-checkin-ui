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
var index_1 = require("./directives/index");
var index_2 = require("./services/index");
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded; Import in root module only.');
        }
    }
    CoreModule.forRoot = function (configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: configuredProviders
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            http_1.HttpModule,
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            index_1.CORE_DIRECTIVES
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            http_1.HttpModule,
            index_1.CORE_DIRECTIVES
        ],
        providers: [
            index_2.CORE_PROVIDERS
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsMENBQStDO0FBQy9DLHNDQUEyQztBQUMzQyw4Q0FBbUQ7QUFHbkQsNENBQXFEO0FBQ3JELDBDQUFrRDtBQWlDbEQsSUFBYSxVQUFVO0lBUXJCLG9CQUFvQyxZQUF3QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQVZNLGtCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDNUMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQU1ILGlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxVQUFVO0lBckJ0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLHFCQUFZO1lBQ1osaUJBQVU7WUFDVix5QkFBYyxDQUFDLE9BQU8sRUFBRTtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNaLHVCQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixtQkFBVztZQUNYLHFCQUFZO1lBQ1osaUJBQVU7WUFDVix1QkFBZTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULHNCQUFjO1NBQ2Y7S0FDRixDQUFDO0lBU2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsVUFBVTtHQVJqRCxVQUFVLENBYXRCO0FBYlksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL2NvcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuLy8gbW9kdWxlXHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XHJcbmltcG9ydCB7IENPUkVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIElDb3JlTW9kdWxlT3B0aW9ucyB7XHJcbiAgd2luZG93PzogYW55O1xyXG4gIGNvbnNvbGU/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ09SRV9ESVJFQ1RJVkVTXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBDT1JFX0RJUkVDVElWRVNcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ09SRV9QUk9WSURFUlNcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuICAvLyBjb25maWd1cmVkUHJvdmlkZXJzOiAqcmVxdWlyZWQgdG8gY29uZmlndXJlIFdpbmRvd1NlcnZpY2UgYW5kIENvbnNvbGVTZXJ2aWNlIHBlciBwbGF0Zm9ybVxyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
