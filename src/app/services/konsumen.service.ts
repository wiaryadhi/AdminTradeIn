import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IKonsumenWrapper} from "../interfaces/i-konsumen";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KonsumenService {
  endpoint:string="konsumen"
  constructor(private baseService:BaseService, private httpClient:HttpClient) { }

  all():Observable<IKonsumenWrapper>{
    return this.httpClient.get<IKonsumenWrapper>(
      `${this.baseService.baseURL}${this.endpoint}/all`
    )
  }
}
