import { Component, OnInit } from '@angular/core';
import { LIST } from '../mock-list';
import { AppData } from '../AppData';
import { NgForm } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list = LIST;
  data = new AppData('');
  faUser = faUser;

  ngOnInit(): void {}

  constructor() {}

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }

  checkExiste(chaine: string, input: string) {
    var box = document.getElementById(input);
    console.log(chaine);
    if (chaine !== '' && chaine !== 'vide') {
      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        if (chaine === element.libelle) {
          console.log('Position: ' + i);
          return;
        }
      }
      if (box != null) {
        box.style.setProperty('background-color', 'red');
        box.style.setProperty('color', 'white');
      }
    }
  }
}
