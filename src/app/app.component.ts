import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testPractice';
  public secondSquareData: string;
  public thirdSquareData: string;
  public fourthSquareData: string;
  public wordsCount: Object = {};

  constructor() {
  }

  defineSquare(event): void {
    let data = event.target.value;

    if ((/^[а-яА-Яa-zA-Z\s]+$/).test(data)) {
      this.secondSquareData = data;
      this.countWords(data);
    } else
    if ((/^[\d\s]+$/).test(data)) {
      this.thirdSquareData = data;
    } else
    if ((/^[а-яА-Я\w\s]+$/).test(data)) {
      this.fourthSquareData = data;
    }
  }

  private countWords(data): void {
    let dataInArr = data.split(/\s+/gi);

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
