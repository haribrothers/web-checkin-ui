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
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot()
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsMENBQStDO0FBQy9DLHNDQUEyQztBQUMzQyw4Q0FBbUQ7QUFDbkQsb0RBQXdEO0FBSXhELDRDQUFxRDtBQUNyRCwwQ0FBa0Q7QUFtQ2xELElBQWEsVUFBVTtJQVFyQixvQkFBb0MsWUFBd0I7UUFDMUQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7SUFWTSxrQkFBTyxHQUFkLFVBQWUsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFNSCxpQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksVUFBVTtJQXZCdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixxQkFBWTtZQUNaLGlCQUFVO1lBQ1YseUJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsOEJBQWdCLENBQUMsT0FBTyxFQUFFO1NBRS9CO1FBQ0QsWUFBWSxFQUFFO1lBQ1osdUJBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLG1CQUFXO1lBQ1gscUJBQVk7WUFDWixpQkFBVTtZQUNWLHVCQUFlO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsc0JBQWM7U0FDZjtLQUNGLENBQUM7SUFTYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxVQUFVO0dBUmpELFVBQVUsQ0FhdEI7QUFiWSxnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7IFxuXG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcbmltcG9ydCB7IENPUkVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcblxuaW50ZXJmYWNlIElDb3JlTW9kdWxlT3B0aW9ucyB7XG4gIHdpbmRvdz86IGFueTtcbiAgY29uc29sZT86IGFueTtcbn1cblxuLyoqXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgRmxleExheW91dE1vZHVsZS5mb3JSb290KClcblxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDT1JFX0RJUkVDVElWRVNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBDT1JFX0RJUkVDVElWRVNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ09SRV9QUk9WSURFUlNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbiAgLy8gY29uZmlndXJlZFByb3ZpZGVyczogKnJlcXVpcmVkIHRvIGNvbmZpZ3VyZSBXaW5kb3dTZXJ2aWNlIGFuZCBDb25zb2xlU2VydmljZSBwZXIgcGxhdGZvcm1cbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogY29uZmlndXJlZFByb3ZpZGVyc1xuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
