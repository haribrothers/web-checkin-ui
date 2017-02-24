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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9idWJibGUtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0k7QUFVbEksSUFBYSx1QkFBdUI7SUFPbEMsaUNBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBTHhCLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBUyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUV0QixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksU0FBZ0I7UUFDMUIsRUFBRSxDQUFBLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFjRCwwQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVILDhCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQTlCVTtJQUFSLFlBQUssRUFBRTs7NERBQXVCO0FBQ3RCO0lBQVIsWUFBSyxFQUFFOzhCQUFPLEtBQUs7c0RBQVk7QUFFdEI7SUFBVCxhQUFNLEVBQUU7OzREQUFrQztBQU5oQyx1QkFBdUI7SUFSbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7UUFDNUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDdEMsQ0FBQztxQ0FRMEIsYUFBTTtHQVByQix1QkFBdUIsQ0FpQ25DO0FBakNZLDBEQUF1QiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvYnViYmxlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIE5nWm9uZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdidWJibGUtcHJvZ3Jlc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYnViYmxlLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYnViYmxlLXByb2dyZXNzLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdWJibGVQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgX2l0ZW1jb3VudDpudW1iZXI9MjtcclxuICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyPTA7XHJcbiAgQElucHV0KCkgaXRlbXM6QXJyYXk8c3RyaW5nPj1bXTtcclxuXHJcbiAgQE91dHB1dCgpIG9uTm9kZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvbkxpbmtDbGljayhub2RlSW5kZXg6bnVtYmVyKXtcclxuICAgIGlmKG5vZGVJbmRleCA8IHRoaXMuYWN0aXZlSW5kZXgpe1xyXG4gICAgICAgIHRoaXMub25Ob2RlQ2xpY2suZW1pdCh7dmFsdWU6bm9kZUluZGV4fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBASW5wdXQoKVxyXG4gIC8vIGdldCBpdGVtY291bnQoKTpudW1iZXJ7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5faXRlbWNvdW50O1xyXG4gIC8vIH1cclxuICAvLyBzZXQgaXRlbWNvdW50KHZhbHVlOm51bWJlcil7XHJcbiAgLy8gICB0aGlzLml0ZW1zID0gIEFycmF5KHZhbHVlKS5maWxsKDApO1xyXG4gICAgXHJcbiAgLy8gICB0aGlzLl9pdGVtY291bnQgPSB2YWx1ZTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuX2l0ZW1jb3VudCk7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
