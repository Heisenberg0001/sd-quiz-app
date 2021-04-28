import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../core/services/api.service';
import { QuizQuestion } from '../../../../shared/models/quiz-questions.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quizArr: QuizQuestion[];
  public question: string;
  public firstAnswer: string;
  public secondAnswer: string;
  public thirdAnswer: string;
  public fourthAnswer: string;
  public index: number = 0;

  constructor( private apiService: APIService,
               private router: Router,
               private activatedRoute: ActivatedRoute
  ) { }

  private setLocalData(): void {
    const data = JSON.parse(localStorage.getItem('quizArr'));
    const localIndex = parseInt(localStorage.getItem('index'));
    const results = JSON.parse(localStorage.getItem('results'));
    const score = JSON.parse(localStorage.getItem('score'));

    if(data) {
      if (localIndex) {
        this.index = localIndex;
      }
      if (results) {
        this.apiService.setResultArr(JSON.parse(JSON.stringify(results)));
      }
      if (score) {
        this.apiService.setScore(parseInt(score));
      }

      this.quizArr = JSON.parse(JSON.stringify(data));
    }
  }
  private setData( question: string, first: string, second: string, third: string, fourth: string ): void {
    this.question = question;
    this.firstAnswer = first;
    this.secondAnswer = second;
    this.thirdAnswer = third;
    this.fourthAnswer = fourth;
  }

  public ngOnInit(): void {
    this.apiService.getQuizQuestions().subscribe(
      ( arr ) => {
        this.quizArr = JSON.parse(JSON.stringify(arr));
        if(this.quizArr){
          localStorage.setItem('quizArr', JSON.stringify(this.quizArr));
          localStorage.setItem('index', JSON.stringify(this.index));
        }
      }
    );

    if (!this.quizArr) {
      this.setLocalData();
    }

    this.setData( this.quizArr[this.index].question, this.quizArr[this.index].answers[0],
      this.quizArr[this.index].answers[1], this.quizArr[this.index].answers[2],
      this.quizArr[this.index].answers[3]);
  }
  public nextBtn( form: NgForm ): void {

    if (this.index < this.quizArr.length - 1) {

      this.quizArr[this.index].isCorrect = this.quizArr[this.index].correctAnswer === form.value.answers;

      if (this.quizArr[this.index].isCorrect) {
        this.apiService.incrementScore();
        localStorage.setItem('score', JSON.stringify(this.apiService.getScore()));
      }

      this.quizArr[this.index].userAnswer = form.value.answers;
      this.apiService.setResultArr(this.quizArr[this.index]);
      localStorage.setItem('results', JSON.stringify(this.apiService.getResultArr()));

      this.index++;

      this.setData(this.quizArr[this.index].question, this.quizArr[this.index].answers[0],
        this.quizArr[this.index].answers[1], this.quizArr[this.index].answers[2],
        this.quizArr[this.index].answers[3]);

      localStorage.setItem('index', JSON.stringify(this.index));
      form.controls['answers'].reset();

      console.log(this.index);

    }
    else if ( this.index === this.quizArr.length - 1) {

      this.apiService.setResultArr(this.quizArr[this.index]);
      localStorage.setItem('results', JSON.stringify(this.apiService.getResultArr()));

      this.router.navigate(['/results'], { relativeTo: this.activatedRoute });
    }

  }

}
