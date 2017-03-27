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
        this.label = "";
        this.onToggleCheck = new core_1.EventEmitter();
        this.onCardEvent = new core_1.EventEmitter();
    }
    SelectionCardComponent.prototype.ngOnInit = function () {
        if (this.checked) {
            this.onToggleCheck.emit({ value: this.checked });
        }
    };
    SelectionCardComponent.prototype.cardSelection = function (event) {
        console.log(event);
        if (event.type == "keyup") {
            var keyevent = event;
            this.onCardEvent.emit({
                value: this.checked,
                type: "keyevent",
                key: keyevent.which
            });
        }
        else {
            this.onCardEvent.emit({
                value: this.checked,
                type: "mouseevent",
            });
        }
    };
    SelectionCardComponent.prototype.toggleSelection = function (event) {
        console.log(event);
        if (!this.disabled) {
            if (event.type == "keyup") {
                var keyevent = event;
                if (keyevent.keyCode === 32 || keyevent.keyCode === 13) {
                    this.checked = !this.checked;
                    this.onToggleCheck.emit({
                        value: this.checked,
                        type: "keyevent",
                        key: keyevent.which
                    });
                }
            }
            else {
                this.checked = !this.checked;
                this.onToggleCheck.emit({
                    value: this.checked,
                    type: "mouseevent",
                });
            }
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
    core_1.Input(),
    __metadata("design:type", String)
], SelectionCardComponent.prototype, "label", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectionCardComponent.prototype, "onToggleCheck", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectionCardComponent.prototype, "onCardEvent", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQVd1QjtBQVd2QixJQUFhLHNCQUFzQjtJQVVsQztRQVJTLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFVBQUssR0FBWSxFQUFFLENBQUE7UUFFbEIsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSTNDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFRCw4Q0FBYSxHQUFiLFVBQWMsS0FBVTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLFFBQVEsR0FBa0IsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ25CLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUs7YUFDbkIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDbkIsSUFBSSxFQUFFLFlBQVk7YUFDbEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFHRCxnREFBZSxHQUFmLFVBQWdCLEtBQVU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxRQUFRLEdBQWtCLEtBQUssQ0FBQztnQkFFcEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTzt3QkFDbkIsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO2dCQUNKLENBQUM7WUFDRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO29CQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ25CLElBQUksRUFBRSxZQUFZO2lCQUNsQixDQUFDLENBQUM7WUFDSixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFDRiw2QkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUEzRFM7SUFBUixZQUFLLEVBQUU7O3VEQUEwQjtBQUN6QjtJQUFSLFlBQUssRUFBRTs7c0RBQXdCO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOzt3REFBMkI7QUFDMUI7SUFBUixZQUFLLEVBQUU7O3FEQUFvQjtBQUVsQjtJQUFULGFBQU0sRUFBRTs7NkRBQW9DO0FBQ25DO0lBQVQsYUFBTSxFQUFFOzsyREFBa0M7QUFSL0Isc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3JDLENBQUM7O0dBQ1csc0JBQXNCLENBNkRsQztBQTdEWSx3REFBc0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFwcGxpY2F0aW9uSW5pdFN0YXR1cyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRPbkRlc3Ryb3ksXG5cdE9uSW5pdCxcblx0T3V0cHV0LFxuXHRWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NlbGVjdGlvbi1jYXJkJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VsZWN0aW9uLWNhcmQuY29tcG9uZW50LmNzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgc2hhZG93OiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTsgXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgID0gXCJcIlxuXG5cdEBPdXRwdXQoKSBvblRvZ2dsZUNoZWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgb25DYXJkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMub25Ub2dnbGVDaGVjay5lbWl0KHsgdmFsdWU6IHRoaXMuY2hlY2tlZCB9KTtcblx0XHR9XG5cdH1cblxuXHRjYXJkU2VsZWN0aW9uKGV2ZW50OiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT0gXCJrZXl1cFwiKSB7XG5cdFx0XHR2YXIga2V5ZXZlbnQgPSA8S2V5Ym9hcmRFdmVudD5ldmVudDtcblx0XHRcdHRoaXMub25DYXJkRXZlbnQuZW1pdCh7XG5cdFx0XHRcdHZhbHVlOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdHR5cGU6IFwia2V5ZXZlbnRcIixcblx0XHRcdFx0a2V5OiBrZXlldmVudC53aGljaFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25DYXJkRXZlbnQuZW1pdCh7XG5cdFx0XHRcdHZhbHVlOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdHR5cGU6IFwibW91c2VldmVudFwiLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHR0b2dnbGVTZWxlY3Rpb24oZXZlbnQ6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdGlmIChldmVudC50eXBlID09IFwia2V5dXBcIikge1xuXHRcdFx0XHR2YXIga2V5ZXZlbnQgPSA8S2V5Ym9hcmRFdmVudD5ldmVudDtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChrZXlldmVudC5rZXlDb2RlID09PSAzMiB8fCBrZXlldmVudC5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdFx0XHRcdFx0dGhpcy5vblRvZ2dsZUNoZWNrLmVtaXQoe1xuXHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMuY2hlY2tlZCxcblx0XHRcdFx0XHRcdHR5cGU6IFwia2V5ZXZlbnRcIixcblx0XHRcdFx0XHRcdGtleToga2V5ZXZlbnQud2hpY2hcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcblx0XHRcdFx0dGhpcy5vblRvZ2dsZUNoZWNrLmVtaXQoe1xuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdFx0dHlwZTogXCJtb3VzZWV2ZW50XCIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19
