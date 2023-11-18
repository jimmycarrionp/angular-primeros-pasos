import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor( private dbzService:DbzService ){} //privado no publico

  get characters():Character[]{
    //return this.dbzService.characters;
    return [...this.dbzService.characters]; //crea una copia los ... puntos
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterById(id);
  }
  onNewCharacter(character :Character ):void{
    this.dbzService.addCharacter(character);
  }

}





// public characters: Character[]=[{
//   name: 'Krilin',
//   power: 1000
// },
// {
//   name: 'Goku',
//   power: 9500
// },
// {
//   name: 'Vegeta',
//   power: 7500
// }
// ];

// onNewCharacters(character:Character):void{

//   this.characters.push(character);

//   // console.log('MainPage');
//   // console.log(character);

// }
// onDeleteCharacter(index:number){
// this.characters.splice(index,1);

// }



