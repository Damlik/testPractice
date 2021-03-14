import { Component } from '@angular/core';
import { SquareInfoModel } from "./models/squareInfo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testPractice';

  public squaresInfo: Array<SquareInfoModel> = [
    {
      regExp: /^[а-яА-Яa-zA-Z\s]+$/,
      color: '#ffe5b4',
      colorText: '#000',
      callback: this.countWords.bind(this)
    },
    {
      regExp: /^[\d\s]+$/,
      color: '#ff0000',
      colorText: '#bbb',
    },
    {
      regExp: /^\s*(([а-яА-Яa-zA-Z\s]+\d+)|(\d+\s*[а-яА-Яa-zA-Z]+))[а-яА-Яa-zA-Z\s\d]*$/,
      color: '#000000',
      colorText: '#fff',
    }
  ];

  public inputValue: string;

  public wordsCount: Object = {};

  saveInputValue(event): void {
    this.inputValue = event.target.value;
  }

  private countWords(data): void {
    if (data) {
      let dataInArr = data.trim().split(/\s+/gi);

      for (let word of dataInArr) {
        if (this.wordsCount[word]) {
          this.wordsCount[word]++;
        } else {
          this.wordsCount[word] = 1;
        }
      }
      console.log(this.wordsCount);
    }
  }
}
