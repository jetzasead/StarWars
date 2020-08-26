import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {User} from "../model/user.model";
import {Observable} from 'rxjs';
import {ApiResponse} from '../model/api.response';
import {Character,Planetas} from '../model/character.model';
import * as _ from 'lodash';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://swapi.dev/api/';

  characters: Character[] = [];
  Arrayplanetas: Planetas[] = [];
  cargado:boolean=false;

  // login(loginPayload): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  // }

  getCharacters(parameter: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + parameter);
  }

  orderCharacters(parameter: string): void{
    this.characters = _.orderBy(this.characters, [parameter], ['desc']);
  }

buscarpornombre(parameter: string): void{
  this.characters=this.characters.filter((record)=>record.name===parameter)



}

}
