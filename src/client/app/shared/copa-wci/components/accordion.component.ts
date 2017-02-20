import { Component, Input, Output, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation,EventEmitter} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'accordion',
	template: `<ng-content></ng-content>`,
	host: {
		'class': 'accordion-group'
	},
	encapsulation: ViewEncapsulation.None
})
export class Accordion {
	@Input() isMultiExpand:boolean;
	// @ContentChildren(forwardRef(() => AccordionGroup))
	groups: Array<AccordionGroup> = [];

	addGroup(group: AccordionGroup): void {
		this.groups.push(group);
	}

	closeOthers(openGroup: AccordionGroup): void {
		if (!this.isMultiExpand) {
			this.groups.forEach((group: AccordionGroup) => {
				if (group !== openGroup) {
					group.isOpen = false;
				}
			});
			console.log(this.groups);
		}
	}

	removeGroup(group: AccordionGroup): void {
		const index = this.groups.indexOf(group);
		if (index !== -1) {
			this.groups.splice(index, 1);
		}
	}
}

@Component({
	moduleId: module.id,
	selector: 'accordion-group',
	templateUrl: `accordion.component.html`,
	styleUrls: ['accordion.component.css'],
	// encapsulation: ViewEncapsulation.None
})
export class AccordionGroup implements OnDestroy {
	private _isOpen: boolean = false;

	@Input() title: string;


	@Input()
	set isOpen(value: boolean) {
		this._isOpen = value;
		if (value) {
			this.accordion.closeOthers(this);
		}
	}

	@Output() onOpen = new EventEmitter();
	@Output() onClose = new EventEmitter();

	get isOpen():boolean {
		return this._isOpen;
	}

	constructor(private accordion: Accordion) {
		this.accordion.addGroup(this);
		console.log(this);
	}

	ngOnDestroy() {
		this.accordion.removeGroup(this);
	}

	toggleOpen(event: MouseEvent): void {
		event.preventDefault();
		this.isOpen = !this.isOpen;
		if(this.isOpen){
			this.onOpen.emit(true);
		}else{
			this.onClose.emit(true);
		}
	}
}