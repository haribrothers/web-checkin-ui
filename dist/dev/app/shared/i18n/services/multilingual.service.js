"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ng2_translate_1 = require("ng2-translate");
var index_1 = require("../../analytics/index");
var window_service_1 = require("../../core/services/window.service");
var category_common_1 = require("../common/category.common");
var index_2 = require("../actions/index");
var MultilingualService = (function (_super) {
    __extends(MultilingualService, _super);
    function MultilingualService(analytics, translate, win, store) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.translate = translate;
        _this.win = win;
        _this.store = store;
        _this.category = category_common_1.CATEGORY;
        translate.setDefaultLang('en');
        var userLang = win.navigator.language.split('-')[0];
        store.select('i18n').subscribe(function (state) {
            _this.translate.use(state.lang);
        });
        _this.store.dispatch(new index_2.ChangeAction(userLang));
        return _this;
    }
    return MultilingualService;
}(index_1.Analytics));
MultilingualService.SUPPORTED_LANGUAGES = [
    { code: 'en', title: 'English' }
];
MultilingualService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.AnalyticsService,
        ng2_translate_1.TranslateService,
        window_service_1.WindowService,
        store_1.Store])
], MultilingualService);
exports.MultilingualService = MultilingualService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQW9DO0FBQ3BDLCtDQUFpRDtBQUdqRCwrQ0FBb0U7QUFFcEUscUVBQW1FO0FBR25FLDZEQUFxRDtBQUVyRCwwQ0FBZ0Q7QUFJaEQsSUFBYSxtQkFBbUI7SUFBUyx1Q0FBUztJQVFoRCw2QkFDUyxTQUEyQixFQUMxQixTQUEyQixFQUMzQixHQUFrQixFQUNsQixLQUFnQztRQUoxQyxZQU1FLGtCQUFNLFNBQVMsQ0FBQyxTQWlCakI7UUF0QlEsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDMUIsZUFBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsU0FBRyxHQUFILEdBQUcsQ0FBZTtRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUd4QyxLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFRLENBQUM7UUFHekIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUcvQixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHcEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUF5QjtZQUV2RCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFHSCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsQ0FoQ3dDLGlCQUFTLEdBZ0NqRDtBQTVCZSx1Q0FBbUIsR0FBaUI7SUFDaEQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Q0FDakMsQ0FBQztBQU5TLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO3FDQVVTLHdCQUFnQjtRQUNmLGdDQUFnQjtRQUN0Qiw4QkFBYTtRQUNYLGFBQUs7R0FaWCxtQkFBbUIsQ0FnQy9CO0FBaENZLGtEQUFtQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICduZzItdHJhbnNsYXRlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBBbmFseXRpY3MsIEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xyXG5pbXBvcnQgeyBJTGFuZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy93aW5kb3cuc2VydmljZSc7XHJcblxyXG4vLyBtb2R1bGVcclxuaW1wb3J0IHsgQ0FURUdPUlkgfSBmcm9tICcuLi9jb21tb24vY2F0ZWdvcnkuY29tbW9uJztcclxuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcclxuaW1wb3J0IHsgQ2hhbmdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG4vLyBzZXJ2aWNlXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE11bHRpbGluZ3VhbFNlcnZpY2UgZXh0ZW5kcyBBbmFseXRpY3Mge1xyXG5cclxuICAvLyBkZWZhdWx0IHN1cHBvcnRlZCBsYW5ndWFnZXNcclxuICAvLyBzZWUgd2ViLm1vZHVsZS50cyBmb3IgZXhhbXBsZSBvZiBob3cgdG8gcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWVcclxuICBwdWJsaWMgc3RhdGljIFNVUFBPUlRFRF9MQU5HVUFHRVM6IEFycmF5PElMYW5nPiA9IFtcclxuICAgIHsgY29kZTogJ2VuJywgdGl0bGU6ICdFbmdsaXNoJyB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdpbjogV2luZG93U2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPElNdWx0aWxpbmd1YWxTdGF0ZT5cclxuICApIHtcclxuICAgIHN1cGVyKGFuYWx5dGljcyk7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gQ0FURUdPUlk7XHJcblxyXG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcclxuXHJcbiAgICAvLyB1c2UgYnJvd3Nlci9wbGF0Zm9ybSBsYW5nIGlmIGF2YWlsYWJsZVxyXG4gICAgbGV0IHVzZXJMYW5nID0gd2luLm5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdO1xyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzXHJcbiAgICBzdG9yZS5zZWxlY3QoJ2kxOG4nKS5zdWJzY3JpYmUoKHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUpID0+IHtcclxuICAgICAgLy8gdXBkYXRlIG5nMi10cmFuc2xhdGUgd2hpY2ggd2lsbCBjYXVzZSB0cmFuc2xhdGlvbnMgdG8gb2NjdXIgd2hlcmV2ZXIgdGhlIFRyYW5zbGF0ZVBpcGUgaXMgdXNlZCBpbiB0aGUgdmlld1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZS51c2Uoc3RhdGUubGFuZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0IHRoZSBsYW5nXHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VBY3Rpb24odXNlckxhbmcpKTtcclxuICB9XHJcbn1cclxuIl19
