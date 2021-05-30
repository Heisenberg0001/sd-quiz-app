import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizInformationType } from '../../../../shared/models/quiz-information-type.model';
import { APIService } from '../../../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public quizInformationType: QuizInformationType;
  public username: string;
  public canSubmit: boolean;

  constructor(
    private apiService: APIService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  private setDefaults(): void {
    this.canSubmit = true;
    this.username = '';

    this.quizInformationType = new QuizInformationType();
    this.quizInformationType.category = '9';
    this.quizInformationType.difficulty = 'easy';
    this.quizInformationType.amount = 10;
  }
  private checkUser(): void {
    const username = localStorage.getItem('username');

    if (username) {
      this.username = username;
    }
  }

  public ngOnInit(): void {
    this.setDefaults();
    this.checkUser();
  }
  public onSubmit(form: NgForm): void {
    if (this.username.trim().length === 0 || !this.canSubmit) {
      return;
    }
    this.canSubmit = false;

    this.apiService.getQuizQuestionsFromServer(this.quizInformationType)
      .subscribe((payload: boolean) => {
        this.canSubmit = true;

        if (payload) {
          localStorage.setItem('username', this.username);
          this.router.navigate(['/quiz'], { relativeTo: this.activatedRoute });
        } else {
          alert('Network error or empty questions');
        }
      });
  }
}
