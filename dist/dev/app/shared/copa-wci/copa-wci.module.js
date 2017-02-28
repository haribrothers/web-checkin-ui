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
var flex_layout_1 = require("@angular/flex-layout");
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
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot()
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29wYS13Y2kubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBdUc7QUFDdkcsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3QyxzQ0FBMkM7QUFDM0MsMENBQStDO0FBQy9DLDhDQUFtRDtBQUNuRCxvREFBd0Q7QUFJeEQsNENBQXlEO0FBQ3pELDBDQUFvRDtBQUNwRCxtRUFBaUU7QUErQmpFLElBQWEsYUFBYTtJQUV4Qix1QkFBb0MsWUFBMkI7UUFDN0QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksYUFBYTtJQXpCekIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixtQkFBVztZQUNYLGlCQUFVO1lBQ1YscUJBQVk7WUFDWix3Q0FBa0I7WUFDbEIseUJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsOEJBQWdCLENBQUMsT0FBTyxFQUFFO1NBQzNCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osMkJBQW1CO1NBQ3BCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsd0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLDJCQUFtQjtZQUNuQix3Q0FBa0I7U0FDbkI7S0FDRixDQUFDO0lBR2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsYUFBYTtHQUZwRCxhQUFhLENBT3pCO0FBUFksc0NBQWEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb3BhLXdjaS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7IFxuXG5cbi8vIGFwcFxuaW1wb3J0IHsgQ09QQV9XQ0lfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBTQU1QTEVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxNb2R1bGUgfSBmcm9tICcuLi9pMThuL211bHRpbGluZ3VhbC5tb2R1bGUnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTXVsdGlsaW5ndWFsTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDT1BBX1dDSV9DT01QT05FTlRTXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFNBTVBMRV9QUk9WSURFUlNcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ09QQV9XQ0lfQ09NUE9ORU5UUyxcbiAgICBNdWx0aWxpbmd1YWxNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3BhV2NpTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcGFXY2lNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NhbXBsZU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
