import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    EventEmitter,
    Input,
    OnDestroy,
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
export class SelectionCardComponent {

  @Input() checked:boolean = false;
  @Input() shadow:boolean = true;

  @Output() onToggleCheck = new EventEmitter();

  constructor() { }

  toggleSelection(event: any){
    this.checked = !this.checked;
    this.onToggleCheck.emit({value:this.checked});
  }

}
