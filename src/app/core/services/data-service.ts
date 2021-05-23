import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { timeout } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class DataService {

    private timeout = 300000;

    constructor(private http: HttpClient) { }

    getAll(URL: string, params?: any): Observable<Object> {
        return this.http.get(URL, params).pipe(timeout(this.timeout));
    }

}