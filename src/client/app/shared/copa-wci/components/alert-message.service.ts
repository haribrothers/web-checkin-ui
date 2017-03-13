import { NavigationStart, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Messages } from '../common/messages.common'


@Injectable()
export class AlertMessageService {
    private message: Messages = new Messages();
    private keepAfterNavigationChange: boolean = false;
    private showAlertMessageSource = new Subject<Messages>();

    showAlert$ = this.showAlertMessageSource.asObservable();

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    console.log(this.message);
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.clearAllMessages()
                }
            }
        });
    }

    showAlert(){
        this.showAlertMessageSource.next(this.message);
    }

    addErrorMessage(message:string, showNexpPage: boolean = false){
        this.message.addErrorMessage(message);
        this.keepAfterNavigationChange = showNexpPage;
        this.showAlertMessageSource.next(this.message)
    }

    addWarningMessage(message:string, showNexpPage: boolean = false){
        this.message.addWarningMessage(message);
        this.keepAfterNavigationChange = showNexpPage;
        this.showAlertMessageSource.next(this.message);
    }

    addInfoMessage(message:string, showNexpPage: boolean = false){
        this.message.addInfoMessage(message);
        this.keepAfterNavigationChange = showNexpPage;
        this.showAlertMessageSource.next(this.message);
    }

    clearAllMessages(){
        this.message = new Messages();
        this.keepAfterNavigationChange = false;
        this.showAlertMessageSource.next(this.message);
    }
}