import {Component,ViewChild, OnInit} from '@angular/core';
import {Character} from './model/character.model';
import {ApiService} from './service/api.service';
import { forEach } from 'lodash';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'starwars';
  // characters: Character[] = [];

  constructor(public apiService: ApiService) {
  }

buscar(parameter: string ){

this.apiService.buscarpornombre(parameter)

}
  ngOnInit(): void {
console.log(this.apiService.characters.length)
    if (!this.apiService.cargado){
    for (let x = 1; x <= 5; x++){
      this.apiService.getCharacters(`people/?page=${x}`).subscribe(data => {
       data.results.forEach ((record)=>{
         const planetaid=record.homeworld.split('/')


        this.apiService.getCharacters(`planets/${planetaid[5]}`).subscribe(data2 => {


          this.apiService.characters.push(
            {name:record.name,height:record.height,mass:record.mass,homeworld:data2.name}
          );

                });

        })

      });


    }
    this.apiService.cargado=true;
  }
  }

}
