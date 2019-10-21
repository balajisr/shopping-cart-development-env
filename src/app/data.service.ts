import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = "https://gist.githubusercontent.com/balajisr/7b3762cc90973fa60f84cb754185cbec/raw/11a0a74c51a069ab71685375e834e897026a5317/products.json";

  constructor(private http:HttpClient) {}

  getData() {
    return fetch(this.url);
  }
}
