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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9zZWxlY3Rpb24tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQVN1QjtBQVd2QixJQUFhLHNCQUFzQjtJQVFqQztRQU5TLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRXhCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFFN0IsQ0FBQztJQUVqQixnREFBZSxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVILDZCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWZVO0lBQVIsWUFBSyxFQUFFOzt1REFBeUI7QUFDeEI7SUFBUixZQUFLLEVBQUU7O3NEQUF1QjtBQUN0QjtJQUFSLFlBQUssRUFBRTs7d0RBQTBCO0FBRXhCO0lBQVQsYUFBTSxFQUFFOzs2REFBb0M7QUFObEMsc0JBQXNCO0lBUGxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1FBQzdDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7O0dBQ1csc0JBQXNCLENBaUJsQztBQWpCWSx3REFBc0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NlbGVjdGlvbi1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdGlvbi1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0aW9uLWNhcmQuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkNhcmRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNoZWNrZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaGFkb3c6Ym9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25Ub2dnbGVDaGVjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHRvZ2dsZVNlbGVjdGlvbihldmVudDogYW55KXtcbiAgICBpZighdGhpcy5kaXNhYmxlZCl7XG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgdGhpcy5vblRvZ2dsZUNoZWNrLmVtaXQoe3ZhbHVlOnRoaXMuY2hlY2tlZH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
