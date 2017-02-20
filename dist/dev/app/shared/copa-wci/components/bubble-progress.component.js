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
var BubbleProgressComponent = (function () {
    function BubbleProgressComponent(zone) {
        this.zone = zone;
        this._itemcount = 2;
        this.activeIndex = 0;
        this.items = [];
        this.onNodeClick = new core_1.EventEmitter();
    }
    BubbleProgressComponent.prototype.onLinkClick = function (nodeIndex) {
        if (nodeIndex < this.activeIndex) {
            this.onNodeClick.emit({ value: nodeIndex });
        }
    };
    BubbleProgressComponent.prototype.ngOnInit = function () {
    };
    return BubbleProgressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BubbleProgressComponent.prototype, "activeIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BubbleProgressComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BubbleProgressComponent.prototype, "onNodeClick", void 0);
BubbleProgressComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bubble-progress',
        templateUrl: 'bubble-progress.component.html',
        styleUrls: ['bubble-progress.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], BubbleProgressComponent);
exports.BubbleProgressComponent = BubbleProgressComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9idWJibGUtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0k7QUFVbEksSUFBYSx1QkFBdUI7SUFPbEMsaUNBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBTHhCLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBUyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUV0QixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksU0FBZ0I7UUFDMUIsRUFBRSxDQUFBLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFjRCwwQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVILDhCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQTlCVTtJQUFSLFlBQUssRUFBRTs7NERBQXVCO0FBQ3RCO0lBQVIsWUFBSyxFQUFFOzhCQUFPLEtBQUs7c0RBQVk7QUFFdEI7SUFBVCxhQUFNLEVBQUU7OzREQUFrQztBQU5oQyx1QkFBdUI7SUFSbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7UUFDNUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FRMEIsYUFBTTtHQVByQix1QkFBdUIsQ0FpQ25DO0FBakNZLDBEQUF1QiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvYnViYmxlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIE5nWm9uZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYnViYmxlLXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICdidWJibGUtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnViYmxlLXByb2dyZXNzLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX2l0ZW1jb3VudDpudW1iZXI9MjtcbiAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcj0wO1xuICBASW5wdXQoKSBpdGVtczpBcnJheTxzdHJpbmc+PVtdO1xuXG4gIEBPdXRwdXQoKSBvbk5vZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgXG4gICAgXG4gIH1cblxuICBvbkxpbmtDbGljayhub2RlSW5kZXg6bnVtYmVyKXtcbiAgICBpZihub2RlSW5kZXggPCB0aGlzLmFjdGl2ZUluZGV4KXtcbiAgICAgICAgdGhpcy5vbk5vZGVDbGljay5lbWl0KHt2YWx1ZTpub2RlSW5kZXh9KTtcbiAgICB9XG4gIH1cblxuICAvLyBASW5wdXQoKVxuICAvLyBnZXQgaXRlbWNvdW50KCk6bnVtYmVye1xuICAvLyAgIHJldHVybiB0aGlzLl9pdGVtY291bnQ7XG4gIC8vIH1cbiAgLy8gc2V0IGl0ZW1jb3VudCh2YWx1ZTpudW1iZXIpe1xuICAvLyAgIHRoaXMuaXRlbXMgPSAgQXJyYXkodmFsdWUpLmZpbGwoMCk7XG4gICAgXG4gIC8vICAgdGhpcy5faXRlbWNvdW50ID0gdmFsdWU7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5faXRlbWNvdW50KTtcbiAgLy8gfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxufVxuIl19
