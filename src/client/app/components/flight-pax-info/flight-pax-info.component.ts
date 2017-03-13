import { Component, OnInit } from '@angular/core';
import {AlertMessageService} from '../../shared/copa-wci/components/alert-message.service'

@Component({
  moduleId: module.id,
  selector: 'app-flight-pax-info',
  templateUrl: 'flight-pax-info.component.html',
  styleUrls: ['flight-pax-info.component.css']
})
export class FlightPaxInfoComponent implements OnInit {

  constructor(private alertService: AlertMessageService) { 
    
    this.alertService.showAlert$.subscribe(message => {
      console.log("helloo");
      console.log(message);
    });
  }

  ngOnInit() {
    // this.alertService.addErrorMessage("hi");
  }

}
