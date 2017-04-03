import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SeatmapService {
    constructor(private _http: Http){

    }

    public GetSeatMap(): Observable<any> {
		return this._http.get("seat-map.json").map(res => res.json());
	}
}