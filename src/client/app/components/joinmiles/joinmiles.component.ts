import { Component, OnInit } from '@angular/core';
import {Accordion, AccordionGroup} from '../../shared/copa-wci/components/accordion.component'

@Component({
	moduleId: module.id,
	selector: 'joinmiles',
	templateUrl: 'joinmiles.component.html',
	styleUrls: ['joinmiles.component.css'],
})

export class JoinmilesComponent implements OnInit {
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