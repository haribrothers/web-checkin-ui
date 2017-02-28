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
var SelectionCardComponent = (function () {
    function SelectionCardComponent() {
        this.checked = false;
        this.shadow = true;
        this.onToggleCheck = new core_1.EventEmitter();
    }
    SelectionCardComponent.prototype.toggleSelection = function (event) {
        this.checked = !this.checked;
        this.onToggleCheck.emit({ value: this.checked });
    };
    return SelectionCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectionCardComponent.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectionCardComponent.prototype, "shadow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectionCardComponent.prototype, "onToggleCheck", void 0);
SelectionCardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selection-card',
        templateUrl: './selection-card.component.html',
        styleUrls: ['./selection-card.component.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], SelectionCardComponent);
exports.SelectionCardComponent = SelectionCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQVN1QjtBQVd2QixJQUFhLHNCQUFzQjtJQU9qQztRQUxTLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFXLElBQUksQ0FBQztRQUVyQixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFFakIsZ0RBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFSCw2QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBWlU7SUFBUixZQUFLLEVBQUU7O3VEQUF5QjtBQUN4QjtJQUFSLFlBQUssRUFBRTs7c0RBQXVCO0FBRXJCO0lBQVQsYUFBTSxFQUFFOzs2REFBb0M7QUFMbEMsc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7O0dBQ1csc0JBQXNCLENBY2xDO0FBZFksd0RBQXNCIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPdXRwdXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZWxlY3Rpb24tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25DYXJkQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjaGVja2VkOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hhZG93OmJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBvblRvZ2dsZUNoZWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdG9nZ2xlU2VsZWN0aW9uKGV2ZW50OiBhbnkpe1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5vblRvZ2dsZUNoZWNrLmVtaXQoe3ZhbHVlOnRoaXMuY2hlY2tlZH0pO1xuICB9XG5cbn1cbiJdfQ==
