import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRouterModule } from './information-router.module';
import { FormsModule } from '@angular/forms';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [ InformationComponent ],
  imports: [
    CommonModule,
    FormsModule,
    InformationRouterModule
  ]
})
export class InformationModule { }
