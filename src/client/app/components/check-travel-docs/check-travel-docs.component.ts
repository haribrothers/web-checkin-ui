import { Component, OnInit } from '@angular/core';
import { ProgressbarService } from '../../shared/copa-wci/components/toolbar.service';


@Component({
  moduleId: module.id,
  selector: 'app-check-travel-docs',
  templateUrl: 'check-travel-docs.component.html',
  styleUrls: ['check-travel-docs.component.css']
})
export class CheckTravelDocsComponent implements OnInit {

  public isOpen: boolean = false;

  constructor(private toolbarService: ProgressbarService) {
    toolbarService.showProgress$.subscribe(
      show => {
        console.log(show);
      });
  }

  ngOnInit() {
  }

  onSelected(event: any, sample: string) {
    if (event.value) {
      this.toolbarService.showProgress(true);
      setTimeout(() => {
        this.toolbarService.hideProgress();
        this.isOpen = event.value;
      }, 2000)
    } else {
      this.isOpen = event.value;
    }

    // setTimeout(() => {
    //   this.toolbarService.hideProgress();
    //   this.isOpen = event.value;

    // }, 5000)

    // if(event.value){
    //   this.isOpen = event.value;
    // }
  }

  onOpenClick() {

  }

}
