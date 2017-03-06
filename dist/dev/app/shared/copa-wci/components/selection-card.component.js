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
        this.disabled = false;
        this.onToggleCheck = new core_1.EventEmitter();
    }
    SelectionCardComponent.prototype.ngOnInit = function () {
        if (this.checked) {
            this.onToggleCheck.emit({ value: this.checked });
        }
    };
    SelectionCardComponent.prototype.toggleSelection = function (event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onToggleCheck.emit({ value: this.checked });
        }
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
    core_1.Input(),
    __metadata("design:type", Boolean)
], SelectionCardComponent.prototype, "disabled", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQVd1QjtBQVd2QixJQUFhLHNCQUFzQjtJQVFqQztRQU5TLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFJN0MsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQUdELGdEQUFlLEdBQWYsVUFBZ0IsS0FBVTtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBRUgsNkJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBeEJVO0lBQVIsWUFBSyxFQUFFOzt1REFBMEI7QUFDekI7SUFBUixZQUFLLEVBQUU7O3NEQUF3QjtBQUN2QjtJQUFSLFlBQUssRUFBRTs7d0RBQTJCO0FBRXpCO0lBQVQsYUFBTSxFQUFFOzs2REFBb0M7QUFObEMsc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7O0dBQ1csc0JBQXNCLENBMEJsQztBQTFCWSx3REFBc0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQXBwbGljYXRpb25Jbml0U3RhdHVzLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2VsZWN0aW9uLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0aW9uLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNoYWRvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9uVG9nZ2xlQ2hlY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMub25Ub2dnbGVDaGVjay5lbWl0KHsgdmFsdWU6IHRoaXMuY2hlY2tlZCB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZVNlbGVjdGlvbihldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgdGhpcy5vblRvZ2dsZUNoZWNrLmVtaXQoeyB2YWx1ZTogdGhpcy5jaGVja2VkIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
