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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var index_1 = require("../../shared/core/index");
var index_2 = require("../../shared/ngrx/index");
var nameList = require("../../shared/copa-wci/index");
var toolbar_service_1 = require("../../shared/copa-wci/components/toolbar.service");
var HomeComponent = (function () {
    function HomeComponent(store, fb, routerext, toolbarService) {
        this.store = store;
        this.routerext = routerext;
        this.toolbarService = toolbarService;
        this.newName = '';
        this.sample = [];
        this.names$ = store.let(index_2.getNames);
        this.findResForm = fb.group({
            ticket: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            orgin: [''],
            lastname: ['', forms_1.Validators.required]
        });
        toolbarService.showProgress$.subscribe(function (show) {
            console.log(show);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addName = function () {
        this.store.dispatch(new nameList.AddAction(this.newName));
        this.sample.push(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent.prototype.readAbout = function () {
        this.routerext.navigate(['/about'], {
            transition: {
                duration: 1000,
                name: 'slideTop',
            }
        });
    };
    HomeComponent.prototype.chnagedetect = function () {
        var _this = this;
        this.toolbarService.showProgress(true);
        setTimeout(function () {
            _this.toolbarService.hideProgress();
            _this.routerext.navigate(['/flightPaxInfo'], {
                transition: {
                    duration: 1000,
                    name: 'slideTop',
                }
            });
        }, 5000);
    };
    HomeComponent.prototype.showAlert = function (event) {
        alert(event.value);
    };
    HomeComponent.prototype.onFirstOpen = function (b) {
    };
    HomeComponent.prototype.onFirstClose = function (a) {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
    }),
    __metadata("design:paramtypes", [store_1.Store, forms_1.FormBuilder, index_1.RouterExtensions, toolbar_service_1.ProgressbarService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHdDQUFvRTtBQUVwRSxzQ0FBeUU7QUFDekUscUNBQW9DO0FBSXBDLGlEQUFtRTtBQUNuRSxpREFBOEQ7QUFDOUQsc0RBQXdEO0FBRXhELG9GQUFzRjtBQVd0RixJQUFhLGFBQWE7SUFNeEIsdUJBQW9CLEtBQXVCLEVBQUUsRUFBZSxFQUFTLFNBQTJCLEVBQVUsY0FBa0M7UUFBeEgsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBMEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFKckksWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNwQyxVQUFBLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBTUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBR0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxVQUFVLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLFVBQVU7YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzFDLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsVUFBVTtpQkFDakI7YUFDRixDQUFDLENBQUM7UUFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFVixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLENBQU07SUFFbEIsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxDQUFNO0lBRW5CLENBQUM7SUFDSCxvQkFBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7S0FDbEMsQ0FBQztxQ0FPMkIsYUFBSyxFQUFpQixtQkFBVyxFQUFvQix3QkFBZ0IsRUFBMEIsb0NBQWtCO0dBTmpJLGFBQWEsQ0F5RXpCO0FBekVZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICdjb2RlbHl6ZXIvd2Fsa2VyRmFjdG9yeS93YWxrZXJGbic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBJQXBwU3RhdGUsIGdldE5hbWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25ncngvaW5kZXgnO1xuaW1wb3J0ICogYXMgbmFtZUxpc3QgZnJvbSAnLi4vLi4vc2hhcmVkL2NvcGEtd2NpL2luZGV4JztcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IFByb2dyZXNzYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3Rvb2xiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmRlY2xhcmUgdmFyIE5TSW5kZXhQYXRoLCBVSVRhYmxlVmlld1Njcm9sbFBvc2l0aW9uO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG5hbWVzJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgbmV3TmFtZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzYW1wbGU6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIGZpbmRSZXNGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPiwgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgcm91dGVyZXh0OiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHRvb2xiYXJTZXJ2aWNlOiBQcm9ncmVzc2JhclNlcnZpY2UpIHtcbiAgICB0aGlzLm5hbWVzJCA9IHN0b3JlLmxldChnZXROYW1lcyk7XG4gICAgdGhpcy5maW5kUmVzRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgIHRpY2tldDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxuICAgICAgb3JnaW46IFsnJ10sXG4gICAgICBsYXN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcyQuc3Vic2NyaWJlKFxuICAgICAgc2hvdyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNob3cpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMudG9vbGJhclNlcnZpY2Uuc2hvd1Byb2dyZXNzKCk7XG4gIH1cblxuICAvKlxuICAgKiBAcGFyYW0gbmV3bmFtZSAgYW55IHRleHQgYXMgaW5wdXQuXG4gICAqIEByZXR1cm5zIHJldHVybiBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cbiAgICovXG4gIGFkZE5hbWUoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbmFtZUxpc3QuQWRkQWN0aW9uKHRoaXMubmV3TmFtZSkpO1xuICAgIHRoaXMuc2FtcGxlLnB1c2godGhpcy5uZXdOYW1lKTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlYWRBYm91dCgpIHtcbiAgICAvLyBUcnkgdGhpcyBpbiB0aGUge059IGFwcFxuICAgIC8vIHtOfSBjYW4gdXNlIHRoZXNlIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgdGhpcy5yb3V0ZXJleHQubmF2aWdhdGUoWycvYWJvdXQnXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNobmFnZWRldGVjdCgpIHtcbiAgICB0aGlzLnRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9vbGJhclNlcnZpY2UuaGlkZVByb2dyZXNzKCk7XG4gICAgICB0aGlzLnJvdXRlcmV4dC5uYXZpZ2F0ZShbJy9mbGlnaHRQYXhJbmZvJ10sIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSwgNTAwMClcblxuICB9XG5cbiAgc2hvd0FsZXJ0KGV2ZW50OiBhbnkpIHtcbiAgICBhbGVydChldmVudC52YWx1ZSk7XG4gIH1cblxuICBvbkZpcnN0T3BlbihiOiBhbnkpIHtcbiAgICAvLyAgYWxlcnQoXCJIaVwiKTtcbiAgfVxuXG4gIG9uRmlyc3RDbG9zZShhOiBhbnkpIHtcbiAgICAvLyAgYWxlcnQoXCJIZWxsb29cIik7XG4gIH1cbn1cbiJdfQ==
