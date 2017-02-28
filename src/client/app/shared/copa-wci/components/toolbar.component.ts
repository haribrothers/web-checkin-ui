import { Component, Input } from '@angular/core';

// app
import { LogService } from '../../core/index';
import { ProgressbarService } from './toolbar.service';

@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [
    'toolbar.component.css',
  ]
})
export class ToolbarComponent {
  private showProgress:boolean = false;
  private showOverlay:boolean = false;
  constructor(private log: LogService,private toolbarService: ProgressbarService) {
    this.toolbarService.showProgress$.subscribe(
      show => {
        console.log('compoent:'+ show);
        this.showProgress = show.progress;
        this.showOverlay = show.overlay;
      });
      // this.toolbarService.hideProgress();
  }

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }

  
}
