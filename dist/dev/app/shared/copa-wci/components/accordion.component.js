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
        this.groups = [];
    }
    Accordion.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    Accordion.prototype.closeOthers = function (openGroup) {
        if (!this.isMultiExpand) {
            this.groups.forEach(function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
            console.log(this.groups);
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
    __metadata("design:type", Boolean)
], Accordion.prototype, "isMultiExpand", void 0);
Accordion = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'accordion',
        template: "<ng-content></ng-content>",
        host: {
            'class': 'accordion-group'
        },
        encapsulation: core_1.ViewEncapsulation.None
    })
], Accordion);
exports.Accordion = Accordion;
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.accordion.addGroup(this);
        console.log(this);
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
        if (this.isOpen) {
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(true);
        }
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
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionGroup.prototype, "onClose", void 0);
AccordionGroup = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'accordion-group',
        templateUrl: "accordion.component.html",
        styleUrls: ['accordion.component.css'],
    }),
    __metadata("design:paramtypes", [Accordion])
], AccordionGroup);
exports.AccordionGroup = AccordionGroup;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEg7QUFXNUgsSUFBYSxTQUFTO0lBVHRCO1FBWUMsV0FBTSxHQUEwQixFQUFFLENBQUM7SUF1QnBDLENBQUM7SUFyQkEsNEJBQVEsR0FBUixVQUFTLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksU0FBeUI7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXFCO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQXFCO1FBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBekJTO0lBQVIsWUFBSyxFQUFFOztnREFBdUI7QUFEbkIsU0FBUztJQVRyQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsSUFBSSxFQUFFO1lBQ0wsT0FBTyxFQUFFLGlCQUFpQjtTQUMxQjtRQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3JDLENBQUM7R0FDVyxTQUFTLENBMEJyQjtBQTFCWSw4QkFBUztBQW1DdEIsSUFBYSxjQUFjO0lBcUIxQix3QkFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXBCaEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQWF2QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBT3RDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQWpCRCxzQkFBSSxrQ0FBTTthQVVWO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQVpELFVBQVcsS0FBYztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDRixDQUFDOzs7T0FBQTtJQWNELG9DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEtBQWlCO1FBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBcENTO0lBQVIsWUFBSyxFQUFFOzs2Q0FBZTtBQUl2QjtJQURDLFlBQUssRUFBRTs7OzRDQU1QO0FBRVM7SUFBVCxhQUFNLEVBQUU7OzhDQUE2QjtBQUM1QjtJQUFULGFBQU0sRUFBRTs7K0NBQThCO0FBZjNCLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FFdEMsQ0FBQztxQ0FzQjhCLFNBQVM7R0FyQjVCLGNBQWMsQ0F1QzFCO0FBdkNZLHdDQUFjIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbixFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2FjY29yZGlvbicsXHJcblx0dGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuXHRob3N0OiB7XHJcblx0XHQnY2xhc3MnOiAnYWNjb3JkaW9uLWdyb3VwJ1xyXG5cdH0sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcclxuXHRASW5wdXQoKSBpc011bHRpRXhwYW5kOmJvb2xlYW47XHJcblx0Ly8gQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEFjY29yZGlvbkdyb3VwKSlcclxuXHRncm91cHM6IEFycmF5PEFjY29yZGlvbkdyb3VwPiA9IFtdO1xyXG5cclxuXHRhZGRHcm91cChncm91cDogQWNjb3JkaW9uR3JvdXApOiB2b2lkIHtcclxuXHRcdHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG5cdH1cclxuXHJcblx0Y2xvc2VPdGhlcnMob3Blbkdyb3VwOiBBY2NvcmRpb25Hcm91cCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLmlzTXVsdGlFeHBhbmQpIHtcclxuXHRcdFx0dGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkdyb3VwKSA9PiB7XHJcblx0XHRcdFx0aWYgKGdyb3VwICE9PSBvcGVuR3JvdXApIHtcclxuXHRcdFx0XHRcdGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25Hcm91cCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0dGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdhY2NvcmRpb24tZ3JvdXAnLFxyXG5cdHRlbXBsYXRlVXJsOiBgYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sYCxcclxuXHRzdHlsZVVybHM6IFsnYWNjb3JkaW9uLmNvbXBvbmVudC5jc3MnXSxcclxuXHQvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblx0cHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG5cclxuXHRASW5wdXQoKVxyXG5cdHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Z2V0IGlzT3BlbigpOmJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uOiBBY2NvcmRpb24pIHtcclxuXHRcdHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcyk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3BlbihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG5cdFx0aWYodGhpcy5pc09wZW4pe1xyXG5cdFx0XHR0aGlzLm9uT3Blbi5lbWl0KHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMub25DbG9zZS5lbWl0KHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==
