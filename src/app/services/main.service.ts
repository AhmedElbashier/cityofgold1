import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
export interface Result
{
  id?:any;
  date?:any;
  hours?:any;
  start?:any;
  numberOflines?:any;
  result?:any;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  data: any;
  constructor(
    private http: HttpClient,
    private common: CommonService,
    ) { }

    getResults(type: any = null): Observable<Result[]> {
      return this.http.get<Result[]>(this.common.APIUrl);
    }
}
