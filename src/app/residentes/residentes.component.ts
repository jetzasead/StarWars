import { Component, OnInit } from '@angular/core';
import {Character} from '../model/character.model';
import { ApiService} from '../service/api.service';


@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.css']
})
export class ResidentesComponent implements OnInit {

  constructor(public apiService: ApiService) { }



  getCharacters(): Character[]{
    return this.apiService.characters;
  }


  orderCharacters(parameter: string): void{
    this.apiService.orderCharacters('homeworld');
  }


  ngOnInit(): void {


  }

}
