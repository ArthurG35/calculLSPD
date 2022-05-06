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

  ngOnInit(): void {}

  input: input[];

  constructor() {
    this.input = [{ id: 1, champs: '' }];
  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}

interface input {
  id: number;
  champs: string;
}
