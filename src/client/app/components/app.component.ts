// angular
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// any operators needed throughout your application
import './operators';

// app
import { AnalyticsService } from '../shared/analytics/index';
import { Config, LogService, AppService } from '../shared/core/index';
import { ProgressbarService } from '../shared/copa-wci/components/toolbar.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.Default, // Everything else uses OnPush
  providers:[ProgressbarService]
})
export class AppComponent {
  private height:number;
  private isProgressBlured:boolean;
  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService,
    private toolbarService: ProgressbarService
  ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
        this.height = (window.innerHeight);
    toolbarService.showProgress$.subscribe(
      show => {
        this.isProgressBlured = show.progress;
      });

  }

  onResize(event){
    this.height = (window.innerHeight);
        // this.innerWidth = (window.screen.width) + "px";
  }
}
