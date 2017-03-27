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
var alert_message_service_1 = require("../../shared/copa-wci/components/alert-message.service");
var HomeComponent = (function () {
    function HomeComponent(store, fb, routerext, toolbarService, alertService) {
        this.store = store;
        this.routerext = routerext;
        this.toolbarService = toolbarService;
        this.alertService = alertService;
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
        this.alertService.addErrorMessage("This is a error message");
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
            _this.alertService.addErrorMessage("This is a error message. this can be repeated", true);
            _this.alertService.addWarningMessage("This is a Warning message. this can be repeated", true);
            _this.toolbarService.hideProgress();
        }, 2000);
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
    __metadata("design:paramtypes", [store_1.Store, forms_1.FormBuilder, index_1.RouterExtensions, toolbar_service_1.ProgressbarService, alert_message_service_1.AlertMessageService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHdDQUFvRTtBQUVwRSxzQ0FBeUU7QUFDekUscUNBQW9DO0FBSXBDLGlEQUFtRTtBQUNuRSxpREFBOEQ7QUFDOUQsc0RBQXdEO0FBRXhELG9GQUFzRjtBQUV0RixnR0FBMEY7QUFVMUYsSUFBYSxhQUFhO0lBTXhCLHVCQUFvQixLQUF1QixFQUFFLEVBQWUsRUFBUyxTQUEyQixFQUFVLGNBQWtDLEVBQVUsWUFBaUM7UUFBbkssVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBMEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFKaEwsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNwQyxVQUFBLElBQUk7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRy9ELENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFHRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsRUFBRTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsK0NBQStDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDMUYsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpREFBaUQsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUMxRixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBUXJDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVWLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksQ0FBTTtJQUVsQixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLENBQU07SUFFbkIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQTtBQTlFWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQyxDQUFDO3FDQU8yQixhQUFLLEVBQWlCLG1CQUFXLEVBQW9CLHdCQUFnQixFQUEwQixvQ0FBa0IsRUFBd0IsMkNBQW1CO0dBTjVLLGFBQWEsQ0E4RXpCO0FBOUVZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICdjb2RlbHl6ZXIvd2Fsa2VyRmFjdG9yeS93YWxrZXJGbic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zLCBDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29yZS9pbmRleCc7XG5pbXBvcnQgeyBJQXBwU3RhdGUsIGdldE5hbWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25ncngvaW5kZXgnO1xuaW1wb3J0ICogYXMgbmFtZUxpc3QgZnJvbSAnLi4vLi4vc2hhcmVkL2NvcGEtd2NpL2luZGV4JztcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy90b29sYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IFByb2dyZXNzYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3Rvb2xiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge0FsZXJ0TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL2FsZXJ0LW1lc3NhZ2Uuc2VydmljZSdcblxuZGVjbGFyZSB2YXIgTlNJbmRleFBhdGgsIFVJVGFibGVWaWV3U2Nyb2xsUG9zaXRpb247XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbmFtZXMkOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBuZXdOYW1lOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNhbXBsZTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBwdWJsaWMgZmluZFJlc0Zvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+LCBmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyByb3V0ZXJleHQ6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdG9vbGJhclNlcnZpY2U6IFByb2dyZXNzYmFyU2VydmljZSwgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0TWVzc2FnZVNlcnZpY2UpIHtcbiAgICB0aGlzLm5hbWVzJCA9IHN0b3JlLmxldChnZXROYW1lcyk7XG4gICAgdGhpcy5maW5kUmVzRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgIHRpY2tldDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxuICAgICAgb3JnaW46IFsnJ10sXG4gICAgICBsYXN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRvb2xiYXJTZXJ2aWNlLnNob3dQcm9ncmVzcyQuc3Vic2NyaWJlKFxuICAgICAgc2hvdyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNob3cpO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmFkZEVycm9yTWVzc2FnZShcIlRoaXMgaXMgYSBlcnJvciBtZXNzYWdlXCIpO1xuICAgIC8vIHRoaXMuZmluZFJlc0Zvcm0uZ2V0KCd0aWNrZXQnKS5kaXNhYmxlKCk7XG4gICAgLy8gdGhpcy50b29sYmFyU2VydmljZS5zaG93UHJvZ3Jlc3MoKTtcbiAgfVxuXG4gIC8qXG4gICAqIEBwYXJhbSBuZXduYW1lICBhbnkgdGV4dCBhcyBpbnB1dC5cbiAgICogQHJldHVybnMgcmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBuYW1lTGlzdC5BZGRBY3Rpb24odGhpcy5uZXdOYW1lKSk7XG4gICAgdGhpcy5zYW1wbGUucHVzaCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVhZEFib3V0KCkge1xuICAgIC8vIFRyeSB0aGlzIGluIHRoZSB7Tn0gYXBwXG4gICAgLy8ge059IGNhbiB1c2UgdGhlc2UgYW5pbWF0aW9uIG9wdGlvbnNcbiAgICB0aGlzLnJvdXRlcmV4dC5uYXZpZ2F0ZShbJy9hYm91dCddLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICBuYW1lOiAnc2xpZGVUb3AnLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2huYWdlZGV0ZWN0KCkge1xuICAgIFxuICAgIHRoaXMudG9vbGJhclNlcnZpY2Uuc2hvd1Byb2dyZXNzKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbGVydFNlcnZpY2UuYWRkRXJyb3JNZXNzYWdlKFwiVGhpcyBpcyBhIGVycm9yIG1lc3NhZ2UuIHRoaXMgY2FuIGJlIHJlcGVhdGVkXCIsIHRydWUpXG4gICAgdGhpcy5hbGVydFNlcnZpY2UuYWRkV2FybmluZ01lc3NhZ2UoXCJUaGlzIGlzIGEgV2FybmluZyBtZXNzYWdlLiB0aGlzIGNhbiBiZSByZXBlYXRlZFwiLCB0cnVlKVxuICAgICAgdGhpcy50b29sYmFyU2VydmljZS5oaWRlUHJvZ3Jlc3MoKTtcbiAgICAgIC8vIHRoaXMucm91dGVyZXh0Lm5hdmlnYXRlKFsnL2ZsaWdodFBheEluZm8nXSwge1xuICAgICAgLy8gICB0cmFuc2l0aW9uOiB7XG4gICAgICAvLyAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAvLyAgICAgbmFtZTogJ3NsaWRlVG9wJyxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSk7XG5cbiAgICB9LCAyMDAwKVxuXG4gIH1cblxuICBzaG93QWxlcnQoZXZlbnQ6IGFueSkge1xuICAgIGFsZXJ0KGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIG9uRmlyc3RPcGVuKGI6IGFueSkge1xuICAgIC8vICBhbGVydChcIkhpXCIpO1xuICB9XG5cbiAgb25GaXJzdENsb3NlKGE6IGFueSkge1xuICAgIC8vICBhbGVydChcIkhlbGxvb1wiKTtcbiAgfVxufVxuIl19
