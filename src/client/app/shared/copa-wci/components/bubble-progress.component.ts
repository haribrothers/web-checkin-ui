import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, NgZone, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bubble-progress',
  templateUrl: 'bubble-progress.component.html',
  styleUrls: ['bubble-progress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BubbleProgressComponent implements OnInit {

  private _itemcount:number=2;
  @Input() activeIndex: number=0;
  @Input() items:Array<string>=[];

  @Output() onNodeClick = new EventEmitter();
  constructor(private zone: NgZone) { 
    
  }

  onLinkClick(nodeIndex:number){
    if(nodeIndex < this.activeIndex){
        this.onNodeClick.emit({value:nodeIndex});
    }
  }

  // @Input()
  // get itemcount():number{
  //   return this._itemcount;
  // }
  // set itemcount(value:number){
  //   this.items =  Array(value).fill(0);
    
  //   this._itemcount = value;
  //   console.log(this._itemcount);
  // }


  ngOnInit() {
    
  }

}
