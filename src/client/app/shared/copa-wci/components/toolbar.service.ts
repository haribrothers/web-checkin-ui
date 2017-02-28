import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class show{
    public progress: boolean = false;
    public overlay: boolean = false;
}

@Injectable()
export class ProgressbarService {
    private showProgressSource = new Subject<show>();

    showProgress$ = this.showProgressSource.asObservable();

    // showProgress(show: boolean) {
    //     this.showProgressSource.next(show);
    // }

    showProgress(showOverlay: boolean = false){
        this.showProgressSource.next({progress: true, overlay: showOverlay});
    }
    hideProgress(){
        this.showProgressSource.next({progress: false, overlay: false});
    }
}