import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' },
  { path: 'information',  loadChildren: () => import('./modules/information/information.module').then(m => m.InformationModule) },
  { path: 'quiz',  loadChildren: () => import('./modules/quiz/quiz.module').then(m => m.QuizModule) },
  { path: 'results',  loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
