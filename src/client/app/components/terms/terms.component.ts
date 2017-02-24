import { Component, OnInit } from '@angular/core';
import {Accordion, AccordionGroup} from '../../shared/copa-wci/components/accordion.component'

@Component({
	moduleId: module.id,
	selector: 'terms',
	templateUrl: 'terms.component.html',
	styleUrls: ['terms.component.css'],
})

export class TermsComponent implements OnInit {
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