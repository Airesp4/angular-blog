import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive-component.css']
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  Id: string = "0"

  constructor() {}

  ngOnInit(): void {
  }
}
