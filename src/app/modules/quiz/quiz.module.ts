import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRouterModule } from './quiz-router.module';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './components/quiz/quiz.component';



@NgModule({
  declarations: [ QuizComponent ],
  imports: [
    CommonModule,
    FormsModule,
    QuizRouterModule
  ]
})
export class QuizModule { }
