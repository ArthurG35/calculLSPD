import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bookList = [
    {
      name: 'San Francisco'
    },
    {
      name: 'New York'
    },
    {
      name: 'Seattle'
    },
    {
      name: 'Los Angeles'
    },
    {
      name: 'Chicago'
    },
    {
      name: 'Detroit'
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
