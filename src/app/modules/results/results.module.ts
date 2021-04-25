import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRouterModule } from './results-router.module';
import {ResultsComponent} from './components/results/results.component';



@NgModule({
  declarations: [ ResultsComponent ],
  imports: [
    CommonModule,
    ResultsRouterModule
  ]
})
export class ResultsModule { }
