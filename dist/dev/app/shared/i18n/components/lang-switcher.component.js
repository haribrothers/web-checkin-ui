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
var store_1 = require("@ngrx/store");
var index_1 = require("../../core/index");
var log_service_1 = require("../../core/services/log.service");
var index_2 = require("../../electron/index");
var multilingual = require("../index");
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(log, store) {
        var _this = this;
        this.log = log;
        this.store = store;
        this.supportedLanguages = multilingual.MultilingualService.SUPPORTED_LANGUAGES;
        store.take(1).subscribe(function (s) {
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[e].code;
        if (index_1.Config.IS_MOBILE_NATIVE()) {
            if (e) {
                lang = this.supportedLanguages[e].code;
            }
        }
        this.log.debug("Language change: " + lang);
        this.store.dispatch(new multilingual.ChangeAction(lang));
    };
    return LangSwitcherComponent;
}());
LangSwitcherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lang-switcher',
        templateUrl: 'lang-switcher.component.html',
        styleUrls: ['lang-switcher.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [log_service_1.LogService, store_1.Store])
], LangSwitcherComponent);
exports.LangSwitcherComponent = LangSwitcherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEQ7QUFDNUQscUNBQW9DO0FBR3BDLDBDQUFpRDtBQUNqRCwrREFBNkQ7QUFFN0QsOENBQTREO0FBQzVELHVDQUF5QztBQVN6QyxJQUFhLHFCQUFxQjtJQUtoQywrQkFBb0IsR0FBZSxFQUFVLEtBQXVCO1FBQXBFLGlCQWFDO1FBYm1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUY3RCx1QkFBa0IsR0FBaUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO1FBRzdGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtZQUU3QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEIsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBRXJELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBRWYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFvQixJQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHFCQUFxQjtJQVBqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDMUMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FNeUIsd0JBQVUsRUFBaUIsYUFBSztHQUw5QyxxQkFBcUIsQ0FnQ2pDO0FBaENZLHNEQUFxQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgQ29tcG9uZW50LFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IENvbmZpZywgSUxhbmcgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tICcuLi8uLi9uZ3J4L2luZGV4JztcclxuaW1wb3J0IHsgRWxlY3Ryb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9pbmRleCc7XHJcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbGFuZy1zd2l0Y2hlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFuZ1N3aXRjaGVyQ29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIGxhbmc6IHN0cmluZztcclxuICBwdWJsaWMgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBBcnJheTxJTGFuZz4gPSBtdWx0aWxpbmd1YWwuTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPikge1xyXG4gICAgc3RvcmUudGFrZSgxKS5zdWJzY3JpYmUoKHM6IGFueSkgPT4ge1xyXG4gICAgICAvLyBzICYmIHMuMThuIC0gZW5zdXJlcyB0ZXN0aW5nIHdvcmtzIGluIGFsbCBjYXNlcyAoc2luY2Ugc29tZSB0ZXN0cyBkb250IHVzZSBpMThuIHN0YXRlKVxyXG4gICAgICB0aGlzLmxhbmcgPSBzICYmIHMuaTE4biA/IHMuaTE4bi5sYW5nIDogJyc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoQ29uZmlnLklTX0RFU0tUT1AoKSkge1xyXG4gICAgICAvLyBhbGxvdyBlbGVjdHJvbiBtZW51IHRvIHRhbGsgdG8gY29tcG9uZW50XHJcbiAgICAgIEVsZWN0cm9uRXZlbnRTZXJ2aWNlLm9uKCdjaGFuZ2VMYW5nJykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHtcclxuICAgICAgICAvLyBhbGVydChlKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUxhbmcoeyB0YXJnZXQ6IHsgdmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGFuZyhlOiBhbnkpIHtcclxuICAgIC8vIGFsZXJ0KGUpO1xyXG4gICAgbGV0IGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1tlXS5jb2RlOyAvLyBmYWxsYmFjayB0byBkZWZhdWx0ICdlbidcclxuXHJcbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xyXG4gICAgICBpZiAoZSkge1xyXG4gICAgICAgIGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1tlXS5jb2RlO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgdGhpcy5sb2cuZGVidWcoYExhbmd1YWdlIGNoYW5nZTogJHtsYW5nfWApO1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbihsYW5nKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
