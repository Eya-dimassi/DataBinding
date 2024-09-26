import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {

  titre : string ="Demo du data binding Interpolation";
  status : boolean =false ;


  nom : string = 'Eya Dimassi';

  changerTitre(){
    this.titre="New title "

  }
  

}
