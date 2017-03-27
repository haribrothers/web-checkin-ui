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
var DataLabel = (function () {
    function DataLabel() {
    }
    return DataLabel;
}());
DataLabel = __decorate([
    core_1.Directive({
        selector: 'span[data-label]',
        host: {
            '[class.data-label]': 'true'
        }
    }),
    __metadata("design:paramtypes", [])
], DataLabel);
exports.DataLabel = DataLabel;
var DataContent = (function () {
    function DataContent() {
        this.isBold = false;
        this.contentColor = '#1F4A7D';
        this.uppercase = true;
        this.wraptext = true;
    }
    return DataContent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataContent.prototype, "isBold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataContent.prototype, "contentColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataContent.prototype, "uppercase", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataContent.prototype, "wraptext", void 0);
DataContent = __decorate([
    core_1.Directive({
        selector: 'span[data-content]',
        host: {
            '[class.data-content]': 'true',
            '[class.content-bold]': 'isBold',
            '[class.content-upper]': 'uppercase',
            '[class.content-nowrap]': '!wraptext',
            '[style.color]': 'contentColor'
        }
    }),
    __metadata("design:paramtypes", [])
], DataContent);
exports.DataContent = DataContent;
var DataSubContent = (function () {
    function DataSubContent() {
    }
    return DataSubContent;
}());
DataSubContent = __decorate([
    core_1.Directive({
        selector: 'span[data-sub-content]',
        host: {
            '[class.data-sub-content]': 'true'
        },
    }),
    __metadata("design:paramtypes", [])
], DataSubContent);
exports.DataSubContent = DataSubContent;
var DataFieldComponent = (function () {
    function DataFieldComponent() {
    }
    return DataFieldComponent;
}());
DataFieldComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'data-field',
        templateUrl: './data-field.component.html',
        styleUrls: ['./data-field.component.css'],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], DataFieldComponent);
exports.DataFieldComponent = DataFieldComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9kYXRhLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBVXZGLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksU0FBUztJQU5yQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixJQUFJLEVBQUM7WUFDSCxvQkFBb0IsRUFBQyxNQUFNO1NBQzVCO0tBQ0YsQ0FBQzs7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVM7QUFjdEIsSUFBYSxXQUFXO0lBVnhCO1FBV1csV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFVLFNBQVMsQ0FBQztRQUNoQyxjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxJQUFJLENBQUM7SUFFbkMsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFMVTtJQUFSLFlBQUssRUFBRTs7MkNBQXdCO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOztpREFBaUM7QUFDaEM7SUFBUixZQUFLLEVBQUU7OzhDQUEwQjtBQUN6QjtJQUFSLFlBQUssRUFBRTs7NkNBQXlCO0FBSnRCLFdBQVc7SUFWdkIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsSUFBSSxFQUFDO1lBQ0gsc0JBQXNCLEVBQUMsTUFBTTtZQUM3QixzQkFBc0IsRUFBQyxRQUFRO1lBQy9CLHVCQUF1QixFQUFDLFdBQVc7WUFDbkMsd0JBQXdCLEVBQUMsV0FBVztZQUNwQyxlQUFlLEVBQUMsY0FBYztTQUMvQjtLQUNGLENBQUM7O0dBQ1csV0FBVyxDQU12QjtBQU5ZLGtDQUFXO0FBY3hCLElBQWEsY0FBYztJQUEzQjtJQUVBLENBQUM7SUFBRCxxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxJQUFJLEVBQUM7WUFDSCwwQkFBMEIsRUFBQyxNQUFNO1NBQ2xDO0tBQ0YsQ0FBQzs7R0FDVyxjQUFjLENBRTFCO0FBRlksd0NBQWM7QUFnQjNCLElBQWEsa0JBQWtCO0lBQS9CO0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxrQkFBa0I7SUFaOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7O0dBTVcsa0JBQWtCLENBRTlCO0FBRlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9kYXRhLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBEaXJlY3RpdmUsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnc3BhbltkYXRhLWxhYmVsXScsXG4gIGhvc3Q6e1xuICAgICdbY2xhc3MuZGF0YS1sYWJlbF0nOid0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERhdGFMYWJlbHtcblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdzcGFuW2RhdGEtY29udGVudF0nLFxuICBob3N0OntcbiAgICAnW2NsYXNzLmRhdGEtY29udGVudF0nOid0cnVlJyxcbiAgICAnW2NsYXNzLmNvbnRlbnQtYm9sZF0nOidpc0JvbGQnLFxuICAgICdbY2xhc3MuY29udGVudC11cHBlcl0nOid1cHBlcmNhc2UnLFxuICAgICdbY2xhc3MuY29udGVudC1ub3dyYXBdJzonIXdyYXB0ZXh0JyxcbiAgICAnW3N0eWxlLmNvbG9yXSc6J2NvbnRlbnRDb2xvcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhQ29udGVudHtcbiAgQElucHV0KCkgaXNCb2xkOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29udGVudENvbG9yOnN0cmluZyA9ICcjMUY0QTdEJztcbiAgQElucHV0KCkgdXBwZXJjYXNlOmJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB3cmFwdGV4dDpib29sZWFuID0gdHJ1ZTtcblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdzcGFuW2RhdGEtc3ViLWNvbnRlbnRdJyxcbiAgaG9zdDp7XG4gICAgJ1tjbGFzcy5kYXRhLXN1Yi1jb250ZW50XSc6J3RydWUnXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTdWJDb250ZW50e1xuICBcbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZGF0YS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1maWVsZC5jb21wb25lbnQuY3NzJ10sIFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIDxkaXYgY2xhc3M9XCJkYXRhLWZpZWxkXCI+XG4vLyAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImRhdGEtbGFiZWxcIj5zYW1wbGU8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkYXRhLWNvbnRlbnRcIj5zYW1wbGU8L2xhYmVsPlxuLy8gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkYXRhLXN1Yi1jb250ZW50XCI+c2FtcGxlPC9sYWJlbD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuZXhwb3J0IGNsYXNzIERhdGFGaWVsZENvbXBvbmVudHtcblxufVxuIl19
