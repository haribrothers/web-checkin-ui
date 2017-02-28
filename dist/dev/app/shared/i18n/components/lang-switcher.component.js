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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBNEQ7QUFDNUQscUNBQW9DO0FBR3BDLDBDQUFpRDtBQUNqRCwrREFBNkQ7QUFFN0QsOENBQTREO0FBQzVELHVDQUF5QztBQVN6QyxJQUFhLHFCQUFxQjtJQUtoQywrQkFBb0IsR0FBZSxFQUFVLEtBQXVCO1FBQXBFLGlCQWFDO1FBYm1CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUY3RCx1QkFBa0IsR0FBaUIsWUFBWSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO1FBRzdGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtZQUU3QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEIsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBRXJELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBRWYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFvQixJQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHFCQUFxQjtJQVBqQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDMUMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FNeUIsd0JBQVUsRUFBaUIsYUFBSztHQUw5QyxxQkFBcUIsQ0FnQ2pDO0FBaENZLHNEQUFxQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcbmltcG9ydCB7IENvbXBvbmVudCxWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29uZmlnLCBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUFwcFN0YXRlIH0gZnJvbSAnLi4vLi4vbmdyeC9pbmRleCc7XG5pbXBvcnQgeyBFbGVjdHJvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2luZGV4JztcbmltcG9ydCAqIGFzIG11bHRpbGluZ3VhbCBmcm9tICcuLi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2xhbmctc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJ2xhbmctc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ1N3aXRjaGVyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgbGFuZzogc3RyaW5nO1xuICBwdWJsaWMgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBBcnJheTxJTGFuZz4gPSBtdWx0aWxpbmd1YWwuTXVsdGlsaW5ndWFsU2VydmljZS5TVVBQT1JURURfTEFOR1VBR0VTO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nOiBMb2dTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxJQXBwU3RhdGU+KSB7XG4gICAgc3RvcmUudGFrZSgxKS5zdWJzY3JpYmUoKHM6IGFueSkgPT4ge1xuICAgICAgLy8gcyAmJiBzLjE4biAtIGVuc3VyZXMgdGVzdGluZyB3b3JrcyBpbiBhbGwgY2FzZXMgKHNpbmNlIHNvbWUgdGVzdHMgZG9udCB1c2UgaTE4biBzdGF0ZSlcbiAgICAgIHRoaXMubGFuZyA9IHMgJiYgcy5pMThuID8gcy5pMThuLmxhbmcgOiAnJztcbiAgICB9KTtcblxuICAgIGlmIChDb25maWcuSVNfREVTS1RPUCgpKSB7XG4gICAgICAvLyBhbGxvdyBlbGVjdHJvbiBtZW51IHRvIHRhbGsgdG8gY29tcG9uZW50XG4gICAgICBFbGVjdHJvbkV2ZW50U2VydmljZS5vbignY2hhbmdlTGFuZycpLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGFsZXJ0KGUpO1xuICAgICAgICB0aGlzLmNoYW5nZUxhbmcoeyB0YXJnZXQ6IHsgdmFsdWU6IGUuZGV0YWlsLnZhbHVlIH0gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMYW5nKGU6IGFueSkge1xuICAgIC8vIGFsZXJ0KGUpO1xuICAgIGxldCBsYW5nID0gdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXNbZV0uY29kZTsgLy8gZmFsbGJhY2sgdG8gZGVmYXVsdCAnZW4nXG5cbiAgICBpZiAoQ29uZmlnLklTX01PQklMRV9OQVRJVkUoKSkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzW2VdLmNvZGU7XG4gICAgICB9XG4gICAgfSBcbiAgICB0aGlzLmxvZy5kZWJ1ZyhgTGFuZ3VhZ2UgY2hhbmdlOiAke2xhbmd9YCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbihsYW5nKSk7XG4gIH1cbn1cbiJdfQ==
