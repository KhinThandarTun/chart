import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './app/api-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommomserviceService {

  constructor(private http: HttpClient) { }

  APIURL = 'https://localhost:7023/api/Employee';

  showdata(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.APIURL);
  }
}
