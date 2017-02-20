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
var Accordion = (function () {
    function Accordion() {
        this.isMultiExpand = false;
        this.groups = [];
    }
    Accordion.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    Accordion.prototype.closeOthers = function (openGroup) {
        if (this.isMultiExpand) {
            this.groups.forEach(function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        }
    };
    Accordion.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    return Accordion;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Accordion.prototype, "isMultiExpand", void 0);
Accordion = __decorate([
    core_1.Component({
        selector: 'accordion',
        template: "<ng-content></ng-content>",
        host: {
            'class': 'panel-group'
        }
    })
], Accordion);
exports.Accordion = Accordion;
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroup.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    };
    return AccordionGroup;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionGroup.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionGroup.prototype, "isOpen", null);
AccordionGroup = __decorate([
    core_1.Component({
        selector: 'accordion-group',
        templateUrl: "accordin.component.html",
    }),
    __metadata("design:paramtypes", [Accordion])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpbi9hY2NvcmRpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE0RDtBQVM1RCxJQUFhLFNBQVM7SUFQdEI7UUFRVSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUUvQixXQUFNLEdBQTBCLEVBQUUsQ0FBQztJQXNCcEMsQ0FBQztJQXBCQSw0QkFBUSxHQUFSLFVBQVMsS0FBcUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxTQUF5QjtRQUNwQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXFCO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQXFCO1FBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBeEJTO0lBQVIsWUFBSyxFQUFFOztnREFBdUI7QUFEbkIsU0FBUztJQVByQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxJQUFJLEVBQUU7WUFDTCxPQUFPLEVBQUUsYUFBYTtTQUN0QjtLQUNELENBQUM7R0FDVyxTQUFTLENBeUJyQjtBQXpCWSw4QkFBUztBQStCdEIsSUFBYSxjQUFjO0lBa0IxQix3QkFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWpCaEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQWtCaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWJELHNCQUFJLGtDQUFNO2FBT1Y7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDO2FBVEQsVUFBVyxLQUFjO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNGLENBQUM7OztPQUFBO0lBVUQsb0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsS0FBaUI7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFDRixxQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUEzQlM7SUFBUixZQUFLLEVBQUU7OzZDQUFlO0FBSXZCO0lBREMsWUFBSyxFQUFFOzs7NENBTVA7QUFaVyxjQUFjO0lBSjFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSx5QkFBeUI7S0FDdEMsQ0FBQztxQ0FtQjhCLFNBQVM7R0FsQjVCLGNBQWMsQ0E4QjFCO0FBOUJZLHdDQUFjIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpbi9hY2NvcmRpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjb3JkaW9uJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcblx0aG9zdDoge1xuXHRcdCdjbGFzcyc6ICdwYW5lbC1ncm91cCdcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuXHRASW5wdXQoKSBpc011bHRpRXhwYW5kID0gZmFsc2U7XG5cblx0Z3JvdXBzOiBBcnJheTxBY2NvcmRpb25Hcm91cD4gPSBbXTtcblxuXHRhZGRHcm91cChncm91cDogQWNjb3JkaW9uR3JvdXApOiB2b2lkIHtcblx0XHR0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcblx0fVxuXG5cdGNsb3NlT3RoZXJzKG9wZW5Hcm91cDogQWNjb3JkaW9uR3JvdXApOiB2b2lkIHtcblx0XHRpZih0aGlzLmlzTXVsdGlFeHBhbmQpe1xuXHRcdFx0dGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkdyb3VwKSA9PiB7XG5cdFx0XHRcdGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG5cdFx0XHRcdFx0Z3JvdXAuaXNPcGVuID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25Hcm91cCk6IHZvaWQge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwJyxcblx0dGVtcGxhdGVVcmw6IGBhY2NvcmRpbi5jb21wb25lbnQuaHRtbGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuXG5cdEBJbnB1dCgpXG5cdHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9pc09wZW4gPSB2YWx1ZTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpc09wZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzT3Blbjtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uOiBBY2NvcmRpb24pIHtcblx0XHR0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xuXHR9XG5cblx0dG9nZ2xlT3BlbihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG5cdH1cbn0iXX0=
