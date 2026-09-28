import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicehttp {

  //chiama l'api di Star Wars

  constructor(private http:HttpClient){} //HTTPClient

  inserisciPersone(){ //get
    return this.http.get<any>(`https://swapi.info/api/people`)
  }
}
