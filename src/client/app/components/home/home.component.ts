import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// libs
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';
import { IAppState, getNames } from '../../shared/ngrx/index';
import * as nameList from '../../shared/copa-wci/index';
import { ToolbarComponent } from '../../shared/copa-wci/components/toolbar.component'
import { ProgressbarService } from '../../shared/copa-wci/components/toolbar.service';
import { Subscription } from 'rxjs/Subscription';

declare var NSIndexPath, UITableViewScrollPosition;

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string = '';
  public sample: Array<string> = [];
  public findResForm: FormGroup;

  constructor(private store: Store<IAppState>, fb: FormBuilder, public routerext: RouterExtensions, private toolbarService: ProgressbarService) {
    this.names$ = store.let(getNames);
    this.findResForm = fb.group({
      ticket: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      orgin: [''],
      lastname: ['', Validators.required]
    });
    toolbarService.showProgress$.subscribe(
      show => {
        console.log(show);
      });

  }

  ngOnInit() {
    // this.toolbarService.showProgress();
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new nameList.AddAction(this.newName));
    this.sample.push(this.newName);
    this.newName = '';

    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }

  chnagedetect() {
    this.toolbarService.showProgress(true);
    setTimeout(() => {
      this.toolbarService.hideProgress();
      this.routerext.navigate(['/flightPaxInfo'], {
        transition: {
          duration: 1000,
          name: 'slideTop',
        }
      });

    }, 5000)

  }

  showAlert(event: any) {
    alert(event.value);
  }

  onFirstOpen(b: any) {
    //  alert("Hi");
  }

  onFirstClose(a: any) {
    //  alert("Helloo");
  }
}
