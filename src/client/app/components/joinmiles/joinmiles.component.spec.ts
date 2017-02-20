import { TestBed, inject } from '@angular/core/testing';

import { JoinmilesComponent } from './joinmiles.component';

describe('a joinmiles component', () => {
	let component: JoinmilesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				JoinmilesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([JoinmilesComponent], (JoinmilesComponent) => {
		component = JoinmilesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});