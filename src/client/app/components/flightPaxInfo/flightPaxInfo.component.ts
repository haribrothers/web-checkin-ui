// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/copa-wci/index';
declare var NSIndexPath, UITableViewScrollPosition;

@Component({
	moduleId: module.id,
	selector: 'flightPaxInfo',
	templateUrl: 'flightPaxInfo.component.html',
	styleUrls: ['flightPaxInfo.component.css'],
})

export class FlightPaxInfoComponent implements OnInit {

    constructor(public routerext: RouterExtensions){

    }
	isOpen: boolean = false;
	ngOnInit() {
		
	 }

	 onFirstOpen(b:any){
		//  alert("Hi");
	 }

	 onFirstClose(a:any){
		//  alert("Helloo");
	 }
}