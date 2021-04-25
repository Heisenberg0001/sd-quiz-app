import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InformationComponent} from './components/information/information.component';

const routes: Routes = [
  { path: '', component: InformationComponent },
  // { path: 'quiz',  loadChildren: () => import('../quiz/quiz.module').then(m => m.QuizModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRouterModule {}
