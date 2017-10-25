import { Component, OnInit } from '@angular/core';
import {IDate} from '../../interfaces/idate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arrayOfDates: IDate[] = [
    {
      year: 2017,
      month: 1
    },
    {
      year: 2017,
      month: 2
    },
    {
      year: 2017,
      month: 3
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
