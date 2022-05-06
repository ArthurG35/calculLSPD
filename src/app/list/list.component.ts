import { Component, OnInit } from '@angular/core';
import { LIST } from '../mock-list';
import { AppData } from '../appdata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list = LIST;
  data = new AppData('');
  constructor() {}

  ngOnInit(): void {}
}
