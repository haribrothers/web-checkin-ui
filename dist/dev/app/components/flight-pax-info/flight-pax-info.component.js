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
var core_1 = require("@angular/core");
var alert_message_service_1 = require("../../shared/copa-wci/components/alert-message.service");
var FlightPaxInfoComponent = (function () {
    function FlightPaxInfoComponent(alertService) {
        this.alertService = alertService;
        this.alertService.showAlert$.subscribe(function (message) {
            console.log("helloo");
            console.log(message);
        });
    }
    FlightPaxInfoComponent.prototype.ngOnInit = function () {
    };
    return FlightPaxInfoComponent;
}());
FlightPaxInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-flight-pax-info',
        templateUrl: 'flight-pax-info.component.html',
        styleUrls: ['flight-pax-info.component.css']
    }),
    __metadata("design:paramtypes", [alert_message_service_1.AlertMessageService])
], FlightPaxInfoComponent);
exports.FlightPaxInfoComponent = FlightPaxInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ZsaWdodC1wYXgtaW5mby9mbGlnaHQtcGF4LWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0dBQTBGO0FBUTFGLElBQWEsc0JBQXNCO0lBRWpDLGdDQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFSCw2QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksc0JBQXNCO0lBTmxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQzdDLENBQUM7cUNBR2tDLDJDQUFtQjtHQUYxQyxzQkFBc0IsQ0FjbEM7QUFkWSx3REFBc0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZmxpZ2h0LXBheC1pbmZvL2ZsaWdodC1wYXgtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbGVydE1lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hbGVydC1tZXNzYWdlLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mbGlnaHQtcGF4LWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJ2ZsaWdodC1wYXgtaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbGlnaHQtcGF4LWluZm8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZsaWdodFBheEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydE1lc3NhZ2VTZXJ2aWNlKSB7IFxuICAgIFxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dBbGVydCQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJoZWxsb29cIik7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuYWxlcnRTZXJ2aWNlLmFkZEVycm9yTWVzc2FnZShcImhpXCIpO1xuICB9XG5cbn1cbiJdfQ==
