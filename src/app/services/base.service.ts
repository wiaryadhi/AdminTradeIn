import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseURL: string = "http://localhost:4200/api/"

  constructor() { }
}
