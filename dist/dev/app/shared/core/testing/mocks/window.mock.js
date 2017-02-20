"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WindowMock = (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    WindowMock.prototype.alert = function (msg) {
        return;
    };
    WindowMock.prototype.confirm = function (msg) {
        return;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
var WindowMockFrench = (function (_super) {
    __extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;
var WindowMockNoLanguage = (function (_super) {
    __extends(WindowMockNoLanguage, _super);
    function WindowMockNoLanguage() {
        var _this = _super.call(this) || this;
        _this.navigator.language = undefined;
        return _this;
    }
    return WindowMockNoLanguage;
}(WindowMock));
exports.WindowMockNoLanguage = WindowMockNoLanguage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL3dpbmRvdy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBQUE7UUFDUyxjQUFTLEdBQVE7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUNLLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFPNUIsQ0FBQztJQU5RLDBCQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3RCLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDTSw0QkFBTyxHQUFkLFVBQWUsR0FBVztRQUN4QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLGdDQUFVO0FBY3ZCO0lBQXNDLG9DQUFVO0lBQzlDO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOztJQUNwQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMcUMsVUFBVSxHQUsvQztBQUxZLDRDQUFnQjtBQU83QjtJQUEwQyx3Q0FBVTtJQUNsRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQzs7SUFDdEMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHlDLFVBQVUsR0FLbkQ7QUFMWSxvREFBb0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL3Rlc3RpbmcvbW9ja3Mvd2luZG93Lm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2luZG93TW9jayB7XG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHtcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICB1c2VyQWdlbnQ6ICd0ZXN0aW5nJ1xuICB9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tGcmVuY2ggZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9ICdmci1VUyc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tOb0xhbmd1YWdlIGV4dGVuZHMgV2luZG93TW9jayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYXZpZ2F0b3IubGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
