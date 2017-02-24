import { Component, OnInit } from '@angular/core';
import {Accordion, AccordionGroup} from '../../shared/copa-wci/components/accordion.component'

@Component({
	moduleId: module.id,
	selector: 'checkTravel',
	templateUrl: 'checkTravel.component.html',
	styleUrls: ['checkTravel.component.css'],
})

export class CheckTravelComponent implements OnInit {
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