import { SeatMap } from '../../shared/copa-wci/model/seat-map.model';
import { SeatmapService } from '../../shared/copa-wci/services/seat-map.service';
import { Component, OnInit } from '@angular/core';
import {AlertMessageService} from '../../shared/copa-wci/components/alert-message.service'

@Component({
  moduleId: module.id,
  selector: 'app-assign-pax-seat',
  templateUrl: 'assign-pax-seat.component.html',
  styleUrls: ['assign-pax-seat.component.css'],
  providers:[SeatmapService]
})
export class AssignPaxSeatComponent implements OnInit {
  public seatMap: SeatMap = new SeatMap();
  constructor(private alertService: AlertMessageService, private _seatService: SeatmapService) { 
    this._seatService.GetSeatMap().subscribe((result)=>{
        this.seatMap = result;
        console.log(this.seatMap);
    });
    this.alertService.showAlert$.subscribe(message => {
      console.log("helloo");
      console.log(message);
    });

  }

  ngOnInit() {
    // this.alertService.addErrorMessage("hi");
  }

}
