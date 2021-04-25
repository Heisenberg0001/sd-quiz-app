import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../core/services/api.service';
import { QuizQuestion } from '../../../../shared/models/quiz-questions.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public quizArr: QuizQuestion[];
  public index: number = 0;

  constructor( private apiService: APIService) {
  }

  ngOnInit(): void {
    this.apiService.getQuizQuestions().subscribe(
      ( arr ) => {
        this.quizArr = arr;
        console.log(this.quizArr);
        // console.log(this.quizArr[0]);
      }
    );
    console.log(this.quizArr);

  }



}
