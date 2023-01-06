import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaseDataReq, CaseDataRes } from '../commons/case-data';

@Injectable({
  providedIn: 'root'
})
export class CaseDataService {
  private baseURL = "http://localhost:8081/kbs/api/chuan-doan-benh";
  constructor(private httpClient:HttpClient) { }

  chuanDoanBenh(caseDataReq: CaseDataReq):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, caseDataReq);
  }

  getAllCaseDaXuLy():Observable<CaseDataRes[]>{
    return this.httpClient.get<CaseDataRes[]>(`${this.baseURL}/da-xu-ly`);
  }

  getAllCaseDangXuLy():Observable<CaseDataRes[]>{
    return this.httpClient.get<CaseDataRes[]>(`${this.baseURL}/dang-xu-ly`);
  }

}
