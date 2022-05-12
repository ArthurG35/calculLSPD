import { Component, OnInit } from '@angular/core';
import { LIST } from '../mock-list';
import { AppData } from '../AppData';
import { NgForm } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list = LIST;
  data = new AppData('');
  faUser = faUser;
  inputPlaceholder: String = 'Vide...';

  ngOnInit(): void {}

  constructor() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  resetInput(input: HTMLElement) {
    input.style.setProperty('background-color', 'white');
    input.style.setProperty('color', 'black');
    input.style.setProperty('font-weight', 'normal');
  }

  warningInput(input: HTMLElement) {
    input.style.setProperty('background-color', 'red');
    input.style.setProperty('color', 'white');
    input.style.setProperty('font-weight', 'bold');
  }

  checkExiste(chaine: string, input: string) {
    let inputSelect = document.getElementById(input);
    if (inputSelect != null) {
      this.resetInput(inputSelect);
      if (chaine !== '' && chaine !== 'Vide...') {
        for (let i = 0; i < this.list.length; i++) {
          const element = this.list[i];
          if (chaine === element.libelle) {
            console.log('Position: ' + i);
            return;
          }
        }
      } else {
        (inputSelect as HTMLInputElement).value = '';
        return;
      }
      this.warningInput(inputSelect);
    }
  }
}
