import { TestBed, inject } from '@angular/core/testing';

import { Accordion, AccordionGroup } from './accordion.component';

describe('a accordin component', () => {
	let component: Accordion;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Accordion, AccordionGroup
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([Accordion], (AccordinComponent) => {
		component = AccordinComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});