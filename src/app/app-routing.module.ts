import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizGuard } from "./core/guards/quiz.guard";
import { ResultGuard } from "./core/guards/result.guard";

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' },
  { path: 'information',  loadChildren: () => import('./modules/information/information.module').then(m => m.InformationModule) },
  { path: 'quiz',  loadChildren: () => import('./modules/quiz/quiz.module').then(m => m.QuizModule), canActivate: [QuizGuard] },
  { path: 'results',  loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule)},
  { path: '**', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  providers: [QuizGuard, ResultGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
