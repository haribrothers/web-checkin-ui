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
        selector: 'label[data-label]',
        host: {
            '[class.data-label]': 'true'
        }
    })
], DataLabel);
exports.DataLabel = DataLabel;
var DataContent = (function () {
    function DataContent() {
        this.isBold = false;
        this.contentColor = '#1F4A7D';
        this.uppercase = true;
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
DataContent = __decorate([
    core_1.Directive({
        selector: 'label[data-content]',
        host: {
            '[class.data-content]': 'true',
            '[class.content-bold]': 'isBold',
            '[class.content-upper]': 'uppercase',
            '[style.color]': 'contentColor'
        }
    })
], DataContent);
exports.DataContent = DataContent;
var DataSubContent = (function () {
    function DataSubContent() {
    }
    return DataSubContent;
}());
DataSubContent = __decorate([
    core_1.Directive({
        selector: 'label[data-sub-content]',
        host: {
            '[class.data-sub-content]': 'true'
        },
    })
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
    })
], DataFieldComponent);
exports.DataFieldComponent = DataFieldComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9kYXRhLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXVGO0FBVXZGLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksU0FBUztJQU5yQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixJQUFJLEVBQUM7WUFDSCxvQkFBb0IsRUFBQyxNQUFNO1NBQzVCO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUztBQWF0QixJQUFhLFdBQVc7SUFUeEI7UUFVVyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVUsU0FBUyxDQUFDO1FBQ2hDLGNBQVMsR0FBVyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFIVTtJQUFSLFlBQUssRUFBRTs7MkNBQXdCO0FBQ3ZCO0lBQVIsWUFBSyxFQUFFOztpREFBaUM7QUFDaEM7SUFBUixZQUFLLEVBQUU7OzhDQUEwQjtBQUh2QixXQUFXO0lBVHZCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLElBQUksRUFBQztZQUNILHNCQUFzQixFQUFDLE1BQU07WUFDN0Isc0JBQXNCLEVBQUMsUUFBUTtZQUMvQix1QkFBdUIsRUFBQyxXQUFXO1lBQ25DLGVBQWUsRUFBQyxjQUFjO1NBQy9CO0tBQ0YsQ0FBQztHQUNXLFdBQVcsQ0FJdkI7QUFKWSxrQ0FBVztBQVl4QixJQUFhLGNBQWM7SUFBM0I7SUFFQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsSUFBSSxFQUFDO1lBQ0gsMEJBQTBCLEVBQUMsTUFBTTtTQUNsQztLQUNGLENBQUM7R0FDVyxjQUFjLENBRTFCO0FBRlksd0NBQWM7QUFnQjNCLElBQWEsa0JBQWtCO0lBQS9CO0lBRUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxrQkFBa0I7SUFaOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3RDLENBQUM7R0FNVyxrQkFBa0IsQ0FFOUI7QUFGWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3BhLXdjaS9jb21wb25lbnRzL2RhdGEtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIERpcmVjdGl2ZSwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdsYWJlbFtkYXRhLWxhYmVsXScsXG4gIGhvc3Q6e1xuICAgICdbY2xhc3MuZGF0YS1sYWJlbF0nOid0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIERhdGFMYWJlbHtcblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdsYWJlbFtkYXRhLWNvbnRlbnRdJyxcbiAgaG9zdDp7XG4gICAgJ1tjbGFzcy5kYXRhLWNvbnRlbnRdJzondHJ1ZScsXG4gICAgJ1tjbGFzcy5jb250ZW50LWJvbGRdJzonaXNCb2xkJyxcbiAgICAnW2NsYXNzLmNvbnRlbnQtdXBwZXJdJzondXBwZXJjYXNlJyxcbiAgICAnW3N0eWxlLmNvbG9yXSc6J2NvbnRlbnRDb2xvcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhQ29udGVudHtcbiAgQElucHV0KCkgaXNCb2xkOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29udGVudENvbG9yOnN0cmluZyA9ICcjMUY0QTdEJztcbiAgQElucHV0KCkgdXBwZXJjYXNlOmJvb2xlYW4gPSB0cnVlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdsYWJlbFtkYXRhLXN1Yi1jb250ZW50XScsXG4gIGhvc3Q6e1xuICAgICdbY2xhc3MuZGF0YS1zdWItY29udGVudF0nOid0cnVlJ1xuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhU3ViQ29udGVudHtcbiAgXG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2RhdGEtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtZmllbGQuY29tcG9uZW50LmNzcyddLCBcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG4vLyA8ZGl2IGNsYXNzPVwiZGF0YS1maWVsZFwiPlxuLy8gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkYXRhLWxhYmVsXCI+c2FtcGxlPC9sYWJlbD5cbi8vICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZGF0YS1jb250ZW50XCI+c2FtcGxlPC9sYWJlbD5cbi8vICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZGF0YS1zdWItY29udGVudFwiPnNhbXBsZTwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGRDb21wb25lbnR7XG5cbn1cbiJdfQ==
