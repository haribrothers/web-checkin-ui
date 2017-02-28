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
            orgin: ['', forms_1.Validators.required],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHdDQUFvRTtBQUVwRSxzQ0FBeUU7QUFDekUscUNBQW9DO0FBSXBDLGlEQUFtRTtBQUNuRSxpREFBOEQ7QUFDOUQsc0RBQXdEO0FBRXhELG9GQUFzRjtBQVd0RixJQUFhLGFBQWE7SUFNeEIsdUJBQW9CLEtBQXVCLEVBQUUsRUFBZSxFQUFTLFNBQTJCLEVBQVUsY0FBa0M7UUFBeEgsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBMEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFKckksWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFDSCxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUdFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsVUFBVSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxVQUFVO2FBQ2pCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMxQyxVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCO2FBQ0YsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxDQUFNO0lBRWxCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsQ0FBTTtJQUVuQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXpFQSxBQXlFQyxJQUFBO0FBekVZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBTzJCLGFBQUssRUFBaUIsbUJBQVcsRUFBb0Isd0JBQWdCLEVBQTBCLG9DQUFrQjtHQU5qSSxhQUFhLENBeUV6QjtBQXpFWSxzQ0FBYSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnY29kZWx5emVyL3dhbGtlckZhY3Rvcnkvd2Fsa2VyRm4nO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIGxpYnNcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgSUFwcFN0YXRlLCBnZXROYW1lcyB9IGZyb20gJy4uLy4uL3NoYXJlZC9uZ3J4L2luZGV4JztcbmltcG9ydCAqIGFzIG5hbWVMaXN0IGZyb20gJy4uLy4uL3NoYXJlZC9jb3BhLXdjaS9pbmRleCc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvdG9vbGJhci5jb21wb25lbnQnXG5pbXBvcnQgeyBQcm9ncmVzc2JhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5kZWNsYXJlIHZhciBOU0luZGV4UGF0aCwgVUlUYWJsZVZpZXdTY3JvbGxQb3NpdGlvbjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBuYW1lcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIG5ld05hbWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc2FtcGxlOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBmaW5kUmVzRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPElBcHBTdGF0ZT4sIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIHJvdXRlcmV4dDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB0b29sYmFyU2VydmljZTogUHJvZ3Jlc3NiYXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5uYW1lcyQgPSBzdG9yZS5sZXQoZ2V0TmFtZXMpO1xuICAgIHRoaXMuZmluZFJlc0Zvcm0gPSBmYi5ncm91cCh7XG4gICAgICB0aWNrZXQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcbiAgICAgIG9yZ2luOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0b29sYmFyU2VydmljZS5zaG93UHJvZ3Jlc3MkLnN1YnNjcmliZShcbiAgICAgIHNob3cgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzaG93KTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLnRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcygpO1xuICB9XG5cbiAgLypcbiAgICogQHBhcmFtIG5ld25hbWUgIGFueSB0ZXh0IGFzIGlucHV0LlxuICAgKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IG5hbWVMaXN0LkFkZEFjdGlvbih0aGlzLm5ld05hbWUpKTtcbiAgICB0aGlzLnNhbXBsZS5wdXNoKHRoaXMubmV3TmFtZSk7XG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWFkQWJvdXQoKSB7XG4gICAgLy8gVHJ5IHRoaXMgaW4gdGhlIHtOfSBhcHBcbiAgICAvLyB7Tn0gY2FuIHVzZSB0aGVzZSBhbmltYXRpb24gb3B0aW9uc1xuICAgIHRoaXMucm91dGVyZXh0Lm5hdmlnYXRlKFsnL2Fib3V0J10sIHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgIG5hbWU6ICdzbGlkZVRvcCcsXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaG5hZ2VkZXRlY3QoKSB7XG4gICAgdGhpcy50b29sYmFyU2VydmljZS5zaG93UHJvZ3Jlc3ModHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRvb2xiYXJTZXJ2aWNlLmhpZGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy5yb3V0ZXJleHQubmF2aWdhdGUoWycvZmxpZ2h0UGF4SW5mbyddLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0sIDUwMDApXG5cbiAgfVxuXG4gIHNob3dBbGVydChldmVudDogYW55KSB7XG4gICAgYWxlcnQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgb25GaXJzdE9wZW4oYjogYW55KSB7XG4gICAgLy8gIGFsZXJ0KFwiSGlcIik7XG4gIH1cblxuICBvbkZpcnN0Q2xvc2UoYTogYW55KSB7XG4gICAgLy8gIGFsZXJ0KFwiSGVsbG9vXCIpO1xuICB9XG59XG4iXX0=
