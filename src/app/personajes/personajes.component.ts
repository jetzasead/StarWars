import { Component, OnInit } from '@angular/core';
import { ApiService} from '../service/api.service';
import {Character} from '../model/character.model';
import { ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit {
  characters: Character[] = [];
  paginaActual: number =1;
  constructor(public apiService: ApiService, private route: ActivatedRoute ) {

    this.route.queryParams.subscribe(params => {
     // alert('mensae');

if (params ){   this.apiService.orderCharacters(params.ordenar);}

    });

  }

  getCharacters(): Character[]{
    return this.apiService.characters;
  }

  orderCharacters(parameter: string): void{
    this.apiService.orderCharacters(parameter);
  }



  ngOnInit(): void {

  }

}
