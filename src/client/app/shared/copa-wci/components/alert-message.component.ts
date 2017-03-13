import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, NgZone, EventEmitter} from '@angular/core';
import { Messages } from '../common/messages.common'
import { AlertMessageService } from './alert-message.service'

@Component({
  moduleId: module.id,
  selector: 'alert-message',
  templateUrl: 'alert-message.component.html',
  styleUrls: ['alert-message.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertMessageComponent implements OnInit {

  private messages: Messages = new Messages();

  constructor(private alertService: AlertMessageService) { 
    this.alertService.showAlert$.subscribe(message => {
      console.log(message);
      this.messages = message;
      console.log(this.messages);
    });
  }


  ngOnInit() {
    this.alertService.showAlert();
  }

}
