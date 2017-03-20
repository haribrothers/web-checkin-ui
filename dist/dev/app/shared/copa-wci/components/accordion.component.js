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
    }),
    __metadata("design:paramtypes", [])
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvY29tcG9uZW50cy9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEg7QUFXNUgsSUFBYSxTQUFTO0lBVHRCO1FBWUMsV0FBTSxHQUEwQixFQUFFLENBQUM7SUF1QnBDLENBQUM7SUFyQkEsNEJBQVEsR0FBUixVQUFTLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksU0FBeUI7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQXFCO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEtBQXFCO1FBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBekJTO0lBQVIsWUFBSyxFQUFFOztnREFBdUI7QUFEbkIsU0FBUztJQVRyQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsSUFBSSxFQUFFO1lBQ0wsT0FBTyxFQUFFLGlCQUFpQjtTQUMxQjtRQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3JDLENBQUM7O0dBQ1csU0FBUyxDQTBCckI7QUExQlksOEJBQVM7QUFtQ3RCLElBQWEsY0FBYztJQXFCMUIsd0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQmhDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFhdkIsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU90QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFqQkQsc0JBQUksa0NBQU07YUFVVjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7YUFaRCxVQUFXLEtBQWM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0YsQ0FBQzs7O09BQUE7SUFjRCxvQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxLQUFpQjtRQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXBDUztJQUFSLFlBQUssRUFBRTs7NkNBQWU7QUFJdkI7SUFEQyxZQUFLLEVBQUU7Ozs0Q0FNUDtBQUVTO0lBQVQsYUFBTSxFQUFFOzs4Q0FBNkI7QUFDNUI7SUFBVCxhQUFNLEVBQUU7OytDQUE4QjtBQWYzQixjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBRXRDLENBQUM7cUNBc0I4QixTQUFTO0dBckI1QixjQUFjLENBdUMxQjtBQXZDWSx3Q0FBYyIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL2NvbXBvbmVudHMvYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnYWNjb3JkaW9uJyxcblx0dGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcblx0aG9zdDoge1xuXHRcdCdjbGFzcyc6ICdhY2NvcmRpb24tZ3JvdXAnXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uIHtcblx0QElucHV0KCkgaXNNdWx0aUV4cGFuZDpib29sZWFuO1xuXHQvLyBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQWNjb3JkaW9uR3JvdXApKVxuXHRncm91cHM6IEFycmF5PEFjY29yZGlvbkdyb3VwPiA9IFtdO1xuXG5cdGFkZEdyb3VwKGdyb3VwOiBBY2NvcmRpb25Hcm91cCk6IHZvaWQge1xuXHRcdHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuXHR9XG5cblx0Y2xvc2VPdGhlcnMob3Blbkdyb3VwOiBBY2NvcmRpb25Hcm91cCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc011bHRpRXhwYW5kKSB7XG5cdFx0XHR0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cDogQWNjb3JkaW9uR3JvdXApID0+IHtcblx0XHRcdFx0aWYgKGdyb3VwICE9PSBvcGVuR3JvdXApIHtcblx0XHRcdFx0XHRncm91cC5pc09wZW4gPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkdyb3VwKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHR0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdhY2NvcmRpb24tZ3JvdXAnLFxuXHR0ZW1wbGF0ZVVybDogYGFjY29yZGlvbi5jb21wb25lbnQuaHRtbGAsXG5cdHN0eWxlVXJsczogWydhY2NvcmRpb24uY29tcG9uZW50LmNzcyddLFxuXHQvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkdyb3VwIGltcGxlbWVudHMgT25EZXN0cm95IHtcblx0cHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuXG5cdEBJbnB1dCgpXG5cdHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9pc09wZW4gPSB2YWx1ZTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJzKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGdldCBpc09wZW4oKTpib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5faXNPcGVuO1xuXHR9XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY2NvcmRpb246IEFjY29yZGlvbikge1xuXHRcdHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XG5cdH1cblxuXHR0b2dnbGVPcGVuKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3Blbjtcblx0XHRpZih0aGlzLmlzT3Blbil7XG5cdFx0XHR0aGlzLm9uT3Blbi5lbWl0KHRydWUpO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5vbkNsb3NlLmVtaXQodHJ1ZSk7XG5cdFx0fVxuXHR9XG59Il19
