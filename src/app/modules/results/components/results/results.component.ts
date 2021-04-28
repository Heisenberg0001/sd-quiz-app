import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from "../../../../shared/models/quiz-questions.model";
import { APIService } from "../../../../core/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public results: QuizQuestion[] = [];
  public score: number;

  constructor( private apiService: APIService,
               private router: Router
  ) { }

  public ngOnInit(): void {
    this.results = [...this.apiService.getResultArr()];
    this.score = this.apiService.getScore();
  }

  public tryAgain(): void {
    this.router.navigate(['']);
  }
}
