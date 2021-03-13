import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-view',
  templateUrl: './square-view.component.html',
  styleUrls: ['./square-view.component.scss']
})
export class SquareViewComponent {

  @Input() squareData: string;

  constructor() { }

}
