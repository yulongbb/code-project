import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,) { }

  sayHi(): Observable<any> {
    return this.http.get("/api/sayHi");
  }
}
