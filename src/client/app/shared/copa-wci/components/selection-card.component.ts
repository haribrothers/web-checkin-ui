import {
	ApplicationInitStatus,
	ChangeDetectionStrategy,
	Component,
	Directive,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	ViewEncapsulation
} from '@angular/core';



@Component({
	moduleId: module.id,
	selector: 'selection-card',
	templateUrl: './selection-card.component.html',
	styleUrls: ['./selection-card.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class SelectionCardComponent implements OnInit {

	@Input() checked: boolean = false;
	@Input() shadow: boolean = true;
	@Input() disabled: boolean = false; 
	@Input() label: string  = ""

	@Output() onToggleCheck = new EventEmitter();
	@Output() onCardEvent = new EventEmitter();

	constructor() {

	}

	ngOnInit() {
		if (this.checked) {
			this.onToggleCheck.emit({ value: this.checked });
		}
	}

	cardSelection(event: any) {
		console.log(event);
		if (event.type == "keyup") {
			var keyevent = <KeyboardEvent>event;
			this.onCardEvent.emit({
				value: this.checked,
				type: "keyevent",
				key: keyevent.which
			});
		} else {
			this.onCardEvent.emit({
				value: this.checked,
				type: "mouseevent",
			});
		}
	}


	toggleSelection(event: any) {
		console.log(event);
		if (!this.disabled) {
			if (event.type == "keyup") {
				var keyevent = <KeyboardEvent>event;
				
				if (keyevent.keyCode === 32 || keyevent.keyCode === 13) {
					this.checked = !this.checked;
					this.onToggleCheck.emit({
						value: this.checked,
						type: "keyevent",
						key: keyevent.which
					});
				}
			} else {
				this.checked = !this.checked;
				this.onToggleCheck.emit({
					value: this.checked,
					type: "mouseevent",
				});
			}
		}
	}
}
