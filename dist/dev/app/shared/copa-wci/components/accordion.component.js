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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEg7QUFXNUgsSUFBYSxTQUFTO0lBVHRCO1FBWUMsV0FBTSxHQUEwQixFQUFFLENBQUM7SUF1QnBDLENBQUM7SUFyQkEsNEJBQVEsR0FBUixVQUFTLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksU0FBeUI7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXFCO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQXFCO1FBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBekJTO0lBQVIsWUFBSyxFQUFFOztnREFBdUI7QUFEbkIsU0FBUztJQVRyQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsSUFBSSxFQUFFO1lBQ0wsT0FBTyxFQUFFLGlCQUFpQjtTQUMxQjtRQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3JDLENBQUM7R0FDVyxTQUFTLENBMEJyQjtBQTFCWSw4QkFBUztBQW1DdEIsSUFBYSxjQUFjO0lBcUIxQix3QkFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXBCaEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQWF2QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBT3RDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQWpCRCxzQkFBSSxrQ0FBTTthQVVWO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQVpELFVBQVcsS0FBYztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDRixDQUFDOzs7T0FBQTtJQWNELG9DQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEtBQWlCO1FBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBcENTO0lBQVIsWUFBSyxFQUFFOzs2Q0FBZTtBQUl2QjtJQURDLFlBQUssRUFBRTs7OzRDQU1QO0FBRVM7SUFBVCxhQUFNLEVBQUU7OzhDQUE2QjtBQUM1QjtJQUFULGFBQU0sRUFBRTs7K0NBQThCO0FBZjNCLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FFdEMsQ0FBQztxQ0FzQjhCLFNBQVM7R0FyQjVCLGNBQWMsQ0F1QzFCO0FBdkNZLHdDQUFjIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbixFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdhY2NvcmRpb24nLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuXHRob3N0OiB7XG5cdFx0J2NsYXNzJzogJ2FjY29yZGlvbi1ncm91cCdcblx0fSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuXHRASW5wdXQoKSBpc011bHRpRXhwYW5kOmJvb2xlYW47XG5cdC8vIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb25Hcm91cCkpXG5cdGdyb3VwczogQXJyYXk8QWNjb3JkaW9uR3JvdXA+ID0gW107XG5cblx0YWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkdyb3VwKTogdm9pZCB7XG5cdFx0dGhpcy5ncm91cHMucHVzaChncm91cCk7XG5cdH1cblxuXHRjbG9zZU90aGVycyhvcGVuR3JvdXA6IEFjY29yZGlvbkdyb3VwKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzTXVsdGlFeHBhbmQpIHtcblx0XHRcdHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBBY2NvcmRpb25Hcm91cCkgPT4ge1xuXHRcdFx0XHRpZiAoZ3JvdXAgIT09IG9wZW5Hcm91cCkge1xuXHRcdFx0XHRcdGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVHcm91cChncm91cDogQWNjb3JkaW9uR3JvdXApOiB2b2lkIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2FjY29yZGlvbi1ncm91cCcsXG5cdHRlbXBsYXRlVXJsOiBgYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sYCxcblx0c3R5bGVVcmxzOiBbJ2FjY29yZGlvbi5jb21wb25lbnQuY3NzJ10sXG5cdC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uR3JvdXAgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXHRwcml2YXRlIF9pc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG5cblx0QElucHV0KClcblx0c2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlcnModGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0QE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Z2V0IGlzT3BlbigpOmJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9pc09wZW47XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvbjogQWNjb3JkaW9uKSB7XG5cdFx0dGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XG5cdFx0Y29uc29sZS5sb2codGhpcyk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmFjY29yZGlvbi5yZW1vdmVHcm91cCh0aGlzKTtcblx0fVxuXG5cdHRvZ2dsZU9wZW4oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuXHRcdGlmKHRoaXMuaXNPcGVuKXtcblx0XHRcdHRoaXMub25PcGVuLmVtaXQodHJ1ZSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLm9uQ2xvc2UuZW1pdCh0cnVlKTtcblx0XHR9XG5cdH1cbn0iXX0=
