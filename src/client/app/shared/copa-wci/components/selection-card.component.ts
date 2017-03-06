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
export class SelectionCardComponent implements OnInit{

  @Input() checked: boolean = false;
  @Input() shadow: boolean = true;
  @Input() disabled: boolean = false;

  @Output() onToggleCheck = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(){
    if (this.checked) {
      this.onToggleCheck.emit({ value: this.checked });
    }
  }


  toggleSelection(event: any) {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onToggleCheck.emit({ value: this.checked });
    }
  }

}
