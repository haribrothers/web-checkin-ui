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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsMENBQStDO0FBQy9DLHNDQUEyQztBQUMzQyw4Q0FBbUQ7QUFHbkQsNENBQXFEO0FBQ3JELDBDQUFrRDtBQWlDbEQsSUFBYSxVQUFVO0lBUXJCLG9CQUFvQyxZQUF3QjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQVZNLGtCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDNUMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQU1ILGlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxVQUFVO0lBckJ0QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLHFCQUFZO1lBQ1osaUJBQVU7WUFDVix5QkFBYyxDQUFDLE9BQU8sRUFBRTtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNaLHVCQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixtQkFBVztZQUNYLHFCQUFZO1lBQ1osaUJBQVU7WUFDVix1QkFBZTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNULHNCQUFjO1NBQ2Y7S0FDRixDQUFDO0lBU2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsVUFBVTtHQVJqRCxVQUFVLENBYXRCO0FBYlksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL2NvcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5pbXBvcnQgeyBDT1JFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmludGVyZmFjZSBJQ29yZU1vZHVsZU9wdGlvbnMge1xuICB3aW5kb3c/OiBhbnk7XG4gIGNvbnNvbGU/OiBhbnk7XG59XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ09SRV9ESVJFQ1RJVkVTXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgQ09SRV9ESVJFQ1RJVkVTXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENPUkVfUFJPVklERVJTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIC8vIGNvbmZpZ3VyZWRQcm92aWRlcnM6ICpyZXF1aXJlZCB0byBjb25maWd1cmUgV2luZG93U2VydmljZSBhbmQgQ29uc29sZVNlcnZpY2UgcGVyIHBsYXRmb3JtXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IGNvbmZpZ3VyZWRQcm92aWRlcnNcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
