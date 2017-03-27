import { Component, OnInit, Directive, ViewEncapsulation, Input } from '@angular/core';



@Directive({
  selector: 'span[data-label]',
  host:{
    '[class.data-label]':'true'
  }
})
export class DataLabel{

}

@Directive({
  selector: 'span[data-content]',
  host:{
    '[class.data-content]':'true',
    '[class.content-bold]':'isBold',
    '[class.content-upper]':'uppercase',
    '[class.content-nowrap]':'!wraptext',
    '[style.color]':'contentColor'
  }
})
export class DataContent{
  @Input() isBold:boolean = false;
  @Input() contentColor:string = '#1F4A7D';
  @Input() uppercase:boolean = true;
  @Input() wraptext:boolean = true;

}

@Directive({
  selector: 'span[data-sub-content]',
  host:{
    '[class.data-sub-content]':'true'
  },
})
export class DataSubContent{
  
}

@Component({
  moduleId: module.id,
  selector: 'data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.css'], 
  encapsulation: ViewEncapsulation.None,
})
// <div class="data-field">
//               <label class="data-label">sample</label>
//               <label class="data-content">sample</label>
//               <label class="data-sub-content">sample</label>
//             </div>
export class DataFieldComponent{

}
