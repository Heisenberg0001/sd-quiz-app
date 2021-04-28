import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundRouterModule } from "./page-not-found-router.module";
import { PageNotFoundComponent } from "./components/page-not-found.component";

@NgModule({
  declarations: [ PageNotFoundComponent ],
  imports: [
    CommonModule,
    PageNotFoundRouterModule
  ]
})
export class PageNotFoundModule { }
