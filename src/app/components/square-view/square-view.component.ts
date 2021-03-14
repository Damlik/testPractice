import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { SquareInfoModel } from "../../models/squareInfo.model";

@Component({
  selector: 'app-square-view',
  templateUrl: './square-view.component.html',
  styleUrls: ['./square-view.component.scss']
})
export class SquareViewComponent implements OnChanges {

  @Input() squareData: SquareInfoModel;
  @Input() inputValue: string;
  public displayText: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.setDisplayText();
  }

  setDisplayText(): void {
    let text = '';

    let checkDisplayCondition = this.squareData.regExp.test(this.inputValue);
    if (checkDisplayCondition) {
      text = this.inputValue;
      this.runCallback();
    }

    this.displayText = text;
  }

  runCallback(): void {
    if (this.squareData.callback) {
      this.squareData.callback(this.inputValue);
    }
  }

}
